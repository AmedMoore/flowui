import { Card, Column, Row } from "@flowui/react/layout";
import { Button, Text } from "@flowui/react/basic";
import { Chip } from "@flowui/react/data";
import Image from "next/image";
import styles from "./page.module.scss";

export default function CardPage() {
  return (
    <Column gap={4} expand>
      <Card shadow={4} justify="between" customClassName={styles.card}>
        <Image
          src="/images/product-image-5.jpg"
          alt="Product Image"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          fill
        />
        <Column gap={2} customClassName="p-4 z-10">
          <Chip color="secondary" size="xs">
            NEW
          </Chip>
          <Text size="2xl" weight="bold" color="black">
            Canon Camera
          </Text>
        </Column>
        <Row justify="between" customClassName={styles.footer}>
          <Column>
            <Text size="sm" color="white">
              Available soon.
            </Text>
            <Text size="sm" color="white">
              Order now.
            </Text>
          </Column>
          <Button size="sm" color="secondary">
            Pre-Order
          </Button>
        </Row>
      </Card>
    </Column>
  );
}
