import "server-only";

import { getSideMenuItems } from "@/services/docs/get-side-menu-items";

export async function getDocPageSlugs() {
  try {
    const menuItems = await getSideMenuItems();
    const slugs: { catSlug: string; pageSlug: string }[] = [];

    for (const cat of menuItems) {
      // eslint-disable-next-line max-depth
      for (const page of cat.links) {
        slugs.push({
          catSlug: cat.slug,
          pageSlug: page.slug,
        });
      }
    }

    return slugs;
  } catch (e) {
    return [];
  }
}
