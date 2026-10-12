import { Flash, messageOf } from "@/components/admin/AdminBits";
import { ConfirmForm } from "@/components/admin/ConfirmForm";
import { createBlockAction, deleteBlockAction } from "@/lib/admin/actions";
import { listBlocks } from "@/lib/admin/data";
import { formatDate } from "@/lib/admin/labels";

export default async function BookingBlocksPage({
  searchParams,
}: {
  searchParams: Promise<{ notice?: string | string[]; error?: string | string[] }>;
}) {
  const query = await searchParams;
  const blocks = await listBlocks();

  return (
    <>
      <h1>Block time slots</h1>
      <p className="admin-lead">Blocked times are hidden from the public booking calendar. Removing a block makes that time available again.</p>
      <Flash notice={messageOf(query.notice)} error={messageOf(query.error) || blocks.error || undefined} />
      <form action={createBlockAction} className="admin-filters">
        <label>
          Date
          <input name="date" type="date" required />
        </label>
        <label>
          Start
          <input name="start_time" type="time" defaultValue="09:00" />
        </label>
        <label>
          End
          <input name="end_time" type="time" defaultValue="17:00" />
        </label>
        <label>
          Full day
          <select name="full_day" defaultValue="0">
            <option value="0">Selected hours only</option>
            <option value="1">Block the whole day</option>
          </select>
        </label>
        <button type="submit">Block time</button>
      </form>
      <div className="admin-table-wrap">
        <table>
          <thead>
            <tr><th>Date</th><th>Block</th><th></th></tr>
          </thead>
          <tbody>
            {blocks.rows.length === 0 ? (
              <tr><td colSpan={3}>No blocked times yet.</td></tr>
            ) : blocks.rows.map((row) => (
              <tr key={String(row.id)}>
                <td>{formatDate(row.blocked_date)}</td>
                <td>{Number(row.block_all) === 1 ? "Full day" : String(row.slots || "—")}</td>
                <td>
                  <ConfirmForm action={deleteBlockAction} message="Remove this block?">
                    <input type="hidden" name="id" value={String(row.id)} />
                    <button type="submit" className="admin-button--danger">Remove</button>
                  </ConfirmForm>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
