import { readFile, readdir } from "node:fs/promises";
import { extname, join } from "node:path";

const sourceRoots = ["src", "index.html"];
const sourceExtensions = new Set([".ts", ".tsx", ".css", ".html"]);
const failures = [];

async function collect(path) {
  if (extname(path)) return [path];
  const entries = await readdir(path, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const child = join(path, entry.name);
    if (entry.isDirectory()) files.push(...(await collect(child)));
    else if (sourceExtensions.has(extname(entry.name))) files.push(child);
  }
  return files;
}

const files = (await Promise.all(sourceRoots.map(collect))).flat();

for (const file of files) {
  const source = await readFile(file, "utf8");
  if (source.includes("—") || source.includes("–")) {
    failures.push(`${file}: contains a forbidden dash character`);
  }
  if (source.includes("window.addEventListener(\"scroll\"") || source.includes("window.addEventListener('scroll'")) {
    failures.push(`${file}: contains a direct scroll event listener`);
  }
  if (source.includes("h-screen")) {
    failures.push(`${file}: contains an unstable viewport-height utility`);
  }
  if (/[ \t]+$/m.test(source)) {
    failures.push(`${file}: contains trailing spaces`);
  }
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Lint passed for ${files.length} source files.`);
