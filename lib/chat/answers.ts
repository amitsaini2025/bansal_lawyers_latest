import { businessDetails } from "@/lib/site";

interface AnswerCatalog {
  services: { title: string; isFree: boolean; priceLabel: string }[];
  matters: { title: string }[];
}

export const CHAT_SUGGESTIONS = ["Consultation fees", "Practice areas", "Office and hours", "Book a consultation"];

export function isQuestion(text: string): boolean {
  const value = text.trim().toLowerCase();
  if (value.endsWith("?")) return true;
  return /^(how|what|when|where|who|why|can i|can you|do you|does|is there|are you|could you)\b/.test(value);
}

/** True when the client is asking to start a booking, not merely asking how booking works. */
export function wantsToBook(text: string): boolean {
  const value = text.trim();
  if (isQuestion(value)) return false;
  return /\b(book( a| an| me| my)?|appointment|schedule a)\b/i.test(value);
}

function fees(catalog: AnswerCatalog): string {
  const lines = catalog.services.map((service) =>
    service.isFree ? `${service.title}: free for first-time clients` : `${service.title}: ${service.priceLabel}`
  );
  return `Consultation fees are shown when you book. Right now: ${lines.join("; ")}. A lawyer will explain any further costs before work starts.`;
}

/** Answers a general firm question. Returns a reply for anything it does not recognise. */
export function answerEnquiry(text: string, catalog: AnswerCatalog): string {
  const value = text.toLowerCase();

  if (/\b(my visa|my case|will i win|chances|should i plead|guilty|custody of my|what should i do)\b/.test(value)) {
    return `I can't give legal advice or comment on a personal matter in this chat. A lawyer can do that in a consultation. You can book one here, or call ${businessDetails.phone}.`;
  }

  if (/\b(cost|fee|fees|price|prices|how much|charge)\b/.test(value) || value.includes("consultation fees")) {
    return fees(catalog);
  }

  if (/\bfree\b/.test(value) && /\b(consult|10|ten)\b/.test(value)) {
    return "A free 10-minute consultation is available once, for first-time clients, when the matter can be discussed in that time. Time beyond 10 minutes may be charged, with notice.";
  }

  if (value === "office and hours" || (/\b(hour|hours|open|opening)\b/.test(value) && /\b(address|where|office|located)\b/.test(value))) {
    return `The office is at ${businessDetails.address}, open Monday to Friday, 10:00 am to 6:00 pm. Consultations are also available by phone or video. Call ${businessDetails.phone}.`;
  }

  if (/\b(address|where|office|located|collins|visit)\b/.test(value)) {
    return `The office is at ${businessDetails.address}. Consultations are also available by phone or video if you can't come in.`;
  }

  if (/\b(hour|hours|open|opening|close|closed)\b/.test(value)) {
    return `The office is open Monday to Friday, 10:00 am to 6:00 pm. Appointments are booked ahead, and same-day times aren't offered online. Call ${businessDetails.nationalLineDisplay} or ${businessDetails.phone}.`;
  }

  if (/\b(phone number|call you|email|contact|get in touch)\b/.test(value)) {
    return `Call ${businessDetails.nationalLineDisplay} or ${businessDetails.phone}, or email ${businessDetails.email}. You can also book a consultation in this chat.`;
  }

  if (/\b(zoom|video|online|in person|in-person|phone consultation|meet)\b/.test(value)) {
    return "Consultations can be in person at the Melbourne office, by phone, or by Zoom or Google Meet. You choose which one when you book.";
  }

  if (/\b(practice|areas of law|what do you|services|immigration|family law|criminal|commercial|property|civil)\b/.test(value)) {
    const matters = catalog.matters.map((matter) => matter.title).join(", ");
    return `Bansal Lawyers advises on ${matters}. If a matter crosses more than one area, the team can look at the whole picture. You don't need to pick the right category before you get in touch.`;
  }

  if (/\b(language|hindi|punjabi|english)\b/.test(value)) {
    return "The team can speak with you in English, Hindi, and Punjabi.";
  }

  if (/\b(first consultation|what happens)\b/.test(value)) {
    return "In the first consultation you explain what has happened, and the lawyer reviews any documents, time limits, and options. You leave knowing where you stand, and you decide whether to go ahead.";
  }

  if (/\b(document|bring|paperwork|what to bring)\b/.test(value)) {
    return "Bring anything connected to the matter: letters or notices, visa decisions, court or police papers, contracts, or identification. If you're unsure, bring what you have.";
  }

  if (/\b(how long|timeline|how much time)\b/.test(value)) {
    return "Timing depends on the matter. A contract review can take days, while a court matter, property settlement, or tribunal review can take months. You'll get a realistic estimate after the consultation.";
  }

  if (/\b(deadline|time limit|urgent)\b/.test(value)) {
    return "Some matters have short time limits, including tribunal reviews, court dates, and notices. If you've just received a decision or a document, it's worth booking advice straight away.";
  }

  if (/\b(hello|hi|hey|good morning|good afternoon)\b/.test(value)) {
    return "Hello. I can answer questions about consultations, the office, and practice areas, and I can book an appointment when you want one.";
  }

  if (/\b(how do i book|how to book|booking work)\b/.test(value)) {
    return "I can book it with you here. I'll ask for the consultation length, the type of matter, whether you prefer in person, phone, or video, then a date and your contact details. Paid consultations are confirmed after secure payment.";
  }

  return `I can help with consultation fees, office hours, practice areas, and booking an appointment. I can't give legal advice. Call ${businessDetails.phone} if your question is about a specific matter.`;
}
