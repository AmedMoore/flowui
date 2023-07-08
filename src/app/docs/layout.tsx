import "@flowui/react/styles.scss";
import type { PropsWithChildren } from "react";
import { Row } from "@flowui/react/layout";
import { SideMenu } from "./side-menu";
import { ContentsMenu } from "./contents-menu";
import styles from "./docs-layout.module.scss";

export default function DocsLayout({ children }: PropsWithChildren) {
  return (
    <Row expand customClassName={styles.content}>
      <SideMenu />
      <div className="float-left flex-1 mt-16 px-4">{children}</div>
      <ContentsMenu />
    </Row>
  );
}

export const metadata = {
  title: {
    template: "%s - FlowUI",
    default: "Docs",
  },
};
