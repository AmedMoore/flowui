import React from "react";
import clsx from "clsx";
import { justifyStyleName } from "./justify-style-name";
import { itemsStyleName } from "./items-style-name";
import { type FlexGap, gapStyleName } from "./gap-style-name";
import styles from "./column.module.scss";
import flexStyles from "./flex.module.scss";
import type { ElementPropsWithChildren } from "../types/element-props";

export type ColumnProps = ElementPropsWithChildren<{
  expand?: boolean;
  scrollable?: boolean;
  justify?: keyof typeof justifyStyleName;
  items?: keyof typeof itemsStyleName;
  gap?: FlexGap;
}>;

export type ColumnComponent = (
  props: React.PropsWithRef<
    ColumnProps & { ref?: React.ForwardedRef<HTMLDivElement> }
  >,
) => React.ReactNode;

function ColumnWithForwardedRef(
  props: ColumnProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
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

const Column: ColumnComponent = React.forwardRef(ColumnWithForwardedRef);

export default Column;
