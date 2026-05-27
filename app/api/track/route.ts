import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));

  return NextResponse.json({
    ok: true,
    received: body,
    stored: false,
    reason: process.env.SUPABASE_SERVICE_ROLE_KEY
      ? "ready-for-persistence"
      : "mock-mode",
  });
}
