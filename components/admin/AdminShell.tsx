"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import type { StaffRole } from "@/lib/admin/access";
import { logoutAction } from "@/lib/admin/actions";

const links = [
  { href: "/admin/dashboard", label: "Dashboard", writer: false },
  { href: "/admin/appointments", label: "Appointment listings", writer: false },
  { href: "/admin/calendar", label: "Calendar", writer: false },
  { href: "/admin/booking-blocks", label: "Block time slots", writer: false },
  { href: "/admin/blog-categories", label: "Blog categories", writer: false },
  { href: "/admin/blogs", label: "Blog posts", writer: true },
  { href: "/admin/success-stories", label: "Success stories", writer: true },
  { href: "/admin/contacts", label: "Contact management", writer: false },
];

export function AdminShell({ name, role, children }: { name: string; role: StaffRole; children: ReactNode }) {
  const pathname = usePathname();
  const visible = links.filter((link) => role === "admin" || link.writer);
  const home = role === "writer" ? "/admin/blogs" : "/admin/dashboard";

  return (
    <div className="admin-app">
      <aside className="admin-side">
        <div className="admin-brand">
          <Link href={home}>Bansal Lawyers</Link>
          <span>{role === "writer" ? "Content" : "Staff admin"}</span>
        </div>
        <nav>
          {visible.map((link) => {
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
