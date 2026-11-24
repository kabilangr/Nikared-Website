import Link from "next/link";
import type { ReactNode } from "react";
import ScrollReveal from "./ScrollReveal";
import { formatDate, postCover, type Post } from "@/lib/content/blog";

/** Visible breadcrumb trail. Pair with breadcrumbSchema() for JSON-LD. */
export function Breadcrumbs({ crumbs }: { crumbs: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs label-sm">
      <ol>
        {crumbs.map((c, i) => (
          <li key={c.path}>
            {i < crumbs.length - 1 ? (
              <Link href={c.path} className="tech-link">{c.name}</Link>
            ) : (
              <span aria-current="page">{c.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  accent,
  intro,
  crumbs,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  accent?: ReactNode;
  intro?: ReactNode;
  crumbs?: { name: string; path: string }[];
  children?: ReactNode;
}) {
  return (
    <ScrollReveal>
      <div className="mb-12">
        {crumbs && <Breadcrumbs crumbs={crumbs} />}
        <div className="flex gap-4 mb-8 items-center">
          <div className="line-accent"></div>
          <div className="label-sm text-primary">{eyebrow}</div>
        </div>
        <h1 className="display-lg mb-8 page-title">
          {title} {accent && <span className="text-primary italic">{accent}</span>}
        </h1>
        {intro && <p className="body-md lead-text">{intro}</p>}
        {children}
      </div>
    </ScrollReveal>
  );
}

export function CtaCard({
  title = "Ready to",
  accent = "get started",
  body = "Describe your operational environment and we'll identify where Nika Red can deliver the most impact.",
  label = "Start a project",
}: {
  title?: string;
  accent?: string;
  body?: string;
  label?: string;
}) {
  return (
    <ScrollReveal>
      <div className="kinetic-card tech-accent hoverable cta-card" style={{ textAlign: "center", padding: "var(--spacing-20)", marginTop: "var(--spacing-20)" }}>
        <h2 className="display-lg mb-8 section-heading-lg" style={{ fontSize: "2.75rem" }}>
          {title} <span className="text-primary italic">{accent}</span>?
        </h2>
        <p className="body-md mb-12" style={{ maxWidth: "520px", margin: "0 auto var(--spacing-12)" }}>{body}</p>
        <Link href="/contact" className="btn-primary label-md" style={{ textDecoration: "none" }}>{label}</Link>
      </div>
    </ScrollReveal>
  );
}

export function SectionHeading({ children, accent }: { children: ReactNode; accent?: ReactNode }) {
  return (
    <h2 className="display-lg mb-12 section-heading-lg" style={{ fontSize: "2.75rem" }}>
      {children} {accent && <span className="text-primary italic">{accent}</span>}
    </h2>
  );
}

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="kinetic-card-low hoverable post-card">
      <img className="post-card-cover" src={postCover(post.slug).svg} alt="" width={1200} height={630} loading="lazy" />
      <div className="post-meta label-sm">
        <span>{post.category}</span>
        <span aria-hidden>·</span>
        <time dateTime={post.date}>{formatDate(post.date)}</time>
      </div>
      <h3 className="post-card-title">
        <Link href={`/blog/${post.slug}`} className="stretched-link">{post.title}</Link>
      </h3>
      <p className="body-md">{post.description}</p>
      <span className="tech-link label-md post-card-more">Read article · {post.readingMinutes} min</span>
    </article>
  );
}

export function FaqList({ faqs }: { faqs: { question: string; answer: string }[] }) {
  return (
    <div className="flex-col gap-4">
      {faqs.map((faq) => (
        <div key={faq.question} className="kinetic-card-low" style={{ padding: "1.5rem 2rem" }}>
          <h3 className="label-md mb-2" style={{ color: "var(--text-strong)", fontSize: "1.25rem", textTransform: "none" }}>{faq.question}</h3>
          <p className="body-md">{faq.answer}</p>
        </div>
      ))}
    </div>
  );
}
