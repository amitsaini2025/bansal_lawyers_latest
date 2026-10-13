import type { ContactEnquiry } from "@/lib/contact";

function env(name: string, fallback = ""): string {
  return process.env[name]?.trim() || fallback;
}

function splitCountryAndPhone(phone: string, defaultCountryCode: string): [string, string] {
  let digits = phone.replace(/\D+/g, "");
  const ccDigits = defaultCountryCode.replace(/\D+/g, "");
  if (ccDigits && digits.startsWith(ccDigits) && digits.length > ccDigits.length) {
    return [defaultCountryCode, digits.slice(ccDigits.length)];
  }
  if (digits.startsWith("0") && digits.length >= 9) digits = digits.slice(1);
  return [defaultCountryCode, digits];
}

/** Best-effort CRM lead from a website enquiry (hero form / contact page). */
export async function syncEnquiryToCrmLead(enquiry: ContactEnquiry, enquiryId?: number): Promise<void> {
  const leadUrl = env("CRM_LEAD_POST_URL").replace(/\/+$/, "");
  if (!leadUrl) return;

  const token = env("CRM_API_TOKEN");
  const [countryCode, nationalPhone] = splitCountryAndPhone(enquiry.phone, env("CRM_LEAD_COUNTRY_CODE", "+61"));

  try {
    const response = await fetch(leadUrl, {
      method: "POST",
      cache: "no-store",
      signal: AbortSignal.timeout(15_000),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify({
        full_name: enquiry.name,
        email: enquiry.email,
        phone: nationalPhone,
        country_code: countryCode,
        source: env("CRM_LEAD_SOURCE", "Website form"),
        lead_status: env("CRM_LEAD_LEAD_STATUS", "new"),
        subject: enquiry.subject,
        message: enquiry.message,
        matter_type: enquiry.matterType,
        website_enquiry_id: enquiryId ?? null,
      }),
    });
    if (!response.ok) {
      console.warn(`[Contact CRM] /api/leads returned ${response.status} for enquiry ${enquiryId ?? "?"}`);
      return;
    }
    console.info(`[Contact CRM] Lead sync attempted for enquiry ${enquiryId ?? "?"}`);
  } catch (error) {
    console.error(`[Contact CRM] /api/leads failed for enquiry ${enquiryId ?? "?"}:`, error);
  }
}
