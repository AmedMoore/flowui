import type { AriaRole, PropsWithChildren } from "react";

export type ElementProps<Props = unknown> = {
  id?: string;
  role?: AriaRole;
  tabIndex?: -1 | 0;
  title?: string;
  customClassName?: string;
  onClick?: () => void;
  onDoubleClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
} & Props;

export type ElementPropsWithChildren<Props = unknown> = PropsWithChildren<
  ElementProps<Props>
>;
