import { readUpload } from "@/lib/blog/photo";

/** Older success stories and blog posts still point at /images/blog/uploads/. */
export async function GET(_request: Request, context: { params: Promise<{ name: string }> }) {
  const { name } = await context.params;
  const body = await readUpload(`/images/blog/uploads/${name}`);
  if (!body) return new Response("Not found", { status: 404 });
  return new Response(new Uint8Array(body), {
    headers: {
      "Content-Type": "image/webp",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
