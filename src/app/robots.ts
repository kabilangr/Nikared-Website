import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Required for metadata routes under `output: "export"`.
export const dynamic = "force-static";

// With `output: "export"` this is prerendered to /robots.txt at build time.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
