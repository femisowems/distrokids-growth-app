import { NextResponse } from 'next/server';
import { experiments } from '@/lib/mock';
import { pickExperimentVariant } from '@/lib/experiments';

export async function POST(request: Request) {
  const { experimentId, seed } = await request.json();
  const experiment = experiments.find((item) => item.id === experimentId);

  if (!experiment) {
    return NextResponse.json({ ok: false, error: 'Experiment not found' }, { status: 404 });
  }

  const variant = pickExperimentVariant(experiment, seed ?? crypto.randomUUID());
  return NextResponse.json({ ok: true, variant });
}
