import "server-only";

import { cache } from "react";
import { join } from "node:path";
import { readFile } from "node:fs/promises";
import { packageDirectory } from "pkg-dir";
import type { DocPageContent } from "@/types/doc-page-content";
import matter from "gray-matter";

function cleanDirName(dirName?: string): string {
  if (!dirName || /[^a-zA-Z0-9-]/.test(dirName)) return "";
  return dirName;
}

export const getDocPageContent = cache(
  async (
    categorySlug: string,
    componentSlug?: string,
  ): Promise<DocPageContent | null> => {
    try {
      const pkgDir = await packageDirectory();
      if (!pkgDir) return null;

      const filePath = `${join(
        pkgDir,
        "public",
        "docs",
        cleanDirName(categorySlug),
        cleanDirName(componentSlug),
      )}.mdx`;

      if (filePath.endsWith("index.mdx")) {
        return null;
      }

      const fileContent = await readFile(filePath, { encoding: "utf-8" });

      const { content, data } = matter(fileContent);

      return { meta: data, content: content.trim() };
    } catch (e) {
      return null;
    }
  },
);
