import Link from "next/link";
import { appointmentStatus } from "@/lib/admin/labels";

export function Flash({ notice, error }: { notice?: string; error?: string }) {
  if (notice) return <p className="admin-flash admin-flash--ok">{notice}</p>;
  if (error) return <p className="admin-flash admin-flash--bad">{error}</p>;
  return null;
}

export function Pager({ page, pages, hrefFor }: { page: number; pages: number; hrefFor: (page: number) => string }) {
  if (pages <= 1) return null;
  return (
    <nav className="admin-pager" aria-label="Pages">
      {page > 1 ? <Link href={hrefFor(page - 1)}>Previous</Link> : <span>Previous</span>}
      <span>
        Page {page} of {pages}
      </span>
      {page < pages ? <Link href={hrefFor(page + 1)}>Next</Link> : <span>Next</span>}
    </nav>
  );
}

export function StatusPill({ status }: { status: number | null | undefined }) {
  const item = appointmentStatus(status);
  return <span className={`admin-pill admin-pill--${item.tone}`}>{item.label}</span>;
}

export function queryHref(path: string, params: Record<string, string | undefined>, page: number) {
  const search = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value) search.set(key, value);
  }
  if (page > 1) search.set("page", String(page));
  const query = search.toString();
  return query ? `${path}?${query}` : path;
}

export function messageOf(value: string | string[] | undefined) {
  const raw = Array.isArray(value) ? value[0] : value;
  return raw?.slice(0, 240);
}
