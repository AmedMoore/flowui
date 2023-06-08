"use client";

import React from "react";
import clsx from "clsx";
import { useDebounce } from "usehooks-ts";

import type Color from "../types/color";
import styles from "./use-ripple.module.scss";

export type RippleOptions = {
  enabled?: boolean;
  color?: Color;
};

/**
 * This hook accepts a ref to any element and adds a click
 * event handler that creates ripples on click.
 */
export default function useRipple<T extends HTMLElement>(
  ref: React.RefObject<T> | React.ForwardedRef<T>,
  options?: RippleOptions,
) {
  const [ripples, setRipples] = React.useState<React.CSSProperties[]>([]);

  React.useEffect(() => {
    const elem: HTMLElement | null = isRefObject(ref) ? ref.current : null;

    if (!elem) return;

    const clickHandler = (e: MouseEvent) => {
      if (options?.enabled === false) return;
      const rect = elem.getBoundingClientRect();
      const height = elem.clientHeight;
      const width = elem.clientWidth;
      const diameter = Math.max(width, height);
      setRipples([
        ...ripples,
        {
          top: e.clientY - rect.top - diameter / 2,
          left: e.clientX - rect.left - diameter / 2,
          height: Math.max(width, height),
          width: Math.max(width, height),
        },
      ]);
    };

    elem.addEventListener("click", clickHandler);

    return () => {
      elem.removeEventListener("click", clickHandler);
    };
  }, [options, ref, ripples]);

  const _debounced = useDebounce(ripples, 1000);

  React.useEffect(() => {
    if (_debounced.length) {
      setRipples([]);
    }
  }, [_debounced.length]);

  return ripples?.map((style, i) => (
    <span
      key={i}
      className={clsx(styles.ripple, styles[options?.color ?? "primary"])}
      style={{
        ...style,
        transform: "scale(0)",
      }}
    />
  ));
}

function isRefObject<T extends HTMLElement>(
  ref: unknown,
): ref is React.RefObject<T> {
  return !!ref && !!(ref as Record<string, unknown>).current;
}
