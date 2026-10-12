import { AdminShell } from "@/components/admin/AdminShell";
import { requireAdmin } from "@/lib/admin/auth";
import { displayName } from "@/lib/admin/labels";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export default async function PanelLayout({ children }: { children: React.ReactNode }) {
  const admin = await requireAdmin();
  const name = displayName(admin.firstName, admin.lastName, admin.email);
  return <AdminShell name={name}>{children}</AdminShell>;
}
