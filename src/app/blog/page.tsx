import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import JsonLd from "@/components/JsonLd";
import { CtaCard, PageHero, PostCard } from "@/components/PageBits";
import { pageMetadata } from "@/lib/metadata";
import { blogSchema, breadcrumbSchema } from "@/lib/structured-data";
import { formatDate, getAllPosts, postCover } from "@/lib/content/blog";

const base = pageMetadata({
  title: "Engineering Blog",
  description:
    "Practical articles on SCADA modernization, edge AI, predictive maintenance, digital twins, AR, on-device AI, and payments from the engineers at Nika Red.",
  path: "/blog",
});

export const metadata: Metadata = {
  ...base,
  alternates: {
    canonical: "/blog/",
    types: { "application/rss+xml": [{ url: "/blog/feed.xml", title: "Nika Red Engineering Blog" }] },
  },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
];

export default function Blog() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <main style={{ paddingBottom: "100px" }}>
      <JsonLd data={[blogSchema(posts), breadcrumbSchema(crumbs)]} />
      <Header />

      <section className="container subpage-hero">
        <PageHero
          eyebrow="Field notes"
          title="Engineering"
          accent="blog"
          crumbs={crumbs}
          intro="What we have learned building software for factories, warehouses, and infrastructure, and from shipping our own apps. Practical guidance on industrial integration, edge AI, spatial computing, and product engineering, written by the people who do the work."
        >
          <p className="label-sm mt-8">
            <a href="/blog/feed.xml" className="tech-link">Subscribe via RSS</a>
          </p>
        </PageHero>

        {featured && (
          <ScrollReveal>
            <article className="kinetic-card tech-accent hoverable post-featured">
              <img className="post-featured-cover" src={postCover(featured.slug).svg} alt={featured.coverAlt} width={1200} height={630} />
              <div className="post-featured-body">
              <div className="post-meta label-sm">
                <span>Latest</span>
                <span aria-hidden>·</span>
                <span>{featured.category}</span>
                <span aria-hidden>·</span>
                <time dateTime={featured.date}>{formatDate(featured.date)}</time>
              </div>
              <h2 className="display-lg section-heading-lg mb-8" style={{ fontSize: "2.25rem", lineHeight: 1.1 }}>
                <Link href={`/blog/${featured.slug}`} className="stretched-link">{featured.title}</Link>
              </h2>
              <p className="body-md mb-8" style={{ fontSize: "1.0625rem" }}>{featured.description}</p>
              <span className="tech-link label-md">Read article · {featured.readingMinutes} min</span>
              </div>
            </article>
          </ScrollReveal>
        )}

        <div className="card-grid-3" style={{ marginTop: "1.5rem" }}>
          {rest.map((p, i) => (
            <ScrollReveal key={p.slug} delay={i * 60}>
              <PostCard post={p} />
            </ScrollReveal>
          ))}
        </div>

        <CtaCard title="Facing one of these" accent="problems" body="If an article describes something you are dealing with, we are happy to talk it through. No sales pitch, just an engineering conversation." label="Talk to an engineer" />
      </section>

      <Footer />
    </main>
  );
}
