"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

// Keep deferred editorial pages on their existing presentation.
export function MainContent({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const deferred =
    pathname === "/blog" || pathname.startsWith("/blog/") ||
    pathname.startsWith("/legal/") ||
    pathname === "/recent-cases" ||
    pathname.startsWith("/recent-cases/") ||
    pathname === "/thakur-v-minister-for-immigration-2025-student-visa" ||
    pathname === "/student-visa-refusal-bias-jaggi-v-minister-2024";
  const page = deferred ? "deferred" : pathname === "/" ? "home" :
    pathname === "/about" ? "about" : pathname === "/contact" ? "contact" : "service";

  return (
    <main id="main-content" tabIndex={-1}
      className={deferred ? "site-main" : "site-main site-main--refined"}
      data-page={page}>
      {children}
    </main>
  );
}
