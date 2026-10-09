import { NextResponse, type NextRequest } from "next/server";
import { getBookableService } from "@/lib/booking/availability";
import { clientIp, createRateLimiter } from "@/lib/booking/rate-limit";
import { isWebsiteServiceId, promoDiscountPercentage } from "@/lib/booking/services";

export const runtime = "nodejs";

const isRateLimited = createRateLimiter(10);

function reply(status: number, body: Record<string, unknown>) {
  return NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  if (isRateLimited(clientIp(request))) {
    return reply(429, { success: false, message: "Too many attempts. Please wait before trying again." });
  }

  let body: { promoCode?: unknown; serviceId?: unknown };
  try {
    body = await request.json();
  } catch {
    return reply(400, { success: false, message: "Invalid request." });
  }

  const promoCode = typeof body.promoCode === "string" ? body.promoCode.trim() : "";
  const serviceId = Number(body.serviceId);

  if (!promoCode || promoCode.length > 50) {
    return reply(400, { success: false, message: "Please enter a promo code." });
  }
  if (!isWebsiteServiceId(serviceId)) {
    return reply(400, { success: false, message: "Invalid consultation type selected." });
  }

  const service = await getBookableService(serviceId);
  if (!service) {
    return reply(404, { success: false, message: "Selected consultation is not available." });
  }
  if (!service.allowsPromo) {
    return reply(400, { success: false, message: "Promo codes are not available for this consultation type." });
  }

  const discountPercentage = promoDiscountPercentage(promoCode);
  if (discountPercentage === null) {
    return reply(400, { success: false, message: "Invalid promo code." });
  }

  const discountAmount = Math.round(service.priceAud * discountPercentage) / 100;
  const payable = Math.max(0, Math.round((service.priceAud - discountAmount) * 100) / 100);

  return reply(200, {
    success: true,
    message: "Promo applied successfully.",
    discountPercentage,
    discountAmount,
    payable,
  });
}
