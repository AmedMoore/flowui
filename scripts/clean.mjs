import { readdir, rm } from "node:fs/promises";
import { join, resolve } from "node:path";
import { __dirname, step } from "./utils.mjs";
import chalk from "chalk";

const ignore = [".git", ".github", ".idea"];
const dirNames = ["node_modules", ".next", ".turbo", "dist", "out", ".vscode"];
const fileNames = ["next-env.d.ts", "tsconfig.tsbuildinfo"];

const _dry = process.argv.includes("--dry-run");

async function _del(path) {
  if (!_dry) {
    await rm(path, {
      recursive: true,
      force: true,
    });
  }
  console.log(chalk.gray(path));
}

async function _walk(path) {
  const files = await readdir(resolve(path), {
    withFileTypes: true,
  });

  for (const file of files) {
    if (ignore.includes(file.name)) continue;

    const fullPath = join(path, file.name);
    if (file.isDirectory()) {
      if (dirNames.includes(file.name)) {
        await _del(fullPath);
      } else {
        await _walk(fullPath);
      }
    }

    if (file.isFile() && fileNames.includes(file.name)) {
      await _del(fullPath);
    }
  }
}

async function clean() {
  await _walk(resolve(__dirname, ".."));
}

step(`Cleaning workspace ${_dry ? "(dry)" : ""}`, clean)();
