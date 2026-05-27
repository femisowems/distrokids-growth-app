import {
  Card,
  CardBody,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experiments } from "@/lib/mock";
import { conversionRate, winnerForExperiment } from "@/lib/experiments";

export default function ExperimentsPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
      <div className="max-w-3xl">
        <div className="text-xs uppercase tracking-[0.3em] text-sunset-400">
          Experimentation
        </div>
        <h1 className="mt-4 text-5xl font-medium tracking-[-0.05em] text-white md:text-6xl">
          Optimize with lightweight, fast-moving tests.
        </h1>
        <p className="mt-5 text-lg leading-8 text-white/66">
          Run headline, CTA, hero image, and button experiments with a dashboard
          built for quick interpretation and decisive rollout.
        </p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {experiments.map((experiment) => {
          const winner = winnerForExperiment(experiment);
          return (
            <Card key={experiment.id} className="glass">
              <CardHeader>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <CardTitle>{experiment.name}</CardTitle>
                    <CardDescription>{experiment.objective}</CardDescription>
                  </div>
                  <Badge>{experiment.status}</Badge>
                </div>
              </CardHeader>
              <CardBody className="space-y-4">
                {experiment.variants.map((variant) => {
                  const rate = conversionRate(variant.conversions, 1000);
                  const active = variant.id === winner.id;
                  return (
                    <div
                      key={variant.id}
                      className={`rounded-3xl border p-4 ${active ? "border-neon-400/40 bg-neon-400/8" : "border-white/8 bg-white/5"}`}
                    >
                      <div className="flex items-center justify-between text-white">
                        <span>{variant.label}</span>
                        <span className="text-sm text-white/48">
                          {variant.conversions} conv
                        </span>
                      </div>
                      <div className="mt-2 text-sm text-white/54">
                        {variant.changes.join(" · ")}
                      </div>
                      <div className="mt-4 h-2 rounded-full bg-white/6">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-neon-400 to-accent-400"
                          style={{ width: `${Math.max(rate, 18)}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                    <div className="text-xs uppercase tracking-[0.3em] text-white/36">
                      Winner
                    </div>
                    <div className="mt-2 text-lg text-white">
                      {winner.label}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                    <div className="text-xs uppercase tracking-[0.3em] text-white/36">
                      Rate
                    </div>
                    <div className="mt-2 text-lg text-white">
                      {conversionRate(winner.conversions, 1000)}%
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                    <div className="text-xs uppercase tracking-[0.3em] text-white/36">
                      Status
                    </div>
                    <div className="mt-2 text-lg text-white">Roll out</div>
                  </div>
                </div>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
