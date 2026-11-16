import { redirect } from "next/navigation";
import { homeForRole } from "@/lib/admin/access";
import { getCurrentAdmin } from "@/lib/admin/auth";

export default async function AdminIndexPage() {
  const admin = await getCurrentAdmin();
  redirect(admin ? homeForRole(admin.role) : "/admin/login");
}
