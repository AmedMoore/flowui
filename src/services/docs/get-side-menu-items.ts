import "server-only";

import { cache } from "react";
import { join, parse } from "node:path";
import { readdir } from "node:fs/promises";
import { readMdxFile } from "@/services/docs/read-mdx-file";
import type { SideMenuItemsGroup } from "@/types/side-menu-item";

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
  const docsPath = join(process.cwd(), "public", "docs");
  const dirs = await readdir(docsPath, { withFileTypes: true });

  const items: SideMenuItemsGroup[] = [];

  for (const dir of dirs) {
    if (!dir.isDirectory()) continue;

    const item: SideMenuItemsGroup = {
      title: dir.name,
      slug: dir.name,
      links: [],
      order: 0,
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
        const { data } = await readMdxFile(join(docsPath, dir.name, file.name));
        item.title = data.title;
        item.order = data.order ?? item.order;
        continue;
      }

      const { data } = await readMdxFile(join(docsPath, dir.name, file.name));
      item.links.push({
        label: data.title ?? filename,
        slug: filename,
        order: data.order ?? 0,
      });
    }

    item.links.sort((a, b) => (a.order > b.order ? 1 : -1));

    items.push(item);
  }

  return items.sort((a, b) => (a.order > b.order ? 1 : -1));
}
