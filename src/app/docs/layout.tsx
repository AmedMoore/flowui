import "@flowui/react/styles.scss";
import type { PropsWithChildren } from "react";
import { Column, Row } from "@flowui/react/layout";
import SideMenu from "./side-menu";
import styles from "./docs-layout.module.scss";

export default function DocsLayout({ children }: PropsWithChildren) {
  return (
    <Row expand customClassName={styles.contentContainer}>
      <SideMenu />
      <Column expand customClassName={styles.content}>
        <div className="mt-16">{children}</div>
      </Column>
    </Row>
  );
}

// noinspection JSUnusedGlobalSymbols
export const metadata = {
  title: {
    template: "%s - FlowUI",
    default: "Docs",
  },
};
