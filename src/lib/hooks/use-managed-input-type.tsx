"use client";

import React from "react";
import { useToggle } from "usehooks-ts";

export default function useManagedInputType(type?: string) {
  const [passwordShown, togglePasswordShown] = useToggle(false);

  const managedType = React.useMemo(() => {
    if (type != "password") return type;
    return passwordShown ? "text" : type;
  }, [passwordShown, type]);

  return { managedType, passwordShown, togglePasswordShown };
}
