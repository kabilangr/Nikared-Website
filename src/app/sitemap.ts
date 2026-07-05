import type { MetadataRoute } from "next";
import { ROUTES, SITE_URL } from "@/lib/site";

// Required for metadata routes under `output: "export"`.
export const dynamic = "force-static";

// With `output: "export"` this is prerendered to /sitemap.xml at build time.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path === "/" ? "" : route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
