"use client";

import React from "react";
import { useMemo } from "react";
import { usePathname } from "next/navigation";
import Link from "../basic/link";
import clsx from "clsx";

import styles from "./side-menu.module.scss";

export type SideMenuItemProps = {
  label: string;
  href: string;
  subItems?: SideMenuItemProps[];
};

export default function SideMenuItem({
  label,
  href,
  subItems,
}: SideMenuItemProps) {
  const isActive = useActiveItem(href);

  return (
    <li
      className={clsx(styles.menuItem, {
        [styles.active]: isActive,
      })}
    >
      <Link href={href}>{label}</Link>
      {subItems ? (
        <ul className={styles.menu}>
          {subItems.map((item) => (
            <SideMenuItem key={item.href} {...item} />
          ))}
        </ul>
      ) : null}
    </li>
  );
}

function useActiveItem(href: string) {
  const pathname = usePathname();

  return useMemo(() => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  }, [pathname, href]);
}
