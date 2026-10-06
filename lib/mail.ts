import nodemailer, { Transporter } from "nodemailer";
import type { ContactEnquiry } from "@/lib/contact";

// Cached Nodemailer transporter
let transporter: Transporter | null = null;

export interface MailConfig {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  fromEmail: string;
  receiverEmail: string;
}

/**
 * Reads mail configuration from environment variables.
 */
export function getMailConfig(): MailConfig | null {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  const port = Number(process.env.SMTP_PORT || 587);
  const secure = process.env.SMTP_SECURE === "true" || port === 465;
  const fromEmail =
    process.env.SMTP_FROM_EMAIL ||
    `"Bansal Lawyers Melbourne" <${user}>`;
  const receiverEmail =
    process.env.NOTIFICATION_RECEIVER_EMAIL ||
    process.env.ADMIN_EMAIL ||
    "info@bansallawyers.com.au";

  return {
    host,
    port,
    secure,
    user,
    pass,
    fromEmail,
    receiverEmail,
  };
}

/**
 * Returns a cached Nodemailer transporter or creates a new one.
 */
export function getMailTransporter(): Transporter | null {
  if (transporter) return transporter;

  const config = getMailConfig();
  if (!config) return null;

  try {
    transporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.secure,
      auth: {
        user: config.user,
        pass: config.pass,
      },
      tls: {
        rejectUnauthorized: process.env.NODE_ENV === "production",
      },
    });

    return transporter;
  } catch (error) {
    console.error("[Mailer] Failed to create SMTP transporter:", error);
    return null;
  }
}

/**
 * Formats a matter type slug into a human-readable title.
 */
function formatMatterType(type: string): string {
  const map: Record<string, string> = {
    migration: "Immigration & Visas",
    "family-law": "Family Law & Divorce",
    "criminal-law": "Criminal Law Defence",
    "commercial-law": "Commercial & Business Law",
    "property-law": "Property & Conveyancing",
    "civil-law": "Civil Litigation & Disputes",
    other: "General Legal Enquiry",
  };
  return map[type] || type;
}

/**
 * Sends notification email to the firm when a new enquiry is submitted.
 */
