import dynamic from "next/dynamic";
import { use } from "react";
import type { Metadata } from "next";
import type { Props } from "./props";
import { getDocPageContent } from "@/services/docs/get-doc-page-content";
import "./mdx-overrides.scss";

const Mdx = dynamic(() => import("./mdx"), { ssr: false });

export default function DocsPage({ params }: Props) {
  const page = use(getDocPageContent(params.catSlug, params.pageSlug));
  return (
    <div className="mdx-content">
      <Mdx source={page?.content ?? ""} />
    </div>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = await getDocPageContent(params.catSlug, params.pageSlug);

  return {
    title: page?.meta?.title ?? "Not Found",
    description: page?.meta?.description,
  };
}
