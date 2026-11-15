import fs from "fs";
import path from "path";

const roots = [
  "commercial-lawyers-melbourne",
  "property-lawyers-melbourne",
  "civil-lawyers-melbourne",
  "criminal-lawyers-melbourne",
  "family-lawyers-melbourne",
  "immigration-lawyers-melbourne",
];

const app = path.join(process.cwd(), "app");
const updated = [];
const skipped = [];

for (const root of roots) {
  const dir = path.join(app, root);
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const file = path.join(dir, entry.name, "page.tsx");
    if (!fs.existsSync(file)) continue;
    let src = fs.readFileSync(file, "utf8");
    const rel = `/${root}/${entry.name}`;
    if (src.includes('id="related-services"') || src.includes("<RelatedServices")) {
      skipped.push(rel);
      continue;
    }
    if (!src.includes('id="faqs"')) {
      skipped.push(`${rel} MISSING FAQS`);
      continue;
    }
    if (!src.includes('from "@/components/ui"')) {
      skipped.push(`${rel} MISSING UI IMPORT`);
      continue;
    }
    src = src.replace(
      'from "@/components/ui";',
      'from "@/components/ui";\nimport { RelatedServices } from "@/components/sections/RelatedServices";',
    );
    const next = src.replace(
      /^([ \t]*)<Section\b[^>]*\bid="faqs"/m,
      (match, indent) => `${indent}<RelatedServices currentPath="${rel}" />\n\n${match}`,
    );
    if (next === src) {
      skipped.push(`${rel} NO INSERT`);
      continue;
    }
    fs.writeFileSync(file, next);
    updated.push(rel);
  }
}

console.log(`UPDATED ${updated.length}`);
console.log(updated.join("\n"));
console.log(`SKIPPED ${skipped.length}`);
console.log(skipped.join("\n"));
