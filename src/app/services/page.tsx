import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import JsonLd from "@/components/JsonLd";
import { CtaCard, FaqList, PageHero, SectionHeading } from "@/components/PageBits";
import { pageMetadata } from "@/lib/metadata";
import {
  breadcrumbSchema,
  faqSchema,
  itemListSchema,
  professionalServiceSchema,
} from "@/lib/structured-data";
import { SERVICES } from "@/lib/content/services";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Industrial software, edge AI, XR and spatial computing, and product engineering. Four disciplines from one Chennai studio, from factory floor integration to app launch.",
  path: "/services",
  keywords: ["industrial software development", "edge AI services", "industrial XR", "SCADA integration", "digital twin development", "mobile app development"],
});

const FAQS = [
  {
    question: "Do you integrate with legacy SCADA systems?",
    answer:
      "Yes. Much of our industrial software work is legacy modernization: reading data from older SCADA, PLC, and historian systems and connecting it to modern applications, without disrupting production.",
  },
  {
    question: "How is edge AI different from cloud AI?",
    answer:
      "Edge AI runs on hardware next to the machine, such as an industrial PC or smart camera. Decisions arrive in milliseconds, keep working when the network drops, and production data stays on site.",
  },
  {
    question: "Which XR devices do you build for?",
    answer:
      "Meta Quest, Apple Vision Pro, mobile AR on iOS and Android, and existing Microsoft HoloLens 2 fleets. For many field tasks a rugged tablet is the most practical choice.",
  },
  {
    question: "Do you build apps outside industry?",
    answer:
      "Yes. Our Product Engineering team builds mobile apps and SaaS platforms, including our own products Valam and Viduthi.",
  },
];

const STEPS = [
  { n: "01", label: "Discovery", body: "We learn the environment, the people, and the constraints: existing systems, hardware, connectivity, and what success looks like." },
  { n: "02", label: "Architecture", body: "We design for real conditions, such as sensor drift, network gaps, device limits, and privacy rules, before writing production code." },
  { n: "03", label: "Build", body: "Short iterations with working software at every step, tested where it will actually run." },
  { n: "04", label: "Handover", body: "You receive the code, infrastructure, and documentation, and keep full control. No lock-in." },
];

export default function Services() {
  return (
    <main style={{ paddingBottom: "100px" }}>
      <JsonLd
        data={[
          professionalServiceSchema(),
          itemListSchema(SERVICES.map((s) => ({ name: s.name, path: `/services/${s.slug}` }))),
          faqSchema(FAQS),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ]}
      />
      <Header />

      <section className="container subpage-hero">
        <PageHero
          eyebrow="What we build"
          title="Four disciplines,"
          accent="one team"
          crumbs={[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]}
          intro="We build software for the physical world and the people who work in it: integration for factory floors, AI that runs at the edge, spatial tools for complex equipment, and the apps and platforms that bring it all to users. One team covers the whole stack, so nothing gets lost between vendors."
        />

        <div className="flex-col gap-12">
          {SERVICES.map((s, i) => (
            <ScrollReveal key={s.slug}>
              <article className={`${i % 2 === 0 ? "kinetic-card tech-accent" : "kinetic-card-low"} hoverable service-row`}>
                <div className="service-row-main">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="material-symbols-outlined text-primary service-icon" style={{ fontSize: "3rem" }}>{s.icon}</span>
                    <span className="label-md service-number" style={{ fontSize: "4rem", color: "var(--ghost-number)", lineHeight: 1 }}>{s.number}</span>
                  </div>
                  <h2 className="label-md text-primary mb-4 card-heading-lg" style={{ fontSize: "2rem" }}>
                    <Link href={`/services/${s.slug}`} style={{ color: "inherit", textDecoration: "none" }}>{s.name}</Link>
                  </h2>
                  <p className="body-md mb-4" style={{ fontSize: "1.0625rem" }}>{s.description}</p>
                  <p className="audience-note" style={{ marginTop: 0, marginBottom: "2rem" }}>{s.audience}</p>
                  <Link href={`/services/${s.slug}`} className="btn-secondary label-md" style={{ textDecoration: "none" }}>Explore {s.shortName}</Link>
                </div>
                <div className="kinetic-card-low service-row-side">
                  <p className="label-sm mb-4">What we deliver</p>
                  <ul className="service-deliverables">
                    {s.deliverables.map((d) => <li key={d.title}>{d.title}</li>)}
                  </ul>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="py-20">
            <SectionHeading accent="work">How we</SectionHeading>
            <div className="work-grid">
              {STEPS.map((step) => (
                <div key={step.n} className="kinetic-card-low hoverable" style={{ padding: "2rem" }}>
                  <p className="label-sm mb-4">{step.n}</p>
                  <h3 className="card-title">{step.label}</h3>
                  <p className="body-md" style={{ fontSize: "0.9375rem" }}>{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="pb-20">
            <SectionHeading accent="questions">Frequently asked</SectionHeading>
            <FaqList faqs={FAQS} />
          </div>
        </ScrollReveal>

        <CtaCard />
      </section>

      <Footer />
    </main>
  );
}
