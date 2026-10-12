import Link from "next/link";
import { notFound } from "next/navigation";
import { Flash, messageOf } from "@/components/admin/AdminBits";
import { ConfirmForm } from "@/components/admin/ConfirmForm";
import { deleteContactAction, forwardContactAction, updateContactStatusAction } from "@/lib/admin/actions";
import { getContact, markContactRead } from "@/lib/admin/data";
import { CONTACT_STATUSES, formatWhen, positiveId } from "@/lib/admin/labels";

export default async function ContactPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ notice?: string | string[]; error?: string | string[] }>;
}) {
  const id = positiveId((await params).id);
  if (!id) notFound();
  const contact = await getContact(id);
  if (!contact) notFound();
  if (contact.status == null || contact.status === "" || contact.status === "unread") await markContactRead(id);
  const query = await searchParams;

  return (
    <>
      <p><Link href="/admin/contacts">Back to enquiries</Link></p>
      <h1>{String(contact.subject || "Enquiry")}</h1>
      <Flash notice={messageOf(query.notice)} error={messageOf(query.error)} />
      <section className="admin-panel">
        <p><strong>Name:</strong> {String(contact.name || "—")}</p>
        <p><strong>Email:</strong> {String(contact.contact_email || "—")}</p>
        <p><strong>Phone:</strong> {String(contact.contact_phone || "—")}</p>
        <p><strong>Department:</strong> {String(contact.department || "—")}</p>
        <p><strong>Received:</strong> {formatWhen(contact.created_at)}</p>
        {contact.forwarded_at ? <p><strong>Forwarded:</strong> {formatWhen(contact.forwarded_at)} to {String(contact.forwarded_to || "")}</p> : null}
        <p style={{ whiteSpace: "pre-wrap" }}>{String(contact.message || "")}</p>
      </section>
      <div className="admin-split">
        <form action={updateContactStatusAction} className="admin-filters">
          <input type="hidden" name="id" value={id} />
          <label>
            Status
            <select name="status" defaultValue={String(contact.status || "read")}>
              {CONTACT_STATUSES.map((status) => <option key={status} value={status}>{status}</option>)}
            </select>
          </label>
          <button type="submit">Save status</button>
        </form>
        <form action={forwardContactAction}>
          <input type="hidden" name="id" value={id} />
          <button type="submit" className="admin-button--ghost">Forward to firm inbox</button>
        </form>
        <ConfirmForm action={deleteContactAction} message="Delete this enquiry?">
          <input type="hidden" name="id" value={id} />
          <button type="submit" className="admin-button--danger">Delete</button>
        </ConfirmForm>
      </div>
    </>
  );
}
