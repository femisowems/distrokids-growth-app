import type { MetadataRoute } from "next";
import { buildSitemapEntries } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return buildSitemapEntries().map((path) => ({
    url: new URL(
      path,
      process.env.NEXT_PUBLIC_SITE_URL ??
        "https://distrokids-growth-app.vercel.app",
    ).toString(),
    lastModified: new Date(),
  }));
}
