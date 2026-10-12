import Link from "next/link";
import { monthAppointments } from "@/lib/admin/data";
import { melbourneToday } from "@/lib/admin/labels";

function shiftMonth(month: string, delta: number) {
  const [year, mon] = month.split("-").map(Number);
  const date = new Date(Date.UTC(year, mon - 1 + delta, 1));
  return `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, "0")}`;
}

export default async function CalendarPage({
  searchParams,
}: {
  searchParams: Promise<{ month?: string | string[] }>;
}) {
  const raw = (await searchParams).month;
  const requested = Array.isArray(raw) ? raw[0] : raw;
  const month = /^\d{4}-\d{2}$/.test(requested ?? "") ? requested! : melbourneToday().slice(0, 7);
  const rows = await monthAppointments(month);
  const [year, mon] = month.split("-").map(Number);
  const first = new Date(Date.UTC(year, mon - 1, 1));
  const daysInMonth = new Date(Date.UTC(year, mon, 0)).getUTCDate();
  const lead = (first.getUTCDay() + 6) % 7;
  const cells: ({ day: number; date: string } | null)[] = [
    ...Array.from({ length: lead }, () => null),
    ...Array.from({ length: daysInMonth }, (_, index) => {
      const day = index + 1;
      return { day, date: `${month}-${String(day).padStart(2, "0")}` };
    }),
  ];
  const byDate = new Map<string, typeof rows>();
  for (const row of rows) {
    const key = String(row.appt_date);
    byDate.set(key, [...(byDate.get(key) ?? []), row]);
  }
  const title = first.toLocaleDateString("en-AU", { month: "long", year: "numeric", timeZone: "UTC" });

  return (
    <>
      <h1>Calendar</h1>
      <p className="admin-lead">Appointments for the month, in Melbourne dates.</p>
      <div className="admin-toolbar">
        <Link className="admin-link-button admin-button--ghost" href={`/admin/calendar?month=${shiftMonth(month, -1)}`}>Previous</Link>
        <strong>{title}</strong>
        <Link className="admin-link-button admin-button--ghost" href={`/admin/calendar?month=${shiftMonth(month, 1)}`}>Next</Link>
      </div>
      <div className="admin-calendar">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((label) => (
          <div key={label} className="admin-calendar__head">{label}</div>
        ))}
        {cells.map((cell, index) => (
          <div key={cell?.date ?? `empty-${index}`} className={cell ? "admin-day" : "admin-day admin-day--muted"}>
            {cell ? (
              <>
                <strong>{cell.day}</strong>
                {(byDate.get(cell.date) ?? []).map((row) => (
                  <Link key={String(row.id)} href={`/admin/appointments/${row.id}`}>
                    {String(row.appt_time || "")} {String(row.full_name || "")}
                  </Link>
                ))}
              </>
            ) : null}
          </div>
        ))}
      </div>
    </>
  );
}
