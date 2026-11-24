import type { MetadataRoute } from "next";
import { ROUTES, absUrl } from "@/lib/site";
import { SERVICES } from "@/lib/content/services";
import { INDUSTRIES } from "@/lib/content/industries";
import { getAllPosts } from "@/lib/content/blog";
import { PRODUCTS } from "@/lib/content/products";

// Required for metadata routes under `output: "export"`.
export const dynamic = "force-static";

const abs = absUrl;

// With `output: "export"` this is prerendered to /sitemap.xml at build time.
export default function sitemap(): MetadataRoute.Sitemap {
  const buildDate = new Date();
  const posts = getAllPosts();
  const latestPost = posts[0] ? new Date(posts[0].updated ?? posts[0].date) : buildDate;

  const staticRoutes = ROUTES.map((route) => ({
    url: abs(route.path),
    lastModified: route.path === "/blog" ? latestPost : buildDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const serviceRoutes = SERVICES.map((s) => ({
    url: abs(`/services/${s.slug}`),
    lastModified: buildDate,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const industryRoutes = INDUSTRIES.map((i) => ({
    url: abs(`/industries/${i.slug}`),
    lastModified: buildDate,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const productRoutes = PRODUCTS.map((p) => ({
    url: abs(`/products/${p.slug}`),
    lastModified: buildDate,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const postRoutes = posts.map((p) => ({
    url: abs(`/blog/${p.slug}`),
    lastModified: new Date(p.updated ?? p.date),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...productRoutes, ...industryRoutes, ...postRoutes];
}
