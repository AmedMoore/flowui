/* eslint-disable max-depth */

import "server-only";

import { cache } from "react";
import { join } from "node:path";
import { readMdxFile } from "@/services/docs/read-mdx-file";
import type { DocPageContent } from "@/types/doc-page-content";

const RegexCleanUrlSegmentName = /[^a-zA-Z0-9-]/g;

/** @see https://regex101.com/r/n6XQub/4 */
const RegexMdxHeadings = /(?<flag>#{1,6})\s+(?<label>.+)/g;

function cleanDirName(dirName?: string): string {
  if (!dirName || RegexCleanUrlSegmentName.test(dirName)) return "";
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

      const page: DocPageContent = {
        meta: data,
        content: content.trim(),
        toc: [],
      };

      const headingMatches = page.content.matchAll(RegexMdxHeadings);
      for (const match of headingMatches) {
        const { flag, label } = match.groups ?? {};
        if (!flag || !label) continue;
        page.toc.push({
          label: label.trim(),
          slug: `#${label
            .replace(RegexCleanUrlSegmentName, "-")
            .toLowerCase()}`,
          level: flag.length,
          children: [],
        });
      }

      return page;
    } catch (e) {
      return null;
    }
  },
);
