import type { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import type { TernaryDarkMode } from "@flowui/react/hooks/use-dark-mode-switch";
import { unsealData } from "iron-session";
import { sessionOptions } from "./session-options";

/**
 * Can be called in page/layout server component to get the latest known color scheme.
 */
export async function getColorScheme(
  cookies: ReadonlyRequestCookies,
): Promise<Exclude<TernaryDarkMode, "system">> {
  const { cookieName, password } = sessionOptions;

  const cookie = cookies.get(cookieName);

  if (!cookie) return "light";

  const { colorScheme } = await unsealData(cookie.value, { password });

  return colorScheme === "dark" ? colorScheme : "light";
}
