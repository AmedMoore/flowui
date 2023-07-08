import type { PropsWithChildren } from "react";
import { Column, Grid } from "@flowui/react/layout";
import { Button, Text } from "@flowui/react/basic";
import { Table } from "@flowui/react/data";
import { IconUser } from "@flowui/react/icons";
import type { ButtonVariant } from "@flowui/react/basic/button";
import type Color from "@flowui/react/types/color";

import { Code } from "@/components/code";

// API Snippets
import ButtonImportSnippet from "./snippets/api/button-import-snippet.mdx";
import ButtonVariantSnippet from "./snippets/api/button-variant-snippet.mdx";
import ButtonColorSnippet from "./snippets/api/button-color-snippet.mdx";
import ButtonSizeSnippet from "./snippets/api/button-size-snippet.mdx";
import ButtonWidthSnippet from "./snippets/api/button-width-snippet.mdx";
import ButtonTypeSnippet from "./snippets/api/button-type-snippet.mdx";

// Example Snippets
import VariantsExample from './snippets/code/variants-example.mdx';

import { ButtonPropTypes } from "./button-prop-types";

// noinspection JSUnusedGlobalSymbols
export default function ButtonPage() {
  return (
    <Column gap="12">
      <Column gap="8">
        <Text as="h1" size="5xl">
          Button
        </Text>
      </Column>

      <Column gap="8">
        <Text as="h2" size="2xl">
          Demos
        </Text>

        <Column gap="4">
          <Text as="h3" size="xl">
            Variants
          </Text>
          <Grid>
            {ButtonVariants.map((variant) => (
              <Button variant={variant} key={variant}>
                <Text transform="capitalize">{variant}</Text>
              </Button>
            ))}
          </Grid>
          <VariantsExample />
        </Column>

        <Column gap="8">
          <Text as="h3" size="xl">
            Colors
          </Text>
          <Column gap="8">
            {ButtonVariants.map((variant) => (
              <Column gap="4" key={variant}>
                <Text transform="capitalize">{variant} colors</Text>
                <Grid>
                  {ButtonColors.map((color) => (
                    <Button
                      variant={variant}
                      color={color}
                      key={color}
                      shadow={variant == "solid"}
                    >
                      {color}
                    </Button>
                  ))}
                </Grid>
              </Column>
            ))}
          </Column>
        </Column>

        <Column gap="4">
          <Text as="h3" size="xl">
            Sizes
          </Text>
          <Grid>
            <Button size="xs">Tiny</Button>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra Large</Button>
          </Grid>
        </Column>

        <Column gap="4">
          <Text as="h3" size="xl">
            Status
          </Text>
          <Grid>
            <Button disabled>Disabled</Button>
            <Button loading>Loading</Button>
          </Grid>
        </Column>

        <Column gap="4">
          <Text as="h3" size="xl">
            Icons
          </Text>
          <Grid>
            <Button leadingIcon={<IconUser />}>Leading Icon</Button>
            <Button trailingIcon={<IconUser />}>Trailing Icon</Button>
            <Button iconOnly>
              <IconUser />
            </Button>
            <Button iconOnly circle>
              <IconUser />
            </Button>
          </Grid>
        </Column>
      </Column>

      <Column gap="8">
        <Text as="h2" size="2xl">
          API
        </Text>

        <Column gap="4">
          <Text as="h3" size="xl">
            Import
          </Text>
          <ButtonImportSnippet />
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
            data={ButtonPropTypes}
            shadow={4}
          />
        </Column>

        <Column gap="4">
          <Text as="h3" size="xl">
            Types
          </Text>

          <Column gap="4" id="ButtonVariant">
            <Text>ButtonVariant</Text>
            <ButtonVariantSnippet />
          </Column>

          <Column gap="4" id="Color">
            <Text>Color</Text>
            <ButtonColorSnippet />
          </Column>

          <Column gap="4" id="Size">
            <Text>Size</Text>
            <ButtonSizeSnippet />
          </Column>

          <Column gap="4" id="ButtonWidth">
            <Text>ButtonWidth</Text>
            <ButtonWidthSnippet />
          </Column>

          <Column gap="4" id="ButtonType">
            <Text>ButtonType</Text>
            <ButtonTypeSnippet />
          </Column>
        </Column>
      </Column>
    </Column>
  );
}

// TODO: refactor this ButtonPropLink and move it to components folder to use it another components
function ButtonPropLink({ children }: PropsWithChildren) {
  return (
    <Code>
      <a href={`#${children}`}>{children}</a>
    </Code>
  );
}

const ButtonVariants: ButtonVariant[] = ["solid", "flat", "bordered", "text"];

const ButtonColors: Color[] = [
  "basic",
  "primary",
  "secondary",
  "success",
  "warning",
  "error",
  "gradient",
];

// noinspection JSUnusedGlobalSymbols
export const metadata = {
  title: "Button",
};
