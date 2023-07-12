import { use, type PropsWithChildren } from "react";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { Column, Row } from "@flowui/react/layout";
import { getClientPlatform, Platform } from "@/services/get-client-platform";
import { getDocPageContent } from "@/services/docs/get-doc-page-content";
import { ContentsMenu } from "./contents-menu";
import type { Props } from "./props";

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
    <Row expand gap={4}>
      <Column expand>{children}</Column>
      <ContentsMenu
        params={params}
        toc={page.toc}
        hasCustomScrollBar={platform !== Platform.Darwin}
      />
    </Row>
  );
}
