import React from "react";
import { justifyStyleName } from "./justify-style-name";
import { itemsStyleName } from "./items-style-name";
import { type FlexGap, gapStyleName } from "./gap-style-name";
import styles from "./row.module.scss";
import flexStyles from "./flex.module.scss";
import type { ElementPropsWithChildren } from "../types/element-props";
import type { ElementType } from "../types/element-type";
import clsx from "clsx";

export type RowProps = ElementPropsWithChildren<{
  expand?: boolean;
  justify?: keyof typeof justifyStyleName;
  items?: keyof typeof itemsStyleName;
  gap?: FlexGap;
}>;

export type RowComponent = ElementType<RowProps, HTMLDivElement>;

function RowWithForwardedRef(
  props: RowProps,
  ref: React.ForwardedRef<HTMLDivElement>,
): JSX.Element {
  const {
    children,
    expand,
    justify,
    items,
    gap,
    customClassName,
    ...restProps
  } = props;

  return (
    <div
      {...restProps}
      ref={ref}
      className={clsx(
        styles.row,
        { [flexStyles.expand]: expand },
        justify && flexStyles[justifyStyleName[justify]],
        items && flexStyles[itemsStyleName[items]],
        gap && flexStyles[gapStyleName[gap]],
        customClassName,
      )}
    >
      {children}
    </div>
  );
}

const Row = React.forwardRef(RowWithForwardedRef) as RowComponent;

export default Row;
