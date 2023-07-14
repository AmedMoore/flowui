import React from "react";
import type { ElementPropsWithChildren } from "../types/element-props";
import type Color from "../types/color";
import Column from "../layout/column";
import Text from "../basic/text";
import clsx from "clsx";
import { Row } from "@flowui/react/layout";

export type AlertProps = ElementPropsWithChildren<{
  title?: string;
  content?: string;
  variant?: "solid" | "flat" | "bordered";
  color?: Color;
  leadingIcon?: JSX.Element;
}>;

export default function Alert({
  title,
  variant = "solid",
  color = "basic",
  leadingIcon,
  customClassName,
  children,
  ...props
}: AlertProps) {
  return (
    <div
      {...props}
      role="alert"
      className={clsx(
        "p-4 rounded-lg max-w-full",
        {
          // solid primary
          "bg-primary-500": variant === "solid" && color === "primary",
          // solid error
          "bg-error-500": variant === "solid" && color === "error",

          // bordered
          border: variant === "bordered",
          // bordered error
          "border-error-500": variant === "bordered" && color === "error",

          // flat primary
          "border-primary-500 bg-primary-400/40 dark:bg-primary-900/40":
            variant === "flat" && color === "primary",

          // flat success
          "border-success-500 bg-success-400/40 dark:bg-success-900/40":
            variant === "flat" && color === "success",
        },
        customClassName,
      )}
    >
      <Column gap={2}>
        {title && (
          <Row items="center" gap={2}>
            {leadingIcon}
            <Text
              size="xl"
              customClassName={clsx({
                // border error
                "text-error-500 dark:text-error-100":
                  variant === "bordered" && color === "error",
              })}
            >
              {title}
            </Text>
          </Row>
        )}
        <Row items="center" gap={2}>
          {!title && leadingIcon}
          <Text
            size="sm"
            customClassName={clsx({
              // border error
              "text-error-500 dark:text-error-100":
                variant === "bordered" && color === "error",
            })}
          >
            {children}
          </Text>
        </Row>
      </Column>
    </div>
  );
}
