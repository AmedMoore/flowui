"use client";

import { useLayoutEffect, useState } from "react";
import type { DocPageTocItem } from "@/types/doc-page-content";
import { Column, Row } from "@flowui/react/layout";
import { Text } from "@flowui/react/basic";
import { IconGithub } from "@flowui/react/icons";
import { ContentsMenuItem } from "./contents-menu-item";
import type { Props } from "./props";
import styles from "../../side-menu.module.scss";
import clsx from "clsx";

function getSourceFileUrl({ params }: Props) {
  // eslint-disable-next-line max-len
  return `https://github.com/AmedMoore/flowui/blob/main/public/docs/${params.catSlug}/${params.pageSlug}.mdx`;
}

export function ContentsMenu({
  hasCustomScrollBar,
  toc,
  params,
}: Props & {
  hasCustomScrollBar: boolean;
  toc: DocPageTocItem[];
}) {
  const sourceUrl = getSourceFileUrl({ params });
  const [activeEl, setActiveEl] = useState("");

  useLayoutEffect(() => {
    const handler = () => {
      const anchorTags = [
        ...document.querySelectorAll<HTMLAnchorElement>(".mdx-content a"),
      ].filter(isInViewport);
      setActiveEl(anchorTags[0]?.getAttribute("href") ?? "");
    };
    document.addEventListener("scroll", handler);
    return () => {
      document.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <Column
      customClassName={clsx(styles.sideMenu, styles.contentsMenu, {
        [styles.customScrollBar]: hasCustomScrollBar,
      })}
    >
      <Column scrollable gap={4} customClassName={styles.contentContainer}>
        <Text weight="semibold" color="basic">
          On this page
        </Text>
        <Column gap={2}>
          {toc.map((item) => (
            <ContentsMenuItem
              key={item.slug}
              item={item}
              active={activeEl === item.slug}
            />
          ))}
        </Column>
        <Column gap={2}>
          <a href={sourceUrl} target="_blank" rel="nofollow">
            <Text as="span" color="basic">
              <Row gap={2} items="center">
                <IconGithub />
                <Text as="span">Edit this page</Text>
              </Row>
            </Text>
          </a>
        </Column>
      </Column>
    </Column>
  );
}

function isInViewport(el: HTMLAnchorElement) {
  const rect = el.getBoundingClientRect();
  return (
    el.getAttribute("href")?.startsWith("#") &&
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}
