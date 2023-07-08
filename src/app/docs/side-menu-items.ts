import {
  IconCode,
  IconDocument,
  IconForm,
  IconIconStar,
  IconInput,
  IconLayout,
  IconUser,
} from "@flowui/react/icons";
import type { SideMenuItemsGroup } from "@/types/side-menu-item";

export const sideMenuItems: SideMenuItemsGroup[] = [
  {
    title: "Getting Started",
    slug: "getting-started",
    icon: IconDocument,
    links: [
      {
        label: "Overview",
        slug: "overview",
      },
      {
        label: "Installation",
        slug: "installation",
      },
    ],
  },
  {
    title: "Basic",
    slug: "basic",
    icon: IconInput,
    links: [
      {
        label: "Button",
        slug: "button",
      },
      {
        label: "Button Group",
        slug: "button-group",
      },
      {
        label: "Text",
        slug: "text",
      },
    ],
  },
  {
    title: "Data Display",
    slug: "data",
    icon: IconUser,
    links: [
      {
        label: "Chip",
        slug: "chip",
      },
    ],
  },
  {
    title: "Layout",
    slug: "layout",
    icon: IconLayout,
    links: [
      {
        label: "Accordion Menu",
        slug: "accordion-menu",
      },
      {
        label: "paper",
        slug: "paper",
      },
      {
        label: "Card",
        slug: "card",
      },
      {
        label: "Row",
        slug: "row",
      },
      {
        label: "Column",
        slug: "column",
      },
      {
        label: "Skeleton",
        slug: "skeleton",
      },
      {
        label: "Spacer",
        slug: "spacer",
      },
      {
        label: "Side Menu",
        slug: "side-menu",
      },
      {
        label: "Dropdown",
        slug: "dropdown",
      },
    ],
  },
  {
    title: "Forms",
    slug: "forms",
    icon: IconForm,
    links: [
      {
        label: "Form",
        slug: "form",
      },
      {
        label: "Input",
        slug: "input",
      },
      {
        label: "TextArea",
        slug: "textarea",
      },
      {
        label: "Select",
        slug: "select",
      },
      {
        label: "Form Button",
        slug: "form-button",
      },
    ],
  },
  {
    title: "Icons",
    slug: "icons",
    icon: IconIconStar,
    links: [
      {
        label: "Icons",
        slug: "",
      },
    ],
  },
  {
    title: "Hooks",
    slug: "hooks",
    icon: IconCode,
    links: [
      {
        label: "useDarkModeSwitch",
        slug: "use-dark-mode-switch",
      },
      {
        label: "useManagedCollapsableMenu",
        slug: "use-managed-collapsable-menu",
      },
      {
        label: "useRipple",
        slug: "use-ripple",
      },
    ],
  },
];
