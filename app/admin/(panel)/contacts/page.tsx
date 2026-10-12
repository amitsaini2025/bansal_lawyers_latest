import Link from "next/link";
import { Flash, messageOf, Pager, queryHref } from "@/components/admin/AdminBits";
import { contactStats, listContacts } from "@/lib/admin/data";
import { CONTACT_STATUSES, formatWhen, pageNumber, searchTerm } from "@/lib/admin/labels";

export default async function ContactsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string | string[]; status?: string | string[]; page?: string | string[]; notice?: string | string[]; error?: string | string[] }>;
}) {
  const query = await searchParams;
  const q = searchTerm(query.q);
  const status = searchTerm(query.status);
  const page = pageNumber(query.page);
  const [result, stats] = await Promise.all([listContacts(q, status, page), contactStats()]);
  const filters = { q, status };

  return (
    <>
      <h1>Contact management</h1>
      <p className="admin-lead">Enquiries sent from the website contact form.</p>
      <Flash notice={messageOf(query.notice)} error={messageOf(query.error)} />
      <section className="admin-cards">
        <article className="admin-card"><span>Total</span><strong>{stats.total}</strong></article>
        <article className="admin-card"><span>Unread</span><strong>{stats.unread}</strong></article>
        <article className="admin-card"><span>Forwarded</span><strong>{stats.forwarded}</strong></article>
        <article className="admin-card"><span>Today</span><strong>{stats.today}</strong></article>
      </section>
      <form className="admin-filters" action="/admin/contacts">
        <label>
          Search
          <input name="q" defaultValue={q} placeholder="Name, email, phone or subject" />
        </label>
        <label>
          Status
          <select name="status" defaultValue={status}>
            <option value="">All</option>
            {CONTACT_STATUSES.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </label>
        <button type="submit">Filter</button>
        <Link className="admin-link-button admin-button--ghost" href={`/admin/contacts/export${q || status ? `?${new URLSearchParams({ ...(q ? { q } : {}), ...(status ? { status } : {}) })}` : ""}`}>Export CSV</Link>
      </form>
      <div className="admin-table-wrap">
        <table>
          <thead>
            <tr><th>Name</th><th>Subject</th><th>Department</th><th>Status</th><th>Received</th></tr>
          </thead>
          <tbody>
            {result.rows.length === 0 ? (
              <tr><td colSpan={5}>No enquiries found.</td></tr>
            ) : result.rows.map((row) => (
              <tr key={String(row.id)}>
                <td>
                  <Link href={`/admin/contacts/${row.id}`}>{String(row.name || "Unnamed")}</Link>
                  <div>{String(row.contact_email || "")}</div>
                </td>
                <td>{String(row.subject || "—")}</td>
                <td>{String(row.department || "—")}</td>
                <td>{String(row.status || "unread")}</td>
                <td>{formatWhen(row.created_at)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pager page={result.page} pages={result.pages} hrefFor={(next) => queryHref("/admin/contacts", filters, next)} />
    </>
  );
}
