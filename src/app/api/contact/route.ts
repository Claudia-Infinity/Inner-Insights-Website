import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body?.email || !body?.message) {
    return NextResponse.json({ error: "missing fields" }, { status: 400 });
  }

  // TODO: forward to email service (Resend / Mailgun / Postmark) or ticket system.
  console.log("[contact]", {
    name: body.name,
    email: body.email,
    phone: body.phone,
    message: body.message,
  });

  return NextResponse.json({ ok: true });
}
