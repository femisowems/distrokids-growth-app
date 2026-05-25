import type { Experiment } from '@/lib/types';

export function pickExperimentVariant(experiment: Experiment, seed: string) {
  const total = experiment.variants.reduce((sum, variant) => sum + variant.weight, 0);
  const hash = seed.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
  let cursor = hash % total;

  for (const variant of experiment.variants) {
    if (cursor < variant.weight) return variant;
    cursor -= variant.weight;
  }

  return experiment.variants[0];
}

export function conversionRate(conversions: number, visits: number) {
  if (visits === 0) return 0;
  return Number(((conversions / visits) * 100).toFixed(2));
}

export function winnerForExperiment(experiment: Experiment) {
  return experiment.variants.reduce((winner, variant) => (variant.conversions > winner.conversions ? variant : winner));
}
