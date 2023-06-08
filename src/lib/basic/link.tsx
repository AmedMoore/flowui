import React from "react";
import NextLink from "next/link";
import type { LinkProps as NextLinkProps } from "next/dist/client/link";

import Text, { type TextProps } from "./text";
import styles from "./link.module.scss";

export type LinkProps = Pick<TextProps, "size" | "weight" | "children"> &
  NextLinkProps;

export default function Link({ href, size, weight, children }: LinkProps) {
  return (
    <NextLink href={href} className={styles.link}>
      <Text as="span" size={size} weight={weight}>
        {children}
      </Text>
    </NextLink>
  );
}
