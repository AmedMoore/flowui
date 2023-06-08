import React from "react";
import { useTernaryDarkMode } from "usehooks-ts";

export type TernaryDarkMode = "system" | "dark" | "light";

export default function useDarkModeSwitch() {
  const { isDarkMode, ternaryDarkMode, setTernaryDarkMode } =
    useTernaryDarkMode();

  const applyDarkMode = React.useCallback(() => {
    if (!document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const applyLightMode = React.useCallback(() => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  React.useLayoutEffect(() => {
    if (ternaryDarkMode == "system") {
      if (isDarkMode) {
        applyDarkMode();
      } else {
        applyLightMode();
      }
    } else if (ternaryDarkMode == "dark") {
      applyDarkMode();
    } else if (ternaryDarkMode == "light") {
      applyLightMode();
    }
  }, [ternaryDarkMode, isDarkMode, applyDarkMode, applyLightMode]);

  const setLight = React.useCallback(() => {
    setTernaryDarkMode("light");
  }, [setTernaryDarkMode]);

  const setDark = React.useCallback(() => {
    setTernaryDarkMode("dark");
  }, [setTernaryDarkMode]);

  const setSystem = React.useCallback(() => {
    setTernaryDarkMode("system");
  }, [setTernaryDarkMode]);

  return {
    mode: ternaryDarkMode,
    setLight,
    setDark,
    setSystem,
  };
}
