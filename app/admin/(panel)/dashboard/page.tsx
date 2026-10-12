import Link from "next/link";
import { Flash, messageOf, StatusPill } from "@/components/admin/AdminBits";
import { dashboardSnapshot } from "@/lib/admin/data";
import { AdminDatabaseError } from "@/lib/admin/db";
import { formatDate, formatWhen } from "@/lib/admin/labels";

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ notice?: string | string[]; error?: string | string[] }>;
}) {
  const query = await searchParams;
  let data: Awaited<ReturnType<typeof dashboardSnapshot>> | null = null;
  let problem: string | null = null;
  try {
    data = await dashboardSnapshot();
  } catch (error) {
    problem = error instanceof AdminDatabaseError ? error.message : "The admin could not read the database.";
    console.error("[Admin dashboard]", error);
  }

  return (
    <>
      <h1>Dashboard</h1>
      <p className="admin-lead">Appointments, enquiries and the records from the previous admin, in one place.</p>
      <Flash notice={messageOf(query.notice)} error={messageOf(query.error) || problem || undefined} />
      {data ? (
        <>
          <section className="admin-cards">
            <article className="admin-card"><span>Appointments today</span><strong>{data.appointments.today}</strong></article>
            <article className="admin-card"><span>Upcoming appointments</span><strong>{data.appointments.upcoming}</strong></article>
            <article className="admin-card"><span>Unread enquiries</span><strong>{data.contacts.unread}</strong></article>
            <article className="admin-card"><span>Enquiries today</span><strong>{data.contacts.today}</strong></article>
            <article className="admin-card"><span>Published blogs</span><strong>{data.blogs.published}</strong></article>
            <article className="admin-card"><span>Future blocked days</span><strong>{data.blocks}</strong></article>
          </section>
          <div className="admin-split">
            <section className="admin-panel" style={{ flex: 1 }}>
              <h2>Latest appointments</h2>
              <ul>
                {data.recentAppointments.map((row) => (
                  <li key={String(row.id)}>
                    <Link href={`/admin/appointments/${row.id}`}>{String(row.full_name || "Unnamed")}</Link>
                    {" "}
                    {formatDate(row.appt_date)} {String(row.appt_time || "")} <StatusPill status={Number(row.status)} />
                  </li>
                ))}
              </ul>
            </section>
            <section className="admin-panel" style={{ flex: 1 }}>
              <h2>Latest enquiries</h2>
              <ul>
                {data.recentContacts.map((row) => (
                  <li key={String(row.id)}>
                    <Link href={`/admin/contacts/${row.id}`}>{String(row.name || "Unnamed")}</Link>
                    {" — "}
                    {String(row.subject || "No subject")} ({formatWhen(row.created_at)})
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </>
      ) : null}
    </>
  );
}
