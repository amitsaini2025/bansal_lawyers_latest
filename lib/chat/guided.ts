import { businessDetails } from "@/lib/site";
import {
  CONSULTATION_TYPES,
  isFreeTier,
  type ConsultationService,
  type ConsultationType,
  type NatureOfEnquiry,
} from "@/lib/booking/services";
import { CHAT_SUGGESTIONS, answerEnquiry, isQuestion, wantsToBook } from "@/lib/chat/answers";
import {
  formatChipDate,
  isAffirmative,
  isNegative,
  parseLooseDate,
  parseLooseTime,
  upcomingOpenDates,
  weekdayOf,
} from "@/lib/chat/parse";

export interface BookingCatalog {
  services: ConsultationService[];
  matters: NatureOfEnquiry[];
  disabledWeekdays: number[];
  disabledDates: string[];
  today: string;
  calendarAvailable: boolean;
  paymentEnabled: boolean;
}

export interface BookingDraft {
  serviceId?: number;
  noeId?: number;
  consultationType?: ConsultationType;
  isoDate?: string;
  timeLabel?: string;
  fullname?: string;
  email?: string;
  phone?: string;
  description?: string;
  promoCode?: string;
  freeAcknowledged?: boolean;
  awaitingConfirm?: boolean;
  /** Set once the client asks to book. Until then the assistant only answers questions. */
  booking?: boolean;
}

export interface GuidedTurn {
  draft: BookingDraft;
  reply: string;
  suggestions: string[];
  bookingBody: Record<string, unknown> | null;
  slotQuery: { date: string; serviceId: number } | null;
}

const FREE_TERMS =
  "The free 10-minute consultation is for first-time clients, once only. Your matter needs to fit in 10 minutes, and time beyond that may be charged with notice.";

type Step =
  | "service"
  | "matter"
  | "type"
  | "date"
  | "time"
  | "name"
  | "email"
  | "phone"
  | "details"
  | "free"
  | "confirm";

