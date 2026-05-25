import { NextResponse } from 'next/server';
import { generateMarketingAsset } from '@/lib/ai';

export async function POST(request: Request) {
  const payload = await request.json();
  const result = await generateMarketingAsset(payload);

  return NextResponse.json({
    ok: true,
    result
  });
}
