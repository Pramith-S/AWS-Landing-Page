import fs from 'fs';
import path from 'path';
import { removeBackground } from '@imgly/background-removal-node';

const dir = 'public/images/core-team/members';
const files = fs.readdirSync(dir);
const jpgs = files.filter(f => f.endsWith('.jpg'));
const pngs = new Set(files.filter(f => f.endsWith('.png')).map(f => f.replace('.png', '')));
const missing = jpgs.filter(j => !pngs.has(j.replace('.jpg', '')));

console.log(`Starting background removal for ${missing.length} photos...`);

for (let i = 0; i < missing.length; i++) {
  const file = missing[i];
  const t0 = Date.now();
  const inputPath = path.join(dir, file);
  const outPath = path.join(dir, file.replace('.jpg', '.png'));
  
  try {
    const blob = await removeBackground(inputPath);
    const buf = Buffer.from(await blob.arrayBuffer());
    fs.writeFileSync(outPath, buf);
    console.log(`[${i + 1}/${missing.length}] Converted ${file} -> ${path.basename(outPath)} (${buf.length} bytes) in ${Date.now() - t0}ms`);
  } catch (err) {
    console.error(`Failed to process ${file}:`, err);
  }
}

console.log('Finished background removal for all members!');

