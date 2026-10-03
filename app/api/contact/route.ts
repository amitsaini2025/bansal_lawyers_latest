import { createContactHandler } from "@/lib/contact";

export const runtime = "nodejs";

export const POST = createContactHandler({
  deliveryURL: process.env.CONTACT_FORM_WEBHOOK_URL,
  deliveryToken: process.env.CONTACT_FORM_WEBHOOK_TOKEN,
});
