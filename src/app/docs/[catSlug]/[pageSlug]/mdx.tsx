import { MDXRemote } from "next-mdx-remote/rsc";
import { CodeBlock } from "@/components/code-block";
import Basic from "@flowui/react/basic";
import Data from "@flowui/react/data";
import Feedback from "@flowui/react/feedback";
import Forms from "@flowui/react/forms";
import Icons from "@flowui/react/icons";
import Layout from "@flowui/react/layout";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";

export default function Mdx({ source }: { source: string }) {
  return (
    <MDXRemote
      source={source}
      components={{
        CodeBlock,
        ...Basic,
        ...Data,
        ...Feedback,
        ...Forms,
        ...Icons,
        ...Layout,
      }}
      options={{
        mdxOptions: {
          remarkRehypeOptions: {},
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            rehypeHighlight,
            rehypeSlug,
            [
              rehypeAutolinkHeadings,
              {
                behavior: "wrap",
              },
            ],
            [
              rehypeExternalLinks,
              {
                target: "_blank",
                rel: "nofollow",
              },
            ],
          ],
        },
      }}
    />
  );
}
