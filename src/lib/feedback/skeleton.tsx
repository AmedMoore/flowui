import React from "react";
import type { ElementProps } from "@flowui/react/types/element-props";
import clsx from "clsx";

export default function Skeleton({
  width,
  height,
  customClassName,
  ...props
}: ElementProps<{
  width?: number | string;
  height?: number | string;
}>) {
  return (
    <div
      {...props}
      style={{ width, height }}
      className={clsx(
        "h-2.5 bg-gray-300 rounded-lg w-full max-w-full animate-pulse",
        "dark:bg-gray-700",
        customClassName,
      )}
    />
  );
}
