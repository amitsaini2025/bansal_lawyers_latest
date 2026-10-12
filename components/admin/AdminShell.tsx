"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { logoutAction } from "@/lib/admin/actions";

const links = [
  { href: "/admin/dashboard", label: "Dashboard" },
  { href: "/admin/appointments", label: "Appointment listings" },
  { href: "/admin/calendar", label: "Calendar" },
  { href: "/admin/booking-blocks", label: "Block time slots" },
  { href: "/admin/blog-categories", label: "Blog categories" },
  { href: "/admin/blogs", label: "Blog posts" },
  { href: "/admin/pages", label: "CMS pages" },
  { href: "/admin/cases", label: "Case studies" },
  { href: "/admin/contacts", label: "Contact management" },
  { href: "/admin/staff", label: "Staff" },
  { href: "/admin/profile", label: "My profile" },
];

export function AdminShell({ name, children }: { name: string; children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="admin-app">
      <aside className="admin-side">
        <div className="admin-brand">
          <Link href="/admin/dashboard">Bansal Lawyers</Link>
          <span>Staff admin</span>
        </div>
        <nav>
          {links.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link key={link.href} href={link.href} className={active ? "is-active" : undefined}>
                {link.label}
              </Link>
            );
          })}
        </nav>
        <form action={logoutAction}>
          <button type="submit">Log out</button>
        </form>
        <p className="admin-user">{name}</p>
      </aside>
      <div className="admin-main">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <div id="main-content">{children}</div>
      </div>
    </div>
  );
}
