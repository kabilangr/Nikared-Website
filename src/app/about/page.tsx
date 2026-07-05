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
    "Based in Chennai's innovation corridor, Nika Red builds industrial-grade software, edge AI systems, and XR platforms for manufacturing, logistics, and heavy infrastructure.",
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
      <section className="container relative" style={{ paddingTop: "120px", minHeight: "60vh", display: "flex", alignItems: "center" }}>
        <div className="hero-text" style={{ zIndex: 10, maxWidth: "60%" }}>
          <div className="flex gap-4 mb-8 items-center">
            <div className="line-accent"></div>
            <div className="label-sm text-primary">Chennai, India</div>
          </div>
          <h1 className="display-lg mb-8">
            An engineering studio<br />
            <span className="text-primary italic">built for the physical world</span>
          </h1>
          <p className="body-md mb-8" style={{ fontSize: "1.25rem", maxWidth: "80%", borderLeft: "4px solid var(--primary)", paddingLeft: "1rem" }}>
            Based in Chennai&apos;s thriving industrial and technology corridor, Nika Red designs and builds the robust software systems that heavy industry, logistics, and manufacturing depend on. From Edge AI to legacy SCADA modernization, we engineer software with the same precision as the machines they run alongside.
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
            <h2 className="display-lg" style={{ fontSize: "3.5rem", lineHeight: 1.15 }}>
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

            {/* Card 1 — Research-led */}
            <div className="kinetic-card hoverable" style={{ minHeight: "400px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div className="flex justify-between items-start mb-12">
                  <h3 className="display-lg" style={{ fontSize: "2.75rem" }}>Research-led</h3>
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: "3rem" }}>neurology</span>
                </div>
                <p className="body-md">
                  We fold neural computing into industrial automation as it matures — favoring on-device execution over cloud dependency, so your operations stay resilient and yours to run.
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

            {/* Card 2 — Built for hardware */}
            <div className="kinetic-card hoverable" style={{ backgroundColor: "var(--primary)", minHeight: "400px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div className="flex justify-between items-start mb-12">
                  <h3 className="display-lg" style={{ fontSize: "2.25rem", color: "var(--surface)", textShadow: "none" }}>Built for hardware</h3>
                  <span className="material-symbols-outlined" style={{ fontSize: "3rem", color: "var(--surface)" }}>developer_board</span>
                </div>
                <p className="body-md" style={{ color: "var(--surface)", fontWeight: 500 }}>
                  Direct, silicon-level optimization for mission-critical industrial hardware. We employ rigorous testing protocols and secure coding practices to ensure there are no unnecessary abstraction layers between your sensors and your operational decisions.
                </p>
              </div>
              <div className="mt-12" style={{ borderTop: "1px solid rgba(0,0,0,0.2)", paddingTop: "1rem" }}>
                <p className="label-sm italic" style={{ color: "var(--surface)" }}>&ldquo;The hardware is the frontier that matters&rdquo;</p>
              </div>
            </div>
          </div>

          {/* Discipline Overview */}
          <div className="grid-asymmetric-right" style={{ gap: "1.5rem", marginTop: "1.5rem" }}>
            <div className="kinetic-card-low hoverable">
              <p className="display-lg" style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>3</p>
              <p className="label-sm">Core disciplines</p>
              <p className="body-md mt-8" style={{ fontSize: "0.9rem" }}>
                Engineering Foundry · AI & Machine Learning · XR & Spatial Computing
              </p>
            </div>
            <div className="kinetic-card-low flex items-center justify-between hoverable">
              <p className="body-md" style={{ maxWidth: "60%" }}>
                Nika Red works across the full stack — from sensor hardware and edge compute to enterprise interfaces and immersive environments.
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
            <h2 className="display-lg" style={{ fontSize: "2.75rem", lineHeight: 1.1 }}>
              Principles that <span className="text-primary italic">hold up</span> on the factory floor
            </h2>
          </div>
          <div className="work-grid">
            {[
              { icon: "memory", label: "Edge over cloud", body: "We default to on-device execution so your operations stay resilient when connectivity drops — and your data never has to leave the plant." },
              { icon: "engineering", label: "Hardware-aware", body: "Software is designed around the real physical layer: PLCs, sensors, and gateways, with sensor drift and network gaps treated as first-class constraints." },
              { icon: "lock_open", label: "No dependency lock-in", body: "You keep full operational control after launch. We build systems your own team can run, extend, and maintain without us." },
              { icon: "verified", label: "Tested for the real world", body: "Rigorous testing and secure coding practices tuned to industrial environments, not the demo happy-path." },
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
                <li>Manufacturing — quality control, predictive maintenance, and MES/ERP integration</li>
                <li>Logistics &amp; supply chain — route optimization and warehouse spatial computing</li>
                <li>Energy &amp; infrastructure — digital twins and remote sensor monitoring</li>
                <li>Heavy machinery — edge intelligence embedded directly in the equipment</li>
              </ul>
            </div>
            <div>
              <h2 className="display-lg mb-8" style={{ fontSize: "2.5rem", lineHeight: 1.1 }}>
                Based in Chennai, <span className="text-primary italic">building worldwide</span>
              </h2>
              <p className="body-md mb-4" style={{ fontSize: "1.0625rem" }}>
                From our home in Chennai&apos;s industrial and technology corridor, Nika Red works with clients across India and internationally. Our disciplines span the full stack — sensor hardware and edge compute, enterprise interfaces, and immersive spatial environments.
              </p>
              <p className="body-md">
                Whether you are modernizing a decades-old SCADA deployment or standing up an entirely new edge AI pipeline, we bring the same engineering rigor to every project.
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
