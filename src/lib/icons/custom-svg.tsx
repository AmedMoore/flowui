import React from "react";
import type { PropsWithChildren } from "react";
import clsx from "clsx";

export interface SVGProps {
  readonly viewBox?: string;
  readonly size?: number | `${number}`;
  readonly customClassName?: string;
}

export default function CustomSvg({
  viewBox,
  size,
  customClassName,
  children,
}: PropsWithChildren<SVGProps>) {
  return (
    <svg
      viewBox={viewBox ?? "0 0 24 24"}
      height={size ?? 18}
      width={size ?? 18}
      className={clsx("fill-current", customClassName)}
    >
      {children}
    </svg>
  );
}
