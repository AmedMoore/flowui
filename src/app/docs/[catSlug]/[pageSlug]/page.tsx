import { use } from "react";
import { getDocPageContent } from "@/services/docs/get-doc-page-content";
import { serialize } from "next-mdx-remote/serialize";
import type { Props } from "./props";
import { DocPageContent } from "./page-content";

export default function DocsPage({ params }: Props) {
  const page = use(getDocPageContent(params.catSlug, params.pageSlug));
  const mdxSource = use(serialize(page!.content));
  return <DocPageContent source={mdxSource} />;
}
