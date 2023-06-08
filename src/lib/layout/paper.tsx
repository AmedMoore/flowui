import React from "react";
import type { PropsWithChildren } from "react";
import clsx from "clsx";

import Column from "./column";
import styles from "./paper.module.scss";

export type PaperProps = PropsWithChildren<{
  customClassName?: string;
}>;

export default function Paper({ children, customClassName }: PaperProps) {
  return (
    <Column customClassName={clsx(styles.paper, customClassName)} expand>
      {children}
    </Column>
  );
}
