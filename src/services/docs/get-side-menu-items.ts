import "server-only";

import { cache } from "react";
import { join, parse } from "node:path";
import { readdir, readFile } from "node:fs/promises";
import { packageDirectory } from "pkg-dir";
import { IconIconStar } from "@flowui/react/icons";
import type { SideMenuItemsGroup } from "@/types/side-menu-item";
import matter from "gray-matter";

export const getSideMenuItems = cache(
  async (): Promise<SideMenuItemsGroup[]> => {
    try {
      return readDocsDir();
    } catch (e) {
      return [];
    }
  },
);

async function readDocsDir() {
  const pkgDir = await packageDirectory();
  if (!pkgDir) return [];

  const docsPath = join(pkgDir, "public", "docs");
  const dirs = await readdir(docsPath, { withFileTypes: true });

  const items: SideMenuItemsGroup[] = [];

  for (const dir of dirs) {
    if (!dir.isDirectory()) continue;

    const item: SideMenuItemsGroup = {
      title: dir.name,
      slug: dir.name,
      icon: IconIconStar,
      links: [],
    };

    const files = await readdir(join(docsPath, dir.name), {
      withFileTypes: true,
    });

    for (const file of files) {
      // eslint-disable-next-line max-depth
      if (!file.isFile()) continue;

      const filename = parse(file.name).name.toLowerCase();

      // eslint-disable-next-line max-depth
      if (filename === "index") {
        const fileContent = await readFile(
          join(docsPath, dir.name, file.name),
          {
            encoding: "utf-8",
          },
        );

        const { data } = matter(fileContent);

        item.title = data.title;
        item.order = data.order;

        continue;
      }

      item.links.push({
        label: filename,
        slug: filename,
      });
    }

    items.push(item);
  }

  return items.sort((a, b) => ((a.order ?? 0) > (b.order ?? 0) ? 1 : -1));
}
