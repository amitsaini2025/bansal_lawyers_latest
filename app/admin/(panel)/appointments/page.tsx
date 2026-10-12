import Link from "next/link";
import { Flash, messageOf, Pager, queryHref, StatusPill } from "@/components/admin/AdminBits";
import { listAppointments } from "@/lib/admin/data";
import { formatDate, pageNumber, searchTerm } from "@/lib/admin/labels";

export default async function AppointmentsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string | string[]; page?: string | string[]; notice?: string | string[]; error?: string | string[] }>;
}) {
  const query = await searchParams;
  const q = searchTerm(query.q);
  const page = pageNumber(query.page);
  const result = await listAppointments(q, page);

  return (
    <>
      <h1>Appointment listings</h1>
      <p className="admin-lead">Bookings made on this website, including payment status. Cancelling an appointment frees that time for a new booking.</p>
      <Flash notice={messageOf(query.notice)} error={messageOf(query.error)} />
      <form className="admin-filters" action="/admin/appointments">
        <label>
          Search
          <input name="q" defaultValue={q} placeholder="Name, email, phone or reference" />
        </label>
        <button type="submit">Search</button>
      </form>
      <div className="admin-table-wrap">
        <table>
          <thead>
            <tr>
              <th>Client</th>
              <th>When</th>
              <th>Matter</th>
              <th>Status</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {result.rows.length === 0 ? (
              <tr><td colSpan={5}>No appointments found.</td></tr>
            ) : result.rows.map((row) => (
              <tr key={String(row.id)}>
                <td>
                  <Link href={`/admin/appointments/${row.id}`}>{String(row.full_name || "Unnamed")}</Link>
                  <div>{String(row.email || "")}</div>
                  <div>{String(row.client_unique_id || "")}</div>
                </td>
                <td>{formatDate(row.appt_date)} {String(row.timeslot_full || row.appt_time || "")}</td>
                <td>{String(row.matter_title || "—")}<div>{String(row.service_title || "")}</div></td>
                <td><StatusPill status={Number(row.status)} /></td>
                <td>{String(row.payment_status || "—")}{row.amount != null ? ` · $${row.amount}` : ""}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pager page={result.page} pages={result.pages} hrefFor={(next) => queryHref("/admin/appointments", { q }, next)} />
    </>
  );
}
