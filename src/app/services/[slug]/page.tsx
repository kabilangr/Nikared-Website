import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import JsonLd from "@/components/JsonLd";
import { CtaCard, FaqList, PageHero, PostCard, SectionHeading } from "@/components/PageBits";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/structured-data";
import { SERVICES, getService } from "@/lib/content/services";
import { INDUSTRIES } from "@/lib/content/industries";
import { getPostsForService } from "@/lib/content/blog";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return pageMetadata({ title: s.name, description: s.description, path: `/services/${s.slug}`, keywords: s.keywords });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: s.name, path: `/services/${s.slug}` },
  ];
  const posts = getPostsForService(s.slug).slice(0, 3);
  const industries = INDUSTRIES.filter((i) => i.services.includes(s.slug));
  const others = SERVICES.filter((o) => o.slug !== s.slug);

  return (
    <main style={{ paddingBottom: "100px" }}>
      <JsonLd data={[serviceSchema(s), faqSchema(s.faqs), breadcrumbSchema(crumbs)]} />
      <Header />

      <section className="container subpage-hero">
        <PageHero eyebrow={`${s.number} · ${s.shortName}`} title={s.headline} accent={s.headlineAccent} intro={s.intro} crumbs={crumbs}>
          <p className="label-sm audience-note">{s.audience}</p>
          <div className="flex gap-4 mt-8 hero-actions">
            <Link href="/contact" className="btn-primary label-md" style={{ textDecoration: "none" }}>Discuss your project</Link>
            <Link href="/services" className="btn-secondary label-md" style={{ textDecoration: "none" }}>All services</Link>
          </div>
        </PageHero>

        {/* Problems */}
        <ScrollReveal>
          <div className="py-20">
            <SectionHeading accent="we solve">Problems</SectionHeading>
            <div className="card-grid-3">
              {s.problems.map((p) => (
                <div key={p.title} className="kinetic-card-low hoverable" style={{ padding: "2rem" }}>
                  <h3 className="card-title">{p.title}</h3>
                  <p className="body-md">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Deliverables */}
        <ScrollReveal>
          <div className="kinetic-card tech-accent">
            <div className="flex items-center gap-4 mb-8">
              <span className="material-symbols-outlined text-primary" style={{ fontSize: "2.5rem" }}>{s.icon}</span>
              <h2 className="label-md text-primary card-heading-lg" style={{ fontSize: "2rem" }}>What we deliver</h2>
            </div>
            <div className="card-grid-2">
              {s.deliverables.map((d) => (
                <div key={d.title}>
                  <h3 className="card-title">{d.title}</h3>
                  <p className="body-md">{d.body}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Approach */}
        <ScrollReveal>
          <div className="py-20">
            <SectionHeading accent="approach">Our</SectionHeading>
            <div className="work-grid">
              {s.approach.map((step, i) => (
                <div key={step.title} className="kinetic-card-low hoverable" style={{ padding: "2rem" }}>
                  <p className="label-sm mb-4">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="card-title">{step.title}</h3>
                  <p className="body-md" style={{ fontSize: "0.9375rem" }}>{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Stack */}
        <ScrollReveal>
          <div className="pb-20">
            <h2 className="label-sm text-primary mb-4">Technologies we work with</h2>
            <ul className="chip-list">
              {s.stack.map((t) => (
                <li key={t} className="label-sm ghost-border">{t}</li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        {/* Industries */}
        {industries.length > 0 && (
          <ScrollReveal>
            <div className="pb-20">
              <SectionHeading accent="we serve">Industries</SectionHeading>
              <div className="work-grid">
                {industries.map((ind) => (
                  <Link key={ind.slug} href={`/industries/${ind.slug}`} className="kinetic-card-low hoverable link-card">
                    <span className="material-symbols-outlined text-primary mb-4" style={{ fontSize: "2rem" }}>{ind.icon}</span>
                    <h3 className="card-title">{ind.name}</h3>
                    <span className="tech-link label-md">Learn more →</span>
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* FAQ */}
        <ScrollReveal>
          <div className="pb-20">
            <SectionHeading accent="questions">Frequently asked</SectionHeading>
            <FaqList faqs={s.faqs} />
          </div>
        </ScrollReveal>

        {/* Related posts */}
        {posts.length > 0 && (
          <ScrollReveal>
            <div className="pb-20">
              <SectionHeading accent="reading">Further</SectionHeading>
              <div className="card-grid-3">
                {posts.map((p) => <PostCard key={p.slug} post={p} />)}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Other services */}
        <ScrollReveal>
          <div>
            <h2 className="label-sm text-primary mb-4">Other disciplines</h2>
            <div className="card-grid-2">
              {others.map((o) => (
                <Link key={o.slug} href={`/services/${o.slug}`} className="kinetic-card-low hoverable link-card">
                  <span className="label-sm">{o.number}</span>
                  <h3 className="card-title">{o.name}</h3>
                  <p className="body-md">{o.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <CtaCard title="Ready to discuss" accent="your project" body={`Tell us about the problem and the environment. We will tell you how ${s.name.toLowerCase()} could help and what a first phase would look like.`} />
      </section>

      <Footer />
    </main>
  );
}
