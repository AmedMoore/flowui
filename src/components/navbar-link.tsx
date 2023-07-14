"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { Link } from "@flowui/react/basic";
import clsx from "clsx";

export type NavbarLinkProps = {
  label: string;
  href: string;
};

export function NavbarLink({ label, href }: NavbarLinkProps) {
  const pathname = usePathname();

  const active = useMemo(() => {
    return pathname.startsWith(href);
  }, [href, pathname]);

  return (
    <Link href={href} size="sm">
      <span
        className={clsx("transition-all", {
          "text-basic-900 dark:text-basic-100": active,
          "text-basic-500 hover:text-basic-900": !active,
          "dark:text-basic-400 dark:hover:text-basic-50": !active,
        })}
      >
        {label}
      </span>
    </Link>
  );
}
