import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import JsonLd from "@/components/JsonLd";
import { Breadcrumbs, CtaCard, SectionHeading } from "@/components/PageBits";
import { PhoneShot, PlatformList, ProductMark, ProductVisual } from "@/components/ProductBits";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, softwareApplicationSchema } from "@/lib/structured-data";
import { PRODUCTS, getProduct, productHost } from "@/lib/content/products";

export const dynamicParams = false;

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  const soon = p.status === "coming-soon" ? " (coming soon)" : "";
  return pageMetadata({ title: `${p.name}: ${p.category}${soon}`, description: p.description, path: `/products/${p.slug}` });
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: p.name, path: `/products/${p.slug}` },
  ];
  const others = PRODUCTS.filter((o) => o.slug !== p.slug);
  const host = productHost(p);

  return (
    <main style={{ paddingBottom: "100px" }}>
      <JsonLd data={[softwareApplicationSchema(p), breadcrumbSchema(crumbs)]} />
      <Header />

      <section className="container subpage-hero" style={{ ["--product-accent" as string]: p.accent }}>
        <Breadcrumbs crumbs={crumbs} />

        <div className="product-hero">
          <div>
            <ProductMark product={p} size={64} />
            <h1 className="display-lg mb-8 page-title product-hero-title">{p.tagline}</h1>
            {p.intro.map((para) => (
              <p key={para.slice(0, 24)} className="body-md mb-4 product-hero-copy">{para}</p>
            ))}
            <div className="flex gap-4 flex-wrap mt-8 product-actions">
              {p.url ? (
                <a href={p.url} target="_blank" rel="noopener" className="btn-primary label-md" style={{ textDecoration: "none" }}>Visit {host} ↗</a>
              ) : (
                <Link href="/contact" className="btn-primary label-md" style={{ textDecoration: "none" }}>Ask about early access</Link>
              )}
              <Link href="/products" className="btn-secondary label-md" style={{ textDecoration: "none" }}>All products</Link>
            </div>
          </div>
          <ProductVisual product={p} priority />
        </div>

        <ScrollReveal>
          <div className="py-20">
            <SectionHeading accent="it does">What</SectionHeading>
            <div className="work-grid">
              {p.features.map((f) => (
                <div key={f.title} className="kinetic-card-low hoverable" style={{ padding: "1.75rem" }}>
                  <span className="material-symbols-outlined text-primary mb-4" style={{ fontSize: "2rem" }}>{f.icon}</span>
                  <h3 className="card-title">{f.title}</h3>
                  <p className="body-md" style={{ fontSize: "0.9375rem" }}>{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="product-split pb-20">
            <div className="kinetic-card-low">
              <h2 className="label-sm text-primary mb-4">Who it is for</h2>
              <ul className="service-deliverables">
                {p.audience.map((a) => <li key={a}>{a}</li>)}
              </ul>
            </div>
            <div className="kinetic-card-low">
              <h2 className="label-sm text-primary mb-4">Availability</h2>
              <PlatformList product={p} />
              <p className="body-md" style={{ marginTop: "1.25rem", fontSize: "0.9375rem" }}>{p.pricing}</p>
              {p.url && (
                <a href={p.url} target="_blank" rel="noopener" className="tech-link label-sm" style={{ display: "inline-block", marginTop: "0.75rem" }}>Current plans on {host} ↗</a>
              )}
            </div>
          </div>
        </ScrollReveal>

        {p.gallery.length > 0 && (
          <ScrollReveal>
            <div className={`product-gallery pb-20${p.hero.kind === "phone" ? " is-phones" : ""}`}>
              {p.gallery.map((g) =>
                p.hero.kind === "phone" ? (
                  <PhoneShot key={g.src} {...g} />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={g.src} className="product-illustration" src={g.src} alt={g.alt} width={g.width} height={g.height} loading="lazy" />
                ),
              )}
            </div>
          </ScrollReveal>
        )}

        <ScrollReveal>
          <div className="kinetic-card tech-accent">
            <h2 className="label-md text-primary card-heading-lg mb-8" style={{ fontSize: "2rem" }}>How we built it</h2>
            <div className="card-grid-3">
              {p.engineering.map((e) => (
                <div key={e.title}>
                  <h3 className="card-title">{e.title}</h3>
                  <p className="body-md">{e.body}</p>
                </div>
              ))}
            </div>
            <p className="label-sm text-primary" style={{ marginTop: "2.5rem", marginBottom: "1rem" }}>Built with</p>
            <ul className="chip-list">
              {p.stack.map((t) => <li key={t} className="label-sm ghost-border">{t}</li>)}
            </ul>
            <Link href="/services/product-engineering" className="tech-link label-md" style={{ display: "inline-block", marginTop: "2rem" }}>We build products like this for clients →</Link>
          </div>
        </ScrollReveal>

        {others.length > 0 && (
          <ScrollReveal>
            <div style={{ marginTop: "var(--spacing-20)" }}>
              <h2 className="label-sm text-primary mb-4">Also from Nika Red</h2>
              <div className="card-grid-2">
                {others.map((o) => (
                  <Link key={o.slug} href={`/products/${o.slug}`} className="kinetic-card-low hoverable link-card">
                    <ProductMark product={o} size={48} />
                    <p className="body-md" style={{ marginTop: "1rem" }}>{o.summary}</p>
                    <span className="tech-link label-md">About {o.name} →</span>
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        <CtaCard title="Building something" accent="similar" body="We take products from idea to launch, and we have done it for ourselves. Tell us what you have in mind." label="Talk to us" />
      </section>

      <Footer />
    </main>
  );
}
