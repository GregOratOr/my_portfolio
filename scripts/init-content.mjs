#!/usr/bin/env node
/**
 * Creates the gitignored content files from their committed templates.
 *
 * Safe to run any time: existing files are never touched. It runs on
 * `npm install` (postinstall) so a fresh clone -- or a CI build with no access
 * to the private content repo -- always has something to compile.
 */
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const contentDir = resolve(root, "src/content");

const MODULES = ["profile", "skills", "experience", "projects"];

let created = 0;
for (const name of MODULES) {
  const target = resolve(contentDir, `${name}.ts`);
  const template = resolve(contentDir, `${name}.example.ts`);

  if (existsSync(target)) continue;
  if (!existsSync(template)) {
    console.error(`  ! missing template: src/content/${name}.example.ts`);
    process.exitCode = 1;
    continue;
  }

  mkdirSync(dirname(target), { recursive: true });
  copyFileSync(template, target);
  console.log(`  + created src/content/${name}.ts from the example template`);
  created++;
}

if (created > 0) {
  console.log(
    `\nContent scaffolded (${created} file${created === 1 ? "" : "s"}).` +
      "\nEdit src/content/*.ts with your own details -- those files are gitignored.\n",
  );
}
