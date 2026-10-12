import { AdminShell } from "@/components/admin/AdminShell";
import { requireAdmin } from "@/lib/admin/auth";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export default async function PanelLayout({ children }: { children: React.ReactNode }) {
  const admin = await requireAdmin();
  const name = [admin.firstName, admin.lastName].filter(Boolean).join(" ") || admin.email;
  return <AdminShell name={name}>{children}</AdminShell>;
}
