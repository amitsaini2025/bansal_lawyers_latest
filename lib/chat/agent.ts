import {
  getAvailabilityConfig,
  getBookableServices,
  getNatureOfEnquiryOptions,
} from "@/lib/booking/availability";
import { isOnlinePaymentEnabled } from "@/lib/booking/payment";
import { submitBooking } from "@/lib/booking/submit";
import { CONSULTATION_TYPES, melbourneToday } from "@/lib/booking/services";
import { verifyTurnstile } from "@/lib/booking/turnstile";
import { businessDetails } from "@/lib/site";
import {
  advanceGuided,
  sanitizeDraft,
  type BookingCatalog,
  type BookingDraft,
} from "@/lib/chat/guided";
import { listOpenSlots } from "@/lib/chat/slots";

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export interface ChatTurnResult {
  reply: string;
  suggestions: string[];
  draft: BookingDraft;
  needsTurnstile: boolean;
  pendingBooking: Record<string, unknown> | null;
  checkoutUrl: string | null;
  appointmentId: number | null;
  booked: boolean;
  requiresPayment: boolean;
}

const MAX_MESSAGES = 16;
const MAX_MESSAGE_CHARS = 1000;

interface ChatModel {
  apiKey: string;
  baseUrl: string;
  model: string;
}

/** Gemini is preferred. An OpenAI key is used only when no Gemini key is set. */
function chatModel(): ChatModel | null {
  const gemini = process.env.GEMINI_API_KEY?.trim();
  if (gemini) {
    return {
      apiKey: gemini,
      baseUrl: (process.env.GEMINI_BASE_URL?.trim() || "https://generativelanguage.googleapis.com/v1beta/openai").replace(/\/+$/, ""),
      model: process.env.GEMINI_MODEL?.trim() || "gemini-3.1-flash-lite",
    };
  }
  const openai = process.env.OPENAI_API_KEY?.trim();
  if (!openai) return null;
  return {
    apiKey: openai,
    baseUrl: (process.env.OPENAI_BASE_URL?.trim() || "https://api.openai.com/v1").replace(/\/+$/, ""),
    model: process.env.OPENAI_MODEL?.trim() || "gpt-4o-mini",
  };
}

export async function loadBookingCatalog(): Promise<BookingCatalog> {
  const [services, matters, availability] = await Promise.all([
    getBookableServices(),
    getNatureOfEnquiryOptions(),
    getAvailabilityConfig().catch((error) => {
      console.error("[Chat] Failed to load availability:", error);
      return null;
    }),
  ]);
  return {
    services,
    matters,
    disabledWeekdays: availability?.disabledWeekdays ?? [0, 6],
    disabledDates: availability?.disabledDates ?? [],
    today: availability?.today ?? melbourneToday(),
    calendarAvailable: availability !== null,
    paymentEnabled: isOnlinePaymentEnabled(),
  };
}

function resultFromGuided(
  turn: ReturnType<typeof advanceGuided>,
  extra: Partial<ChatTurnResult> = {}
): ChatTurnResult {
  return {
    reply: turn.reply,
    suggestions: turn.suggestions,
    draft: turn.draft,
    needsTurnstile: false,
    pendingBooking: null,
    checkoutUrl: null,
    appointmentId: null,
    booked: false,
    requiresPayment: false,
    ...extra,
  };
}

async function runGuided(
  catalog: BookingCatalog,
  draft: BookingDraft,
  text: string,
  turnstileToken: string,
  ip: string
): Promise<ChatTurnResult> {
  let turn = advanceGuided(catalog, draft, text);
  if (turn.slotQuery) {
    let slots: string[] | null = null;
    try {
      slots = await listOpenSlots(turn.slotQuery.date, turn.slotQuery.serviceId);
    } catch (error) {
      console.error("[Chat] Failed to load appointment times:", error);
    }
    turn = advanceGuided(catalog, draft, text, slots);
  }
  if (!turn.bookingBody) return resultFromGuided(turn);

  if (!(await verifyTurnstile(turnstileToken, ip))) {
    return resultFromGuided(turn, {
      reply: `${turn.reply} Please complete the security check below and I'll confirm the booking.`,
      needsTurnstile: true,
      pendingBooking: turn.bookingBody,
    });
  }

  const submitted = await submitBooking(turn.bookingBody);
  return resultFromSubmission(turn.draft, submitted.status, submitted.body);
}

