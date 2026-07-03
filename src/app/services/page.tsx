import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Services — Nika Red",
  description: "Engineering Foundry, AI & Machine Learning, and XR & Spatial Computing — three disciplines engineered for the physical world.",
};

export default function Services() {
  return (
    <main style={{ paddingBottom: "100px" }}>
      <Header />

      <section className="container" style={{ paddingTop: "120px" }}>
        <ScrollReveal>
          <div className="mb-12">
            <div className="flex gap-4 mb-8 items-center">
              <div className="line-accent"></div>
              <div className="label-sm text-primary">What we build</div>
            </div>
            <h1 className="display-lg">Core <span className="text-primary italic">disciplines</span></h1>
          </div>
        </ScrollReveal>

        <div className="flex-col gap-12">

          {/* 01 — Engineering Foundry */}
          <ScrollReveal delay={100}>
            <div className="kinetic-card tech-accent hoverable">
              <div className="grid-asymmetric-left" style={{ alignItems: "start" }}>
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: "3rem" }}>terminal</span>
                    <span className="label-md" style={{ fontSize: "4rem", color: "var(--ghost-number)", lineHeight: 1 }}>01</span>
                  </div>
                  <h2 className="label-md text-primary mb-4" style={{ fontSize: "2rem" }}>Engineering Foundry</h2>
                  <p className="body-md mb-4" style={{ fontSize: "1.0625rem" }}>
                    Industrial software built to outlast the roadmap. We design systems that understand the physical layer — PLCs, SCADA, edge gateways — and connect them to modern interfaces without downtime.
                  </p>
                  <p className="label-sm mb-8" style={{ color: "var(--on-surface-variant)", textTransform: "none", letterSpacing: 0 }}>
                    For organizations running industrial operations who need software that speaks the language of the factory floor.
                  </p>
                  <ul className="service-deliverables">
                    <li>Custom ERP and MES systems for factory-floor integration</li>
                    <li>Hardware management APIs connecting physical sensors to cloud pipelines</li>
                    <li>Legacy modernization — bridge aging SCADA systems to modern interfaces</li>
                    <li>High-throughput data processing and real-time operational dashboards</li>
                  </ul>
                  <Link href="/contact" className="tech-link label-md" style={{ textDecoration: "none", display: "inline-block", marginTop: "2rem" }}>Start a Foundry project →</Link>
                </div>
                <div className="flex-col gap-4" style={{ alignSelf: "start" }}>
                  <div className="kinetic-card-low" style={{ padding: "1.5rem" }}>
                    <p className="label-sm mb-4">Capabilities</p>
                    <div className="flex-col gap-4">
                      <span className="label-sm ghost-border" style={{ padding: "0.5rem 1rem" }}>System architecture</span>
                      <span className="label-sm ghost-border" style={{ padding: "0.5rem 1rem" }}>Legacy modernization</span>
                      <span className="label-sm ghost-border" style={{ padding: "0.5rem 1rem" }}>SCADA integration</span>
                      <span className="label-sm ghost-border" style={{ padding: "0.5rem 1rem" }}>Edge compute</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 02 — AI & Machine Learning */}
          <ScrollReveal delay={100}>
            <div className="kinetic-card-low hoverable" style={{ position: "relative", zIndex: 10 }}>
              <div style={{ textAlign: "right" }}>
                <div className="flex items-center gap-4 mb-8" style={{ flexDirection: "row-reverse" }}>
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: "3rem" }}>psychology</span>
                  <span className="label-md" style={{ fontSize: "4rem", color: "var(--ghost-number)", lineHeight: 1 }}>02</span>
                </div>
                <h2 className="label-md text-primary mb-4" style={{ fontSize: "2rem" }}>AI & Machine Learning</h2>
                <p className="body-md mb-4" style={{ fontSize: "1.0625rem", maxWidth: "65%", marginLeft: "auto" }}>
                  Neural architectures for the edge, not the cloud. We build on-device intelligence that operates where connectivity can&apos;t be guaranteed and latency can&apos;t be tolerated.
                </p>
                <p className="label-sm mb-8" style={{ color: "var(--on-surface-variant)", textTransform: "none", letterSpacing: 0 }}>
                  For manufacturers and infrastructure operators who need AI that works without internet connectivity.
                </p>
                <ul className="service-deliverables" style={{ alignItems: "flex-end" }}>
                  <li style={{ flexDirection: "row-reverse" }}>On-device inference for real-time anomaly detection and quality control</li>
                  <li style={{ flexDirection: "row-reverse" }}>Custom training pipelines built on proprietary industrial datasets</li>
                  <li style={{ flexDirection: "row-reverse" }}>Sensor fusion — combining visual, acoustic, and telemetry data streams</li>
                  <li style={{ flexDirection: "row-reverse" }}>Model compression and quantization for deployment on embedded hardware</li>
                </ul>
                <Link href="/contact" className="tech-link label-md" style={{ textDecoration: "none", display: "inline-block", marginTop: "2rem", color: "var(--secondary)", fontWeight: 700 }}>Talk to our AI team →</Link>
              </div>
            </div>
          </ScrollReveal>

          {/* 03 — XR & Spatial Computing */}
          <ScrollReveal delay={100}>
            <div className="kinetic-card tech-accent hoverable">
              <div className="grid-asymmetric-left" style={{ alignItems: "start" }}>
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: "3rem" }}>view_in_ar</span>
                    <span className="label-md" style={{ fontSize: "4rem", color: "var(--ghost-number)", lineHeight: 1 }}>03</span>
                  </div>
                  <h2 className="label-md text-primary mb-4" style={{ fontSize: "2rem" }}>XR & Spatial Computing</h2>
                  <p className="body-md mb-4" style={{ fontSize: "1.0625rem" }}>
                    Spatial computing for environments that can&apos;t afford mistakes. We build extended reality systems for industrial contexts — where the stakes are high and the hardware is real.
                  </p>
                  <p className="label-sm mb-8" style={{ color: "var(--on-surface-variant)", textTransform: "none", letterSpacing: 0 }}>
                    For heavy industry, logistics, and energy companies who need to train, monitor, or operate in complex physical environments.
                  </p>
                  <ul className="service-deliverables">
                    <li>AR overlays for maintenance guidance, assembly workflows, and field inspection</li>
                    <li>Digital twin environments for industrial simulation and scenario planning</li>
                    <li>Immersive data command centers for operations and logistics teams</li>
                    <li>Cross-platform XR: HoloLens, Meta Quest, and mobile AR</li>
                  </ul>
                  <Link href="/contact" className="tech-link label-md" style={{ textDecoration: "none", display: "inline-block", marginTop: "2rem" }}>Explore XR →</Link>
                </div>
                <div className="kinetic-card-low" style={{ position: "relative", overflow: "hidden", minHeight: "280px", padding: 0 }}>
                  <div style={{ zIndex: 10, padding: "var(--spacing-12)", position: "relative" }}>
                    <h4 className="label-md text-primary" style={{ fontSize: "1.25rem", lineHeight: 1.6, fontStyle: "italic" }}>
                      &ldquo;The future isn&apos;t predicted. It&apos;s built, one working system at a time.&rdquo;
                    </h4>
                  </div>
                  <div
                    aria-hidden
                    style={{
                      position: "absolute",
                      right: 0,
                      bottom: 0,
                      height: "100%",
                      width: "70%",
                      background: "radial-gradient(circle at 70% 60%, var(--wash-a), transparent 65%), radial-gradient(circle at 90% 90%, var(--wash-b), transparent 60%)",
                    }}
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* How We Work */}
        <ScrollReveal>
          <div className="py-20">
            <h2 className="display-lg mb-12" style={{ fontSize: "2.75rem" }}>How we <span className="text-primary italic">work</span></h2>
            <div className="work-grid">
              {[
                { n: "01", label: "Discovery", body: "Understand the physical environment, existing infrastructure, and integration constraints." },
                { n: "02", label: "Architecture", body: "Design systems that account for real-world variability — sensor drift, network gaps, edge limitations." },
                { n: "03", label: "Build", body: "Iterative delivery with testing protocols tuned to industrial environments." },
                { n: "04", label: "Support", body: "You keep full operational control after launch — no dependency lock-in." },
              ].map(step => (
                <div key={step.n} className="kinetic-card-low hoverable" style={{ padding: "2rem" }}>
                  <p className="label-sm mb-4">{step.n}</p>
                  <h3 className="label-md mb-4" style={{ fontSize: "1.25rem", color: "var(--text-strong)" }}>{step.label}</h3>
                  <p className="body-md" style={{ fontSize: "0.9375rem" }}>{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal>
          <div className="kinetic-card tech-accent hoverable" style={{ textAlign: "center", padding: "var(--spacing-20)" }}>
            <h2 className="display-lg mb-8" style={{ fontSize: "2.75rem" }}>
              Ready to <span className="text-primary italic">get started</span>?
            </h2>
            <p className="body-md mb-12" style={{ maxWidth: "500px", margin: "0 auto var(--spacing-12)" }}>
              Describe your operational environment and we&apos;ll identify where Nika Red can deliver the most impact.
            </p>
            <Link href="/contact" className="btn-primary label-md" style={{ textDecoration: "none" }}>
              Start a project
            </Link>
          </div>
        </ScrollReveal>

      </section>

      <Footer />
    </main>
  );
}
