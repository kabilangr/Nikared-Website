/**
 * Schema.org JSON-LD builders. Each function returns a plain object that is
 * serialized into a <script type="application/ld+json"> tag by <JsonLd />.
 *
 * These help Google and other engines render rich results (organization
 * knowledge panel, sitelinks, FAQ accordions, breadcrumbs, service listings).
 */
import { SITE, SITE_URL, absUrl } from "./site";
import { SERVICES } from "./content/services";

// Stable @id anchors so nodes can reference each other across the graph.
const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: {
      "@type": "ImageObject",
      url: SITE.logo,
    },
    image: SITE.ogImage,
    description: SITE.description,
    foundingDate: SITE.foundingDate,
    email: SITE.email,
    slogan: "Industrial Intelligence, Forged in Code",
    knowsAbout: [
      "Industrial software engineering",
      "Edge AI and on-device machine learning",
      "Computer vision for quality control",
      "Predictive maintenance",
      "SCADA and PLC integration",
      "Digital twins",
      "Spatial computing and extended reality (XR)",
      "Legacy system modernization",
      "Mobile app and SaaS product engineering",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.locality,
      addressRegion: SITE.region,
      addressCountry: SITE.countryCode,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: SITE.email,
      areaServed: "Worldwide",
      availableLanguage: ["English"],
    },
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "Place", name: "Worldwide" },
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    inLanguage: "en",
    publisher: { "@id": ORG_ID },
  };
}

/** Professional-services offering. Rendered on the Services page. */
export function professionalServiceSchema() {
  const services = SERVICES.map((s) => ({ name: s.name, description: s.description }));

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${absUrl("/services")}#service`,
    name: `${SITE.name} | ${SITE.tagline}`,
    url: absUrl("/services"),
    provider: { "@id": ORG_ID },
    description:
      "Industrial software, edge AI, XR and spatial computing, and product engineering for manufacturing, logistics, energy, infrastructure, and consumer products.",
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "Place", name: "Worldwide" },
    ],
    serviceType: [
      "Industrial software development",
      "Edge AI engineering",
      "XR and spatial computing",
      "Product engineering",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Core disciplines",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.description,
        },
      })),
    },
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

/** Breadcrumb trail. `crumbs` should include the current page as the last item. */
export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absUrl(c.path),
    })),
  };
}

/** A single service, rendered on /services/<slug>. */
export function serviceSchema(s: { slug: string; name: string; description: string; deliverables: { title: string }[] }) {
  const url = absUrl(`/services/${s.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: s.name,
    description: s.description,
    url,
    serviceType: s.name,
    provider: { "@id": ORG_ID },
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "Place", name: "Worldwide" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: s.name,
      itemListElement: s.deliverables.map((d) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: d.title },
      })),
    },
  };
}

type PostLike = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  category: string;
  tags: string[];
};

/** Article markup for /blog/<slug>. */
export function blogPostingSchema(p: PostLike & { wordCount?: number; image?: string }) {
  const url = absUrl(`/blog/${p.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    headline: p.title,
    description: p.description,
    image: p.image ? `${SITE_URL}${p.image}` : SITE.ogImage,
    datePublished: p.date,
    dateModified: p.updated ?? p.date,
    articleSection: p.category,
    keywords: p.tags.join(", "),
    inLanguage: "en",
    ...(p.wordCount ? { wordCount: p.wordCount } : {}),
    author: { "@type": "Organization", "@id": ORG_ID, name: SITE.name, url: SITE.url },
    publisher: { "@type": "Organization", "@id": ORG_ID, name: SITE.name, logo: { "@type": "ImageObject", url: SITE.logo } },
    isPartOf: { "@id": `${absUrl("/blog")}#blog` },
  };
}

/** Blog index markup for /blog. */
export function blogSchema(posts: PostLike[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${absUrl("/blog")}#blog`,
    url: absUrl("/blog"),
    name: `${SITE.name} Engineering Blog`,
    description:
      "Practical articles on industrial software, edge AI, and XR from the engineers at Nika Red.",
    inLanguage: "en",
    publisher: { "@id": ORG_ID },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: absUrl(`/blog/${p.slug}`),
      datePublished: p.date,
      description: p.description,
    })),
  };
}

/** Simple ItemList for hub pages (services, industries). */
export function itemListSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      url: absUrl(it.path),
    })),
  };
}

/** SoftwareApplication markup for a product built by Nika Red. */
export function softwareApplicationSchema(p: {
  slug: string;
  name: string;
  description: string;
  url: string;
  logo: string;
  schema: { applicationCategory: string; operatingSystem: string; offers: { price?: string; lowPrice?: string; priceCurrency: string } };
}) {
  const offers = p.schema.offers.lowPrice
    ? { "@type": "AggregateOffer", lowPrice: p.schema.offers.lowPrice, priceCurrency: p.schema.offers.priceCurrency }
    : { "@type": "Offer", price: p.schema.offers.price, priceCurrency: p.schema.offers.priceCurrency };
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${absUrl(`/products/${p.slug}`)}#app`,
    name: p.name,
    description: p.description,
    url: p.url,
    image: `${SITE_URL}${p.logo}`,
    applicationCategory: p.schema.applicationCategory,
    operatingSystem: p.schema.operatingSystem,
    offers,
    creator: { "@type": "Organization", "@id": ORG_ID, name: SITE.name, url: SITE.url },
    publisher: { "@type": "Organization", "@id": ORG_ID, name: SITE.name, url: SITE.url },
  };
}
