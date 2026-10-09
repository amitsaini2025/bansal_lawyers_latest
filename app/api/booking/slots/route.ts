import { NextResponse, type NextRequest } from "next/server";
import { getCrmUnavailableSlots, getLocalUnavailableSlots } from "@/lib/booking/availability";
import { clientIp, createRateLimiter } from "@/lib/booking/rate-limit";
import { isIsoDate, isWebsiteServiceId } from "@/lib/booking/services";

export const runtime = "nodejs";

const isRateLimited = createRateLimiter(60);

export async function GET(request: NextRequest): Promise<NextResponse> {
  const noStore = { "Cache-Control": "no-store" };

  if (isRateLimited(clientIp(request))) {
    return NextResponse.json(
      { success: false, message: "Too many requests. Please wait a moment." },
      { status: 429, headers: { "Retry-After": "60" } }
    );
  }

  const params = request.nextUrl.searchParams;
  const date = params.get("date") ?? "";
  const serviceId = Number(params.get("serviceId"));
  const includeCrm = params.get("includeCrm") !== "0";

  if (!isIsoDate(date) || !isWebsiteServiceId(serviceId)) {
    return NextResponse.json(
      { success: false, message: "Invalid date or consultation type." },
      { status: 400, headers: noStore }
    );
  }

  try {
    const local = await getLocalUnavailableSlots(date);
    if (local === null) {
      return NextResponse.json(
        { success: false, message: "Booking calendar is temporarily unavailable." },
        { status: 503, headers: noStore }
      );
    }

    const crm = includeCrm ? await getCrmUnavailableSlots(date) : [];
    return NextResponse.json(
      { success: true, unavailableSlots: [...new Set([...local, ...crm])], crmIncluded: includeCrm },
      { headers: noStore }
    );
  } catch (error) {
    console.error("[API Booking Slots] Failed:", error);
    return NextResponse.json({ success: false, message: "Server error occurred." }, { status: 500, headers: noStore });
  }
}
