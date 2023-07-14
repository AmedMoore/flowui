"use client";

import { useCopyToClipboard } from "usehooks-ts";
import { useCallback, useState } from "react";
import { IconCopy } from "@flowui/react/icons";
import { Button } from "@flowui/react/basic";
import { Alert } from "@flowui/react/feedback";
import { AnimatePresence, motion } from "framer-motion";

export function CopyInstallSnippetButton() {
  const [_, copy] = useCopyToClipboard();
  const [copied, setCopied] = useState(false);

  const copySnippet = useCallback(async () => {
    setCopied(true);
    await copy("npm install @flowui/react");
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }, [copy]);

  return (
    <div className="relative">
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: -10, x: -20 }}
            animate={{ opacity: 1, y: -50, x: -20 }}
            exit={{ opacity: 0, y: -50, x: -20 }}
            className={
              "fixed bg-basic-100 dark:bg-basic-900 rounded-lg shadow-lg"
            }
          >
            <Alert variant="flat" color="success">
              Copied
            </Alert>
          </motion.div>
        )}
      </AnimatePresence>
      <Button iconOnly circle variant="text" onClick={copySnippet}>
        <IconCopy />
      </Button>
    </div>
  );
}
