"use client";

import * as Icons from "@flowui/react/icons";
import type { SVGProps } from "@flowui/react/icons";
import { createElement, useCallback, useState } from "react";
import { useCopyToClipboard, useIsMounted } from "usehooks-ts";
import { capitalCase } from "change-case";
import { Row, Column, Grid, Card } from "@flowui/react/layout";
import { Text } from "@flowui/react/basic";
import clsx from "clsx";

type Icon = (props: SVGProps) => JSX.Element;

function IconCard({ icon }: { icon: Icon }) {
  const [, copyFn] = useCopyToClipboard();
  const [copied, setCopied] = useState(false);
  const isMounted = useIsMounted();

  const copy = useCallback(async () => {
    await copyFn(icon.name);
    setCopied(true);
    setTimeout(() => {
      if (isMounted()) {
        setCopied(false);
      }
    }, 2000);
  }, [copyFn, icon.name, isMounted]);

  return (
    <button onClick={copy}>
      <Card
        bordered={false}
        customClassName={clsx("!w-32 !h-32", {
          "!bg-success-1 dark:!bg-success-2": copied,
        })}
      >
        <Column expand items="center" justify="center">
          <Row expand items="center">
            {createElement(icon)}
          </Row>
          <Row expand items="center">
            <Text size="sm" color="secondary" align="center">
              {copied ? "Copied!" : capitalCase(icon.name)}
            </Text>
          </Row>
        </Column>
      </Card>
    </button>
  );
}

export default function InputPage() {
  return (
    <Grid gap="6">
      {Object.keys(Icons)
        .sort()
        .map((icon) => (
          <IconCard key={icon} icon={Icons[icon as keyof typeof Icons]} />
        ))}
    </Grid>
  );
}
