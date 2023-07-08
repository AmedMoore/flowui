"use client";

import { Column } from "@flowui/react/layout";
import { Alert } from "@flowui/react/feedback";
import { Button, Text } from "@flowui/react/basic";

export default function DocsErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <Column items="center">
      <Alert
        title="Oh, Something broke!!"
        variant="bordered"
        color="error"
        customClassName="max-w-screen-sm px-11 py-6"
      >
        <Column gap={4}>
          <Text>{error?.message}</Text>
          <Button variant="text" color="warning" onClick={reset}>
            Retry
          </Button>
        </Column>
      </Alert>
    </Column>
  );
}
