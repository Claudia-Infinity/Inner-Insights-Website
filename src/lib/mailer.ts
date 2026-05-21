/**
 * Shared mailer for /api/contact and /api/subscribe.
 *
 * Uses Resend (https://resend.com). Set the following env vars in Vercel:
 *   RESEND_API_KEY            — your Resend secret key
 *   INNERINSIGHTS_TO_EMAIL    — destination address (default: claudia@innerinsights.shop)
 *   INNERINSIGHTS_FROM_EMAIL  — verified sender (default: hello@innerinsights.shop)
 *
 * If RESEND_API_KEY is not set, the function logs to the server and returns
 * `{ ok: true, mode: "logged" }`. This keeps the form working in dev / before
 * the key is provisioned, without losing data.
 */
import { Resend } from "resend";

const TO = process.env.INNERINSIGHTS_TO_EMAIL || "claudia@innerinsights.shop";
const FROM = process.env.INNERINSIGHTS_FROM_EMAIL || "Inner Insights <hello@innerinsights.shop>";

export interface SendOpts {
  subject: string;
  text: string;
  html?: string;
  replyTo?: string;
}

export async function sendNotification(opts: SendOpts): Promise<{ ok: boolean; mode: "sent" | "logged"; id?: string; error?: string }> {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.log(`[mailer/logged] to=${TO} subject=${opts.subject}\n${opts.text}\n`);
    return { ok: true, mode: "logged" };
  }
  try {
    const resend = new Resend(key);
    const result = await resend.emails.send({
      from: FROM,
      to: TO,
      subject: opts.subject,
      text: opts.text,
      ...(opts.html ? { html: opts.html } : {}),
      ...(opts.replyTo ? { replyTo: opts.replyTo } : {}),
    });
    if (result.error) {
      console.error("[mailer/resend] error:", result.error);
      return { ok: false, mode: "sent", error: result.error.message };
    }
    return { ok: true, mode: "sent", id: result.data?.id };
  } catch (e) {
    const msg = e instanceof Error ? e.message : "unknown";
    console.error("[mailer/resend] threw:", msg);
    return { ok: false, mode: "sent", error: msg };
  }
}
