import React from "react";

export type ElementType<Props, Element extends HTMLElement> = (
  props: React.PropsWithRef<Props & { ref?: React.ForwardedRef<Element> }>,
) => JSX.Element;
