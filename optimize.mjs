// optimize.mjs
import sharp from "sharp";
import { readdir, mkdir } from "fs/promises";
import path from "path";

const INPUT = "assets/images/profile";
const OUTPUT = "assets/images/profile-optimized";
const WIDTH = 460;

const EXTENSIONS = /\.(jpe?g|png)$/i;

// finds every image in the folder, including subfolders
async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else if (EXTENSIONS.test(entry.name)) files.push(full);
  }
  return files;
}

for (const file of await walk(INPUT)) {
  // keep the subfolder structure, swap the extension to .webp
  const relative = path.relative(INPUT, file);
  const target = path.join(OUTPUT, relative).replace(EXTENSIONS, ".webp");

  await mkdir(path.dirname(target), { recursive: true });

  await sharp(file)
    .rotate() // fixes sideways phone photos
    .resize({ width: WIDTH, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(target);

  console.log("done:", relative);
}
