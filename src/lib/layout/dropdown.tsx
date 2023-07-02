"use client";

import React from "react";
import clsx from "clsx";
import { useIsomorphicLayoutEffect, useOnClickOutside } from "usehooks-ts";
import useManagedCollapsableMenu from "../hooks/use-managed-collapsable-menu";
import type { ElementPropsWithChildren } from "../types/element-props";
import Button, { type ButtonProps } from "../basic/button";
import Column from "./column";
import Card from "./card";
import styles from "./dropdown.module.scss";

type DropdownContextProps = {
  isOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
  toggleMenu: () => void;
  toggleButtonRef?: React.RefObject<HTMLButtonElement>;
  anchorRef?: React.RefObject<HTMLElement>;
};

const DropdownContext = React.createContext<DropdownContextProps>({
  isOpen: false,
  openMenu: () => Promise.resolve(),
  closeMenu: () => Promise.resolve(),
  toggleMenu: () => Promise.resolve(),
});

export type DropdownProps = React.PropsWithChildren<{
  open?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  closeOnClickOutside?: boolean;
  containerRef?: React.RefObject<HTMLElement>;
  anchorRef?: React.RefObject<HTMLElement>;
}>;

export default function Dropdown(props: DropdownProps) {
  const {
    open: managedValue,
    onOpen,
    onClose,
    closeOnClickOutside = true,
    containerRef,
    anchorRef,
    children,
  } = props;

  const toggleButtonRef = React.useRef<HTMLButtonElement>(null);
  const menuRef = React.useRef<HTMLDivElement>(null);

  const { value, openMenu, closeMenu, toggleMenu } = useManagedCollapsableMenu({
    managedValue,
    onOpen,
    onClose,
  });

  useOnClickOutside(containerRef ?? menuRef, () => {
    if (closeOnClickOutside) {
      closeMenu();
    }
  });

  return (
    <DropdownContext.Provider
      value={{
        isOpen: value,
        openMenu,
        closeMenu,
        toggleMenu,
        anchorRef,
        toggleButtonRef,
      }}
    >
      <div ref={menuRef}>{children}</div>
    </DropdownContext.Provider>
  );
}

type DropdownToggleButtonComponentProps<T extends React.ElementType> =
  ButtonProps<T> & Omit<React.ComponentProps<T>, "as">;

export function DropdownToggleButton<T extends React.ElementType = "button">(
  props: DropdownToggleButtonComponentProps<T>,
) {
  const { onClick, children, ...restProps } = props;
  const { toggleButtonRef } = React.useContext(DropdownContext);
  const handleClick = useOnClickHandler({
    toggleMenuOnClick: true,
    handler: onClick as () => void,
  });

  return (
    <Button
      {...({
        ...restProps,
        role: "button",
        ref: toggleButtonRef,
        onClick: handleClick,
      } as ButtonProps)}
    >
      {children}
    </Button>
  );
}

// Margin size between the window corner and the dropdown menu.
const dropdownWindowCornerMargin = 10;

// Margin size between the dropdown menu and the toggle button.
const dropdownToggleButtonMargin = 15;

export function DropdownMenu({
  align = "center",
  children,
  customClassName,
}: ElementPropsWithChildren<{
  align?: "left" | "center" | "right";
}>) {
  const { isOpen, anchorRef, toggleButtonRef } =
    React.useContext(DropdownContext);
  const [position, setPosition] = React.useState<number[]>([]);
  const menuRef = React.useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (!isOpen) return;

    const anchorRect =
      anchorRef?.current?.getBoundingClientRect() ??
      toggleButtonRef?.current?.getBoundingClientRect();
    const menuRect = menuRef.current?.getBoundingClientRect();

    if (!anchorRect) return;
    if (!menuRect) return;

    // center align by default
    let x = anchorRect.left + anchorRect.width / 2 - menuRect.width / 2;

    if (align === "left") {
      x = anchorRect.left;
    }

    if (align === "right") {
      x = anchorRect.right - menuRect.width;
    }

    // fix menu overflow over the window's right corner
    const left = x - dropdownWindowCornerMargin;
    if (left < 0) {
      x = anchorRect.left;
    }

    // fix menu overflow over the window's left corner
    const right = x + menuRect.width + dropdownWindowCornerMargin;
    if (right > window.innerWidth) {
      x = anchorRect.right - menuRect.width;
    }

    let y = anchorRect.bottom + dropdownToggleButtonMargin;
    const bottom = y + menuRect.height + dropdownWindowCornerMargin;
    if (bottom > window.innerHeight) {
      y = anchorRect.top - menuRect.height - dropdownToggleButtonMargin;
    }

    setPosition([Math.floor(x), Math.floor(y)]);
  }, [isOpen, anchorRef]);

  if (!isOpen) return null;

  return (
    <div
      className={styles.dropdownMenu}
      style={{ left: position[0], top: position[1] }}
    >
      <Card
        ref={menuRef}
        role="menu"
        shadow="3"
        customClassName={clsx(styles.card, customClassName)}
      >
        <Column>{children}</Column>
      </Card>
    </div>
  );
}

type DropdownMenuItemComponentProps<T extends React.ElementType> =
  ButtonProps<T> &
    Omit<React.ComponentProps<T>, "as"> & { toggleMenuOnClick?: boolean };

export function DropdownMenuItem<T extends React.ElementType = "button">(
  props: DropdownMenuItemComponentProps<T>,
) {
  const { toggleMenuOnClick, onClick, children, ...restProps } = props;

  const handleClick = useOnClickHandler({
    toggleMenuOnClick,
    handler: onClick as () => void,
  });

  return (
    <Button
      {...({
        ...restProps,
        role: "menuitem",
        width: "full",
        variant: "text",
        onClick: handleClick,
      } as ButtonProps)}
    >
      {children}
    </Button>
  );
}

function useOnClickHandler({
  toggleMenuOnClick,
  handler,
}: {
  toggleMenuOnClick?: boolean;
  handler?: () => void;
}) {
  const { toggleMenu } = React.useContext(DropdownContext);
  return React.useCallback(() => {
    if (toggleMenuOnClick) toggleMenu();
    if (handler) handler();
  }, [toggleMenuOnClick, handler, toggleMenu]);
}
