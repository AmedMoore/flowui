import type { DocPageTocItem } from "@/types/doc-page-content";
import { Column, Row } from "@flowui/react/layout";
import { Text } from "@flowui/react/basic";
import { IconGithub } from "@flowui/react/icons";
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
        <ContentsMenuGroup items={toc} />
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

function ContentsMenuGroup({ items }: { items: DocPageTocItem[] }) {
  return (
    <Column gap={2}>
      {items.map((item) => (
        <ContentsMenuItem key={item.slug} item={item} />
      ))}
    </Column>
  );
}

function ContentsMenuItem({ item }: { item: DocPageTocItem }) {
  return (
    <Column style={{ marginLeft: `${item.level - 1}em` }}>
      <a href={item.slug}>
        <Row
          gap={2}
          items="center"
          customClassName={clsx(
            "transition-all",
            "text-basic-500 hover:text-basic-900",
            "dark:text-basic-400 dark:hover:text-basic-50",
          )}
        >
          <Text size="xs">&#x2022;</Text>
          <Text size="sm" weight="medium">
            {item.label}
          </Text>
        </Row>
      </a>
      {item.children.length > 0 && <ContentsMenuGroup items={item.children} />}
    </Column>
  );
}
