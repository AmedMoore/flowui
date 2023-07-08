import { use } from "react";
import { headers } from "next/headers";
import { Column, Row } from "@flowui/react/layout";
import { Text } from "@flowui/react/basic";
import { SideMenuItem } from "./side-menu-item";
import { getSideMenuItems } from "@/services/docs/get-side-menu-items";
import styles from "./side-menu.module.scss";
import Bowser from "bowser";
import clsx from "clsx";

export function SideMenu() {
  const items = use(getSideMenuItems());

  const userAgent = headers().get("user-agent");

  let hasCustomScrollBar = false;
  if (userAgent) {
    const browser = Bowser.parse(userAgent);
    hasCustomScrollBar = browser.os.name?.toUpperCase() === "WINDOWS";
  }

  return (
    <Column
      customClassName={clsx(styles.sideMenu, {
        [styles.customScrollBar]: hasCustomScrollBar,
      })}
    >
      <Column scrollable gap={10} customClassName={styles.contentContainer}>
        {items.map(({ icon: Icon, ...section }) => (
          <Column key={section.title} gap={4}>
            <Row gap={3} items="center">
              <div className={styles.sectionIconContainer}>
                <Icon size={14} />
              </div>
              <Text weight="semibold" color="basic">
                {section.title}
              </Text>
            </Row>
            <Column gap={4} customClassName="pl-2">
              {section.links?.map((link) => (
                <SideMenuItem
                  key={link.slug}
                  sectionSlug={section.slug}
                  link={link}
                />
              ))}
            </Column>
          </Column>
        ))}
      </Column>
    </Column>
  );
}
