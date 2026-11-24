import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import JsonLd from "@/components/JsonLd";
import { CtaCard, PageHero } from "@/components/PageBits";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, itemListSchema } from "@/lib/structured-data";
import { INDUSTRIES } from "@/lib/content/industries";

export const metadata = pageMetadata({
  title: "Industries",
  description:
    "Nika Red builds industrial software, edge AI, and XR for manufacturing, logistics and supply chain, energy and infrastructure, and heavy machinery OEMs.",
  path: "/industries",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Industries", path: "/industries" },
];

export default function Industries() {
  return (
    <main style={{ paddingBottom: "100px" }}>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          itemListSchema(INDUSTRIES.map((i) => ({ name: i.name, path: `/industries/${i.slug}` }))),
        ]}
      />
      <Header />

      <section className="container subpage-hero">
        <PageHero
          eyebrow="Who we work with"
          title="Industries we"
          accent="serve"
          crumbs={crumbs}
          intro="Our work is shaped by the constraints of physical operations: machines that cannot stop, sites with poor connectivity, and teams that need tools they can trust on a busy shift. These are the sectors where those constraints matter most."
        />

        <div className="card-grid-2">
          {INDUSTRIES.map((ind, i) => (
            <ScrollReveal key={ind.slug} delay={i * 80}>
              <Link href={`/industries/${ind.slug}`} className="kinetic-card hoverable link-card industry-card">
                <span className="material-symbols-outlined text-primary mb-4" style={{ fontSize: "2.75rem" }}>{ind.icon}</span>
                <h2 className="card-title" style={{ fontSize: "1.75rem" }}>{ind.name}</h2>
                <p className="body-md mb-8">{ind.description}</p>
                <ul className="service-deliverables mb-8">
                  {ind.useCases.slice(0, 3).map((u) => <li key={u.title}>{u.title}</li>)}
                </ul>
                <span className="tech-link label-md">Explore {ind.name.toLowerCase()} →</span>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <CtaCard title="Don't see your" accent="industry" body="If your operation depends on machines, sensors, or people working in complex physical spaces, we would like to hear about it." label="Tell us about it" />
      </section>

      <Footer />
    </main>
  );
}
