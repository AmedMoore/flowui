import "@flowui/react/styles.scss";
import type { PropsWithChildren } from "react";
import { headers } from "next/headers";
import { Row } from "@flowui/react/layout";
import { SideMenu } from "./side-menu";
import { ContentsMenu } from "./contents-menu";
import styles from "./docs-layout.module.scss";
import Bowser from "bowser";

export default function DocsLayout({ children }: PropsWithChildren) {
  const userAgent = headers().get("user-agent");

  let hasCustomScrollBar = false;
  if (userAgent) {
    const browser = Bowser.parse(userAgent);
    hasCustomScrollBar = browser.os.name?.toUpperCase() === "WINDOWS";
  }

  return (
    <Row expand customClassName={styles.content}>
      <SideMenu {...{ hasCustomScrollBar }} />
      <div className="float-left flex-1 mt-16 px-4">{children}</div>
      <ContentsMenu {...{ hasCustomScrollBar }} />
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
