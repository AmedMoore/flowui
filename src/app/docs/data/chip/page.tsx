import { PropsWithChildren } from "react";
import { Chip } from '@flowui/react/data'
import { Table} from "@flowui/react/data";
import { Column, Grid } from "@flowui/react/layout";
import { Text } from "@flowui/react/basic";

import { Code } from "@/components/code";

// API Snippets
import ImportSnippet from './snippets/api/import-chip-snippet.mdx';
import ChipColorSnippet from './snippets/api/chip-color.mdx';
import ChipSizeSnippet from './snippets/api/chip-size.mdx';

// Example Snippets
import BasicSnippet from './snippets/code/basic-example.mdx';
import ColorsSnippet from './snippets/code/colors-example.mdx';
import SizesSnippet from './snippets/code/sizes-example.mdx';

// Props Types
import {ChipPropTypes} from "./snippets/chip-prop-types";


export default function ChipPage() {
  return (
    <Column gap="6">
      <Column gap="8">
        <Text as="h1" size="5xl">
          Chip
        </Text>
      </Column>

      <Column gap="5" items="start">
        <Text>Basic</Text>
        <Chip>Basic</Chip>
        <BasicSnippet />
      </Column>

      <Column gap="5" items="start">
        <Text>Colors</Text>
        <Grid gap="2">
          <Chip color="primary">Primary</Chip>
          <Chip color="secondary">Secondary</Chip>
          <Chip color="success">Success</Chip>
          <Chip color="warning">Warning</Chip>
          <Chip color="error">Error</Chip>
          <Chip color="gradient">Gradient</Chip>
        </Grid>
        <ColorsSnippet />
      </Column>

      <Column gap="5" items="start">
        <Text>Sizes</Text>
        <Grid gap="2">
          <Chip size="xs">Extra Small</Chip>
          <Chip size="sm">Small</Chip>
          <Chip size="md">Medium</Chip>
          <Chip size="lg">Large</Chip>
          <Chip size="xl">Extra Large</Chip>
        </Grid>
        <SizesSnippet />
      </Column>

      <Column gap="8">
        <Text as="h2" size="2xl">
          API
        </Text>

        <Column gap="4">
          <Text as="h3" size="xl">
            Import
          </Text>
          <ImportSnippet />
        </Column>

        <Column gap="4">
          <Text as="h3" size="xl">
            Props
          </Text>
          <Table
            columns={[
              { label: "Name", dataKey: "name" },
              { label: "Type", dataKey: "type", component: ButtonPropLink },
              { label: "Required", dataKey: "required" },
              { label: "Default", dataKey: "default" },
              { label: "Description", dataKey: "description" },
            ]}
            data={ChipPropTypes}
            shadow={4}
          />
        </Column>

        <Column gap="4">
          <Text as="h3" size="xl">
            Types
          </Text>

          <Column gap="4" id="Size">
            <Text>Size</Text>
            <ChipSizeSnippet />
          </Column>

          <Column gap="4" id="Color">
            <Text>Color</Text>
            <ChipColorSnippet />
          </Column>

        </Column>
      </Column>
    </Column>
  );
}


function ButtonPropLink({ children }: PropsWithChildren) {
  return (
    <Code>
      <a href={`#${children}`}>{children}</a>
    </Code>
  );
}