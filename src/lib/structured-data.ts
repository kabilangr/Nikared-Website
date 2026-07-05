/**
 * Schema.org JSON-LD builders. Each function returns a plain object that is
 * serialized into a <script type="application/ld+json"> tag by <JsonLd />.
 *
 * These help Google and other engines render rich results (organization
 * knowledge panel, sitelinks, FAQ accordions, breadcrumbs, service listings).
 */
import { SITE, SITE_URL } from "./site";

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
  const services = [
    {
      name: "Industrial Software Engineering (Engineering Foundry)",
      description:
        "Custom ERP, MES, and SCADA integration systems that connect PLCs, sensors, and edge gateways to modern enterprise interfaces without downtime.",
    },
    {
      name: "Edge AI & Machine Learning",
      description:
        "On-device inference, computer vision for quality control, sensor fusion, and predictive maintenance algorithms built for environments without reliable connectivity.",
    },
    {
      name: "XR & Spatial Computing",
      description:
        "Extended reality systems, digital twins, and AR maintenance overlays for industrial simulation, training, and field service on HoloLens, Meta Quest, and mobile AR.",
    },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/services#service`,
    name: `${SITE.name} — ${SITE.tagline}`,
    url: `${SITE_URL}/services`,
    provider: { "@id": ORG_ID },
    description:
      "Engineering Foundry, Edge AI & Machine Learning, and XR & Spatial Computing for manufacturing, logistics, energy, and heavy infrastructure.",
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "Place", name: "Worldwide" },
    ],
    serviceType: [
      "Industrial software development",
      "Edge AI engineering",
      "XR and spatial computing",
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
      item: `${SITE_URL}${c.path === "/" ? "" : c.path}`,
    })),
  };
}
