import React from "react";

export type ElementProps<Props = unknown> = {
  id?: string;
  role?: React.AriaRole;
  tabIndex?: -1 | 0;
  title?: string;
  customClassName?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onDoubleClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onMouseEnter?: (event: React.MouseEvent<HTMLElement>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLElement>) => void;
  onMouseMove?: (event: React.MouseEvent<HTMLElement>) => void;
  style?: React.CSSProperties;
} & Props;

export type ElementPropsWithChildren<Props = unknown> = React.PropsWithChildren<
  ElementProps<Props>
>;
