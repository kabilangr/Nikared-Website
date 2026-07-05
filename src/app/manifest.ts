import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

// Required for metadata routes under `output: "export"`.
export const dynamic = "force-static";

// With `output: "export"` this is prerendered to /manifest.webmanifest at build time.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name} — ${SITE.tagline}`,
    short_name: SITE.name,
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#131417",
    theme_color: "#131417",
    lang: "en",
    categories: ["business", "technology", "productivity"],
    icons: [
      {
        src: "/icon.png",
        sizes: "1024x1024",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo.png",
        sizes: "1776x1049",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
