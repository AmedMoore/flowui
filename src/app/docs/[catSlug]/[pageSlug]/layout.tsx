import { use, type PropsWithChildren } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDocPageContent } from "@/services/docs/get-doc-page-content";
import type { Props } from "./props";

export default function DocsPageLayout({
  params,
  children,
}: PropsWithChildren<Props>) {
  const page = use(getDocPageContent(params.catSlug, params.pageSlug));

  if (page == null) {
    notFound();
  }

  return children;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = await getDocPageContent(params.catSlug, params.pageSlug);

  return {
    title: page?.meta?.title ?? "Not Found",
    description: page?.meta?.description,
  };
}
