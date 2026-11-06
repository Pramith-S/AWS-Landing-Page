import fs from 'fs';
import path from 'path';
import { removeBackground } from '@imgly/background-removal-node';

// Replace afiya.png first
if (fs.existsSync('public/images/core-team/members/afiya-cutout.png')) {
  fs.copyFileSync('public/images/core-team/members/afiya-cutout.png', 'public/images/core-team/members/afiya.png');
  fs.unlinkSync('public/images/core-team/members/afiya-cutout.png');
  console.log('Replaced afiya.png with cutout!');
}

const list = [
  'gourav.png',
  'harshith-naveen.png',
  'aadi-madhok-prasad.png',
  'tofail.png'
];

const dir = 'public/images/core-team/members';

for (let i = 0; i < list.length; i++) {
  const filename = list[i];
  const fullPath = path.join(dir, filename);
  const t0 = Date.now();
  console.log(`[${i + 1}/${list.length}] Processing ${filename}...`);
  try {
    const blob = await removeBackground(fullPath);
    const buf = Buffer.from(await blob.arrayBuffer());
    fs.writeFileSync(fullPath, buf);
    console.log(`[${i + 1}/${list.length}] Successfully cut out ${filename} (${buf.length} bytes) in ${Date.now() - t0}ms`);
  } catch (err) {
    console.error(`Failed ${filename}:`, err);
  }
}

console.log('All remaining PNG member photos now have transparent backgrounds!');
