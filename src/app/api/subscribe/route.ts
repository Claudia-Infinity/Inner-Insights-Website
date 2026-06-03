import { NextResponse } from "next/server";
import { sendNotification } from "@/lib/mailer";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const email = body?.email;
  const source = body?.source ?? "unknown";
  const lifePathNumber = body?.lifePathNumber;
  const dob = body?.dob;

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ error: "invalid email" }, { status: 400 });
  }

  const lines = [
    `Source: ${source}`,
    `Email: ${email}`,
  ];
  if (lifePathNumber) lines.push(`Life Path Number: ${lifePathNumber}`);
  if (dob) lines.push(`Birthday: ${dob}`);
  lines.push("", `Captured at ${new Date().toISOString()}`);

  await sendNotification({
    subject: `New subscriber — ${source}`,
    text: lines.join("\n"),
    replyTo: email,
  });

  return NextResponse.json({ ok: true });
}
