"use client";

import { Card, Column, Row } from "@flowui/react/layout";
import { Button, Text } from "@flowui/react/basic";
import { Chip } from "@flowui/react/data";
import Image from "next/image";

export default function CardPage() {
  return (
    <Column gap={4} expand>
      <Card
        shadow={4}
        justify="between"
        customClassName="w-72 h-96 border-secondary-300 dark:border-secondary-800 relative cursor-default select-none transition-all hover:scale-95 hover:rotate-1"
      >
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
        <Row
          justify="between"
          customClassName="p-4 bg-secondary-500/30 backdrop-filter backdrop-blur-sm z-10"
        >
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
