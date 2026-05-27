import type { LandingSection } from "@/lib/types";

export type RenderedSection = LandingSection & {
  index: number;
  anchor: string;
};

export function renderLandingSections(sections: LandingSection[]) {
  return sections.map((section, index) => ({
    ...section,
    index,
    anchor: section.id,
  }));
}

export function landingPageMetadata(title: string, artist: string) {
  return {
    title: `${title} | ${artist} | DistroKid Growth OS`,
    description: `Growth-optimized launch page for ${title} by ${artist}.`,
  };
}

export function schemaForReleasePage(
  title: string,
  artist: string,
  url: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "MusicAlbum",
    name: title,
    byArtist: artist,
    url,
  };
}
