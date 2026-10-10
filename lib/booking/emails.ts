import { getMailConfig, getMailTransporter } from "@/lib/mail";
import { businessDetails } from "@/lib/site";

export interface BookingEmailDetails {
  appointmentId: number;
  fullName: string;
  email: string;
  phone: string;
  /** DD/MM/YYYY */
  date: string;
  time: string;
  serviceTitle: string;
  natureOfEnquiry: string;
  consultationType: string;
  description: string;
  amountLabel: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function consultationMode(type: string): "video" | "phone" | "in_person" {
  const lower = type.toLowerCase();
  if (lower.includes("zoom") || lower.includes("google meeting")) return "video";
  if (lower.includes("phone")) return "phone";
  return "in_person";
}

function preparationNotes(details: BookingEmailDetails): { important: string; checklist: string[] } {
  switch (consultationMode(details.consultationType)) {
    case "video":
      return {
        important:
          "Please be ready to join your video consultation 5 minutes before your scheduled time. A Zoom or Google Meet link will be sent to you separately.",
        checklist: [
          "A stable internet connection and a quiet, private space",
          "A device with a working camera and microphone",
          "Any relevant documents related to your matter",
          "A list of questions you'd like to discuss",
        ],
      };
    case "phone":
      return {
        important: `We will call you on ${details.phone} at the booked time, so please keep your phone nearby and charged.`,
        checklist: [
          "A quiet location with good mobile reception",
          "Any relevant documents related to your matter",
          "A list of questions you'd like to discuss",
        ],
      };
    default:
      return {
        important: `Please arrive 10 minutes before your scheduled time at ${businessDetails.address}.`,
        checklist: [
          "Valid photo identification",
          "Any relevant documents related to your matter",
          "A list of questions you'd like to discuss",
        ],
      };
  }
}

function detailRows(details: BookingEmailDetails, includeEnquiry: boolean): [string, string][] {
  const rows: [string, string][] = [
    ["Reference", `#${details.appointmentId}`],
    ["Client Name", details.fullName],
    ["Email", details.email],
    ["Phone", details.phone],
    ["Appointment Date", details.date],
    ["Appointment Time", `${details.time} (Melbourne time)`],
    ["Service", details.serviceTitle],
    ["Type of Legal Matter", details.natureOfEnquiry],
    ["Consultation Type", details.consultationType],
    ["Amount", details.amountLabel],
  ];
  if (includeEnquiry) rows.push(["Details of Enquiry", details.description]);
  return rows;
}

function renderEmail(heading: string, intro: string, details: BookingEmailDetails, extraHtml: string, includeEnquiry: boolean) {
  const rowsHtml = detailRows(details, includeEnquiry)
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:8px 12px;font-size:13px;color:#64748b;font-weight:600;vertical-align:top;width:40%;">${escapeHtml(label)}</td>
          <td style="padding:8px 12px;font-size:14px;color:#0f172a;white-space:pre-wrap;">${escapeHtml(value)}</td>
        </tr>`
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><title>${escapeHtml(heading)}</title></head>
<body style="margin:0;padding:24px;background:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1e293b;line-height:1.6;">
  <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0;">
    <div style="background:#071324;color:#ffffff;padding:24px 28px;border-bottom:3px solid #1d4ed8;">
      <h1 style="margin:0;font-size:20px;">${escapeHtml(heading)}</h1>
    </div>
    <div style="padding:28px;">
      ${intro}
      <table role="presentation" style="width:100%;border-collapse:collapse;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;margin:20px 0;">
        ${rowsHtml}
      </table>
      ${extraHtml}
    </div>
    <div style="background:#f8fafc;border-top:1px solid #e2e8f0;padding:16px 28px;font-size:12px;color:#64748b;text-align:center;">
      Bansal Lawyers · ${escapeHtml(businessDetails.address)} · ${escapeHtml(businessDetails.phone)}
    </div>
  </div>
</body>
</html>`;
}

function renderText(details: BookingEmailDetails, includeEnquiry: boolean): string {
  return detailRows(details, includeEnquiry)
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");
}

/** Sends the firm notification and the client confirmation. Never throws. */
export async function sendBookingEmails(details: BookingEmailDetails): Promise<{ firmSent: boolean; clientSent: boolean }> {
  const config = getMailConfig();
  const mailer = getMailTransporter();
  if (!config || !mailer) {
    console.log(`[Booking Mail] SMTP not configured; skipped emails for appointment ${details.appointmentId}.`);
    return { firmSent: false, clientSent: false };
  }

  const firmHtml = renderEmail(
    "New Appointment Booked",
    `<p>A new consultation has been booked through the website.</p>`,
    details,
    "",
    true
  );

  const notes = preparationNotes(details);
  const clientHtml = renderEmail(
    "Appointment Confirmation",
    `<p>Dear ${escapeHtml(details.fullName)},</p>
     <p>Thank you for choosing Bansal Lawyers. We are pleased to confirm your appointment.</p>
     <p style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:14px;font-size:14px;color:#1e3a8a;">
       <strong>Important:</strong> ${escapeHtml(notes.important)} If you need to reschedule or cancel, please contact us at least 24 hours in advance.
     </p>`,
    details,
    `<p style="margin:0 0 6px;font-weight:600;">Please have ready:</p>
     <ul style="margin:0 0 20px;padding-left:20px;font-size:14px;">${notes.checklist.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
     <p style="font-size:14px;">Questions or changes? Call <a href="${businessDetails.phoneTel}" style="color:#1d4ed8;">${escapeHtml(businessDetails.phone)}</a>
       or email <a href="${businessDetails.emailMailto}" style="color:#1d4ed8;">${escapeHtml(businessDetails.email)}</a>.</p>
     <p style="font-size:14px;">Best regards,<br><strong>The Bansal Lawyers Team</strong></p>`,
    false
  );

  const [firm, client] = await Promise.allSettled([
    mailer.sendMail({
      from: config.fromEmail,
      to: config.receiverEmail,
      replyTo: `${details.fullName} <${details.email}>`,
      subject: `New Appointment Booked - ${details.fullName} - ${details.serviceTitle} (#${details.appointmentId})`,
      text: `New appointment booked through the website.\n\n${renderText(details, true)}`,
      html: firmHtml,
    }),
    mailer.sendMail({
      from: config.fromEmail,
      to: details.email,
      subject: `Appointment Confirmation - ${details.date} at ${details.time} - Bansal Lawyers`,
      text: `Dear ${details.fullName},\n\nThank you for choosing Bansal Lawyers. Your appointment is confirmed.\n\n${renderText(details, false)}\n\n${notes.important}\n\nQuestions or changes? Call ${businessDetails.phone} or email ${businessDetails.email}.\n\nThe Bansal Lawyers Team`,
      html: clientHtml,
    }),
  ]);

  if (firm.status === "rejected") console.error(`[Booking Mail] Firm email failed for appointment ${details.appointmentId}:`, firm.reason);
  if (client.status === "rejected") console.error(`[Booking Mail] Client email failed for appointment ${details.appointmentId}:`, client.reason);
  return { firmSent: firm.status === "fulfilled", clientSent: client.status === "fulfilled" };
}
