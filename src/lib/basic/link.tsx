import React from "react";
import NextLink from "next/link";
import type { LinkProps as NextLinkProps } from "next/dist/client/link";

import Text, { type TextProps } from "./text";
import styles from "./link.module.scss";

export type LinkProps = Exclude<TextProps, "as"> & NextLinkProps;

export default function Link({
  href,
  children,
  color = "primary",
  ...textProps
}: LinkProps) {
  return (
    <NextLink href={href} className={styles.link}>
      <Text {...textProps} color={color} as="span">
        {children}
      </Text>
    </NextLink>
  );
}
