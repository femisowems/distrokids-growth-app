import posthog from "posthog-js";
import type { AnalyticsEvent } from "@/lib/types";

export function initPostHog() {
  if (typeof window === "undefined") return;
  if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) return;

  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host:
      process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com",
    capture_pageview: false,
    capture_pageleave: true,
  });
}

export function trackEvent(
  event: string,
  properties: Record<string, string | number | boolean | null> = {},
) {
  if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    posthog.capture(event, properties);
  }

  return fetch("/api/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ event, properties }),
  });
}

export function trackFunnelStep(step: string, event: AnalyticsEvent) {
  return trackEvent(`funnel_${step}`, {
    channel: event.channel,
    campaignId: event.campaignId ?? null,
    releaseId: event.releaseId ?? null,
  });
}

export function attributionFromSearchParams(searchParams: URLSearchParams) {
  return {
    utmSource: searchParams.get("utm_source") ?? "direct",
    utmMedium: searchParams.get("utm_medium") ?? "none",
    utmCampaign: searchParams.get("utm_campaign") ?? "unknown",
    referrer:
      searchParams.get("ref") ??
      (typeof document !== "undefined" ? document.referrer : "direct"),
  };
}
