"use client";

import React from "react";
import useDarkModeSwitch from "../hooks/use-dark-mode-switch";
import ButtonGroup from "./button-group";
import Button from "./button";
import IconSun from "../icons/icon-sun";
import IconMoon from "../icons/icon-moon";
import IconSystem from "../icons/icon-system";
import { useIsomorphicLayoutEffect } from "usehooks-ts";

export default function DarkModeSwitch() {
  const { mode, setLight, setDark, setSystem } = useDarkModeSwitch();

  const [activeMode, setActiveMode] = React.useState("system");

  useIsomorphicLayoutEffect(() => {
    setActiveMode(mode);
  }, [mode]);

  return (
    <ButtonGroup iconOnly color="secondary">
      <Button
        iconOnly
        circle
        variant={activeMode === "light" ? "flat" : "text"}
        onClick={setLight}
      >
        <IconSun />
      </Button>
      <Button
        iconOnly
        circle
        variant={activeMode === "dark" ? "flat" : "text"}
        onClick={setDark}
      >
        <IconMoon />
      </Button>
      <Button
        iconOnly
        circle
        variant={activeMode === "system" ? "flat" : "text"}
        onClick={setSystem}
      >
        <IconSystem />
      </Button>
    </ButtonGroup>
  );
}
