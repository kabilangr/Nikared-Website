import type { Metadata } from "next";
import { SITE, absUrl, routePath } from "./site";

/** Default social image. Next replaces (not merges) nested openGraph objects,
 *  so every page must carry its own images or it ships without og:image. */
export const OG_IMAGE = {
  url: "/logo.png",
  width: 1776,
  height: 1049,
  alt: "Nika Red: Industrial Software, Edge AI, and XR Engineering Studio",
};

/**
 * Builds per-page Metadata with a self-referencing canonical URL and page-level
 * Open Graph / Twitter tags. Titles use the layout template ("%s | Nika Red"),
 * so pass the bare page title (e.g. "Services").
 */
export function pageMetadata({
  title,
  description,
  path,
  keywords,
  article,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  article?: { publishedTime: string; modifiedTime?: string; tags?: string[]; section?: string };
}): Metadata {
  const url = absUrl(path);
  const fullTitle = `${title} | ${SITE.name}`;

  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: {
      canonical: routePath(path),
    },
    openGraph: article
      ? {
          type: "article",
          siteName: SITE.name,
          locale: "en_US",
          url,
          title: fullTitle,
          description,
          images: [OG_IMAGE],
          publishedTime: article.publishedTime,
          modifiedTime: article.modifiedTime ?? article.publishedTime,
          authors: [SITE.name],
          section: article.section,
          tags: article.tags,
        }
      : {
          type: "website",
          siteName: SITE.name,
          locale: "en_US",
          url,
          title: fullTitle,
          description,
          images: [OG_IMAGE],
        },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
