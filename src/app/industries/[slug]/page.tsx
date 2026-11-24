import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import JsonLd from "@/components/JsonLd";
import { CtaCard, PageHero, PostCard, SectionHeading } from "@/components/PageBits";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/structured-data";
import { INDUSTRIES, getIndustry } from "@/lib/content/industries";
import { getService } from "@/lib/content/services";
import { getAllPosts } from "@/lib/content/blog";

export const dynamicParams = false;

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) return {};
  return pageMetadata({ title: `Software for ${ind.name}`, description: ind.description, path: `/industries/${ind.slug}` });
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries" },
    { name: ind.name, path: `/industries/${ind.slug}` },
  ];
  const services = ind.services.map(getService).filter((s) => s !== undefined);
  const posts = getAllPosts().filter((p) => p.service === ind.services[0]).slice(0, 3);

  return (
    <main style={{ paddingBottom: "100px" }}>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Header />

      <section className="container subpage-hero">
        <PageHero eyebrow={ind.name} title={ind.headline} accent={ind.headlineAccent} intro={ind.intro} crumbs={crumbs} />

        <ScrollReveal>
          <div className="py-20" style={{ paddingTop: 0 }}>
            <SectionHeading accent="challenges">Common</SectionHeading>
            <div className="work-grid">
              {ind.challenges.map((c) => (
                <div key={c.title} className="kinetic-card-low hoverable" style={{ padding: "2rem" }}>
                  <h3 className="card-title">{c.title}</h3>
                  <p className="body-md" style={{ fontSize: "0.9375rem" }}>{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="kinetic-card tech-accent">
            <h2 className="label-md text-primary card-heading-lg mb-8" style={{ fontSize: "2rem" }}>What we build for {ind.name.toLowerCase()}</h2>
            <div className="card-grid-2">
              {ind.useCases.map((u) => {
                const svc = getService(u.service);
                return (
                  <div key={u.title}>
                    <h3 className="card-title">{u.title}</h3>
                    <p className="body-md mb-4">{u.body}</p>
                    {svc && <Link href={`/services/${svc.slug}`} className="tech-link label-sm">{svc.shortName} →</Link>}
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="py-20">
            <SectionHeading accent="services">Relevant</SectionHeading>
            <div className="card-grid-3">
              {services.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="kinetic-card-low hoverable link-card">
                  <span className="material-symbols-outlined text-primary mb-4" style={{ fontSize: "2rem" }}>{s.icon}</span>
                  <h3 className="card-title">{s.name}</h3>
                  <p className="body-md">{s.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {posts.length > 0 && (
          <ScrollReveal>
            <div>
              <SectionHeading accent="the blog">From</SectionHeading>
              <div className="card-grid-3">
                {posts.map((p) => <PostCard key={p.slug} post={p} />)}
              </div>
            </div>
          </ScrollReveal>
        )}

        <CtaCard title="Working in" accent={ind.name.toLowerCase()} body="Tell us about your operation and the problem you want to solve. We will tell you honestly whether we are the right fit." />
      </section>

      <Footer />
    </main>
  );
}
