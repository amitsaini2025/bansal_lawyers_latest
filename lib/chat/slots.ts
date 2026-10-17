import {
  getBookableService,
  getCrmUnavailableSlots,
  getLocalBusyIntervals,
  getScheduleTimeSlotLabels,
  slotLabelsToIntervals,
  unavailableSlotLabels,
} from "@/lib/booking/availability";
import { releaseStalePendingBookings } from "@/lib/booking/payment";
import { isIsoDate, isWebsiteServiceId, slotDuration } from "@/lib/booking/services";

/** Open start times for one day and consultation, using the same rules as the booking form. */
export async function listOpenSlots(isoDate: string, serviceId: number): Promise<string[] | null> {
  if (!isIsoDate(isoDate) || !isWebsiteServiceId(serviceId)) return [];
  await releaseStalePendingBookings();
  const localBusy = await getLocalBusyIntervals(isoDate);
  if (localBusy === null) return null;
  const service = await getBookableService(serviceId);
  const duration = slotDuration(service?.duration);
  const slots = await getScheduleTimeSlotLabels(duration);
  const crmBusy = slotLabelsToIntervals(await getCrmUnavailableSlots(isoDate));
  const taken = new Set(unavailableSlotLabels(slots, duration, [...localBusy, ...crmBusy]));
  return slots.filter((slot) => !taken.has(slot));
}