function resultFromSubmission(draft: BookingDraft, status: number, body: Record<string, unknown>): ChatTurnResult {
  const checkoutUrl = typeof body.checkoutUrl === "string" ? body.checkoutUrl : null;
  const appointmentId = typeof body.appointmentId === "number" ? body.appointmentId : null;
  const requiresPayment = body.requiresPayment === true;
  const booked = body.success === true && !requiresPayment;
  const failedDraft = body.success === true ? {} : { ...draft, awaitingConfirm: true, timeLabel: body.code === "SLOT_TAKEN" ? undefined : draft.timeLabel };
  let reply = typeof body.message === "string" ? body.message : "I couldn't complete that booking.";
  if (requiresPayment && checkoutUrl) {
    reply = `Your time is held${appointmentId ? ` (reference #${appointmentId})` : ""}. Complete the secure payment to confirm it. The hold expires if payment isn't finished.`;
  }
  if (body.code === "SLOT_TAKEN") reply = `${reply} Please pick another time.`;
  return {
    reply,
    suggestions: body.code === "SLOT_TAKEN" ? ["Choose another time"] : [],
    draft: failedDraft,
    needsTurnstile: false,
    pendingBooking: null,
    checkoutUrl,
    appointmentId,
    booked,
    requiresPayment,
  };
}

function clipMessages(messages: ChatMessage[]): ChatMessage[] {
  return messages
    .filter((message) => (message.role === "user" || message.role === "assistant") && typeof message.content === "string")
    .slice(-MAX_MESSAGES)
    .map((message) => ({ role: message.role, content: message.content.slice(0, MAX_MESSAGE_CHARS) }));
}

function stripOptions(reply: string): { reply: string; suggestions: string[] } {
  const match = reply.match(/\n?\[\[options:\s*(.+?)\]\]\s*$/i);
  if (!match) return { reply: reply.trim(), suggestions: [] };
  const suggestions = match[1]
    .split("|")
    .map((item) => item.trim())
    .filter((item) => item.length > 0 && item.length <= 80)
    .slice(0, 8);
  return { reply: reply.slice(0, match.index).trim(), suggestions };
}

function catalogPrompt(catalog: BookingCatalog): string {
  const services = catalog.services
    .map((service) => `- id ${service.id}: ${service.title}, ${service.duration} min, ${service.priceLabel}${service.allowsPromo ? ", promo codes allowed" : ""}`)
    .join("\n");
  const matters = catalog.matters.map((matter) => `- id ${matter.id}: ${matter.title}`).join("\n");
  const closed = catalog.disabledWeekdays.length
    ? catalog.disabledWeekdays.map((day) => ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][day]).join(", ")
    : "none";
  return [
    "You are the website assistant for Bansal Lawyers, a Melbourne law firm.",
    "First answer basic questions about the firm, consultations, fees, location, hours, and practice areas.",
    "Offer to book an appointment, and start collecting booking details only after the client asks to book or agrees to your offer.",
    "You are not a lawyer and you must not give legal advice, predict outcomes, or ask for identity documents or case files.",
    "Office hours are Monday to Friday, 10:00 am to 6:00 pm. The team speaks English, Hindi, and Punjabi.",
    `Phone ${businessDetails.nationalLineDisplay} or ${businessDetails.phone}. Email ${businessDetails.email}.`,
    `Today in Melbourne is ${catalog.today}. Same-day and past dates cannot be booked. Closed weekdays: ${closed}.`,
    `Office: ${businessDetails.address}. Phone: ${businessDetails.phone}.`,
    "Consultations:",
    services,
    "Legal matters:",
    matters,
    `Meeting types: ${CONSULTATION_TYPES.map((type) => type.value).join(", ")}.`,
    catalog.paymentEnabled
      ? "Paid consultations are confirmed only after the client opens the secure payment link you are given."
      : "Paid online payment is off. If they choose a paid consultation, ask them to call the office.",
    "The free 10-minute consultation is once per client. Before booking it, state that it is first-time only, must fit in 10 minutes, and extra time may be charged, then get a clear acceptance.",
    "Collect service id, matter id, meeting type, date (YYYY-MM-DD), time, full name (letters and spaces only), email, phone, and a short description.",
    "Call get_available_slots before offering or accepting a time. Call book_appointment only after the client explicitly confirms a summary.",
    "Never say a booking is confirmed unless book_appointment returns success.",
    "Ask one question at a time. When the answer is a short choice, end your reply with [[options: First | Second | Third]].",
    "Keep replies under 90 words.",
  ].join("\n");
}

