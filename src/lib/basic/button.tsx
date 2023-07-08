"use client";

import React from "react";
import clsx from "clsx";
import type { ElementPropsWithChildren } from "../types/element-props";
import type Color from "../types/color";
import type Size from "../types/size";
import type { ElementType } from "../types/element-type";
import useRipple from "../hooks/use-ripple";
import Column from "../layout/column";
import Row from "../layout/row";
import IconSpinner from "../icons/icon-spinner";
import styles from "./button.module.scss";

export type ButtonProps<T extends React.ElementType = "button"> =
  ElementPropsWithChildren<{
    as?: T;
    type?: ButtonType;
    variant?: ButtonVariant;
    color?: Color;
    size?: Size;
    width?: ButtonWidth;
    shadow?: boolean;
    disabled?: boolean;
    loading?: boolean;
    iconOnly?: boolean;
    circle?: boolean;
    focusable?: boolean;
    leadingIcon?: JSX.Element;
    trailingIcon?: JSX.Element;
  }>;

export type ButtonVariant = "solid" | "bordered" | "flat" | "text";
export type ButtonType = "button" | "submit";
export type ButtonWidth = "auto" | "full";

type ButtonComponentProps<T extends React.ElementType> = ButtonProps<T> &
  Omit<React.ComponentProps<T>, "as">;

export type ButtonComponent = <T extends React.ElementType = "button">(
  props: ButtonComponentProps<T>,
) => JSX.Element;

function ButtonWithForwardedRef<T extends React.ElementType>(
  props: ButtonComponentProps<T>,
  ref: React.ForwardedRef<HTMLElement>,
): JSX.Element {
  const {
    as = "button",
    type,
    variant = "solid",
    color = "primary",
    size = "md",
    width = "auto",
    shadow,
    disabled,
    loading,
    iconOnly,
    circle,
    focusable = true,
    leadingIcon,
    trailingIcon,
    customClassName,
    children,
    ...restProps
  } = props;

  const ripples = useRipple(ref, { enabled: !disabled, color });

  const className = React.useMemo(
    () =>
      clsx(
        styles.button,
        styles[color],
        styles[variant],
        styles[size],
        { [styles.widthFull]: width === "full" },
        { [styles.widthFit]: width === "auto" },
        { [styles.shadow]: shadow },
        { [styles.iconOnly]: iconOnly },
        { [styles.circle]: circle },
        { [styles.loading]: loading },
        { [styles.focusable]: focusable },
        customClassName,
      ),
    [
      circle,
      color,
      customClassName,
      focusable,
      iconOnly,
      loading,
      shadow,
      size,
      variant,
      width,
    ],
  );

  return React.createElement(
    as,
    {
      ...restProps,
      ref,
      disabled,
      className,
      type: type ?? "button",
      role: "button",
    },
    [
      <Row
        key="button"
        expand
        gap="2"
        items="center"
        customClassName={styles.buttonContent}
      >
        {leadingIcon && !iconOnly && <Column>{leadingIcon}</Column>}
        <Row
          expand
          gap="2"
          items="center"
          customClassName={styles.buttonContentContainer}
        >
          {loading && <IconSpinner customClassName={styles.loadingIcon} />}
          <Column expand customClassName={styles.buttonContentContainer}>
            {children}
          </Column>
        </Row>
        {trailingIcon && !iconOnly && <Column>{trailingIcon}</Column>}
      </Row>,
      ...ripples,
    ],
  );
}

const Button = React.forwardRef(ButtonWithForwardedRef) as ButtonComponent;

export default Button;
