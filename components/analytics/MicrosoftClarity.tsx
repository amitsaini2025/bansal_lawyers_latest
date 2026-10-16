"use client";

import Clarity from "@microsoft/clarity";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const projectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID?.trim() ?? "";

/** Paths where session replay should not run. */
const EXCLUDED_PREFIXES = [
  "/admin",
  "/contact",
  "/book-an-appointment",
] as const;

function isExcludedPath(pathname: string) {
  return EXCLUDED_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

export function MicrosoftClarity() {
  const pathname = usePathname();
  const initialized = useRef(false);

  useEffect(() => {
    if (!projectId || isExcludedPath(pathname) || initialized.current) return;

    Clarity.init(projectId);
    initialized.current = true;
  }, [pathname]);

  return null;
}
