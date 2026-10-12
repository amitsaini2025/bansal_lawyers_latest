import { saveStaffAction } from "@/lib/admin/actions";

export function StaffFields({
  record,
}: {
  record?: {
    id: number;
    first_name?: string;
    last_name?: string;
    email?: string;
    phone?: string;
    company_name?: string;
    status?: number;
  };
}) {
  return (
    <form action={saveStaffAction} className="admin-form">
      {record ? <input type="hidden" name="id" value={record.id} /> : null}
      <label>
        First name
        <input name="first_name" defaultValue={record?.first_name ?? ""} required />
      </label>
      <label>
        Last name
        <input name="last_name" defaultValue={record?.last_name ?? ""} />
      </label>
      <label>
        Email
        <input name="email" type="email" defaultValue={record?.email ?? ""} required />
      </label>
      <label>
        Phone
        <input name="phone" defaultValue={record?.phone ?? ""} />
      </label>
      <label>
        Company
        <input name="company_name" defaultValue={record?.company_name ?? ""} />
      </label>
      <label>
        Status
        <select name="status" defaultValue={String(record?.status ?? 1) === "0" ? "0" : "1"}>
          <option value="1">Active</option>
          <option value="0">Disabled</option>
        </select>
      </label>
      <label>
        {record ? "New password" : "Password"}
        <input name="password" type="password" autoComplete="new-password" required={!record} minLength={8} />
      </label>
      <label>
        Confirm password
        <input name="password_confirmation" type="password" autoComplete="new-password" />
      </label>
      <button type="submit">{record ? "Save staff account" : "Create staff account"}</button>
    </form>
  );
}
