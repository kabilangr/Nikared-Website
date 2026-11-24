/**
 * Single source of truth for site-wide constants used across metadata,
 * structured data, the sitemap, robots, and the web manifest.
 */

export const SITE_URL = "https://nikared.com";

/** Normalizes a route path to the trailing-slash form the static export serves. */
export function routePath(path: string) {
  if (path === "/" || path === "") return "/";
  return path.endsWith("/") ? path : `${path}/`;
}

/** Absolute URL for a route, matching canonical, sitemap, and schema URLs. */
export function absUrl(path: string) {
  return `${SITE_URL}${routePath(path)}`;
}

export const SITE = {
  name: "Nika Red",
  legalName: "NIKA RED PRIVATE LIMITED",
  url: SITE_URL,
  /** Raster logo: social platforms don't reliably render SVG for OG/schema. */
  logo: `${SITE_URL}/logo.png`,
  ogImage: `${SITE_URL}/logo.png`,
  email: "contact@nikared.com",
  foundingDate: "2023",
  locality: "Chennai",
  region: "Tamil Nadu",
  country: "India",
  countryCode: "IN",
  tagline: "Industrial Software, Edge AI, and XR Engineering Studio",
  description:
    "Nika Red is a Chennai-based engineering studio building custom industrial software, edge AI systems, and spatial computing (XR) solutions for manufacturing, logistics, and heavy infrastructure.",
} as const;

/** Canonical routes, reused by the sitemap and breadcrumb builders. */
export const ROUTES = [
  { path: "/", name: "Home", changeFrequency: "monthly", priority: 1.0 },
  { path: "/services", name: "Services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/products", name: "Products", changeFrequency: "monthly", priority: 0.85 },
  { path: "/industries", name: "Industries", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blog", name: "Blog", changeFrequency: "weekly", priority: 0.8 },
  { path: "/about", name: "About", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact", name: "Contact", changeFrequency: "monthly", priority: 0.8 },
  { path: "/privacy", name: "Privacy Policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", name: "Terms of Service", changeFrequency: "yearly", priority: 0.3 },
] as const;
