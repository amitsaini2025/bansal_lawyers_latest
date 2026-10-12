import Link from "next/link";
import { notFound } from "next/navigation";
import { Flash, messageOf, StatusPill } from "@/components/admin/AdminBits";
import { updateAppointmentStatusAction } from "@/lib/admin/actions";
import { getAppointment } from "@/lib/admin/data";
import { APPOINTMENT_STATUSES, formatDate, formatWhen, positiveId } from "@/lib/admin/labels";

export default async function AppointmentPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ notice?: string | string[]; error?: string | string[] }>;
}) {
  const { id: rawId } = await params;
  const id = positiveId(rawId);
  if (!id) notFound();
  const appointment = await getAppointment(id);
  if (!appointment) notFound();
  const query = await searchParams;

  return (
    <>
      <p><Link href="/admin/appointments">Back to listings</Link></p>
      <h1>{String(appointment.full_name || "Appointment")}</h1>
      <Flash notice={messageOf(query.notice)} error={messageOf(query.error)} />
      <p><StatusPill status={Number(appointment.status)} /></p>
      <section className="admin-panel">
        <p><strong>When:</strong> {formatDate(appointment.appt_date)} {String(appointment.timeslot_full || appointment.appt_time || "")}</p>
        <p><strong>Email:</strong> {String(appointment.email || "—")}</p>
        <p><strong>Phone:</strong> {String(appointment.phone || "—")}</p>
        <p><strong>Reference:</strong> {String(appointment.client_unique_id || "—")}</p>
        <p><strong>Matter:</strong> {String(appointment.matter_title || "—")}</p>
        <p><strong>Service:</strong> {String(appointment.service_title || "—")}{appointment.duration ? ` (${appointment.duration} min)` : ""}</p>
        <p><strong>Consultation:</strong> {String(appointment.appointment_details || "—")}</p>
        <p><strong>Payment:</strong> {String(appointment.payment_status || "—")} {appointment.amount != null ? `· $${appointment.amount}` : ""} {appointment.payment_type ? `· ${appointment.payment_type}` : ""}</p>
        <p><strong>Booked:</strong> {formatWhen(appointment.created_at)}</p>
        <p><strong>Details</strong></p>
        <p style={{ whiteSpace: "pre-wrap" }}>{String(appointment.description || "—")}</p>
      </section>
      <form action={updateAppointmentStatusAction} className="admin-filters">
        <input type="hidden" name="id" value={id} />
        <label>
          Update status
          <select name="status" defaultValue={String(appointment.status ?? 0)}>
            {APPOINTMENT_STATUSES.map((status) => (
              <option key={status.value} value={status.value}>{status.label}</option>
            ))}
          </select>
        </label>
        <button type="submit">Save status</button>
      </form>
    </>
  );
}
