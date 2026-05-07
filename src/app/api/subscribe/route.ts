import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const email = body?.email;
  const source = body?.source ?? "unknown";

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ error: "invalid email" }, { status: 400 });
  }

  // TODO: forward to Mailchimp / ConvertKit / custom store.
  // For now, log so captures show up in server logs.
  console.log(`[subscribe] ${source}: ${email}`);

  return NextResponse.json({ ok: true });
}
