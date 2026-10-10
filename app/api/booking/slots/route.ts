import { NextResponse, type NextRequest } from "next/server";
import {
  getBookableService,
  getCrmUnavailableSlots,
  getLocalBusyIntervals,
  getScheduleTimeSlotLabels,
  slotLabelsToIntervals,
  unavailableSlotLabels,
} from "@/lib/booking/availability";
import { clientIp, createRateLimiter } from "@/lib/booking/rate-limit";
import { isIsoDate, isWebsiteServiceId, slotDuration } from "@/lib/booking/services";

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
    const localBusy = await getLocalBusyIntervals(date);
    if (localBusy === null) {
      return NextResponse.json(
        { success: false, message: "Booking calendar is temporarily unavailable." },
        { status: 503, headers: noStore }
      );
    }

    const service = await getBookableService(serviceId);
    const duration = slotDuration(service?.duration);
    const slots = await getScheduleTimeSlotLabels(duration);
    const crmBusy = includeCrm ? slotLabelsToIntervals(await getCrmUnavailableSlots(date)) : [];
    return NextResponse.json(
      {
        success: true,
        slots,
        unavailableSlots: unavailableSlotLabels(slots, duration, [...localBusy, ...crmBusy]),
        crmIncluded: includeCrm,
      },
      { headers: noStore }
    );
  } catch (error) {
    console.error("[API Booking Slots] Failed:", error);
    return NextResponse.json({ success: false, message: "Server error occurred." }, { status: 500, headers: noStore });
  }
}