interface ToolCall {
  id?: string;
  function?: { name?: string; arguments?: unknown };
}

function messageText(content: unknown): string {
  if (typeof content === "string") return content;
  if (!Array.isArray(content)) return "";
  return content
    .map((part) => {
      if (typeof part === "string") return part;
      if (part && typeof part === "object" && "text" in part) return String((part as { text: unknown }).text ?? "");
      return "";
    })
    .join("");
}

async function runModel(
  catalog: BookingCatalog,
  messages: ChatMessage[],
  turnstileToken: string,
  ip: string
): Promise<ChatTurnResult> {
  const model = chatModel();
  if (!model) throw new Error("No chat model is configured");
  const history: Record<string, unknown>[] = [
    { role: "system", content: catalogPrompt(catalog) },
    ...messages.map((message) => ({ role: message.role, content: message.content })),
  ];
  let pendingBooking: Record<string, unknown> | null = null;
  let submission: { status: number; body: Record<string, unknown> } | null = null;

  const tools = [
    {
      type: "function",
      function: {
        name: "get_available_slots",
        description: "List open appointment start times for a date and consultation.",
        parameters: {
          type: "object",
          properties: {
            date: { type: "string", description: "YYYY-MM-DD in Melbourne" },
            serviceId: { type: "number" },
          },
          required: ["date", "serviceId"],
        },
      },
    },
    {
      type: "function",
      function: {
        name: "book_appointment",
        description: "Book the consultation after the client has confirmed the summary.",
        parameters: {
          type: "object",
          properties: {
            serviceId: { type: "number" },
            noeId: { type: "number" },
            consultationType: { type: "string" },
            date: { type: "string" },
            time: { type: "string" },
            fullname: { type: "string" },
            email: { type: "string" },
            phone: { type: "string" },
            description: { type: "string" },
            promoCode: { type: "string" },
            freeConsultAcknowledged: { type: "boolean" },
          },
          required: ["serviceId", "noeId", "consultationType", "date", "time", "fullname", "email", "phone", "description"],
        },
      },
    },
  ];

  for (let step = 0; step < 4; step += 1) {
    const response = await fetch(`${model.baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${model.apiKey}`,
        "Content-Type": "application/json",
      },
      signal: AbortSignal.timeout(25_000),
      body: JSON.stringify({ model: model.model, temperature: 0.2, messages: history, tools }),
    });
    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      throw new Error(`Assistant request failed (${response.status}) ${detail.slice(0, 200)}`);
    }
    const json = (await response.json()) as {
      choices?: { message?: { content?: string | null; tool_calls?: ToolCall[] } }[];
    };
    const message = json.choices?.[0]?.message;
    if (!message) throw new Error("Assistant returned an empty response");
    const toolCalls = (message.tool_calls ?? []).map((call, index) => ({
      id: call.id || `call_${step}_${index}`,
      type: "function" as const,
      function: {
        name: call.function?.name ?? "",
        arguments: typeof call.function?.arguments === "string" ? call.function.arguments : JSON.stringify(call.function?.arguments ?? {}),
      },
    }));
    if (toolCalls.length === 0) {
      const spoken = stripOptions(messageText(message.content) || "How can I help?");
      if (submission) {
        const booked = resultFromSubmission({}, submission.status, submission.body);
        return { ...booked, reply: booked.reply, suggestions: spoken.suggestions };
      }
      return {
        reply: spoken.reply,
        suggestions: spoken.suggestions,
        draft: {},
        needsTurnstile: pendingBooking !== null,
        pendingBooking,
        checkoutUrl: null,
        appointmentId: null,
        booked: false,
        requiresPayment: false,
      };
    }

    history.push({ role: "assistant", content: messageText(message.content), tool_calls: toolCalls });
    for (const call of toolCalls) {
      let args: Record<string, unknown> = {};
      try {
        const parsed = JSON.parse(call.function.arguments || "{}");
        if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) args = parsed as Record<string, unknown>;
      } catch {
        args = {};
      }
      let toolBody: Record<string, unknown>;
      if (call.function.name === "get_available_slots") {
        const date = typeof args.date === "string" ? args.date : "";
        const serviceId = Number(args.serviceId);
        const slots = await listOpenSlots(date, serviceId);
        toolBody = slots === null
          ? { success: false, message: "Calendar is temporarily unavailable." }
          : { success: true, slots };
      } else if (call.function.name === "book_appointment") {
        if (!(await verifyTurnstile(turnstileToken, ip))) {
          pendingBooking = args;
          toolBody = { success: false, needsTurnstile: true, message: "Security check is required before booking. Do not claim this is booked." };
        } else {
          submission = await submitBooking(args);
          toolBody = submission.body;
        }
      } else {
        toolBody = { success: false, message: "Unknown tool." };
      }
      history.push({ role: "tool", tool_call_id: call.id, content: JSON.stringify(toolBody) });
    }
  }

  throw new Error("Assistant took too many steps");
}

