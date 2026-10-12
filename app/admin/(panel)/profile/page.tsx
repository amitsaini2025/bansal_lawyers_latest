import { Flash, messageOf } from "@/components/admin/AdminBits";
import { saveProfileAction } from "@/lib/admin/actions";
import { requireAdmin } from "@/lib/admin/auth";

export default async function ProfilePage({
  searchParams,
}: {
  searchParams: Promise<{ notice?: string | string[]; error?: string | string[] }>;
}) {
  const admin = await requireAdmin();
  const query = await searchParams;

  return (
    <>
      <h1>My profile</h1>
      <Flash notice={messageOf(query.notice)} error={messageOf(query.error)} />
      <form action={saveProfileAction} className="admin-form">
        <label>
          First name
          <input name="first_name" defaultValue={admin.firstName} required />
        </label>
        <label>
          Last name
          <input name="last_name" defaultValue={admin.lastName} />
        </label>
        <label>
          Email
          <input value={admin.email} disabled />
        </label>
        <label>
          Phone
          <input name="phone" defaultValue={admin.phone} />
        </label>
        <label>
          New password
          <input name="password" type="password" autoComplete="new-password" />
        </label>
        <label>
          Confirm new password
          <input name="password_confirmation" type="password" autoComplete="new-password" />
        </label>
        <button type="submit">Save profile</button>
      </form>
    </>
  );
}
