import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import JsonLd from "@/components/JsonLd";
import { CtaCard, PageHero } from "@/components/PageBits";
import { ProductFeature } from "@/components/ProductBits";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, itemListSchema, softwareApplicationSchema } from "@/lib/structured-data";
import { PRODUCTS } from "@/lib/content/products";

export const metadata = pageMetadata({
  title: "Products",
  description:
    "Products built by Nika Red: Valam, a private finance app with an on-device AI coach, Viduthi, a verified hostel platform, and Alavi, a data meter coming soon.",
  path: "/products",
  keywords: ["Valam", "Viduthi", "Alavi", "personal finance app India", "hostel management software", "PG management software", "data usage app Android", "Android firewall app"],
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
];

export default function Products() {
  return (
    <main style={{ paddingBottom: "100px" }}>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          itemListSchema(PRODUCTS.map((p) => ({ name: p.name, path: `/products/${p.slug}` }))),
          ...PRODUCTS.map(softwareApplicationSchema),
        ]}
      />
      <Header />

      <section className="container subpage-hero">
        <PageHero
          eyebrow="Built and run by Nika Red"
          title="Our"
          accent="products"
          crumbs={crumbs}
          intro="Alongside client work, we build and operate products of our own. They keep us honest about what it takes to ship: app store reviews, payments that reconcile, privacy rules, and real users with real problems. Each is named in Tamil and built first for India. Valam and Viduthi are live, and Alavi is on its way to Google Play."
        />

        <div className="flex-col gap-12">
          {PRODUCTS.map((p, i) => (
            <ScrollReveal key={p.slug}>
              <ProductFeature product={p} reverse={i % 2 === 1} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="kinetic-card-low" style={{ marginTop: "var(--spacing-20)" }}>
            <p className="label-sm text-primary mb-4">What our products mean for clients</p>
            <p className="body-md" style={{ fontSize: "1.0625rem", maxWidth: "75ch" }}>
              The privacy architecture behind Valam, the payment, KYC, and real-time availability work behind Viduthi, and the low-level Android networking behind Alavi are the same skills we bring to client projects.{" "}
              <Link href="/services/product-engineering" className="tech-link">See Product Engineering</Link>.
            </p>
          </div>
        </ScrollReveal>

        <CtaCard title="Have a product" accent="idea" body="Tell us what you want to build. We will help you find the smallest version worth launching and build it with you." label="Talk to us" />
      </section>

      <Footer />
    </main>
  );
}
