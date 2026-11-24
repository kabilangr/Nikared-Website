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
    "Nika Red builds industrial software, edge AI, XR, and field apps for manufacturing, logistics and supply chain, energy and infrastructure, and heavy machinery OEMs.",
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
          intro="Our work is shaped by the constraints of physical operations: machines that cannot stop, sites with weak connectivity, data locked inside equipment, and people who need tools they can trust on a busy shift. These are the sectors where those constraints matter most, and where software that respects them pays for itself."
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

        <ScrollReveal>
          <div className="py-20">
            <h2 className="display-lg mb-12 section-heading-lg" style={{ fontSize: "2.75rem" }}>
              The same rules, <span className="text-primary italic">every sector</span>
            </h2>
            <div className="card-grid-3">
              {[
                { icon: "visibility", title: "Read before we write", body: "We connect read-only to existing machines and systems first. Production carries on unchanged while we learn how the operation really behaves." },
                { icon: "monitoring", title: "Baseline before we build", body: "We agree the numbers that matter, such as downtime, accuracy, or time to repair, and record them before anything changes, so results are measured rather than claimed." },
                { icon: "key", title: "Yours when we leave", body: "Code, infrastructure, and documentation live in your accounts. Your team or another partner can run and extend everything we build." },
              ].map((r) => (
                <div key={r.title} className="kinetic-card-low" style={{ padding: "2rem" }}>
                  <span className="material-symbols-outlined text-primary mb-4" style={{ fontSize: "2.25rem" }}>{r.icon}</span>
                  <h3 className="card-title">{r.title}</h3>
                  <p className="body-md" style={{ fontSize: "0.9375rem" }}>{r.body}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <CtaCard title="Don't see your" accent="industry" body="If your operation depends on machines, sensors, or people working in complex physical spaces, the same approach applies. Tell us what you run and what is getting in the way." label="Tell us about it" />
      </section>

      <Footer />
    </main>
  );
}
