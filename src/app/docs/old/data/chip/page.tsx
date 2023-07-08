import { Chip } from "@flowui/react/data";
import { Column, Grid } from "@flowui/react/layout";
import { Text } from "@flowui/react/basic";

export default function ChipPage() {
  return (
    <Column gap="6">
      <Column gap="2" items="start">
        <Text>Basic</Text>
        <Chip>Basic</Chip>
      </Column>

      <Column gap="2" items="start">
        <Text>Colors</Text>
        <Grid gap="2">
          <Chip color="primary">Primary</Chip>
          <Chip color="secondary">Secondary</Chip>
          <Chip color="success">Success</Chip>
          <Chip color="warning">Warning</Chip>
          <Chip color="error">Error</Chip>
          <Chip color="gradient">Gradient</Chip>
        </Grid>
      </Column>

      <Column gap="2" items="start">
        <Text>Sizes</Text>
        <Grid gap="2">
          <Chip size="xs">Extra Small</Chip>
          <Chip size="sm">Small</Chip>
          <Chip size="md">Medium</Chip>
          <Chip size="lg">Large</Chip>
          <Chip size="xl">Extra Large</Chip>
        </Grid>
      </Column>
    </Column>
  );
}
