import { use } from "react";
import type { Props } from "./props";
import { getDocPageContent } from "@/services/docs/get-doc-page-content";
import { MDXRemote } from "next-mdx-remote/rsc";
import { CodeBlock } from "@/components/code-block";
import Basic from "@flowui/react/basic";
import Data from "@flowui/react/data";
import Feedback from "@flowui/react/feedback";
import Forms from "@flowui/react/forms";
import Icons from "@flowui/react/icons";
import Layout from "@flowui/react/layout";

export default function DocsPage({ params }: Props) {
  const page = use(getDocPageContent(params.catSlug, params.pageSlug));
  return (
    <MDXRemote
      source={page!.content}
      components={
        {
          CodeBlock,
          ...Basic,
          ...Data,
          ...Feedback,
          ...Forms,
          ...Icons,
          ...Layout,
        } as any
      }
    />
  );
}
