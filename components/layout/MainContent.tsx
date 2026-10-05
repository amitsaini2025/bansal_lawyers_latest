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
    pathname === "/student-visa-refusal-bias-jaggi-v-minister-2024" ||
    pathname === "/chikweu-v-minister-2024-federal-court-visa-refusal-overturn" ||
    pathname === "/khanal-migration-english-language-requirements-covid-19-case-study" ||
    pathname === "/alsheri-v-minister-2025-importance-of-framing-legal-question";
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
