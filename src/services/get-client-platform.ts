import type { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers";
import Bowser from "bowser";

export enum Platform {
  Win32 = "WINDOWS",
  Darwin = "MACOS",
  Unknown = "UNKNOWN",
}

export function isValidPlatform(name: unknown): name is Platform {
  return (Object.values(Platform) as unknown[]).includes(name);
}

/**
 * Can be called in page/layout server component to get the client's platform.
 */
export function getClientPlatform(headers: ReadonlyHeaders): Platform {
  const userAgent = headers.get("user-agent");
  if (!userAgent) return Platform.Unknown;
  const browser = Bowser.parse(userAgent);
  const osName = browser.os.name?.toUpperCase();
  return isValidPlatform(osName) ? osName : Platform.Unknown;
}
