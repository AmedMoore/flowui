import React from "react";
import Column, { type ColumnProps } from "./column";
import { shadowStyleName, type Shadow } from "./shadow-style-name";
import type { ElementType } from "../types/element-type";
import styles from "./card.module.scss";
import clsx from "clsx";

export type CardProps = ColumnProps & {
  bordered?: boolean;
  shadow?: true | Shadow;
  fullWidth?: boolean;
};

export type CardComponent = ElementType<CardProps, HTMLDivElement>;

function CardWithForwardedRef(
  props: CardProps,
  ref: React.ForwardedRef<HTMLDivElement>,
): JSX.Element {
  const {
    children,
    bordered = true,
    shadow,
    fullWidth,
    customClassName,
    ...restProps
  } = props;

  return (
    <Column
      {...restProps}
      ref={ref}
      customClassName={clsx(
        styles.card,
        { [styles.bordered]: bordered },
        { [styles.fullWidth]: fullWidth },
        shadow && styles[shadowStyleName[shadow === true ? "2" : shadow]],
        customClassName,
      )}
    >
      {children}
    </Column>
  );
}

const Card = React.forwardRef(CardWithForwardedRef) as CardComponent;

export default Card;
