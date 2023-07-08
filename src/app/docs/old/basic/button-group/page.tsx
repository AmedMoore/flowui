import { Column } from "@flowui/react/layout";
import { Button, ButtonGroup, Text } from "@flowui/react/basic";
import type { ButtonVariant } from "@flowui/react/basic/button";
import type Color from "@flowui/react/types/color";

// noinspection JSUnusedGlobalSymbols
export default function ButtonGroupPage() {
  return (
    <Column gap="12">
      <Column gap="8">
        <Text>Button Group</Text>
      </Column>
      <Column gap="8">
        <Text>Demos</Text>

        <Column gap="8">
          <Text>Variants</Text>
          <Column gap="8">
            {ButtonGroupVariants.map((variant) => (
              <Column gap="4" key={variant}>
                <Text>{variant}</Text>
                <ButtonGroup variant={variant}>
                  <Button>One</Button>
                  <Button>Two</Button>
                  <Button>Three</Button>
                </ButtonGroup>
              </Column>
            ))}
          </Column>
        </Column>

        <Column gap="8">
          <Text>Colors</Text>
          <Column gap="8">
            {ButtonGroupVariants.map((variant) => (
              <Column gap="4" key={variant}>
                <Text>{variant} Colors</Text>
                {ButtonGroupColors.map((color) => (
                  <ButtonGroup variant={variant} color={color} key={color}>
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                  </ButtonGroup>
                ))}
              </Column>
            ))}
          </Column>
        </Column>
      </Column>
    </Column>
  );
}

const ButtonGroupVariants: ButtonVariant[] = [
  "solid",
  "flat",
  "bordered",
  "text",
];

const ButtonGroupColors: Color[] = [
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
  title: "Button Group",
};
