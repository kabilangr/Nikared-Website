import type { Metadata } from "next";
import { SITE } from "./site";

/**
 * Builds per-page Metadata with a self-referencing canonical URL and page-level
 * Open Graph / Twitter tags. Titles use the layout template ("%s | Nika Red"),
 * so pass the bare page title (e.g. "Services").
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      url: `${SITE.url}${path === "/" ? "" : path}`,
      title: `${title} | ${SITE.name}`,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE.name}`,
      description,
    },
  };
}
