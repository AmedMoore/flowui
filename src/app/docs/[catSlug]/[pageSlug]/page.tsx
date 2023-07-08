import { PropsWithChildren, use } from "react";
import type { Metadata } from "next";
import type { Props } from "./props";
import { getDocPageContent } from "@/services/docs/get-doc-page-content";
import { notFound } from "next/navigation";
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

  if (page === null) {
    notFound();
  }

  return (
    <MDXRemote
      source={page.content}
      components={
        {
          CodeBlock,
          ...Basic,
          ...Data,
          ...Feedback,
          ...Forms,
          ...Icons,
          ...Layout,
          h1: ({ children }: PropsWithChildren) => (
            <Basic.Text as="h1" size="2xl">
              {children}
            </Basic.Text>
          ),
          h2: ({ children }: PropsWithChildren) => (
            <Basic.Text as="h2" size="xl">
              {children}
            </Basic.Text>
          ),
          h3: ({ children }: PropsWithChildren) => (
            <Basic.Text as="h3" size="lg">
              {children}
            </Basic.Text>
          ),
          h4: ({ children }: PropsWithChildren) => (
            <Basic.Text as="h4" size="md">
              {children}
            </Basic.Text>
          ),
          h5: ({ children }: PropsWithChildren) => (
            <Basic.Text as="h5" size="sm">
              {children}
            </Basic.Text>
          ),
          h6: ({ children }: PropsWithChildren) => (
            <Basic.Text as="h6" size="xs">
              {children}
            </Basic.Text>
          ),
          p: ({ children }: PropsWithChildren) => (
            <Basic.Text as="p">{children}</Basic.Text>
          ),
          a: ({ href, children }: PropsWithChildren<{ href: string }>) => (
            <Basic.Link href={href}>{children}</Basic.Link>
          ),
        } as any
      }
    />
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = await getDocPageContent(params.catSlug, params.pageSlug);

  return {
    title: page?.meta?.title ?? "Not Found",
    description: page?.meta?.description,
  };
}
