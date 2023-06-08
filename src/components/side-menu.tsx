import {
  Column,
  Row,
  AccordionMenu,
  AccordionMenuContent,
  AccordionMenuToggleButton,
} from "@flowui/react/layout";
import { Button, Text } from "@flowui/react/basic";
import Link from "next/link";
import styles from "./side-menu.module.scss";

const SideMenu = () => (
  <Column gap={6} customClassName={styles.sideMenu}>
    {sections.map((section) => (
      <Column key={section.title}>
        <Row customClassName="p-2">
          <Text color="primary">{section.title}</Text>
        </Row>
        {section.links?.map((link) =>
          link.sub?.length ? (
            <AccordionMenu key={link.slug}>
              <AccordionMenuToggleButton
                as={Link}
                href={section.slug + link.slug}
                variant="text"
                width="full"
              >
                <LinkLabel label={link.label} />
              </AccordionMenuToggleButton>
              <AccordionMenuContent customClassName="border-l ml-6 px-1 my-2">
                {link.sub?.map((sub) => (
                  <Button
                    key={sub.slug}
                    as={Link}
                    href={section.slug + link.slug + sub.slug}
                    variant="text"
                    width="full"
                  >
                    <LinkLabel label={sub.label} />
                  </Button>
                ))}
              </AccordionMenuContent>
            </AccordionMenu>
          ) : (
            <Button
              key={link.slug}
              as={Link}
              href={section.slug + link.slug}
              variant="text"
              width="full"
            >
              <LinkLabel label={link.label} />
            </Button>
          ),
        )}
      </Column>
    ))}
  </Column>
);

function LinkLabel({ label }: { label: string }) {
  return (
    <Text
      align="left"
      size="sm"
      weight="light"
      customClassName="whitespace-pre-wrap text-basic-600 dark:text-basic-500"
    >
      {label}
    </Text>
  );
}

const sections = [
  {
    title: "Basic",
    slug: "/basic",
    links: [
      {
        label: "Button",
        slug: "/button",
        sub: [] as any[],
      },
      {
        label: "Button Group",
        slug: "/button-group",
      },
      {
        label: "Text",
        slug: "/text",
      },
    ],
  },
  {
    title: "Forms",
    slug: "/forms",
    links: [
      {
        label: "Form",
        slug: "/form",
      },
      {
        label: "Input",
        slug: "/input",
      },
      {
        label: "Select",
        slug: "/select",
      },
      {
        label: "Form Button",
        slug: "/form-button",
      },
    ],
  },
  {
    title: "Hooks",
    slug: "/hooks",
    links: [
      {
        label: "useDarkModeSwitch",
        slug: "/use-dark-mode-switch",
      },
      {
        label: "useManagedCollapsableMenu",
        slug: "/use-managed-collapsable-menu",
      },
      {
        label: "useRipple",
        slug: "/use-ripple",
      },
    ],
  },
  {
    title: "Icons",
    slug: "/icons",
    links: [
      {
        label: "Icons",
        slug: "",
      },
    ],
  },
  {
    title: "Layout",
    slug: "/layout",
    links: [
      {
        label: "Accordion Menu",
        slug: "/accordion-menu",
      },
      {
        label: "paper",
        slug: "/paper",
      },
      {
        label: "Card",
        slug: "/card",
      },
      {
        label: "Row",
        slug: "/row",
      },
      {
        label: "Column",
        slug: "/column",
      },
      {
        label: "Skeleton",
        slug: "/skeleton",
      },
      {
        label: "Spacer",
        slug: "/spacer",
      },
      {
        label: "Side Menu",
        slug: "/side-menu",
      },
      {
        label: "Dropdown",
        slug: "/dropdown",
      },
    ],
  },
];

export default SideMenu;
