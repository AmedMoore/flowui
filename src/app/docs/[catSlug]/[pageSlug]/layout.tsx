import { use, type PropsWithChildren } from "react";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { Column, Row } from "@flowui/react/layout";
import { Alert } from "@flowui/react/feedback";
import { IconInfo } from "@flowui/react/icons";
import { getClientPlatform, Platform } from "@/services/get-client-platform";
import { getDocPageContent } from "@/services/docs/get-doc-page-content";
import { ContentsMenu } from "./contents-menu";
import type { Props } from "./props";
import styles from "./layout.module.scss";

export default function DocsPageLayout({
  params,
  children,
}: PropsWithChildren<Props>) {
  const page = use(getDocPageContent(params.catSlug, params.pageSlug));

  if (page === null) {
    notFound();
  }

  const platform = getClientPlatform(headers());

  return (
    <Row expand gap={8}>
      <Column customClassName={styles.content}>
        <Alert variant="flat" color="primary" leadingIcon={<IconInfo />}>
          This documentation is a work in progress. It may be incomplete or
          inaccurate.
        </Alert>
        <Row expand>{children}</Row>
      </Column>
      <ContentsMenu
        params={params}
        toc={page.toc}
        hasCustomScrollBar={platform !== Platform.Darwin}
      />
    </Row>
  );
}
