"use client";

import { useCallback, useMemo } from "react";
import type { Ace } from "ace-builds";
import AceEditor from "react-ace";
import Card from "@flowui/react/layout/card";
import styles from "./code-editor.module.scss";
import "ace-builds/src-noconflict/mode-tsx";
import "ace-builds/src-noconflict/theme-twilight";

export default function CodeEditor({ code }: { code: string }) {
  const value = useMemo(() => {
    return code.trim();
  }, [code]);

  const handleLoad = useCallback((editor: Ace.Editor) => {
    editor.setOptions({
      maxLines: editor.session.getLength(),
    });
  }, []);

  return (
    <Card fullWidth shadow={4} customClassName={styles.card}>
      <AceEditor
        mode="tsx"
        theme="twilight"
        width="100%"
        value={value}
        showGutter={false}
        highlightActiveLine={false}
        showPrintMargin={false}
        setOptions={{ selectionStyle: "line" }}
        className={styles.editor}
        onLoad={handleLoad}
        readOnly
      />
    </Card>
  );
}
