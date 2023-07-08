import React from "react";
import clsx from "clsx";
import Column, { type ColumnComponent, type ColumnProps } from "./column";
import styles from "./paper.module.scss";

function PaperWithForwardedRef(
  props: ColumnProps,
  ref: React.ForwardedRef<HTMLDivElement>,
): JSX.Element {
  const { children, expand, customClassName, ...restProps } = props;

  return (
    <Column
      {...restProps}
      ref={ref}
      customClassName={clsx(styles.paper, customClassName)}
      expand
    >
      {children}
    </Column>
  );
}

const Paper = React.forwardRef(PaperWithForwardedRef) as ColumnComponent;

export default Paper;
