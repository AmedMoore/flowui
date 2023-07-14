export type SideMenuItem = {
  label: string;
  slug: string;
  order: number;
};

export type SideMenuItemsGroup = {
  title: string;
  slug: string;
  links: SideMenuItem[];
  order: number;
};
