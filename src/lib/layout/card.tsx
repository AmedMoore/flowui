import React from "react";
import clsx from "clsx";

import Column, { type ColumnProps } from "./column";
import { shadowStyleName, type Shadow } from "./shadow-style-name";
import styles from "./card.module.scss";

export type CardProps = ColumnProps & {
  bordered?: boolean;
  shadow?: true | Shadow;
  fullWidth?: boolean;
};

export type CardComponent = (
  props: React.PropsWithRef<
    CardProps & { ref?: React.ForwardedRef<HTMLDivElement> }
  >,
) => React.ReactNode;

function CardWithForwardedRef(
  props: CardProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
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

const Card: CardComponent = React.forwardRef(CardWithForwardedRef);

export default Card;
