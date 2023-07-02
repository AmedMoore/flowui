import {
  IconCode,
  IconDocument,
  IconForm,
  IconIconStar,
  IconInput,
  IconLayout,
  IconUser,
  type SVGProps,
} from "@flowui/react/icons";

export type SideMenuItem = {
  label: string;
  slug: string;
};

export type SideMenuItemsGroup = {
  title: string;
  slug: string;
  icon: (props: SVGProps) => JSX.Element;
  links: SideMenuItem[];
};

export const sideMenuItems: SideMenuItemsGroup[] = [
  {
    title: "Getting Started",
    slug: "docs",
    icon: IconDocument,
    links: [
      {
        label: "Overview",
        slug: "",
      },
      {
        label: "Installation",
        slug: "installation",
      },
    ],
  },
  {
    title: "Basic",
    slug: "docs/basic",
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
    slug: "docs/data",
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
    slug: "docs/layout",
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
    slug: "docs/forms",
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
    slug: "docs/icons",
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
    slug: "docs/hooks",
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
