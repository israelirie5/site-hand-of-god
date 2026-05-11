import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const target = process.argv[2] ?? "orphelinat-yopougon-mami-adjoua";
const dir = path.join(process.cwd(), "public/media/edited/actions", target);
const files = fs.readdirSync(dir).filter((file) => /\.jpg$/i.test(file) && !file.startsWith("_")).sort();
const columns = 4;
const thumbWidth = 280;
const thumbHeight = 190;

const composites = [];

for (const [index, file] of files.entries()) {
  const label = index + 1;
  const svg = Buffer.from(`
    <svg width="${thumbWidth}" height="${thumbHeight}" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="${thumbHeight - 34}" width="70" height="34" fill="rgba(0,0,0,.7)"/>
      <text x="12" y="${thumbHeight - 12}" font-size="20" font-family="Arial" font-weight="700" fill="white">${label}</text>
    </svg>
  `);

  const input = await sharp(path.join(dir, file))
    .resize(thumbWidth, thumbHeight, { fit: "cover" })
    .composite([{ input: svg, top: 0, left: 0 }])
    .jpeg({ quality: 86 })
    .toBuffer();

  composites.push({
    input,
    left: (index % columns) * thumbWidth,
    top: Math.floor(index / columns) * thumbHeight,
  });
}

await sharp({
  create: {
    width: columns * thumbWidth,
    height: Math.ceil(files.length / columns) * thumbHeight,
    channels: 3,
    background: "#111111",
  },
})
  .composite(composites)
  .jpeg({ quality: 88 })
  .toFile(path.join(dir, "_contact-sheet.jpg"));
