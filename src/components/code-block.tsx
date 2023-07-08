import dynamic from "next/dynamic";

const CodeEditor = dynamic(() => import("./code-editor"), { ssr: false });

export function CodeBlock({ code }: { code: string }) {
  return <CodeEditor code={code || ""} />;
}