export async function handleBookingChat(input: {
  messages: ChatMessage[];
  draft: unknown;
  text: string;
  turnstileToken: string;
  ip: string;
}): Promise<ChatTurnResult> {
  const catalog = await loadBookingCatalog();
  const text = input.text.trim().slice(0, MAX_MESSAGE_CHARS);
  const draft = sanitizeDraft(input.draft);

  if (!text) return runGuided(catalog, draft, "", input.turnstileToken, input.ip);

  if (!chatModel()) return runGuided(catalog, draft, text, input.turnstileToken, input.ip);

  const messages = clipMessages([...input.messages, { role: "user", content: text }]);
  try {
    return await runModel(catalog, messages, input.turnstileToken, input.ip);
  } catch (error) {
    console.error("[Chat] Language model failed:", error instanceof Error ? error.message : error);
    return runGuided(catalog, draft, text, input.turnstileToken, input.ip);
  }
}

export async function confirmBookingChat(input: {
  booking: unknown;
  turnstileToken: string;
  ip: string;
}): Promise<ChatTurnResult> {
  if (!input.booking || typeof input.booking !== "object" || Array.isArray(input.booking)) {
    return {
      reply: "That booking could not be confirmed. Please tell me the time again.",
      suggestions: [],
      draft: {},
      needsTurnstile: false,
      pendingBooking: null,
      checkoutUrl: null,
      appointmentId: null,
      booked: false,
      requiresPayment: false,
    };
  }
  if (!(await verifyTurnstile(input.turnstileToken, input.ip))) {
    return {
      reply: "The security check didn't complete. Please try it again.",
      suggestions: [],
      draft: {},
      needsTurnstile: true,
      pendingBooking: input.booking as Record<string, unknown>,
      checkoutUrl: null,
      appointmentId: null,
      booked: false,
      requiresPayment: false,
    };
  }
  const submitted = await submitBooking(input.booking as Record<string, unknown>);
  return resultFromSubmission({}, submitted.status, submitted.body);
}
