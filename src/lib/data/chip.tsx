import React from "react";
import clsx from "clsx";
import type Color from "../types/color";
import type Size from "../types/size";
import styles from "./chip.module.scss";

export type ChipProps = React.PropsWithChildren<{
  color?: Color;
  size?: Size;
}>;

export type ChipComponent = (
  props: ChipProps & { ref?: React.ForwardedRef<HTMLDivElement> },
) => React.ReactNode;

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

const Chip: ChipComponent = React.forwardRef(ChipWithForwardedRef);

export default Chip;
