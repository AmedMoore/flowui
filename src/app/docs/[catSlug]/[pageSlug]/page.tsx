import dynamic from "next/dynamic";
import { use } from "react";
import type { Metadata } from "next";
import type { Props } from "./props";
import { getDocPageContent } from "@/services/docs/get-doc-page-content";

const Mdx = dynamic(() => import("./mdx"), { ssr: false });

export default function DocsPage({ params }: Props) {
  const page = use(getDocPageContent(params.catSlug, params.pageSlug));
  return <Mdx source={page?.content ?? ""} />;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = await getDocPageContent(params.catSlug, params.pageSlug);

  return {
    title: page?.meta?.title ?? "Not Found",
    description: page?.meta?.description,
  };
}
