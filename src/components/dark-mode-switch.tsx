"use client";

import Switch from "@flowui/react/basic/dark-mode-switch";
import { useDarkModeSwitch } from "@flowui/react/hooks";
import { useLayoutEffect } from "react";

export function DarkModeSwitch({
  lastKnownColorScheme,
}: {
  lastKnownColorScheme: string;
}) {
  useStoredColorScheme(lastKnownColorScheme);

  return <Switch />;
}

function useStoredColorScheme(lastKnownColorScheme: string) {
  const { isDarkMode } = useDarkModeSwitch();

  useLayoutEffect(() => {
    const colorScheme = isDarkMode ? "dark" : "light";
    if (colorScheme == lastKnownColorScheme) return;
    fetch("/api/color-scheme", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ colorScheme }),
    }).then((res) => {
      res.json().then((body) => {
        console.log(body);
      });
    });
  }, [isDarkMode, lastKnownColorScheme]);
}
