import Link from "next/link";
import NeuralCanvas from "@/components/NeuralCanvas";
import UplinkForm from "@/components/UplinkForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/structured-data";

const HOME_FAQS = [
  {
    question: "What does Nika Red build?",
    answer:
      "Nika Red is an engineering studio that builds custom industrial software, edge AI systems, and spatial computing (XR) solutions. We specialize in software for the physical world — factory floors, logistics networks, and critical infrastructure — where uptime, latency, and reliability are non-negotiable.",
  },
  {
    question: "Where is Nika Red located and who do you work with?",
    answer:
      "We are based in Chennai, India, and work with manufacturers, logistics operators, and energy and infrastructure companies worldwide. Engagements typically start with a discovery call to understand your operational environment and integration constraints.",
  },
  {
    question: "Do you build on-premise and edge solutions, not just cloud?",
    answer:
      "Yes. We design for cloud, on-premise, and edge deployment. Much of our AI work runs on-device so that quality control and predictive maintenance keep working even when connectivity is unreliable, and your operational data stays under your control.",
  },
  {
    question: "How quickly will you respond to a project inquiry?",
    answer:
      "A Nika Red engineer typically responds to new project inquiries within 24–48 hours. Reach us at contact@nikared.com or through the contact form.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(HOME_FAQS)} />
      <NeuralCanvas />
      <Header />

      <main>
        {/* Hero Section */}
        <section className="container py-20 relative hero-section" style={{ minHeight: "85vh", display: "flex", alignItems: "center" }}>
          <div className="hero-text" style={{ zIndex: 10, maxWidth: "60%" }}>
            <div className="status-chip label-md">Based in Chennai — building worldwide</div>
            <h1 className="display-lg mb-8 hero-display" style={{ fontSize: "4rem" }}>
              Industrial Intelligence,<br /><span className="text-primary italic">Forged in Code</span>
            </h1>
            <p className="body-md mb-8 body-lg-text" style={{ fontSize: "1.25rem", maxWidth: "80%" }}>
              We engineer mission-critical AI, edge computing, and spatial interfaces that eliminate downtime and accelerate production. We don&apos;t just write software; we build the brains for your heavy machinery.
            </p>
            <div className="flex gap-4">
              <Link href="/contact" className="btn-primary label-md" style={{ textDecoration: "none" }}>Start a project</Link>
              <Link href="/services" className="btn-secondary label-md" style={{ textDecoration: "none" }}>See our work</Link>
            </div>
          </div>

          <div
            className="hero-image-right"
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              height: "100%",
              width: "42%",
              zIndex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src="/logo.svg" alt="Nika Red Engineering Studio Logo" className="mark-signature" style={{ width: "85%", height: "auto" }} />
          </div>
        </section>

        {/* About Us */}
        <ScrollReveal>
          <section id="case-study" className="container py-20 grid-asymmetric-right">
            <div className="kinetic-card electric-glow case-study-card" style={{ padding: "3rem", position: "relative", overflow: "hidden", zIndex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div style={{ position: "relative", zIndex: 2 }}>
                <div className="label-sm text-primary mb-4" style={{ letterSpacing: "0.1em" }}>CASE STUDY // AUTOMOTIVE</div>
                <h3 className="display-lg mb-6 card-heading-xl" style={{ fontSize: "2.5rem" }}>Zero-Latency <br />Quality Control</h3>
                <p className="body-md mb-8" style={{ fontSize: "1.1rem" }}>
                  A tier-1 supplier needed to inspect 400 parts per minute without cloud dependency. We deployed custom Edge AI vision models directly to the factory floor.
                </p>
              </div>
              <div className="flex gap-8 stat-row" style={{ position: "relative", zIndex: 2, borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1.5rem" }}>
                <div>
                  <p className="display-lg" style={{ fontSize: "2rem", color: "var(--primary)" }}>30%</p>
                  <p className="label-sm">Scrap Reduction</p>
                </div>
                <div>
                  <p className="display-lg" style={{ fontSize: "2rem", color: "var(--primary)" }}>&lt;12ms</p>
                  <p className="label-sm">Inference Time</p>
                </div>
              </div>
              <div className="light-leak" style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0, zIndex: 1, opacity: 0.1, background: "radial-gradient(circle at 100% 100%, var(--primary) 0%, transparent 50%)" }} />
            </div>

            <div className="flex-col items-start align-right proof-text-right" style={{ textAlign: "right", position: "relative", zIndex: 10, justifyContent: "center" }}>
              <h2 className="display-lg mb-8 section-heading-lg" style={{ fontSize: "3.5rem", lineHeight: 1.05 }}>
                Proof of <br /><span className="text-primary italic">Work</span>
              </h2>
              <p className="body-md mb-8" style={{ maxWidth: "80%", marginLeft: "auto", color: "var(--text-strong)", fontWeight: 500 }}>
                Theory doesn&apos;t keep a factory running. We measure our success by uptime, yield improvements, and latency reduction in the harshest physical environments.
              </p>
              <div className="flex gap-4" style={{ justifyContent: "flex-end", width: "100%" }}>
                <Link href="/services" className="btn-secondary label-md" style={{ textDecoration: "none" }}>View all capabilities</Link>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Services */}
        <ScrollReveal>
          <section id="services" className="container py-20">
            <h2 className="display-lg mb-12">Core <span className="text-primary italic">disciplines</span></h2>
            <div className="flex-col gap-12">

              <div className="kinetic-card tech-accent electric-glow hoverable grid-asymmetric-left">
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: "3rem" }}>terminal</span>
                  </div>
                  <h3 className="label-md text-primary mb-4 card-heading-lg" style={{ fontSize: "2rem" }}>Unbreakable Operations</h3>
                  <p className="body-md mb-8" style={{ maxWidth: "90%" }}>
                    Eliminate bottlenecks with custom MES/ERP and SCADA integration built for 99.999% uptime.
                  </p>
                  <Link href="/services" className="tech-link label-md" style={{ textDecoration: "none" }}>Explore Foundry capabilities →</Link>
                </div>
                <div className="flex-col gap-4 align-right" style={{ textAlign: "right" }}>
                  <span className="label-sm ghost-border" style={{ padding: "0.5rem 1rem" }}>System architecture</span>
                  <span className="label-sm ghost-border" style={{ padding: "0.5rem 1rem" }}>Legacy modernization</span>
                </div>
                <div className="label-md service-number" style={{ fontSize: "4rem", color: "var(--ghost-number)", textAlign: "right", zIndex: 5, position: "relative" }}>01</div>
              </div>

              <div className="kinetic-card-low hoverable grid-asymmetric-right" style={{ position: "relative", zIndex: 10 }}>
                <div className="label-md service-number" style={{ fontSize: "4rem", color: "var(--ghost-number)", zIndex: 5, position: "relative" }}>02</div>
                <div style={{ textAlign: "right", position: "relative", zIndex: 10 }}>
                  <div className="flex justify-between items-start mb-8" style={{ flexDirection: "row-reverse" }}>
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: "3rem" }}>psychology</span>
                  </div>
                  <h3 className="label-md text-primary mb-4 card-heading-lg" style={{ fontSize: "2rem" }}>Predictive Intelligence</h3>
                  <p className="body-md mb-8" style={{ maxWidth: "90%", marginLeft: "auto", color: "var(--text-strong)", fontWeight: 500 }}>
                    Catch failures before they happen. On-device anomaly detection that saves millions in unplanned downtime.
                  </p>
                  <Link href="/services" className="tech-link label-md" style={{ textDecoration: "none", color: "var(--secondary)", fontWeight: 700 }}>See our Edge AI work →</Link>
                </div>
              </div>

              <div className="flex gap-12 service-flex-row" style={{ alignItems: "stretch", position: "relative", zIndex: 10 }}>
                <div className="kinetic-card tech-accent hoverable flex-col" style={{ flex: 1, position: "relative", zIndex: 10 }}>
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: "3rem", marginBottom: "2rem" }}>view_in_ar</span>
                  <h3 className="label-md text-primary mb-4 card-heading-lg" style={{ fontSize: "2rem" }}>Augmented Workforce</h3>
                  <p className="body-md" style={{ color: "var(--text-strong)", fontWeight: 500 }}>
                    Cut training time in half. Spatial digital twins and AR overlays that guide your technicians through complex maintenance.
                  </p>
                </div>
                <div className="kinetic-card-low flex items-center justify-center" style={{ flex: 1.5, position: "relative", overflow: "hidden", padding: 0 }}>
                  <div style={{ zIndex: 10, padding: "var(--spacing-12)" }}>
                    <h4 className="label-md text-primary" style={{ fontSize: "1.5rem", lineHeight: 1.5, fontStyle: "italic" }}>
                      &ldquo;We don&apos;t just predict the future. We build the systems that secure it.&rdquo;
                    </h4>
                  </div>
                  <div
                    aria-hidden
                    style={{
                      position: "absolute",
                      right: 0,
                      bottom: 0,
                      height: "100%",
                      width: "60%",
                      background: "radial-gradient(circle at 70% 60%, var(--wash-a), transparent 65%), radial-gradient(circle at 90% 90%, var(--wash-b), transparent 60%)",
                    }}
                  />
                </div>
              </div>

            </div>
          </section>
        </ScrollReveal>

        {/* Industries We Transform */}
        <ScrollReveal>
          <section className="container py-20">
            <h2 className="display-lg mb-12 section-heading-lg" style={{ fontSize: "2.75rem" }}>Industries We <span className="text-primary italic">Transform</span></h2>
            <div className="work-grid industries-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
              {[
                { icon: "factory", label: "Manufacturing", body: "Custom industrial software and edge AI for quality control, predictive maintenance, and real-time SCADA integration on the factory floor." },
                { icon: "local_shipping", label: "Logistics & Supply Chain", body: "Spatial computing (XR) and route optimization algorithms for complex supply chain networks and warehousing operations." },
                { icon: "bolt", label: "Energy & Infrastructure", body: "Robust digital twin development and sensor data fusion for remote monitoring of critical physical infrastructure." },
              ].map(industry => (
                <div key={industry.label} className="kinetic-card hoverable" style={{ padding: "2rem" }}>
                  <span className="material-symbols-outlined text-primary mb-4" style={{ fontSize: "2.5rem" }}>{industry.icon}</span>
                  <h3 className="label-md mb-4" style={{ fontSize: "1.25rem", color: "var(--text-strong)", textTransform: "none" }}>{industry.label}</h3>
                  <p className="body-md" style={{ fontSize: "0.9375rem" }}>{industry.body}</p>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Overview — SEO-rich narrative */}
        <ScrollReveal>
          <section className="container py-20">
            <div className="grid-asymmetric-left" style={{ gap: "3rem", alignItems: "start" }}>
              <div>
                <div className="label-sm text-primary mb-4" style={{ letterSpacing: "0.1em" }}>WHO WE ARE</div>
                <h2 className="display-lg mb-8 section-heading-lg" style={{ fontSize: "2.75rem", lineHeight: 1.1 }}>
                  An industrial software studio for the <span className="text-primary italic">physical world</span>
                </h2>
                <p className="body-md mb-4" style={{ fontSize: "1.0625rem" }}>
                  Nika Red is a Chennai-based engineering studio building the software that heavy industry runs on. We partner with manufacturers, logistics operators, and energy and infrastructure companies to design custom industrial software, deploy edge AI where the cloud can&apos;t reach, and bring spatial computing to the factory floor.
                </p>
                <p className="body-md" style={{ fontSize: "1.0625rem" }}>
                  Unlike generalist agencies, every system we ship is built for the constraints of real hardware — PLCs and sensors, intermittent connectivity, and environments where a few milliseconds of latency decides whether a line keeps moving. From legacy SCADA modernization to on-device computer vision for quality control, we engineer software with the same precision as the machines it runs alongside.
                </p>
              </div>
              <div className="flex-col gap-4">
                <div className="kinetic-card-low hoverable" style={{ padding: "1.75rem" }}>
                  <span className="material-symbols-outlined text-primary mb-4" style={{ fontSize: "2rem" }}>precision_manufacturing</span>
                  <h3 className="label-md mb-2" style={{ color: "var(--text-strong)", fontSize: "1.0625rem", textTransform: "none" }}>Built for uptime</h3>
                  <p className="body-md" style={{ fontSize: "0.9375rem" }}>Mission-critical systems engineered for 99.999% availability in the harshest physical environments.</p>
                </div>
                <div className="kinetic-card-low hoverable" style={{ padding: "1.75rem" }}>
                  <span className="material-symbols-outlined text-primary mb-4" style={{ fontSize: "2rem" }}>hub</span>
                  <h3 className="label-md mb-2" style={{ color: "var(--text-strong)", fontSize: "1.0625rem", textTransform: "none" }}>Edge-first AI</h3>
                  <p className="body-md" style={{ fontSize: "0.9375rem" }}>On-device inference for predictive maintenance and quality control — no cloud dependency, full data control.</p>
                </div>
                <div className="kinetic-card-low hoverable" style={{ padding: "1.75rem" }}>
                  <span className="material-symbols-outlined text-primary mb-4" style={{ fontSize: "2rem" }}>handshake</span>
                  <h3 className="label-md mb-2" style={{ color: "var(--text-strong)", fontSize: "1.0625rem", textTransform: "none" }}>No lock-in</h3>
                  <p className="body-md" style={{ fontSize: "0.9375rem" }}>You keep full operational control after launch — we build systems your team can own and run.</p>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* FAQ */}
        <ScrollReveal>
          <section className="container py-20">
            <h2 className="display-lg mb-12 section-heading-lg" style={{ fontSize: "2.75rem" }}>Common <span className="text-primary italic">questions</span></h2>
            <div className="flex-col gap-4">
              {HOME_FAQS.map((faq) => (
                <div key={faq.question} className="kinetic-card-low" style={{ padding: "1.5rem 2rem" }}>
                  <h3 className="label-md mb-2" style={{ color: "var(--text-strong)", fontSize: "1.25rem", textTransform: "none" }}>{faq.question}</h3>
                  <p className="body-md">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Contact */}
        <ScrollReveal>
          <section id="contact" className="container py-20">
            <div className="kinetic-card tech-accent grid-asymmetric-left contact-card-outer" style={{ padding: "var(--spacing-20)" }}>
              <div>
                <h2 className="display-lg mb-4 section-heading-lg" style={{ fontSize: "3.5rem" }}>Let&apos;s <span className="text-primary italic">talk</span></h2>
                <p className="body-md" style={{ maxWidth: "80%" }}>
                  Tell us what you&apos;re building. A Nika Red engineer will get back to you.
                </p>
                <div className="flex gap-12 mt-12 contact-info-row">
                  <address className="body-md" style={{ fontStyle: "normal" }}>
                    <span className="label-sm block mb-2">Location</span>
                    Chennai<br />
                    India
                  </address>
                  <div className="body-md">
                    <span className="label-sm block mb-2">Email</span>
                    contact@nikared.com
                  </div>
                </div>

                <UplinkForm />
              </div>

              <div className="contact-right-panel contact-meta" style={{ position: "relative" }}>
                <div className="contact-meta-item">
                  <p className="label-sm mb-2">Response time</p>
                  <p className="label-md" style={{ color: "var(--text-strong)" }}>24–48 hours</p>
                </div>
                <div className="contact-meta-item">
                  <p className="label-sm mb-2">Timezone</p>
                  <p className="label-md" style={{ color: "var(--text-strong)" }}>IST — UTC+5:30</p>
                </div>
                <div className="contact-meta-item">
                  <p className="label-sm mb-2">Preferred channel</p>
                  <p className="label-md" style={{ color: "var(--text-strong)" }}>Email</p>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </main>

      <Footer />
    </>
  );
}
