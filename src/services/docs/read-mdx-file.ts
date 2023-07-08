import "server-only";
import { readFile } from "node:fs/promises";
import matter from "gray-matter";

export async function readMdxFile(filePath: string) {
  const fileContent = await readFile(filePath, { encoding: "utf-8" });
  return matter(fileContent);
}
