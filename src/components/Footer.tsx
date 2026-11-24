import Link from "next/link";
import { SERVICES } from "@/lib/content/services";
import { INDUSTRIES } from "@/lib/content/industries";
import { PRODUCTS } from "@/lib/content/products";

export default function Footer() {
  return (
    <footer
      className="container"
      style={{
        borderTop: "1px solid var(--ghost-border)",
        opacity: 0.9,
        paddingTop: "3rem",
        paddingBottom: "2rem",
        marginTop: "5rem",
      }}
    >
      <nav className="footer-grid" aria-label="Footer">
        <div className="footer-col">
          <p className="label-sm text-primary">Services</p>
          <Link href="/services" className="tech-link body-md">All services</Link>
          {SERVICES.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="tech-link body-md">{s.name}</Link>
          ))}
        </div>
        <div className="footer-col">
          <p className="label-sm text-primary">Products</p>
          <Link href="/products" className="tech-link body-md">All products</Link>
          {PRODUCTS.map((p) => (
            <Link key={p.slug} href={`/products/${p.slug}`} className="tech-link body-md">{p.name}</Link>
          ))}
        </div>
        <div className="footer-col">
          <p className="label-sm text-primary">Industries</p>
          {INDUSTRIES.map((i) => (
            <Link key={i.slug} href={`/industries/${i.slug}`} className="tech-link body-md">{i.name}</Link>
          ))}
        </div>
        <div className="footer-col">
          <p className="label-sm text-primary">Company</p>
          <Link href="/about" className="tech-link body-md">About</Link>
          <Link href="/blog" className="tech-link body-md">Blog</Link>
          <Link href="/contact" className="tech-link body-md">Contact</Link>
          <a href="mailto:contact@nikared.com" className="tech-link body-md">contact@nikared.com</a>
        </div>
        <div className="footer-col">
          <p className="label-sm text-primary">Legal</p>
          <Link href="/privacy" className="tech-link body-md">Privacy</Link>
          <Link href="/terms" className="tech-link body-md">Terms</Link>
          <a href="/blog/feed.xml" className="tech-link body-md">RSS feed</a>
        </div>
      </nav>
      <div className="label-md" style={{ color: "var(--text-strong)", marginTop: "2.5rem" }}>
        © 2026 Nika Red Private Limited. Industrial software, edge AI, XR, and products, engineered in Chennai.
      </div>
    </footer>
  );
}
