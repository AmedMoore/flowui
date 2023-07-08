"use client";

import React from "react";
import clsx from "clsx";
import type { ElementPropsWithChildren } from "../types/element-props";
import useManagedCollapsableMenu from "../hooks/use-managed-collapsable-menu";
import Button, { ButtonProps } from "../basic/button";
import Column from "./column";
import IconAngleDownSmall from "../icons/icon-angle-down-small";
import IconAngleRightSmall from "../icons/icon-angle-right-small";

type AccordionMenuContextProps = {
  expanded: boolean;
  expand: () => void;
  collapse: () => void;
  toggle: () => void;
};

const AccordionMenuContext = React.createContext<AccordionMenuContextProps>({
  expanded: false,
  expand: () => Promise.resolve(),
  collapse: () => Promise.resolve(),
  toggle: () => Promise.resolve(),
});

export type AccordionMenuProps = React.PropsWithChildren<{
  open?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}>;

export default function AccordionMenu(props: AccordionMenuProps) {
  const { open: managedValue, onOpen, onClose, children } = props;

  const { value, openMenu, closeMenu, toggleMenu } = useManagedCollapsableMenu({
    managedValue,
    onOpen,
    onClose,
  });

  return (
    <AccordionMenuContext.Provider
      value={{
        expanded: value,
        expand: openMenu,
        collapse: closeMenu,
        toggle: toggleMenu,
      }}
    >
      {children}
    </AccordionMenuContext.Provider>
  );
}

type AccordionMenuToggleButtonComponentProps<T extends React.ElementType> =
  ButtonProps<T> & Omit<React.ComponentProps<T>, "as">;

export function AccordionMenuToggleButton<
  T extends React.ElementType = "button",
>(props: AccordionMenuToggleButtonComponentProps<T>) {
  const { onClick, trailingIcon, children, ...restProps } = props;
  const { expanded } = React.useContext(AccordionMenuContext);
  const handleClick = useOnClickHandler(onClick as () => void);

  return (
    <Button
      {...({
        ...restProps,
        role: "button",
        onClick: handleClick,
        trailingIcon:
          trailingIcon ??
          (expanded ? <IconAngleDownSmall /> : <IconAngleRightSmall />),
      } as ButtonProps)}
    >
      {children}
    </Button>
  );
}

export function AccordionMenuContent({
  children,
  customClassName,
}: ElementPropsWithChildren) {
  const { expanded } = React.useContext(AccordionMenuContext);

  return (
    <div role="menu" className={clsx("inline-flex", { hidden: !expanded })}>
      <Column customClassName={customClassName}>{children}</Column>
    </div>
  );
}

function useOnClickHandler(handler?: () => void) {
  const { toggle } = React.useContext(AccordionMenuContext);
  return React.useCallback(() => {
    toggle();
    handler && handler();
  }, [handler, toggle]);
}
