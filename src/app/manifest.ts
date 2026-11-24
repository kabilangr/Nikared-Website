import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

// Required for metadata routes under `output: "export"`.
export const dynamic = "force-static";

// With `output: "export"` this is prerendered to /manifest.webmanifest at build time.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name} | ${SITE.tagline}`,
    short_name: SITE.name,
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#131417",
    theme_color: "#131417",
    lang: "en",
    categories: ["business", "technology", "productivity"],
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
