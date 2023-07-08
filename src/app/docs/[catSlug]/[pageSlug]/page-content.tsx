"use client";

import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";
import { CodeBlock } from "@/components/code-block";
import Basic from "@flowui/react/basic";
import Data from "@flowui/react/data";
import Feedback from "@flowui/react/feedback";
import Forms from "@flowui/react/forms";
import Icons from "@flowui/react/icons";
import Layout from "@flowui/react/layout";

export function DocPageContent({
  source,
}: {
  source: MDXRemoteSerializeResult;
}) {
  return (
    <MDXRemote
      {...source}
      components={{
        CodeBlock,
        ...Basic,
        ...Data,
        ...Feedback,
        ...Forms,
        ...Icons,
        ...Layout,
      }}
    />
  );
}
