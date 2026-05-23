import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About — NIKA RED",
  description: "Based in Chennai's innovation corridor, NIKA RED architects industrial-grade software, AI systems, and XR platforms for the physical world.",
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
            <div className="label-sm text-primary">CHENNAI_HQ // INN_CORRIDOR</div>
          </div>
          <h1 className="display-lg mb-8 uppercase" style={{ textShadow: "0 0 40px rgba(129,236,255,0.4)" }}>
            The Core of<br />
            <span className="text-primary italic">Kinetic Precision</span>
          </h1>
          <p className="body-md mb-8" style={{ fontSize: "1.25rem", maxWidth: "80%", borderLeft: "4px solid var(--primary)", paddingLeft: "1rem" }}>
            Operating from the heart of Chennai's innovation corridor, NIKA RED is the sovereign architect of industrial intelligence. We build the systems that the future relies on.
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
          <img src="/chennai_node_1775043257682.png" alt="High Tech Hub" className="img-monochrome" />
        </div>
      </section>

      {/* Mission Statement */}
      <ScrollReveal>
        <section className="container py-20" style={{ marginTop: "5rem", background: "var(--surface-container-low)", maxWidth: "100%" }}>
          <div className="container" style={{ maxWidth: "1000px" }}>
            <div className="label-sm text-primary mb-8" style={{ letterSpacing: "0.3em", fontWeight: 700 }}>// CORE_MISSION</div>
            <h2 className="display-lg uppercase" style={{ fontSize: "4rem", lineHeight: 1.1 }}>
              We don't just build software; <br />
              <span style={{ WebkitTextStroke: "1px #81ecff", color: "transparent" }}>we architect</span>{" "}
              the infrastructure of tomorrow.
            </h2>
          </div>
        </section>
      </ScrollReveal>

      {/* Capability Cards */}
      <ScrollReveal>
        <section className="container py-20">
          <div className="grid-asymmetric-left" style={{ gap: 0 }}>

            {/* Card 1 — R&D Focused */}
            <div className="kinetic-card electric-glow" style={{ minHeight: "400px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div className="mounting-bracket"></div>
              <div>
                <div className="flex justify-between items-start mb-12">
                  <h3 className="display-lg" style={{ fontSize: "3rem" }}>R&D Focused</h3>
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: "3rem" }}>neurology</span>
                </div>
                <p className="body-md">
                  Continuous integration of neural computing patterns into industrial automation. Our lab protocols prioritize sovereign execution over cloud dependency — your operations stay resilient and independent.
                </p>
              </div>
              <div className="flex gap-12 mt-12">
                <div>
                  <p className="label-sm">Founded</p>
                  <p className="label-md text-white">2024</p>
                </div>
                <div>
                  <p className="label-sm">Base</p>
                  <p className="label-md text-white">Chennai, IN</p>
                </div>
              </div>
            </div>

            {/* Card 2 — Hardware Native */}
            <div className="kinetic-card" style={{ backgroundColor: "var(--primary)", minHeight: "400px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div className="flex justify-between items-start mb-12">
                  <h3 className="display-lg" style={{ fontSize: "2.5rem", color: "black", textShadow: "none" }}>Hardware Native</h3>
                  <span className="material-symbols-outlined" style={{ fontSize: "3rem", color: "black" }}>developer_board</span>
                </div>
                <p className="body-md" style={{ color: "black", fontWeight: 500 }}>
                  Direct silicon-level optimization for mission-critical industrial hardware. No unnecessary abstraction layers. Pure kinetic efficiency from the edge to the enterprise.
                </p>
              </div>
              <div className="mt-12" style={{ borderTop: "1px solid rgba(0,0,0,0.2)", paddingTop: "1rem" }}>
                <p className="label-sm italic" style={{ color: "black" }}>"THE SILICON IS THE FINAL FRONTIER"</p>
              </div>
            </div>
          </div>

          {/* Discipline Overview */}
          <div className="grid-asymmetric-right" style={{ gap: 0, marginTop: 0 }}>
            <div className="kinetic-card-low" style={{ borderTop: "1px solid var(--surface)" }}>
              <p className="display-lg" style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>3</p>
              <p className="label-sm">Core Disciplines</p>
              <p className="body-md mt-8" style={{ fontSize: "0.9rem" }}>
                Enterprise Foundry · AI Core R&D · XR Frontiers
              </p>
            </div>
            <div className="kinetic-card-low flex items-center justify-between" style={{ borderTop: "1px solid var(--surface)", borderLeft: "1px solid var(--surface)" }}>
              <p className="body-md" style={{ maxWidth: "60%" }}>
                NIKA RED protocols operate across the full stack — from sensor hardware and edge compute to enterprise interfaces and immersive environments.
              </p>
              <span className="material-symbols-outlined" style={{ fontSize: "4rem", color: "rgba(129, 236, 255, 0.2)" }}>grid_view</span>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </main>
  );
}
