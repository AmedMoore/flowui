import React from "react";

import Column from "../layout/column";
import Row from "../layout/row";
import Text from "../basic/text";
import styles from "./element-details.module.scss";

export default function ElementDetails({
  element,
}: {
  element: () => JSX.Element;
}) {
  return (
    <Column customClassName={styles.detailsContainer} gap="2">
      <Row gap="2">
        <Text>Name:</Text>
        <Text>{element.name}</Text>
      </Row>
      <Row gap="2">
        <Text>Type:</Text>
        <Text>
          {typeof window === "undefined"
            ? "Server Component"
            : "Client Component"}
        </Text>
      </Row>
    </Column>
  );
}
