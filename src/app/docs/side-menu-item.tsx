"use client";

import { Text } from "@flowui/react/basic";
import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { Row } from "@flowui/react/layout";
import type { SideMenuItem } from "./side-menu-items";
import Link from "next/link";
import clsx from "clsx";

type SideMenuItemProps = {
  sectionSlug: string;
  link: SideMenuItem;
};

export function SideMenuItem({ sectionSlug, link }: SideMenuItemProps) {
  const pathname = usePathname();

  const href = useMemo(() => {
    return ["", ...[sectionSlug, link.slug].filter((slug) => slug)].join("/");
  }, [link.slug, sectionSlug]);

  const active = useMemo(() => {
    return pathname === href;
  }, [href, pathname]);

  return (
    <Link href={href}>
      <Row
        gap={2}
        items="center"
        customClassName={clsx("transition-all", {
          "text-primary-500 dark:text-primary-400": active,
          "text-basic-500 hover:text-basic-900": !active,
          "dark:text-basic-300 dark:hover:text-basic-50": !active,
        })}
      >
        <Text
          size="xs"
          customClassName={clsx({ "opacity-25 dark:opacity-35": !active })}
        >
          &#x2022;
        </Text>
        <Text size="sm" weight="medium">
          {link.label}
        </Text>
      </Row>
    </Link>
  );
}
