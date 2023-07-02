import React from "react";
import clsx from "clsx";
import Row from "../layout/row";
import type Color from "../types/color";
import type Size from "../types/size";
import type { ButtonWidth, ButtonVariant, ButtonProps } from "./button";
import styles from "./button-group.module.scss";

export type ButtonGroupProps = {
  size?: Size;
  color?: Color;
  variant?: ButtonVariant;
  iconOnly?: boolean;
  disabled?: boolean;
  loading?: boolean;
  children?: React.ReactElement | React.ReactElement[] | null | false;
  width?: ButtonWidth;
};

export default function ButtonGroup({
  size = "md",
  color = "primary",
  variant = "text",
  iconOnly,
  disabled,
  loading,
  children,
  width,
}: ButtonGroupProps) {
  return (
    <Row
      items="center"
      justify="around"
      gap={1}
      customClassName={clsx(
        styles.buttonGroup,
        styles[variant],
        styles[color],
        { [styles.widthFull]: width === "full" },
        { [styles.iconOnly]: iconOnly },
      )}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement<ButtonProps>(child)) {
          return React.cloneElement(child, {
            size,
            color: child.props.color ?? color,
            variant: child.props.variant ?? variant,
            iconOnly,
            disabled,
            loading,
            width,
            customClassName: styles.button,
          });
        }
        return child;
      })}
    </Row>
  );
}
