import Link from "next/link";
import { notFound } from "next/navigation";
import { Flash, messageOf } from "@/components/admin/AdminBits";
import { getStaff } from "@/lib/admin/data";
import { positiveId } from "@/lib/admin/labels";
import { StaffFields } from "@/components/admin/StaffFields";

export default async function EditStaffPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ notice?: string | string[]; error?: string | string[] }>;
}) {
  const id = positiveId((await params).id);
  if (!id) notFound();
  const staff = await getStaff(id);
  if (!staff) notFound();
  const query = await searchParams;

  return (
    <>
      <p><Link href="/admin/staff">Back to staff</Link></p>
      <h1>Edit staff account</h1>
      <Flash notice={messageOf(query.notice)} error={messageOf(query.error)} />
      <StaffFields
        record={{
          id,
          first_name: String(staff.first_name ?? ""),
          last_name: String(staff.last_name ?? ""),
          email: String(staff.email ?? ""),
          phone: String(staff.phone ?? ""),
          company_name: String(staff.company_name ?? ""),
          status: Number(staff.status ?? 1),
        }}
      />
    </>
  );
}
