import React from "react";
import clsx from "clsx";

import styles from "./text.module.scss";
import type { ElementPropsWithChildren } from "../types/element-props";

export type TextProps = ElementPropsWithChildren<{
  as?: TextVariant;
  size?: TextSize;
  weight?: FontWeight;
  color?: TextColor;
  align?: TextAlignment;
}>;

export default function Text({
  as = "p",
  size,
  weight,
  color,
  align,
  customClassName,
  children,
  ...restProps
}: TextProps) {
  return React.createElement(
    as,
    {
      ...restProps,
      className: clsx(
        styles.text,
        weight && styles[weight],
        size && styles[textSizeClassName[size]],
        color && styles[color],
        align && styles[align],
        customClassName,
      ),
    },
    children,
  );
}

export type TextVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span";

export type TextSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl"
  | "9xl";

export type FontWeight =
  | "thin"
  | "extraLight"
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold"
  | "extraBold"
  | "black";

export type TextColor = "primary" | "secondary" | "hint";

export type TextAlignment = "left" | "center" | "right" | "justify";

const textSizeClassName: Record<TextSize, string> = {
  xs: "xs",
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
  "2xl": "_2xl",
  "3xl": "_3xl",
  "4xl": "_4xl",
  "5xl": "_5xl",
  "6xl": "_6xl",
  "7xl": "_7xl",
  "8xl": "_8xl",
  "9xl": "_9xl",
};
