import { createHash } from "node:crypto";
import { mkdir, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();

const jobs = [
  {
    input: "public/media/articles/orphelinat-yopougon-mami-adjoua",
    output: "public/media/edited/actions/orphelinat-yopougon-mami-adjoua",
    prefix: "yopougon-mami-adjoua",
  },
  {
    input: "public/media/articles/douce-mere-azuretti-premiere-edition",
    output: "public/media/edited/actions/douce-mere-azuretti-premiere-edition",
    prefix: "azuretti-premiere-edition",
  },
  {
    input: "public/media/articles/retour-a-la-douce-mere-azuretti",
    output: "public/media/edited/actions/retour-a-la-douce-mere-azuretti",
    prefix: "azuretti-annee-suivante",
  },
  {
    input: "public/media/articles/maison-du-potier-yopougon-niangon-nord",
    output: "public/media/edited/actions/maison-du-potier-yopougon-niangon-nord",
    prefix: "maison-du-potier",
  },
];

function naturalPhotoNumber(name) {
  const match = name.match(/photo_(\d+)_/i);
  return match ? Number(match[1]) : Number.MAX_SAFE_INTEGER;
}

async function hashFile(file) {
  const buffer = await readFile(file);
  return createHash("sha256").update(buffer).digest("hex");
}

async function processJob(job) {
  const inputDir = path.join(root, job.input);
  const outputDir = path.join(root, job.output);
  await mkdir(outputDir, { recursive: true });

  const files = (await readdir(inputDir))
    .filter((file) => /\.(jpe?g|png|webp)$/i.test(file))
    .sort((a, b) => naturalPhotoNumber(a) - naturalPhotoNumber(b) || a.localeCompare(b));

  const seen = new Set();
  const outputs = [];

  for (const file of files) {
    const source = path.join(inputDir, file);
    const hash = await hashFile(source);
    if (seen.has(hash)) continue;
    seen.add(hash);

    const index = String(outputs.length + 1).padStart(2, "0");
    const outputName = `${job.prefix}-${index}.jpg`;
    const output = path.join(outputDir, outputName);

    await sharp(source)
      .rotate()
      .resize({ width: 1800, height: 1800, fit: "inside", withoutEnlargement: true })
      .modulate({ brightness: 1.06, saturation: 1.08 })
      .linear(1.05, -4)
      .sharpen({ sigma: 0.6, m1: 0.7, m2: 1.1 })
      .jpeg({ quality: 84, mozjpeg: true })
      .toFile(output);

    outputs.push(`/${job.output.replace(/^public[\\/]/, "").replaceAll("\\", "/")}/${outputName}`);
  }

  return {
    input: job.input,
    output: job.output,
    sourceCount: files.length,
    uniqueCount: outputs.length,
    outputs,
  };
}

const results = [];
for (const job of jobs) {
  results.push(await processJob(job));
}

console.log(JSON.stringify(results, null, 2));
