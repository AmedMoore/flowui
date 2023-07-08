import React from "react";
import type { ElementProps } from "../types/element-props";
import styles from "./divider.module.scss";
import clsx from "clsx";

export default function Divider({
  width,
  height,
  customClassName,
  ...restProps
}: ElementProps<{
  width?: number | `${number}px` | `${number}%`;
  height?: number | `${number}px` | `${number}%`;
}>) {
  return (
    <div
      {...restProps}
      style={{ minWidth: width, minHeight: height, width, height }}
      className={clsx(styles.divider, customClassName)}
    />
  );
}
