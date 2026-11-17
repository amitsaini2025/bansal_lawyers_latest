import { NextRequest, NextResponse } from "next/server";
import { AdminDatabaseError } from "@/lib/admin/db";
import { ingestAccess } from "@/lib/blog/ingest";
import { parseCaseIngestUpdate } from "@/lib/cases/ingest";
import { deleteIngestedCase, updateIngestedCase } from "@/lib/cases/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Context = { params: Promise<{ ref: string }> };

function json(body: Record<string, unknown>, status: number) {
  return NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

function failure(error: unknown) {
  console.error("[Success story ingest]", error);
  if (error instanceof AdminDatabaseError) return json({ ok: false, error: error.message }, 503);
  const message = error instanceof Error ? error.message : "";
  if (message === "That success story was not found.") return json({ ok: false, error: message }, 404);
  if (/already used|built into the website/i.test(message)) return json({ ok: false, error: message }, 409);
  if (/no column|usable slug|title column|body column|status column/i.test(message)) {
    return json({ ok: false, error: message }, 400);
  }
  return json({ ok: false, error: "The case could not be changed." }, 500);
}

async function refFrom(context: Context): Promise<string> {
  const { ref } = await context.params;
  return ref;
}

async function update(request: NextRequest, context: Context) {
  const access = ingestAccess(request.headers.get("authorization"), "Success story ingest");
  if (!access.ok) return json({ ok: false, error: access.error }, access.status);

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return json({ ok: false, error: "Send a JSON body." }, 400);
  }

  const parsed = parseCaseIngestUpdate(payload);
  if (!parsed.ok) return json({ ok: false, error: parsed.error }, 400);

  try {
    const saved = await updateIngestedCase(await refFrom(context), parsed.value);
    return json(
      {
        ok: true,
        id: saved.id,
        slug: saved.slug,
        status: saved.published ? "published" : "draft",
        publicUrl: saved.published ? `/success-stories/${saved.slug}` : null,
        adminUrl: `/admin/success-stories/${saved.id}`,
      },
      200
    );
  } catch (error) {
    return failure(error);
  }
}

export function PATCH(request: NextRequest, context: Context) {
  return update(request, context);
}

export function POST(request: NextRequest, context: Context) {
  return update(request, context);
}

export async function DELETE(request: NextRequest, context: Context) {
  const access = ingestAccess(request.headers.get("authorization"), "Success story ingest");
  if (!access.ok) return json({ ok: false, error: access.error }, access.status);

  try {
    const removed = await deleteIngestedCase(await refFrom(context));
    return json({ ok: true, id: removed.id, slug: removed.slug, deleted: true }, 200);
  } catch (error) {
    return failure(error);
  }
}
