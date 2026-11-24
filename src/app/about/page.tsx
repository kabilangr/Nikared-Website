import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Nika Red is a Chennai engineering studio building industrial software, edge AI, XR, and mobile products, and the team behind our own apps, Valam and Viduthi.",
  path: "/about",
});

export default function About() {
  return (
    <main style={{ paddingBottom: "100px" }}>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <Header />

      {/* Hero Section */}
      <section className="container relative about-hero subpage-hero" style={{ minHeight: "60vh", display: "flex", alignItems: "center" }}>
        <div className="hero-text" style={{ zIndex: 10, maxWidth: "60%" }}>
          <div className="flex gap-4 mb-8 items-center">
            <div className="line-accent"></div>
            <div className="label-sm text-primary">Chennai, India</div>
          </div>
          <h1 className="display-lg mb-8">
            An engineering studio<br />
            <span className="text-primary italic">built for the physical world</span>
          </h1>
          <p className="body-md mb-8 hero-intro-text" style={{ fontSize: "1.25rem", maxWidth: "80%", borderLeft: "4px solid var(--primary)", paddingLeft: "1rem" }}>
            Based in Chennai, one of India&apos;s largest manufacturing and technology hubs, Nika Red designs and builds the software that manufacturing, logistics, and infrastructure depend on, and the products we run ourselves. From legacy SCADA modernization to on-device AI, we engineer software with the same precision as the machines it runs alongside.
          </p>
        </div>

        <div
          className="hero-image-right light-leak"
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            height: "100%",
            width: "45%",
            zIndex: 1,
            maskImage: "linear-gradient(to left, black, transparent)",
            WebkitMaskImage: "linear-gradient(to left, black, transparent)",
          }}
        >
          <img src="/chennai_node_1775043257682.png" alt="Chennai" className="img-monochrome" />
        </div>
      </section>

      {/* Mission Statement */}
      <ScrollReveal>
        <section className="container py-20" style={{ marginTop: "5rem", background: "var(--surface-container-low)", maxWidth: "100%" }}>
          <div className="container" style={{ maxWidth: "1000px" }}>
            <div className="label-sm text-primary mb-8" style={{ letterSpacing: "0.2em", fontWeight: 700 }}>Our mission</div>
            <h2 className="display-lg mission-heading" style={{ fontSize: "3.5rem", lineHeight: 1.15 }}>
              We don&apos;t just write software; <br />
              <span style={{ WebkitTextStroke: "1px var(--primary)", color: "transparent" }}>we build</span>{" "}
              the systems the physical world runs on.
            </h2>
          </div>
        </section>
      </ScrollReveal>

      {/* Capability Cards */}
      <ScrollReveal>
        <section className="container py-20">
          <div className="grid-asymmetric-left" style={{ gap: "1.5rem" }}>

            {/* Card 1: Research-led */}
            <div className="kinetic-card hoverable capability-card" style={{ minHeight: "400px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div className="flex justify-between items-start mb-12">
                  <h3 className="display-lg section-heading-lg" style={{ fontSize: "2.75rem" }}>Engineering-led</h3>
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: "3rem" }}>neurology</span>
                </div>
                <p className="body-md">
                  Nika Red is run by engineers. We adopt new technology, from on-device AI to spatial computing, only when it is ready for real operations, and we prefer systems that run on site over ones that depend on the cloud, so your operations stay resilient and yours to run.
                </p>
              </div>
              <div className="flex gap-12 mt-12">
                <div>
                  <p className="label-sm">Founded</p>
                  <p className="label-md" style={{ color: "var(--text-strong)" }}>2023</p>
                </div>
                <div>
                  <p className="label-sm">Base</p>
                  <p className="label-md" style={{ color: "var(--text-strong)" }}>Chennai, IN</p>
                </div>
              </div>
            </div>

            {/* Card 2: Built for hardware */}
            <div className="kinetic-card hoverable capability-card" style={{ backgroundColor: "var(--primary)", minHeight: "400px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div className="flex justify-between items-start mb-12">
                  <h3 className="display-lg" style={{ fontSize: "2.25rem", color: "var(--surface)", textShadow: "none" }}>Built for hardware</h3>
                  <span className="material-symbols-outlined" style={{ fontSize: "3rem", color: "var(--surface)" }}>developer_board</span>
                </div>
                <p className="body-md" style={{ color: "var(--surface)", fontWeight: 500 }}>
                  We design around the real physical layer: PLCs, sensors, gateways, cameras, and phones. Every system is tested where it will actually run, with network drops, sensor drift, and device limits treated as normal conditions, not edge cases.
                </p>
              </div>
              <div className="mt-12" style={{ borderTop: "1px solid rgba(0,0,0,0.2)", paddingTop: "1rem" }}>
                <p className="label-sm" style={{ color: "var(--surface)" }}>Factory floors · Field sites · Phones in people&apos;s pockets</p>
              </div>
            </div>
          </div>

          {/* Discipline Overview */}
          <div className="grid-asymmetric-right" style={{ gap: "1.5rem", marginTop: "1.5rem" }}>
            <div className="kinetic-card-low hoverable">
              <p className="display-lg" style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>4</p>
              <p className="label-sm">Core disciplines</p>
              <p className="body-md mt-8" style={{ fontSize: "0.9rem" }}>
                <Link href="/services/industrial-software" className="tech-link">Industrial software</Link> · <Link href="/services/edge-ai" className="tech-link">Edge AI</Link> · <Link href="/services/xr-spatial-computing" className="tech-link">XR and spatial</Link> · <Link href="/services/product-engineering" className="tech-link">Product engineering</Link>
              </p>
            </div>
            <div className="kinetic-card-low flex items-center justify-between hoverable">
              <p className="body-md" style={{ maxWidth: "60%" }}>
                Nika Red works across the full stack, from sensor hardware and edge compute to enterprise systems, mobile apps, and immersive environments. We also build and run our own products, <Link href="/products/valam" className="tech-link">Valam</Link> and <Link href="/products/viduthi" className="tech-link">Viduthi</Link>.
              </p>
              <span className="material-symbols-outlined" style={{ fontSize: "4rem", color: "var(--ghost-icon)" }}>grid_view</span>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* How we approach the work */}
      <ScrollReveal>
        <section className="container py-20">
          <div className="mb-12">
            <div className="label-sm text-primary mb-4" style={{ letterSpacing: "0.1em" }}>HOW WE THINK</div>
            <h2 className="display-lg section-heading-lg" style={{ fontSize: "2.75rem", lineHeight: 1.1 }}>
              Principles that <span className="text-primary italic">hold up</span> on the factory floor
            </h2>
          </div>
          <div className="work-grid">
            {[
              { icon: "memory", label: "Edge over cloud", body: "We default to on-device execution so your operations stay resilient when connectivity drops, and your data never has to leave the plant." },
              { icon: "engineering", label: "Hardware-aware", body: "Software is designed around the real physical layer: PLCs, sensors, and gateways, with sensor drift and network gaps treated as first-class constraints." },
              { icon: "lock_open", label: "No dependency lock-in", body: "You keep full operational control after launch. We build systems your own team can run, extend, and maintain without us." },
              { icon: "verified", label: "Privacy by design", body: "We collect only what a system needs, keep sensitive data on site or on the device where possible, and design for India's DPDP Act from the start." },
            ].map((p) => (
              <div key={p.label} className="kinetic-card-low hoverable" style={{ padding: "2rem" }}>
                <span className="material-symbols-outlined text-primary mb-4" style={{ fontSize: "2.5rem" }}>{p.icon}</span>
                <h3 className="label-md mb-4" style={{ fontSize: "1.25rem", color: "var(--text-strong)", textTransform: "none" }}>{p.label}</h3>
                <p className="body-md" style={{ fontSize: "0.9375rem" }}>{p.body}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Who we serve */}
      <ScrollReveal>
        <section className="container py-20">
          <div className="grid-asymmetric-right" style={{ gap: "3rem", alignItems: "center" }}>
            <div className="kinetic-card tech-accent" style={{ padding: "2.5rem" }}>
              <h3 className="label-md text-primary mb-6" style={{ fontSize: "1.5rem" }}>Industries we serve</h3>
              <ul className="service-deliverables">
                <li><Link href="/industries/manufacturing" className="tech-link">Manufacturing</Link>: quality control, predictive maintenance, and MES/ERP integration</li>
                <li><Link href="/industries/logistics" className="tech-link">Logistics and supply chain</Link>: equipment integration, vision at the dock, and warehouse digital twins</li>
                <li><Link href="/industries/energy-infrastructure" className="tech-link">Energy and infrastructure</Link>: remote monitoring, anomaly detection, and digital twins</li>
                <li><Link href="/industries/heavy-machinery" className="tech-link">Heavy machinery and OEMs</Link>: connected equipment and on-machine diagnostics</li>
              </ul>
            </div>
            <div>
              <h2 className="display-lg mb-8 section-heading-lg" style={{ fontSize: "2.5rem", lineHeight: 1.1 }}>
                Based in Chennai, <span className="text-primary italic">building worldwide</span>
              </h2>
              <p className="body-md mb-4" style={{ fontSize: "1.0625rem" }}>
                From our home in Chennai&apos;s industrial and technology corridor, Nika Red works with clients across India and internationally. Our disciplines span the full stack: sensor hardware and edge compute, enterprise interfaces, and immersive spatial environments.
              </p>
              <p className="body-md">
                Whether you are modernizing a decades-old SCADA deployment, putting a vision model on a production line, or launching a new app, we bring the same engineering discipline to every project.
              </p>
              <Link href="/contact" className="tech-link label-md" style={{ textDecoration: "none", display: "inline-block", marginTop: "2rem" }}>Start a conversation →</Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </main>
  );
}
