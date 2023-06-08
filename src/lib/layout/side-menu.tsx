import React from "react";
import { type PropsWithChildren } from "react";

import Column from "./column";
import SideMenuItem, { type SideMenuItemProps } from "./side-menu-item";
import styles from "./side-menu.module.scss";

export type SideMenuProps = PropsWithChildren<{
  items: SideMenuItemProps[];
}>;

export default function SideMenu({
  items,
  children,
}: PropsWithChildren<SideMenuProps>) {
  return (
    <Column customClassName={styles.menuContainer}>
      <ul className={styles.menu}>
        {items.map((item) => (
          <SideMenuItem key={item.href} {...item} />
        ))}
      </ul>
      {children}
    </Column>
  );
}
