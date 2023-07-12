import { DocPageTocItem } from "@/types/doc-page-content";
import { Column, Row } from "@flowui/react/layout";
import { Text } from "@flowui/react/basic";
import clsx from "clsx";

export function ContentsMenuItem({
  item,
  active,
}: {
  item: DocPageTocItem;
  active: boolean;
}) {
  return (
    <Column style={{ marginLeft: `${item.level - 1}em` }}>
      <a href={item.slug}>
        <Row
          gap={2}
          items="center"
          customClassName={clsx(
            "transition-all hover:text-basic-900 dark:hover:text-basic-50",
          )}
        >
          <Text
            size="xs"
            customClassName="opacity-25 dark:opacity-35"
            color={active ? "primary" : "basic"}
          >
            &#x2022;
          </Text>
          <Text size="sm" weight="medium" color={active ? "primary" : "basic"}>
            {item.label}
          </Text>
        </Row>
      </a>
    </Column>
  );
}
