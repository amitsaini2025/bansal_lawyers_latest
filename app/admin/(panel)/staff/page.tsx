import Link from "next/link";
import { Flash, messageOf, Pager, queryHref } from "@/components/admin/AdminBits";
import { listStaff } from "@/lib/admin/data";
import { displayName, formatWhen, pageNumber, searchTerm } from "@/lib/admin/labels";

export default async function StaffPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string | string[]; page?: string | string[]; notice?: string | string[]; error?: string | string[] }>;
}) {
  const query = await searchParams;
  const q = searchTerm(query.q);
  const page = pageNumber(query.page);
  const result = await listStaff(q, page);

  return (
    <>
      <div className="admin-toolbar">
        <div>
          <h1>Staff</h1>
          <p className="admin-lead">People who can sign in. Booking clients are not listed here.</p>
        </div>
        <Link className="admin-link-button" href="/admin/staff/new">Add staff</Link>
      </div>
      <Flash notice={messageOf(query.notice)} error={messageOf(query.error)} />
      <form className="admin-filters" action="/admin/staff">
        <label>
          Search
          <input name="q" defaultValue={q} placeholder="Name or email" />
        </label>
        <button type="submit">Search</button>
      </form>
      <div className="admin-table-wrap">
        <table>
          <thead>
            <tr><th>Name</th><th>Email</th><th>Status</th><th>Created</th></tr>
          </thead>
          <tbody>
            {result.rows.length === 0 ? (
              <tr><td colSpan={4}>No staff accounts found.</td></tr>
            ) : result.rows.map((row) => (
              <tr key={String(row.id)}>
                <td><Link href={`/admin/staff/${row.id}`}>{displayName(row.first_name, row.last_name, String(row.email || "Staff"))}</Link></td>
                <td>{String(row.email || "")}</td>
                <td>{Number(row.status) === 0 ? "Disabled" : "Active"}</td>
                <td>{formatWhen(row.created_at)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pager page={result.page} pages={result.pages} hrefFor={(next) => queryHref("/admin/staff", { q }, next)} />
    </>
  );
}
