// Post-build static prerender.
//
// This site is a single-page React SPA (no router — all sections live on
// one index.html, navigated via #anchors). `vite build` ships an index.html
// whose <div id="root"> is empty until the client JS runs, so crawlers that
// don't execute JS (and link-preview bots) see no content and no headings.
//
// Rather than adding a full SSR server (which this static Netlify deploy
// doesn't need — there's only one route and no per-request data), we render
// the built app once in headless Chrome, scroll it through so every
// scroll-triggered reveal/counter has already fired, capture the fully
// mounted DOM, and write that as the shipped index.html. The client bundle
// is untouched and still boots normally on top of it (a plain
// `createRoot().render()` full remount, not hydration — see src/main.tsx —
// so there's no hydration-mismatch risk: real visitors get an instant
// first paint from this HTML, then React swaps in the identical
// client-rendered tree a moment later).
import { createServer } from 'node:http';
import { readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '..', 'dist');
const PORT = 4319;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

function serveDist() {
  return new Promise((resolve, reject) => {
    const server = createServer(async (req, res) => {
      try {
        const urlPath = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
        let filePath = path.join(distDir, urlPath === '/' ? 'index.html' : urlPath);
        if (!existsSync(filePath)) filePath = path.join(distDir, 'index.html'); // SPA fallback
        const ext = path.extname(filePath).toLowerCase();
        const body = await readFile(filePath);
        res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
        res.end(body);
      } catch (err) {
        res.writeHead(404);
        res.end('Not found');
      }
    });
    server.listen(PORT, () => resolve(server));
    server.on('error', reject);
  });
}

async function main() {
  if (!existsSync(path.join(distDir, 'index.html'))) {
    throw new Error('dist/index.html not found — run `vite build` before prerendering.');
  }

  const server = await serveDist();
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
  } catch (err) {
    // A missing/incompatible Chrome must not fail the deploy: the Vite build
    // is already a working client-rendered site, prerendering only adds the
    // static HTML for crawlers on top of it.
    server.close();
    console.warn('[prerender] skipped: no usable Chrome for puppeteer.');
    console.warn('[prerender] ' + String(err.message).split('\n')[0]);
    return;
  }

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 1000 });

    const errors = [];
    page.on('pageerror', (err) => errors.push(String(err)));
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });

    await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle0', timeout: 60000 });

    // Scroll the full page height in small steps so every IntersectionObserver
    // driven .reveal / [data-count] element (threshold as low as 0.12) has a
    // chance to fire before we snapshot the DOM.
    await page.evaluate(async () => {
      const step = Math.max(200, window.innerHeight * 0.6);
      let last = -1;
      while (true) {
        window.scrollBy(0, step);
        await new Promise((r) => setTimeout(r, 120));
        const top = window.scrollY;
        const atBottom = top + window.innerHeight >= document.body.scrollHeight - 2;
        if (atBottom || top === last) break;
        last = top;
      }
    });

    // Let the counter animations (1.4s) and reveal transitions (~0.7s) settle.
    await new Promise((r) => setTimeout(r, 1800));

    await page.evaluate(() => window.scrollTo(0, 0));
    await new Promise((r) => setTimeout(r, 100));

    // <image-slot> (public/image-slot.js) renders the actual photo inside an
    // open shadow root. Shadow DOM never serializes into outerHTML / page
    // .content(), so those elements would snapshot empty. Flatten each one
    // into a plain <img> (same src/alt) purely for this static capture — the
    // live app is untouched, and any JS-executing visitor/crawler discards
    // this markup within moments anyway when React remounts.
    await page.evaluate(() => {
      document.querySelectorAll('image-slot').forEach((el) => {
        const shadowImg = el.shadowRoot && el.shadowRoot.querySelector('.frame img');
        const src = shadowImg && shadowImg.getAttribute('src');
        if (!src) return;
        const img = document.createElement('img');
        img.src = src;
        img.alt = el.getAttribute('alt') || '';
        img.loading = 'lazy';
        img.style.cssText = 'display:block;width:100%;height:100%;object-fit:cover;';
        el.replaceWith(img);
      });
    });

    if (errors.length) {
      console.warn('[prerender] page reported errors while rendering (continuing anyway):');
      for (const e of errors) console.warn('  ' + e);
    }

    const html = await page.content();
    await writeFile(path.join(distDir, 'index.html'), html, 'utf-8');
    console.log('[prerender] wrote fully-rendered dist/index.html (%d KB)', Math.round(html.length / 1024));
  } finally {
    await browser.close();
    server.close();
  }
}

main().catch((err) => {
  console.error('[prerender] failed:', err);
  process.exit(1);
});
