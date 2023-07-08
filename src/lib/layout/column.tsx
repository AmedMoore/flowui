import React from "react";
import clsx from "clsx";
import { justifyStyleName } from "./justify-style-name";
import { itemsStyleName } from "./items-style-name";
import { type FlexGap, gapStyleName } from "./gap-style-name";
import type { ElementPropsWithChildren } from "../types/element-props";
import type { ElementType } from "../types/element-type";
import styles from "./column.module.scss";
import flexStyles from "./flex.module.scss";

export type ColumnProps = ElementPropsWithChildren<{
  expand?: boolean;
  scrollable?: boolean;
  justify?: keyof typeof justifyStyleName;
  items?: keyof typeof itemsStyleName;
  gap?: FlexGap;
}>;

export type ColumnComponent = ElementType<ColumnProps, HTMLDivElement>;

function ColumnWithForwardedRef(
  props: ColumnProps,
  ref: React.ForwardedRef<HTMLDivElement>,
): JSX.Element {
  const {
    children,
    expand,
    scrollable,
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
        styles.column,
        { [flexStyles.expand]: expand },
        { [styles.scrollable]: scrollable },
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

const Column = React.forwardRef(ColumnWithForwardedRef) as ColumnComponent;

export default Column;