function clean(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export function emptyDraft(): BookingDraft {
  return {};
}

export function sanitizeDraft(value: unknown): BookingDraft {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  const raw = value as Record<string, unknown>;
  const draft: BookingDraft = {};
  const serviceId = Number(raw.serviceId);
  const noeId = Number(raw.noeId);
  if (Number.isInteger(serviceId) && serviceId > 0) draft.serviceId = serviceId;
  if (Number.isInteger(noeId) && noeId > 0) draft.noeId = noeId;
  const consultationType = CONSULTATION_TYPES.find((type) => type.value === clean(raw.consultationType))?.value;
  if (consultationType) draft.consultationType = consultationType;
  if (/^\d{4}-\d{2}-\d{2}$/.test(clean(raw.isoDate))) draft.isoDate = clean(raw.isoDate);
  if (clean(raw.timeLabel).length <= 20) draft.timeLabel = clean(raw.timeLabel) || undefined;
  if (clean(raw.fullname).length <= 200) draft.fullname = clean(raw.fullname) || undefined;
  if (clean(raw.email).length <= 200) draft.email = clean(raw.email) || undefined;
  if (clean(raw.phone).length <= 20) draft.phone = clean(raw.phone) || undefined;
  if (clean(raw.description).length <= 1000) draft.description = clean(raw.description) || undefined;
  if (clean(raw.promoCode).length <= 50) draft.promoCode = clean(raw.promoCode) || undefined;
  if (raw.freeAcknowledged === true) draft.freeAcknowledged = true;
  if (raw.awaitingConfirm === true) draft.awaitingConfirm = true;
  if (raw.booking === true) draft.booking = true;
  return draft;
}

function serviceLabel(service: ConsultationService): string {
  return service.isFree ? `${service.title} (free)` : `${service.title} (${service.priceLabel})`;
}

function currentStep(draft: BookingDraft): Step {
  if (!draft.serviceId) return "service";
  if (!draft.noeId) return "matter";
  if (!draft.consultationType) return "type";
  if (!draft.isoDate) return "date";
  if (!draft.timeLabel) return "time";
  if (!draft.fullname) return "name";
  if (!draft.email) return "email";
  if (!draft.phone) return "phone";
  if (!draft.description) return "details";
  if (isFreeTier(draft.serviceId) && !draft.freeAcknowledged) return "free";
  return "confirm";
}

function dateOpen(catalog: BookingCatalog, iso: string): boolean {
  return (
    catalog.calendarAvailable &&
    iso > catalog.today &&
    !catalog.disabledWeekdays.includes(weekdayOf(iso)) &&
    !catalog.disabledDates.includes(iso)
  );
}

function matchService(text: string, services: ConsultationService[]): ConsultationService | undefined {
  const lower = text.toLowerCase();
  const exact = services.find((service) => lower === serviceLabel(service).toLowerCase() || lower === service.title.toLowerCase());
  if (exact) return exact;
  if (/\bfree\b|\b10\b/.test(lower)) return services.find((service) => service.isFree);
  if (/\b60\b|\b1\s*hour\b|\bone hour\b/.test(lower)) return services.find((service) => service.duration >= 60);
  if (/\b30\b|\bhalf\b/.test(lower)) return services.find((service) => !service.isFree && service.duration < 60);
  return undefined;
}

function matchMatter(text: string, matters: NatureOfEnquiry[]): NatureOfEnquiry | undefined {
  const lower = text.toLowerCase();
  return matters.find((matter) => lower === matter.title.toLowerCase() || lower.includes(matter.title.toLowerCase()));
}

function matchType(text: string): ConsultationType | undefined {
  const lower = text.toLowerCase();
  if (/in[-\s]?person|office|face to face/.test(lower)) return "In-person";
  if (/\bzoom\b|\bvideo\b|google meet|online meeting/.test(lower)) return "Zoom / Google Meeting";
  if (/\bphone\b|\bcall\b/.test(lower)) return "Phone";
  return CONSULTATION_TYPES.find((type) => type.value.toLowerCase() === lower || type.title.toLowerCase() === lower)?.value;
}

function applyChange(draft: BookingDraft, text: string): BookingDraft {
  const lower = text.toLowerCase();
  const next = { ...draft, awaitingConfirm: false };
  if (/\bdate\b/.test(lower)) {
    delete next.isoDate;
    delete next.timeLabel;
  }
  if (/\btime\b/.test(lower)) delete next.timeLabel;
  if (/\bname\b/.test(lower)) delete next.fullname;
  if (/\bemail\b/.test(lower)) delete next.email;
  if (/\bphone\b|\bnumber\b/.test(lower)) delete next.phone;
  if (/\bmatter\b|\barea\b/.test(lower)) delete next.noeId;
  if (/\btype\b|\bzoom\b|\bphone\b|\bin person\b/.test(lower) && /\btype\b|\bmethod\b|\bchange\b/.test(lower)) {
    delete next.consultationType;
  }
  if (/\bduration\b|\bservice\b|\bconsultation length\b/.test(lower)) {
    delete next.serviceId;
    delete next.timeLabel;
    delete next.freeAcknowledged;
  }
  if (/\bdetail\b|\bdescription\b/.test(lower)) delete next.description;
  return next;
}

function summary(draft: BookingDraft, catalog: BookingCatalog): string {
  const service = catalog.services.find((item) => item.id === draft.serviceId);
  const matter = catalog.matters.find((item) => item.id === draft.noeId);
  const date = draft.isoDate ? formatChipDate(draft.isoDate, catalog.today) : "";
  return [
    `Please confirm this consultation:`,
    `${service?.title ?? "Consultation"} · ${draft.consultationType}`,
    `${date} at ${draft.timeLabel}`,
    `${matter?.title ?? "Legal matter"}`,
    `${draft.fullname} · ${draft.email} · ${draft.phone}`,
    draft.description ?? "",
    service && !service.isFree
      ? service.priceLabel + (catalog.paymentEnabled ? " — you'll get a secure payment link next." : " — we'll ask you to call to pay.")
      : "Free 10-minute introduction.",
  ]
    .filter(Boolean)
    .join("\n");
}

function bookingBody(draft: BookingDraft): Record<string, unknown> {
  return {
    serviceId: draft.serviceId,
    noeId: draft.noeId,
    consultationType: draft.consultationType,
    date: draft.isoDate,
    time: draft.timeLabel,
    fullname: draft.fullname,
    email: draft.email,
    phone: draft.phone,
    description: draft.description,
    promoCode: draft.promoCode ?? "",
    freeConsultAcknowledged: draft.freeAcknowledged === true,
  };
}

function promptFor(step: Step, draft: BookingDraft, catalog: BookingCatalog, slots?: string[] | null): { reply: string; suggestions: string[] } {
  const dates = upcomingOpenDates(catalog.today, catalog.disabledWeekdays, catalog.disabledDates, 5).map((iso) =>
    formatChipDate(iso, catalog.today)
  );
  switch (step) {
    case "service":
      return {
        reply: catalog.calendarAvailable
          ? "I can book a consultation with Bansal Lawyers. Which length would you like?"
          : `Online times aren't available right now. Please call ${businessDetails.phone} and we'll book you in. If the calendar comes back, you can still tell me which consultation you'd like.`,
        suggestions: catalog.services.map(serviceLabel),
      };
    case "matter":
      return { reply: "What is the legal matter about?", suggestions: catalog.matters.map((matter) => matter.title) };
    case "type":
      return {
        reply: "How would you like to meet?",
        suggestions: ["In person", "Phone", "Video call"],
      };
    case "date":
      return {
        reply: "Which day suits you? You can pick one of these, or type a date such as 21 October.",
        suggestions: dates,
      };
    case "time":
      if (!slots) {
        return { reply: `I couldn't load times for that day. Please call ${businessDetails.phone} or try another date.`, suggestions: ["Choose another date"] };
      }
      if (slots.length === 0) {
        return { reply: "That day is fully booked. Please choose another date.", suggestions: dates };
      }
      return {
        reply: `These times are open on ${formatChipDate(draft.isoDate ?? catalog.today, catalog.today)}. Which one would you like?`,
        suggestions: slots.slice(0, 8),
      };
    case "name":
      return { reply: "What is your full name?", suggestions: [] };
    case "email":
      return { reply: "What email should we send the confirmation to?", suggestions: [] };
    case "phone":
      return { reply: "And the best phone number?", suggestions: [] };
    case "details":
      return { reply: "In a sentence or two, what would you like to discuss? Please don't include sensitive documents in this chat.", suggestions: [] };
    case "free":
      return { reply: `${FREE_TERMS} Do you accept these terms?`, suggestions: ["I accept", "Choose a paid consultation"] };
    case "confirm":
      return { reply: `${summary(draft, catalog)}\n\nShall I book this?`, suggestions: ["Yes, book it", "Change the time", "Change the date"] };
  }
}

export function advanceGuided(
  catalog: BookingCatalog,
  draftInput: BookingDraft,
  text: string,
  slots?: string[] | null
): GuidedTurn {
  const message = text.trim();
  let draft: BookingDraft = { ...draftInput };
  const promo = message.match(/\b(FREE100|HALF50)\b/i);
  if (promo) draft.promoCode = promo[1].toUpperCase();

  if (!draft.booking) {
    if (!message) {
      return {
        draft,
        reply:
          "Hello, I'm the Bansal Lawyers assistant. Ask me about consultations, the office, or our practice areas. When you're ready, I can book an appointment for you.",
        suggestions: CHAT_SUGGESTIONS,
        bookingBody: null,
        slotQuery: null,
      };
    }
    const chosenService = matchService(message, catalog.services);
    if (!wantsToBook(message) && !chosenService) {
      return { draft, reply: answerEnquiry(message, catalog), suggestions: CHAT_SUGGESTIONS, bookingBody: null, slotQuery: null };
    }
    draft.booking = true;
    if (!chosenService) {
      const asked = promptFor("service", draft, catalog, slots);
      return { draft, reply: asked.reply, suggestions: asked.suggestions, bookingBody: null, slotQuery: null };
    }
  }

  if (!message) {
    const step = currentStep(draft);
    const asked = promptFor(step, draft, catalog, slots);
    return { draft, reply: asked.reply, suggestions: asked.suggestions, bookingBody: null, slotQuery: null };
  }

  if (/^continue booking$/i.test(message)) {
    const step = currentStep(draft);
    if (step === "time" && draft.isoDate && draft.serviceId && slots === undefined) {
      return { draft, reply: "Checking open times…", suggestions: [], bookingBody: null, slotQuery: { date: draft.isoDate, serviceId: draft.serviceId } };
    }
    const asked = promptFor(step, draft, catalog, slots);
    return { draft, reply: asked.reply, suggestions: asked.suggestions, bookingBody: null, slotQuery: null };
  }

  if (isQuestion(message)) {
    return {
      draft,
      reply: `${answerEnquiry(message, catalog)}\n\nWe can continue your booking whenever you're ready.`,
      suggestions: ["Continue booking"],
      bookingBody: null,
      slotQuery: null,
    };
  }

  if (draft.awaitingConfirm && isNegative(message)) {
    draft = applyChange(draft, message);
  } else if (draft.awaitingConfirm && isAffirmative(message) && currentStep(draft) === "confirm") {
    return {
      draft,
      reply: "Booking that consultation now.",
      suggestions: [],
      bookingBody: bookingBody(draft),
      slotQuery: null,
    };
  }

  const step = currentStep(draft);
  const service = matchService(message, catalog.services);
  if (service && (step === "service" || step === "free")) {
    draft.serviceId = service.id;
    draft.timeLabel = undefined;
    if (!service.isFree) draft.freeAcknowledged = undefined;
  }

  const matter = matchMatter(message, catalog.matters);
  if (matter && (step === "matter" || !draft.noeId)) draft.noeId = matter.id;

  const consultationType = matchType(message);
  if (consultationType && (step === "type" || !draft.consultationType)) draft.consultationType = consultationType;

  const parsedDate = parseLooseDate(message, catalog.today);
  if (parsedDate && (step === "date" || step === "time" || !draft.isoDate || /\bdate\b|\bday\b/.test(message.toLowerCase()))) {
    if (!dateOpen(catalog, parsedDate)) {
      const asked = promptFor("date", draft, catalog, slots);
      return {
        draft: { ...draft, isoDate: undefined, timeLabel: undefined, awaitingConfirm: false },
        reply: parsedDate <= catalog.today
          ? "Same-day bookings aren't available online. Please choose a later date."
          : "That date is closed. Please choose another day.",
        suggestions: asked.suggestions,
        bookingBody: null,
        slotQuery: null,
      };
    }
    if (draft.isoDate !== parsedDate) draft.timeLabel = undefined;
    draft.isoDate = parsedDate;
  }

  if (step === "time" && /another date|choose another date/i.test(message)) {
    draft.isoDate = undefined;
    draft.timeLabel = undefined;
  }

  const parsedTime = parseLooseTime(message);
  if (parsedTime && draft.isoDate && draft.serviceId && (step === "time" || !draft.timeLabel)) {
    if (slots && !slots.some((slot) => slot.toLowerCase() === parsedTime.toLowerCase())) {
      const asked = promptFor("time", { ...draft, timeLabel: undefined }, catalog, slots);
      return {
        draft: { ...draft, timeLabel: undefined, awaitingConfirm: false },
        reply: slots.length === 0 ? asked.reply : `${parsedTime} isn't open that day. ${asked.reply}`,
        suggestions: asked.suggestions,
        bookingBody: null,
        slotQuery: { date: draft.isoDate, serviceId: draft.serviceId },
      };
    }
    if (slots) draft.timeLabel = slots.find((slot) => slot.toLowerCase() === parsedTime.toLowerCase()) ?? parsedTime;
  }

  if (step === "name") {
    const named = message.match(/^(?:my name is|i am|i'm|this is)\s+(.+)$/i);
    const candidate = (named?.[1] ?? message).replace(/['’.-]/g, " ").replace(/\s+/g, " ").trim();
    if (/^[a-zA-Z\s]+$/.test(candidate) && candidate.length > 1 && candidate.length <= 200) draft.fullname = candidate;
  }

  const email = message.match(/[^\s@]+@[^\s@]+\.[^\s@]+/);
  if (email && (step === "email" || !draft.email)) draft.email = email[0];

  const phone = message.match(/[+\d][\d\s\-()]{5,18}\d/);
  if (phone && (step === "phone" || (!draft.phone && step !== "details" && step !== "confirm"))) {
    const value = phone[0].trim();
    if (value.replace(/\D/g, "").length >= 6) draft.phone = value;
  }

  if (step === "details" && message.length > 8 && !isAffirmative(message)) draft.description = message.slice(0, 1000);

  if (step === "free") {
    if (isAffirmative(message)) draft.freeAcknowledged = true;
    if (/paid|30|hour/i.test(message)) {
      const paid = matchService(message, catalog.services) ?? catalog.services.find((item) => !item.isFree);
      if (paid) {
        draft.serviceId = paid.id;
        draft.freeAcknowledged = undefined;
        draft.timeLabel = undefined;
      }
    }
  }

  const next = currentStep(draft);
  if (next === "time" && draft.isoDate && draft.serviceId && slots === undefined) {
    return {
      draft: { ...draft, awaitingConfirm: false },
      reply: "Checking open times…",
      suggestions: [],
      bookingBody: null,
      slotQuery: { date: draft.isoDate, serviceId: draft.serviceId },
    };
  }

  if (next === "confirm") draft.awaitingConfirm = true;
  else draft.awaitingConfirm = false;

  const asked = promptFor(next, draft, catalog, slots);
  return { draft, reply: asked.reply, suggestions: asked.suggestions, bookingBody: null, slotQuery: null };
}
