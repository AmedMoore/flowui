import type { ReactNode } from "react";
import type { MDXComponents } from "mdx/types";
import { CodeBlock } from "@/components/code-block";

function getNodeText(node: ReactNode): string {
  if (typeof node == "string" || typeof node == "number") {
    return node.toString();
  }
  if (Array.isArray(node)) {
    return node.map(getNodeText).join("");
  }
  if (typeof node === "object" && node && "props" in node) {
    return getNodeText(node.props.children);
  }
  return "";
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: ({ children }) => <CodeBlock code={getNodeText(children)} />,
    ...components,
  };
}
