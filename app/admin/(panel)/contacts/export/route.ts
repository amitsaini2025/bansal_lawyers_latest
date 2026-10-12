import { NextResponse } from "next/server";
import { getCurrentAdmin } from "@/lib/admin/auth";
import { exportContacts } from "@/lib/admin/data";
import { searchTerm } from "@/lib/admin/labels";

function cell(value: unknown) {
  return `"${String(value ?? "").replace(/"/g, '""')}"`;
}

export async function GET(request: Request) {
  const admin = await getCurrentAdmin();
  if (!admin) return new NextResponse("Sign in required", { status: 401 });

  const url = new URL(request.url);
  const result = await exportContacts(searchTerm(url.searchParams.get("q") ?? ""), searchTerm(url.searchParams.get("status") ?? ""));
  const header = ["Name", "Email", "Phone", "Department", "Subject", "Status", "Received"];
  const lines = [header.join(",")];
  for (const row of result) {
    lines.push([
      row.name,
      row.contact_email,
      row.contact_phone,
      row.department,
      row.subject,
      row.status,
      row.created_at,
    ].map(cell).join(","));
  }

  return new NextResponse(lines.join("\n"), {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": "attachment; filename=\"contact-enquiries.csv\"",
    },
  });
}
