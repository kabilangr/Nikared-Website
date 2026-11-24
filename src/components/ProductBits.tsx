import Link from "next/link";
import type { Product } from "@/lib/content/products";

/** Product visual: a phone frame for app screenshots, or a rounded illustration. */
export function ProductVisual({ product, priority = false }: { product: Product; priority?: boolean }) {
  const { hero } = product;
  if (hero.kind === "phone") {
    return (
      <div className="product-visual">
        <div className="phone-frame">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={hero.src} alt={hero.alt} width={hero.width} height={hero.height} loading={priority ? "eager" : "lazy"} />
        </div>
      </div>
    );
  }
  return (
    <div className="product-visual">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="product-illustration" src={hero.src} alt={hero.alt} width={hero.width} height={hero.height} loading={priority ? "eager" : "lazy"} />
    </div>
  );
}

export function ProductMark({ product, size = 56 }: { product: Product; size?: number }) {
  return (
    <div className="product-mark">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={product.logo} alt={product.logoAlt} width={size} height={size} />
      <div>
        <p className="product-name">
          {product.name} <span className="product-native" lang="ta">{product.nativeName}</span>
        </p>
        <p className="label-sm">{product.category}</p>
      </div>
    </div>
  );
}

export function PlatformList({ product }: { product: Product }) {
  return (
    <ul className="platform-list">
      {product.platforms.map((pl) => (
        <li key={pl.label}>
          <span className={`platform-status ${pl.status === "Live" ? "is-live" : ""}`}>{pl.status}</span>
          {pl.href ? (
            <a href={pl.href} target="_blank" rel="noopener" className="tech-link">{pl.label} ↗</a>
          ) : (
            <span>{pl.label}</span>
          )}
        </li>
      ))}
    </ul>
  );
}

/** Wide product card used on /products and the home page. */
export function ProductFeature({ product, reverse = false, headingLevel = 2 }: { product: Product; reverse?: boolean; headingLevel?: 2 | 3 }) {
  const H = headingLevel === 2 ? "h2" : "h3";
  return (
    <article className={`kinetic-card hoverable product-feature${reverse ? " is-reverse" : ""}`} style={{ ["--product-accent" as string]: product.accent }}>
      <div className="product-feature-text">
        <ProductMark product={product} />
        <H className="product-feature-title">{product.tagline}</H>
        <p className="body-md mb-8">{product.summary}</p>
        <ul className="service-deliverables mb-8">
          {product.features.slice(0, 4).map((f) => <li key={f.title}>{f.title}</li>)}
        </ul>
        <div className="flex gap-4 flex-wrap product-actions">
          <Link href={`/products/${product.slug}`} className="btn-primary label-md" style={{ textDecoration: "none" }}>About {product.name}</Link>
          <a href={product.url} target="_blank" rel="noopener" className="btn-secondary label-md" style={{ textDecoration: "none" }}>Visit {product.url.replace(/^https:\/\/|\/$/g, "")} ↗</a>
        </div>
      </div>
      <ProductVisual product={product} />
    </article>
  );
}
