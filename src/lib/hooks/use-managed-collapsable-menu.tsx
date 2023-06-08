"use client";

import React from "react";
import { useBoolean } from "usehooks-ts";

export default function useManagedCollapsableMenu({
  managedValue,
  onOpen,
  onClose,
}: {
  managedValue?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}) {
  const { value, toggle, setTrue, setFalse, setValue } =
    useBoolean(managedValue);

  React.useLayoutEffect(() => {
    if (typeof managedValue !== "undefined") {
      setValue(managedValue);
    }
  }, [managedValue, setValue]);

  const openMenu = React.useCallback(() => {
    setTrue();
    if (onOpen) {
      onOpen();
    }
  }, [setTrue, onOpen]);

  const closeMenu = React.useCallback(() => {
    setFalse();
    if (onClose) {
      onClose();
    }
  }, [setFalse, onClose]);

  const toggleMenu = React.useCallback(() => {
    const wasOpen = value;
    toggle();
    if (!wasOpen && onOpen) {
      onOpen();
    }
    if (wasOpen && onClose) {
      onClose();
    }
  }, [value, toggle, onOpen, onClose]);

  return { value, openMenu, closeMenu, toggleMenu };
}
