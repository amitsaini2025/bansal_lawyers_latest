// Server-side contact delivery; no enquiry data or credentials are logged.
const MAX_BODY_BYTES = 32_768;
const MATTER_TYPES = new Set([
  "migration", "family-law", "criminal-law", "commercial-law", "property-law", "civil-law", "other",
]);

export interface ContactEnquiry {
  name: string;
  email: string;
  phone: string;
  subject: string;
  matterType: string;
  message: string;
  consent: true;
}

export function validateEnquiry(input: unknown): ContactEnquiry | null {
  if (!input || typeof input !== "object" || Array.isArray(input)) return null;
  const data = input as Record<string, unknown>;
  const limits = { name: [2, 100], email: [3, 254], phone: [8, 40], subject: [2, 160], message: [10, 6000] };
  const values: Record<string, string> = {};
  for (const [key, [min, max]] of Object.entries(limits)) {
    if (typeof data[key] !== "string") return null;
    const value = data[key].trim();
    if (value.length < min || value.length > max || value.includes("\0")) return null;
    values[key] = value;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) return null;
  if (!/^[+\d\s().-]+$/.test(values.phone)) return null;
  const digits = values.phone.replace(/\D/g, "").length;
  if (digits < 8 || digits > 15 || /[\r\n]/.test(values.email + values.subject)) return null;
  if (typeof data.matterType !== "string" || !MATTER_TYPES.has(data.matterType)) return null;
  if (data.consent !== true || (data.website !== undefined && data.website !== "")) return null;
  return {
    name: values.name, email: values.email, phone: values.phone,
    subject: values.subject, message: values.message, matterType: data.matterType, consent: true,
  };
}

function reply(status: number, error?: string, extraHeaders?: Record<string, string>) {
  return Response.json(error ? { error } : { ok: true }, {
    status, headers: { "Cache-Control": "no-store", ...extraHeaders },
  });
}

async function readLimitedBody(request: Request) {
  if (!request.body) throw new Error("empty");
  const reader = request.body.getReader();
  const decoder = new TextDecoder();
  let bytes = 0;
  let text = "";
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > MAX_BODY_BYTES) {
        await reader.cancel();
        throw new Error("too-large");
      }
      text += decoder.decode(value, { stream: true });
    }
    return JSON.parse(text + decoder.decode()) as unknown;
  } finally {
    reader.releaseLock();
  }
}

export function createContactHandler(options: {
  deliveryURL?: string;
  deliveryToken?: string;
  fetch?: typeof fetch;
  now?: () => number;
  maxRequests?: number;
}) {
  // A bounded, per-process safety limit. Configure distributed limiting at the host before launch.
  let count = 0;
  let resetAt = 0;
  const now = options.now ?? Date.now;
  const send = options.fetch ?? fetch;
  return async (request: Request): Promise<Response> => {
    if (request.method !== "POST") return reply(405, "method", { Allow: "POST" });
    const origin = request.headers.get("origin");
    if (!origin || origin !== new URL(request.url).origin || request.headers.get("sec-fetch-site") === "cross-site") {
      return reply(403, "origin");
    }
    if (!/^application\/json(?:;|$)/i.test(request.headers.get("content-type") ?? "")) {
      return reply(415, "content-type");
    }
    if (Number(request.headers.get("content-length")) > MAX_BODY_BYTES) return reply(413, "too-large");
    const time = now();
    if (time >= resetAt) { resetAt = time + 60_000; count = 0; }
    if (++count > (options.maxRequests ?? 20)) return reply(429, "rate-limit", { "Retry-After": "60" });
    let input: unknown;
    try {
      input = await readLimitedBody(request);
    } catch (error) {
      return reply(error instanceof Error && error.message === "too-large" ? 413 : 400, "invalid");
    }
    const enquiry = validateEnquiry(input);
    if (!enquiry) return reply(400, "invalid");
    let endpoint: URL;
    try {
      endpoint = new URL(options.deliveryURL ?? "");
      if (endpoint.protocol !== "https:" || endpoint.username || endpoint.password || endpoint.hash) {
        return reply(503, "unavailable");
      }
    } catch {
      return reply(503, "unavailable");
    }
    try {
      const result = await send(endpoint.toString(), {
        method: "POST", redirect: "error", cache: "no-store",
        signal: AbortSignal.timeout(8000),
        headers: {
          "Content-Type": "application/json",
          ...(options.deliveryToken ? { Authorization: `Bearer ${options.deliveryToken}` } : {}),
        },
        body: JSON.stringify(enquiry),
      });
      // The configured receiver must acknowledge only after accepting responsibility for delivery.
      if (!result.ok) return reply(502, "delivery");
      return reply(200);
    } catch {
      return reply(502, "delivery");
    }
  };
}
