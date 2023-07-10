import "@flowui/react/styles.scss";
import type { PropsWithChildren } from "react";
import { headers } from "next/headers";
import { Row } from "@flowui/react/layout";
import { SideMenu } from "./side-menu";
import { getClientPlatform, Platform } from "@/services/get-client-platform";
import styles from "./docs-layout.module.scss";

export default function DocsLayout({ children }: PropsWithChildren) {
  const platform = getClientPlatform(headers());

  return (
    <Row expand customClassName={styles.layout}>
      <SideMenu hasCustomScrollBar={platform !== Platform.Darwin} />
      <div className={styles.content}>{children}</div>
    </Row>
  );
}

export const metadata = {
  title: {
    template: "%s - FlowUI",
    default: "Docs",
  },
};
