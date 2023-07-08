import "server-only";

import { cache } from "react";
import { join } from "node:path";
import type { DocPageContent } from "@/types/doc-page-content";
import { readMdxFile } from "@/services/docs/read-mdx-file";

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
      const filePath = `${join(
        process.cwd(),
        "public",
        "docs",
        cleanDirName(categorySlug),
        cleanDirName(componentSlug),
      )}.mdx`;

      if (filePath.endsWith("index.mdx")) {
        return null;
      }

      const { content, data } = await readMdxFile(filePath);

      return { meta: data, content: content.trim() };
    } catch (e) {
      return null;
    }
  },
);
