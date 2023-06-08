"use client";

import { useBoolean } from "usehooks-ts";
import { useCallback } from "react";

/**
 * A dirty hack to disable auto-complete in Chrome browser!
 *
 * This hook returns a value represents the input's readonly
 * property and a callback function that should be triggered
 * whenever the user clicks on the input to set the appropriate
 * readonly value.
 */
export function useReadonlyInput({
  readOnly,
  autoComplete,
}: {
  readOnly?: boolean;
  autoComplete?: string;
}) {
  const { value, setValue } = useBoolean(
      readOnly === true || autoComplete == "off",
    ),
    handleSetValue = useCallback(() => {
      setValue(readOnly === true);
    }, [readOnly, setValue]);

  return [value, handleSetValue] as const;
}
