import { NextResponse } from "next/server";
import { sendNotification } from "@/lib/mailer";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body?.email || !body?.message) {
    return NextResponse.json({ error: "missing fields" }, { status: 400 });
  }

  const name = String(body.name ?? "(no name)");
  const phone = String(body.phone ?? "");
  const text = [
    `Name: ${name}`,
    `Email: ${body.email}`,
    phone ? `Phone: ${phone}` : null,
    "",
    "Message:",
    String(body.message),
    "",
    `Captured at ${new Date().toISOString()}`,
  ].filter(Boolean).join("\n");

  await sendNotification({
    subject: `New contact form — ${name}`,
    text,
    replyTo: String(body.email),
  });

  return NextResponse.json({ ok: true });
}
