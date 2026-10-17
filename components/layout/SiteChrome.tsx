"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { BookingChat } from "@/components/chat/BookingChat";
import { MainContent } from "@/components/layout/MainContent";

export function SiteChrome({
  header,
  footer,
  children,
  turnstileSiteKey = null,
}: {
  header: ReactNode;
  footer: ReactNode;
  children: ReactNode;
  turnstileSiteKey?: string | null;
}) {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return children;

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      {header}
      <MainContent>{children}</MainContent>
      {footer}
      <BookingChat turnstileSiteKey={turnstileSiteKey} />
    </>
  );
}
