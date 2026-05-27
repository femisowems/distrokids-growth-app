import {
  Card,
  CardBody,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { analyticsEvents, campaigns } from "@/lib/mock";
import { conversionRate } from "@/lib/experiments";

const channels = [
  "tiktok",
  "instagram",
  "youtube",
  "spotify",
  "email",
  "organic",
] as const;

export default function AnalyticsPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
      <div className="max-w-3xl">
        <div className="text-xs uppercase tracking-[0.3em] text-neon-400">
          Analytics + attribution
        </div>
        <h1 className="mt-4 text-5xl font-medium tracking-[-0.05em] text-white md:text-6xl">
          Read growth like a release story.
        </h1>
        <p className="mt-5 text-lg leading-8 text-white/66">
          Track channels, sessions, conversion events, and retention curves with
          a marketing stack that speaks product.
        </p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        <Card className="glass lg:col-span-2">
          <CardHeader>
            <CardTitle>Channel performance</CardTitle>
            <CardDescription>
              Source-aware conversion tracking across the full funnel.
            </CardDescription>
          </CardHeader>
          <CardBody className="space-y-4">
            {channels.map((channel) => {
              const totalCampaigns = campaigns.filter(
                (campaign) => campaign.channel === channel,
              );
              const visits = totalCampaigns.reduce(
                (sum, campaign) => sum + campaign.visits,
                0,
              );
              const conversions = totalCampaigns.reduce(
                (sum, campaign) => sum + campaign.conversions,
                0,
              );
              const rate = conversionRate(conversions, visits);
              return (
                <div
                  key={channel}
                  className="rounded-3xl border border-white/8 bg-white/5 p-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-white capitalize">{channel}</div>
                    <div className="text-sm text-white/54">{rate}% CVR</div>
                  </div>
                  <div className="mt-3 h-3 overflow-hidden rounded-full bg-white/6">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-neon-400 via-accent-400 to-sunset-500"
                      style={{ width: `${Math.max(rate * 4, 18)}%` }}
                    />
                  </div>
                  <div className="mt-2 text-sm text-white/48">
                    {visits.toLocaleString()} visits ·{" "}
                    {conversions.toLocaleString()} conversions
                  </div>
                </div>
              );
            })}
          </CardBody>
        </Card>

        <Card className="glass">
          <CardHeader>
            <CardTitle>Event stream</CardTitle>
            <CardDescription>Server-side ingestion ready.</CardDescription>
          </CardHeader>
          <CardBody className="space-y-3">
            {analyticsEvents.map((event) => (
              <div
                key={`${event.event}-${event.timestamp}`}
                className="rounded-2xl border border-white/8 bg-white/5 p-4"
              >
                <div className="flex items-center justify-between">
                  <div className="text-white capitalize">
                    {event.event.replace(/_/g, " ")}
                  </div>
                  <div className="text-xs text-white/40">{event.channel}</div>
                </div>
                <div className="mt-1 text-xs text-white/36">
                  {event.timestamp}
                </div>
              </div>
            ))}
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
