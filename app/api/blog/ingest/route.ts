import { NextRequest, NextResponse } from "next/server";
import { AdminDatabaseError } from "@/lib/admin/db";
import { ingestAccess, ingestSecretConfigured, parseIngestPayload } from "@/lib/blog/ingest";
import { saveIngestedBlog } from "@/lib/blog/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function json(body: Record<string, unknown>, status: number) {
  return NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

export async function GET() {
  return json(
    {
      ok: true,
      endpoint: "/api/blog/ingest",
      method: "POST",
      update: "PATCH /api/blog/ingest/{id-or-slug}",
      delete: "DELETE /api/blog/ingest/{id-or-slug}",
      configured: ingestSecretConfigured(),
    },
    200
  );
}

export async function POST(request: NextRequest) {
  const access = ingestAccess(request.headers.get("authorization"));
  if (!access.ok) return json({ ok: false, error: access.error }, access.status);

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return json({ ok: false, error: "Send a JSON body." }, 400);
  }

  const parsed = parseIngestPayload(payload);
  if (!parsed.ok) return json({ ok: false, error: parsed.error }, 400);

  try {
    const saved = await saveIngestedBlog(parsed.value);
    return json(
      {
        ok: true,
        id: saved.id,
        slug: saved.slug,
        status: saved.published ? "published" : "draft",
        publicUrl: saved.published ? `/blog/${saved.slug}` : null,
        adminUrl: `/admin/blogs/${saved.id}`,
      },
      201
    );
  } catch (error) {
    console.error("[Blog ingest]", error);
    if (error instanceof AdminDatabaseError) return json({ ok: false, error: error.message }, 503);
    const message = error instanceof Error ? error.message : "";
    if (/already used/i.test(message)) return json({ ok: false, error: message }, 409);
    return json({ ok: false, error: "The post could not be saved." }, 500);
  }
}
