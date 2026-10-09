// Per-process limiter; configure distributed limiting at the host for multi-instance deployments.
export function createRateLimiter(maxRequests: number, windowMs = 60_000) {
  const buckets = new Map<string, { count: number; resetAt: number }>();

  return function isRateLimited(key: string): boolean {
    const now = Date.now();
    const entry = buckets.get(key);
    if (!entry || now > entry.resetAt) {
      if (buckets.size > 5_000) buckets.clear();
      buckets.set(key, { count: 1, resetAt: now + windowMs });
      return false;
    }
    entry.count += 1;
    return entry.count > maxRequests;
  };
}

export function clientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return forwardedFor ? forwardedFor.split(",")[0].trim() : request.headers.get("x-real-ip") ?? "local";
}
