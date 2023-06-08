import React from "react";
import type { PropsWithChildren } from "react";
import clsx from "clsx";
import styles from "./grid.module.scss";
import flexStyles from "./flex.module.scss";
import Row from "./row";
import type { FlexGap } from "./gap-style-name";

export type GridProps = PropsWithChildren<{
  gap?: FlexGap;
  expand?: boolean;
  customClassName?: string;
}>;

export default function Grid({
  gap = "4",
  expand,
  customClassName,
  children,
}: GridProps) {
  return (
    <Row
      customClassName={clsx(
        styles.grid,
        { [flexStyles.expand]: expand },
        customClassName,
      )}
      gap={gap}
      items="center"
    >
      {children}
    </Row>
  );
}