export async function sendEnquiryNotificationToFirm(
  enquiry: ContactEnquiry,
  enquiryId?: number
): Promise<{ success: boolean; messageId?: string; error?: string }> {
  const config = getMailConfig();
  const mailer = getMailTransporter();

  const formattedDate = new Date().toLocaleString("en-AU", {
    timeZone: "Australia/Melbourne",
    dateStyle: "full",
    timeStyle: "short",
  });

  const matterTitle = formatMatterType(enquiry.matterType);
  const refCode = enquiryId ? `BL-${enquiryId}` : `BL-${Date.now().toString().slice(-6)}`;

  // If mailer is unconfigured, log clean message and return gracefully
  if (!config || !mailer) {
    console.log(
      `[Mailer: Ready for configuration] New Enquiry received (${refCode}) from ${enquiry.name} <${enquiry.email}> for ${matterTitle}. (SMTP credentials not yet entered in .env.local)`
    );
    return {
      success: false,
      error: "SMTP_NOT_CONFIGURED",
    };
  }

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>New Legal Enquiry - ${enquiry.name}</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1e293b; background-color: #f1f5f9; margin: 0; padding: 24px; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; }
        .header { background: #071324; color: #ffffff; padding: 28px; text-align: left; border-bottom: 3px solid #1d4ed8; }
        .header h1 { margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.02em; }
        .header p { margin: 6px 0 0; color: #94a3b8; font-size: 13px; }
        .content { padding: 28px; }
        .badge { display: inline-block; background: #eff6ff; color: #1d4ed8; border: 1px solid #bfdbfe; font-size: 12px; font-weight: 600; padding: 4px 10px; border-radius: 9999px; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 0.05em; }
        .field-group { margin-bottom: 18px; }
        .label { font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 4px; }
        .value { font-size: 15px; color: #0f172a; font-weight: 500; }
        .value a { color: #1d4ed8; text-decoration: none; }
        .message-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-top: 6px; font-size: 14px; color: #334155; white-space: pre-wrap; line-height: 1.6; }
        .footer { background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 18px 28px; font-size: 12px; color: #64748b; text-align: center; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Bansal Lawyers — New Legal Enquiry</h1>
          <p>Received on ${formattedDate} (Melbourne Time) · Ref: ${refCode}</p>
        </div>
        <div class="content">
          <span class="badge">${matterTitle}</span>
          
          <div class="field-group">
            <div class="label">Prospective Client</div>
            <div class="value"><strong>${enquiry.name}</strong></div>
          </div>

          <div style="display: flex; gap: 20px; flex-wrap: wrap;">
            <div class="field-group" style="flex: 1; min-width: 200px;">
              <div class="label">Email Address</div>
              <div class="value"><a href="mailto:${enquiry.email}">${enquiry.email}</a></div>
            </div>
            <div class="field-group" style="flex: 1; min-width: 200px;">
              <div class="label">Phone Number</div>
              <div class="value"><a href="tel:${enquiry.phone.replace(/\s+/g, "")}">${enquiry.phone}</a></div>
            </div>
          </div>

          <div class="field-group">
            <div class="label">Matter Category</div>
            <div class="value">${matterTitle}</div>
          </div>

          <div class="field-group">
            <div class="label">Subject Line</div>
            <div class="value">${enquiry.subject}</div>
          </div>

          <div class="field-group">
            <div class="label">Message / Details</div>
            <div class="message-box">${enquiry.message}</div>
          </div>
        </div>
        <div class="footer">
          Bansal Lawyers Melbourne Website Notification System · Level 1, 530 Little Collins St, Melbourne VIC 3000
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    const info = await mailer.sendMail({
      from: config.fromEmail,
      to: config.receiverEmail,
      replyTo: `${enquiry.name} <${enquiry.email}>`,
      subject: `[New Enquiry] ${matterTitle} — ${enquiry.name} (${refCode})`,
      text: `New Legal Enquiry Received\n\nRef: ${refCode}\nName: ${enquiry.name}\nEmail: ${enquiry.email}\nPhone: ${enquiry.phone}\nMatter: ${matterTitle}\nSubject: ${enquiry.subject}\n\nMessage:\n${enquiry.message}\n\nReceived: ${formattedDate}`,
      html: htmlContent,
    });

    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("[Mailer] Failed to send email to firm:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "SMTP send failed",
    };
  }
}

/**
 * Sends a polite, professional acknowledgement email to the client.
 */
export async function sendClientAcknowledgement(
  enquiry: ContactEnquiry
): Promise<{ success: boolean; messageId?: string }> {
  const config = getMailConfig();
  const mailer = getMailTransporter();

  if (!config || !mailer) {
    return { success: false };
  }

  const matterTitle = formatMatterType(enquiry.matterType);

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Thank You for Contacting Bansal Lawyers</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1e293b; background-color: #f1f5f9; margin: 0; padding: 24px; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; }
        .header { background: #071324; color: #ffffff; padding: 28px; text-align: left; border-bottom: 3px solid #1d4ed8; }
        .header h1 { margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.02em; }
        .content { padding: 28px; }
        .info-card { background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 18px; margin: 20px 0; }
        .info-card h4 { margin: 0 0 8px; color: #1d4ed8; font-size: 14px; }
        .info-card p { margin: 0; font-size: 13px; color: #1e3a8a; line-height: 1.5; }
        .footer { background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 18px 28px; font-size: 12px; color: #64748b; text-align: center; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Bansal Lawyers Melbourne</h1>
        </div>
        <div class="content">
          <p>Dear ${enquiry.name},</p>
          <p>Thank you for reaching out to <strong>Bansal Lawyers</strong>. We have successfully received your enquiry regarding <strong>${matterTitle}</strong>.</p>
          
          <div class="info-card">
            <h4>What happens next?</h4>
            <p>Our Melbourne legal team reviews all incoming enquiries promptly. A qualified practitioner will review the details you provided and contact you via phone or email during standard business hours to discuss your matter and next steps.</p>
          </div>

          <p>If your legal issue is time-sensitive (such as an urgent court date, police interview, tribunal deadline, or immediate visa refusal), please contact our office directly by telephone:</p>

          <p style="font-size: 16px;">
            <strong>Phone:</strong> <a href="tel:+61422905860" style="color: #1d4ed8; font-weight: 600;">0422 905 860</a><br>
            <strong>Email:</strong> <a href="mailto:info@bansallawyers.com.au" style="color: #1d4ed8;">info@bansallawyers.com.au</a><br>
            <strong>Office:</strong> Level 1, 530 Little Collins Street, Melbourne VIC 3000
          </p>

          <p style="margin-top: 24px; color: #64748b; font-size: 13px;">
            Warm regards,<br>
            <strong>The Team at Bansal Lawyers Melbourne</strong>
          </p>
        </div>
        <div class="footer">
          This is an automated confirmation of your enquiry sent from Bansal Lawyers Melbourne.
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    const info = await mailer.sendMail({
      from: config.fromEmail,
      to: enquiry.email,
      subject: `Enquiry Received — Bansal Lawyers Melbourne (${matterTitle})`,
      text: `Dear ${enquiry.name},\n\nThank you for reaching out to Bansal Lawyers. We have received your enquiry regarding ${matterTitle}.\n\nA member of our legal team will review your enquiry and contact you during business hours.\n\nFor urgent matters, please call 0422 905 860.\n\nWarm regards,\nBansal Lawyers Melbourne`,
      html: htmlContent,
    });

    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.warn("[Mailer] Could not send client confirmation email:", error);
    return { success: false };
  }
}

/**
 * Verifies SMTP connection health.
 */
export async function checkMailerHealth(): Promise<{
  configured: boolean;
  connected: boolean;
  message: string;
}> {
  const config = getMailConfig();
  if (!config) {
    return {
      configured: false,
      connected: false,
      message: "SMTP settings not configured. Set SMTP_HOST, SMTP_USER, SMTP_PASS in .env.local",
    };
  }

  const mailer = getMailTransporter();
  if (!mailer) {
    return {
      configured: true,
      connected: false,
      message: "Failed to initialize Nodemailer transporter",
    };
  }

  try {
    await mailer.verify();
    return {
      configured: true,
      connected: true,
      message: `SMTP connection established (${config.host}:${config.port})`,
    };
  } catch (error) {
    return {
      configured: true,
      connected: false,
      message: error instanceof Error ? error.message : "SMTP connection failed",
    };
  }
}
