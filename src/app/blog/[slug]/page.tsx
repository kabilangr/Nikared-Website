import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { Breadcrumbs, CtaCard, PostCard } from "@/components/PageBits";
import { pageMetadata } from "@/lib/metadata";
import { blogPostingSchema, breadcrumbSchema } from "@/lib/structured-data";
import { POSTS, formatDate, getAllPosts, getPost, postCover, wordCount, type Block } from "@/lib/content/blog";
import { SITE_URL } from "@/lib/site";
import { getService } from "@/lib/content/services";

export const dynamicParams = false;

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  const cover = postCover(p.slug);
  return pageMetadata({
    title: p.title,
    description: p.description,
    path: `/blog/${p.slug}`,
    keywords: p.tags,
    article: { publishedTime: p.date, modifiedTime: p.updated, tags: p.tags, section: p.category },
    image: { url: `${SITE_URL}${cover.png}`, width: cover.width, height: cover.height, alt: p.coverAlt },
  });
}

function renderBlock(b: Block, i: number) {
  switch (b.type) {
    case "p":
      return <p key={i}>{b.text}</p>;
    case "h2":
      return <h2 key={i}>{b.text}</h2>;
    case "h3":
      return <h3 key={i}>{b.text}</h3>;
    case "ul":
      return <ul key={i}>{b.items.map((it) => <li key={it}>{it}</li>)}</ul>;
    case "ol":
      return <ol key={i}>{b.items.map((it) => <li key={it}>{it}</li>)}</ol>;
    case "quote":
      return <blockquote key={i}>{b.text}</blockquote>;
    case "callout":
      return (
        <aside key={i} className="prose-callout">
          <p className="label-sm text-primary">{b.title}</p>
          <p>{b.text}</p>
        </aside>
      );
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ];
  const service = getService(post.service);
  const cover = postCover(post.slug);
  const related = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => Number(b.service === post.service) - Number(a.service === post.service))
    .slice(0, 3);

  return (
    <main style={{ paddingBottom: "100px" }}>
      <JsonLd data={[blogPostingSchema({ ...post, wordCount: wordCount(post.body), image: cover.png }), breadcrumbSchema(crumbs)]} />
      <Header />

      <article className="container subpage-hero">
        <div className="post-header">
          <Breadcrumbs crumbs={crumbs} />
          <div className="post-meta label-sm mb-8">
            <span>{post.category}</span>
            <span aria-hidden>·</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden>·</span>
            <span>{post.readingMinutes} min read</span>
          </div>
          <h1 className="display-lg mb-8 post-title">{post.title}</h1>
          <p className="body-md lead-text">{post.description}</p>
          <p className="label-sm" style={{ marginTop: "1.5rem", color: "var(--on-surface-variant)" }}>By the Nika Red engineering team</p>
        </div>

        <figure className="post-cover">
          <img src={cover.svg} alt={post.coverAlt} width={cover.width} height={cover.height} fetchPriority="high" />
        </figure>

        <div className="prose">
          {post.body.map(renderBlock)}

          {service && (
            <aside className="prose-callout prose-service">
              <p className="label-sm text-primary">How we can help</p>
              <p>
                This article draws on our {service.name.toLowerCase()} work.{" "}
                <Link href={`/services/${service.slug}`} className="tech-link">See what we deliver</Link> or{" "}
                <Link href="/contact" className="tech-link">tell us about your project</Link>.
              </p>
            </aside>
          )}

          <ul className="chip-list" aria-label="Tags" style={{ marginTop: "2.5rem" }}>
            {post.tags.map((t) => <li key={t} className="label-sm ghost-border">{t}</li>)}
          </ul>
        </div>

        {related.length > 0 && (
          <section style={{ marginTop: "var(--spacing-20)" }} aria-labelledby="related-heading">
            <h2 id="related-heading" className="display-lg mb-12 section-heading-lg" style={{ fontSize: "2.25rem" }}>
              Keep <span className="text-primary italic">reading</span>
            </h2>
            <div className="card-grid-3">
              {related.map((p) => <PostCard key={p.slug} post={p} />)}
            </div>
          </section>
        )}

        <CtaCard />
      </article>

      <Footer />
    </main>
  );
}
