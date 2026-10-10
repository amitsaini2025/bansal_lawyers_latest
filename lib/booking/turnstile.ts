// Cloudflare's documented always-pass test keys. Production keys are domain-locked, so local
// development uses these unless TURNSTILE_USE_PRODUCTION_KEYS=true (same rule as the legacy site).
const TEST_SITE_KEY = "1x00000000000000000000AA";
const TEST_SECRET_KEY = "1x0000000000000000000000000000000AA";

function turnstileKeys(): { siteKey: string; secretKey: string } | null {
  const siteKey = (process.env.TURNSTILE_SITE_KEY || process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "").trim();
  const secretKey = (process.env.TURNSTILE_SECRET_KEY || "").trim();
  if (!siteKey || !secretKey) return null;

  const useProductionKeys =
    process.env.NODE_ENV === "production" || /^(1|true|yes|on)$/i.test(process.env.TURNSTILE_USE_PRODUCTION_KEYS ?? "");
  return useProductionKeys ? { siteKey, secretKey } : { siteKey: TEST_SITE_KEY, secretKey: TEST_SECRET_KEY };
}

/** Public site key for the booking form, or null when Turnstile is not configured. */
export function getTurnstileSiteKey(): string | null {
  return turnstileKeys()?.siteKey ?? null;
}

/** Verifies a Cloudflare Turnstile token. Returns true when Turnstile is not configured. */
export async function verifyTurnstile(token: string, remoteIp: string): Promise<boolean> {
  const keys = turnstileKeys();
  if (!keys) return true;
  if (!token) return false;
  if (keys.secretKey === TEST_SECRET_KEY) return true;

  try {
    const body = new URLSearchParams({ secret: keys.secretKey, response: token });
    if (remoteIp && remoteIp !== "local") body.set("remoteip", remoteIp);
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      cache: "no-store",
      signal: AbortSignal.timeout(5_000),
      body,
    });
    const json = (await response.json().catch(() => null)) as { success?: boolean } | null;
    return response.ok && json?.success === true;
  } catch (error) {
    console.warn("[Booking] Turnstile verification failed:", error);
    return false;
  }
}
