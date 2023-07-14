import { Card, Column, Row } from "@flowui/react/layout";
import { Text } from "@flowui/react/basic";
import { CopyInstallSnippetButton } from "./copy-install-snippet-button";

const HomePage = () => (
  <Row expand justify="center" customClassName="mt-16">
    <Column gap={10} items="center" customClassName="container py-64">
      <Text size="4xl">Build beautiful Next.js apps with ease.</Text>
      <Card customClassName="px-4 py-2 w-96">
        <Row items="center" justify="between">
          <Text customClassName="font-mono">$ npm install @flowui/react</Text>
          <CopyInstallSnippetButton />
        </Row>
      </Card>
    </Column>
  </Row>
);

export default HomePage;
