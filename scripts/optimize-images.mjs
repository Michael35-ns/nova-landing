// One-time conversion of the unoptimized project photos (raw camera-resolution
// PNGs, 1.4–3.4 MB each — ~80 MB total) into compressed WebP.
//
// Run manually with `node scripts/optimize-images.mjs`. It is NOT part of the
// build — it rewrites files in `public/` and prints the list of source-code
// references to update by hand (or via the companion rewrite step run right
// after it), so it should only be run deliberately, once.
//
// Originals are moved (not deleted) to `originals/` at the repo root — a
// sibling of `public/`, so Vite never copies them into `dist/` — preserving
// the source photos in case a higher-res version is ever needed again.
import sharp from 'sharp';
import { readdir, mkdir, rename, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const publicDir = path.join(root, 'public');
const originalsDir = path.join(root, 'originals');

const TARGETS = [
  path.join(publicDir, 'assets', 'proyectos'),
  path.join(publicDir, 'assets', 'cr-map-relief.png'),
];
const MAX_DIM = 1600;
const WEBP_QUALITY = 78;

async function* walk(p) {
  const s = await stat(p);
  if (s.isFile()) {
    yield p;
    return;
  }
  for (const entry of await readdir(p, { withFileTypes: true })) {
    const full = path.join(p, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

function isPhoto(file) {
  return /\.(png|jpe?g)$/i.test(file);
}

async function main() {
  let totalBefore = 0;
  let totalAfter = 0;
  const converted = []; // { oldPublicPath, newPublicPath }

  for (const target of TARGETS) {
    for await (const file of walk(target)) {
      if (!isPhoto(file)) continue;

      const before = (await stat(file)).size;
      const webpPath = file.replace(/\.(png|jpe?g)$/i, '.webp');

      await sharp(file)
        .resize({ width: MAX_DIM, height: MAX_DIM, fit: 'inside', withoutEnlargement: true })
        .webp({ quality: WEBP_QUALITY })
        .toFile(webpPath);

      const after = (await stat(webpPath)).size;
      totalBefore += before;
      totalAfter += after;

      // Move the original out of public/ so Vite never ships it, but keep it
      // on disk under originals/ (mirrors the same relative path).
      const relFromPublic = path.relative(publicDir, file);
      const archivePath = path.join(originalsDir, relFromPublic);
      await mkdir(path.dirname(archivePath), { recursive: true });
      await rename(file, archivePath);

      const oldPublicPath = '/' + path.relative(publicDir, file).split(path.sep).join('/');
      const newPublicPath = '/' + path.relative(publicDir, webpPath).split(path.sep).join('/');
      converted.push({ oldPublicPath, newPublicPath });

      console.log(
        `${oldPublicPath}  ${(before / 1024 / 1024).toFixed(2)}MB -> ${(after / 1024).toFixed(0)}KB`,
      );
    }
  }

  console.log('\n--- Summary ---');
  console.log(`Files converted: ${converted.length}`);
  console.log(`Total before: ${(totalBefore / 1024 / 1024).toFixed(1)} MB`);
  console.log(`Total after:  ${(totalAfter / 1024 / 1024).toFixed(1)} MB`);
  console.log(`Originals moved to: ${path.relative(root, originalsDir)}/`);

  // Write the rename map for the reference-rewrite step.
  const mapPath = path.join(__dirname, 'image-rename-map.json');
  const fs = await import('node:fs/promises');
  await fs.writeFile(mapPath, JSON.stringify(converted, null, 2));
  console.log(`\nRename map written to scripts/image-rename-map.json`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
