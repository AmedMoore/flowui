import React from "react";
import type { PropsWithChildren } from "react";
import clsx from "clsx";

export interface SVGProps {
  readonly size?: number;
  readonly customClassName?: string;
}

export default function CustomSvg({
  size,
  customClassName,
  children,
}: PropsWithChildren<SVGProps>) {
  return (
    <svg
      className={clsx("fill-current", customClassName)}
      height={size ?? 18}
      viewBox="0 0 24 24"
      width={size ?? 18}
    >
      {children}
    </svg>
  );
}
