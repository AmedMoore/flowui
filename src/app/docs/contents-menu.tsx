import { Column } from "@flowui/react/layout";
import { Link, Text } from "@flowui/react/basic";
import styles from "./side-menu.module.scss";
import clsx from "clsx";

export function ContentsMenu() {
  return (
    <Column customClassName={clsx(styles.sideMenu, styles.contentsMenu)}>
      <Column scrollable customClassName={styles.contentContainer}>
        <Text>On this page</Text>
        <Link href="#">Item 0</Link>
        <Link href="#">Item 1</Link>
        <Link href="#">Item 2</Link>
        <Link href="#">Item 3</Link>
        <Link href="#">Item 4</Link>
        <Link href="#">Item 5</Link>
      </Column>
    </Column>
  );
}
