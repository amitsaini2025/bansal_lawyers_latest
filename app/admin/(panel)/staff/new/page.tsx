import Link from "next/link";
import { Flash, messageOf } from "@/components/admin/AdminBits";
import { StaffFields } from "@/components/admin/StaffFields";

export default async function NewStaffPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string | string[] }>;
}) {
  const error = messageOf((await searchParams).error);
  return (
    <>
      <p><Link href="/admin/staff">Back to staff</Link></p>
      <h1>New staff account</h1>
      <Flash error={error} />
      <StaffFields />
    </>
  );
}
