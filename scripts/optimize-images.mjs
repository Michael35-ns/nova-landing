/**
 * Optimiza las imágenes de public/assets IN PLACE (sobrescribe los originales).
 *
 * Las imágenes están versionadas en git, así que un `git checkout -- public/assets`
 * revierte todo si algo no gusta.
 *
 * Uso:
 *   npm i -D sharp
 *   node scripts/optimize-images.mjs           # aplica los cambios
 *   node scripts/optimize-images.mjs --dry     # solo muestra qué haría
 *
 * Qué hace:
 *   - Redimensiona a un ancho máximo de MAX_WIDTH px (sin ampliar).
 *   - Re-comprime JPEG (mozjpeg, calidad 72) y PNG (nivel 9, con paleta).
 *   - Conserva el formato y el nombre -> no rompe ninguna referencia.
 *   - Solo escribe si el archivo resultante es más pequeño.
 */

import { readdir, stat, readFile, writeFile } from 'node:fs/promises';
import { join, extname } from 'node:path';

let sharp;
try {
  sharp = (await import('sharp')).default;
} catch {
  console.error('Falta la dependencia "sharp". Instálala con:  npm i -D sharp');
  process.exit(1);
}

const ROOT = 'public/assets';
const MAX_WIDTH = 2000;
const JPEG_QUALITY = 72;
const DRY = process.argv.includes('--dry');

const exts = new Set(['.jpg', '.jpeg', '.png']);

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else if (exts.has(extname(entry.name).toLowerCase())) yield p;
  }
}

let before = 0;
let after = 0;
let changed = 0;

for await (const file of walk(ROOT)) {
  const original = await readFile(file);
  const ext = extname(file).toLowerCase();

  let pipeline = sharp(original).rotate();
  const meta = await pipeline.metadata();
  if (meta.width && meta.width > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }

  pipeline =
    ext === '.png'
      ? pipeline.png({ compressionLevel: 9, palette: true })
      : pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });

  const out = await pipeline.toBuffer();

  before += original.length;
  if (out.length < original.length) {
    after += out.length;
    changed++;
    const saved = ((1 - out.length / original.length) * 100).toFixed(0);
    console.log(
      `${DRY ? '[dry] ' : ''}${file}  ${(original.length / 1024).toFixed(0)}KB -> ${(out.length / 1024).toFixed(0)}KB  (-${saved}%)`,
    );
    if (!DRY) await writeFile(file, out);
  } else {
    after += original.length;
  }
}

console.log(
  `\n${changed} archivos ${DRY ? 'se optimizarían' : 'optimizados'}. ` +
    `Total: ${(before / 1048576).toFixed(1)}MB -> ${(after / 1048576).toFixed(1)}MB`,
);
