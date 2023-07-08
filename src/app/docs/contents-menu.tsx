import { headers } from "next/headers";
import { Column } from "@flowui/react/layout";
import { Link, Text } from "@flowui/react/basic";
import styles from "./side-menu.module.scss";
import Bowser from "bowser";
import clsx from "clsx";

export function ContentsMenu() {
  const userAgent = headers().get("user-agent");

  let hasCustomScrollBar = false;
  if (userAgent) {
    const browser = Bowser.parse(userAgent);
    hasCustomScrollBar = browser.os.name?.toUpperCase() === "WINDOWS";
  }

  return (
    <Column
      customClassName={clsx(styles.sideMenu, styles.contentsMenu, {
        [styles.customScrollBar]: hasCustomScrollBar,
      })}
    >
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
