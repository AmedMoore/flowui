import type { TernaryDarkMode } from "@flowui/react/hooks/use-dark-mode-switch";

declare module "iron-session" {
  export interface IronSessionData {
    colorScheme?: Exclude<TernaryDarkMode, "system">;
  }
}
