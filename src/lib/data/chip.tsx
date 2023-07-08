import React from "react";
import clsx from "clsx";
import type Color from "../types/color";
import type Size from "../types/size";
import type { ElementType } from "../types/element-type";
import styles from "./chip.module.scss";

export type ChipProps = React.PropsWithChildren<{
  color?: Color;
  size?: Size;
}>;

export type ChipComponent = ElementType<ChipProps, HTMLDivElement>;

function ChipWithForwardedRef(
  { color = "basic", size = "md", children }: ChipProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <div ref={ref} className={clsx(styles.chip, styles[color], styles[size])}>
      {children}
    </div>
  );
}

const Chip = React.forwardRef(ChipWithForwardedRef) as ChipComponent;

export default Chip;
