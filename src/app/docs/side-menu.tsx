import { Column, Row } from "@flowui/react/layout";
import { Text } from "@flowui/react/basic";
import { SideMenuItem } from "./side-menu-item";
import { sideMenuItems } from "./side-menu-items";
import styles from "./side-menu.module.scss";

export function SideMenu() {
  return (
    <Column customClassName={styles.sideMenu}>
      <Column scrollable gap={10} customClassName={styles.contentContainer}>
        {sideMenuItems.map(({ icon: Icon, ...section }) => (
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
