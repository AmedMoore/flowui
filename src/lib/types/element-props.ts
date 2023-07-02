import type {
  AriaRole,
  CSSProperties,
  MouseEvent,
  PropsWithChildren,
} from "react";

export type ElementProps<Props = unknown> = {
  id?: string;
  role?: AriaRole;
  tabIndex?: -1 | 0;
  title?: string;
  customClassName?: string;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  onDoubleClick?: (event: MouseEvent<HTMLElement>) => void;
  onMouseEnter?: (event: MouseEvent<HTMLElement>) => void;
  onMouseLeave?: (event: MouseEvent<HTMLElement>) => void;
  onMouseMove?: (event: MouseEvent<HTMLElement>) => void;
  style?: CSSProperties;
} & Props;

export type ElementPropsWithChildren<Props = unknown> = PropsWithChildren<
  ElementProps<Props>
>;
