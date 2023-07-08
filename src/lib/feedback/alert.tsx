import React from "react";
import type { ElementPropsWithChildren } from "../types/element-props";
import type Color from "../types/color";
import Column from "../layout/column";
import Text from "../basic/text";
import clsx from "clsx";

export type AlertProps = ElementPropsWithChildren<{
  title?: string;
  content?: string;
  variant?: "solid" | "flat" | "bordered";
  color?: Color;
}>;

export default function Alert({
  title,
  variant = "solid",
  color = "basic",
  customClassName,
  children,
  ...props
}: AlertProps) {
  return (
    <div
      {...props}
      className={clsx(
        "px-3 py-1 rounded-lg",
        {
          // solid primary
          "bg-primary-500": variant === "solid" && color === "primary",
          // solid error
          "bg-error-500": variant === "solid" && color === "error",

          // bordered
          border: variant === "bordered",
          // bordered error
          "border-error-500": variant === "bordered" && color === "error",
        },
        customClassName,
      )}
    >
      <Column gap={2}>
        <Text
          size="2xl"
          customClassName={clsx({
            // border error
            "text-error-500 dark:text-error-100":
              variant === "bordered" && color === "error",
          })}
        >
          {title}
        </Text>
        <Text
          customClassName={clsx({
            // border error
            "text-error-500 dark:text-error-100":
              variant === "bordered" && color === "error",
          })}
        >
          {children}
        </Text>
      </Column>
    </div>
  );
}
