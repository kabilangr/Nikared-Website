import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About — Nika Red",
  description: "Based in Chennai's innovation corridor, Nika Red builds industrial-grade software, AI systems, and XR platforms for the physical world.",
};

export default function About() {
  return (
    <main style={{ paddingBottom: "100px" }}>
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
            Nika Red designs and builds the systems that heavy industry, manufacturing, and hardware-driven products depend on — software, AI, and XR, engineered with the same care as the machines they run alongside.
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
            <div className="kinetic-card electric-glow" style={{ minHeight: "400px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
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
            <div className="kinetic-card electric-glow" style={{ backgroundColor: "var(--primary)", minHeight: "400px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div className="flex justify-between items-start mb-12">
                  <h3 className="display-lg" style={{ fontSize: "2.25rem", color: "var(--surface)", textShadow: "none" }}>Built for hardware</h3>
                  <span className="material-symbols-outlined" style={{ fontSize: "3rem", color: "var(--surface)" }}>developer_board</span>
                </div>
                <p className="body-md" style={{ color: "var(--surface)", fontWeight: 500 }}>
                  Direct, silicon-level optimization for mission-critical industrial hardware. No unnecessary abstraction layers between your sensors and your decisions.
                </p>
              </div>
              <div className="mt-12" style={{ borderTop: "1px solid rgba(0,0,0,0.2)", paddingTop: "1rem" }}>
                <p className="label-sm italic" style={{ color: "var(--surface)" }}>&ldquo;The hardware is the frontier that matters&rdquo;</p>
              </div>
            </div>
          </div>

          {/* Discipline Overview */}
          <div className="grid-asymmetric-right" style={{ gap: "1.5rem", marginTop: "1.5rem" }}>
            <div className="kinetic-card-low electric-glow">
              <p className="display-lg" style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>3</p>
              <p className="label-sm">Core disciplines</p>
              <p className="body-md mt-8" style={{ fontSize: "0.9rem" }}>
                Engineering Foundry · AI & Machine Learning · XR & Spatial Computing
              </p>
            </div>
            <div className="kinetic-card-low flex items-center justify-between electric-glow">
              <p className="body-md" style={{ maxWidth: "60%" }}>
                Nika Red works across the full stack — from sensor hardware and edge compute to enterprise interfaces and immersive environments.
              </p>
              <span className="material-symbols-outlined" style={{ fontSize: "4rem", color: "var(--ghost-icon)" }}>grid_view</span>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </main>
  );
}
