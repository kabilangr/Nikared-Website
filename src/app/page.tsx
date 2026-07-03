import Link from "next/link";
import NeuralCanvas from "@/components/NeuralCanvas";
import UplinkForm from "@/components/UplinkForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <NeuralCanvas />
      <Header />

      <main>
        {/* Hero Section */}
        <section className="container py-20 relative" style={{ minHeight: "85vh", display: "flex", alignItems: "center" }}>
          <div className="hero-text" style={{ zIndex: 10, maxWidth: "60%" }}>
            <div className="status-chip label-md">Based in Chennai — building worldwide</div>
            <h1 className="display-lg mb-8">
              Software forged for<br /><span className="text-primary italic">the physical world</span>
            </h1>
            <p className="body-md mb-8" style={{ fontSize: "1.25rem", maxWidth: "80%" }}>
              Nika Red is an engineering studio that builds software, AI systems, and XR for machines, factories, and the field — not just the browser tab.
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
            <img src="/logo.svg" alt="" className="mark-signature" style={{ width: "85%", height: "auto" }} />
          </div>
        </section>

        {/* About Us */}
        <ScrollReveal>
          <section id="about" className="container py-20 grid-asymmetric-right">
            <div className="kinetic-card electric-glow" style={{ padding: 0, position: "relative", overflow: "hidden", zIndex: 1 }}>
              <div className="light-leak" style={{ width: "100%", height: "100%", position: "relative", zIndex: 2 }}>
                <img src="/chennai_node_1775043257682.png" alt="Chennai" className="img-monochrome" />
                <div style={{ position: "absolute", bottom: "1rem", left: "1rem", background: "var(--primary)", color: "var(--text-strong)", padding: "0.4rem 1rem", borderRadius: "var(--radius-pill)" }} className="label-md">
                  Chennai, India
                </div>
              </div>
            </div>

            <div className="flex-col items-start align-right" style={{ textAlign: "right", position: "relative", zIndex: 10 }}>
              <h2 className="display-lg mb-8" style={{ fontSize: "3.5rem", lineHeight: 1.05 }}>
                Built in Chennai, <br /><span className="text-primary italic">for the physical world</span>
              </h2>
              <p className="body-md mb-8" style={{ maxWidth: "80%", marginLeft: "auto", color: "var(--text-strong)", fontWeight: 500 }}>
                We work from the heart of Chennai&apos;s innovation corridor. Nika Red designs software the way a good workshop builds tools — with care for the material, precision in the joints, and nothing bolted on for show.
              </p>
              <div className="body-md mb-8" style={{ borderRight: "2px solid var(--primary)", paddingRight: "1rem", fontWeight: 500, fontStyle: "italic", maxWidth: "80%", marginLeft: "auto", color: "var(--text-strong)" }}>
                &ldquo;We build what the work actually needs.&rdquo;
              </div>
              <div className="flex gap-12" style={{ justifyContent: "flex-end" }}>
                <span className="label-md flex items-center gap-4" style={{ color: "var(--text-strong)" }}>
                  <span className="material-symbols-outlined text-primary">analytics</span> Research-led
                </span>
                <span className="label-md flex items-center gap-4" style={{ color: "var(--text-strong)" }}>
                  <span className="material-symbols-outlined text-primary">memory</span> Built for hardware
                </span>
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
                  <h3 className="label-md text-primary mb-4" style={{ fontSize: "2rem" }}>Engineering Foundry</h3>
                  <p className="body-md mb-8" style={{ maxWidth: "90%" }}>
                    Industrial-grade custom software and hardware-management systems, built to run factory floors without downtime.
                  </p>
                  <Link href="/services" className="tech-link label-md" style={{ textDecoration: "none" }}>Explore the Foundry →</Link>
                </div>
                <div className="flex-col gap-4 align-right" style={{ textAlign: "right" }}>
                  <span className="label-sm ghost-border" style={{ padding: "0.5rem 1rem" }}>System architecture</span>
                  <span className="label-sm ghost-border" style={{ padding: "0.5rem 1rem" }}>Legacy modernization</span>
                </div>
                <div className="label-md" style={{ fontSize: "4rem", color: "var(--ghost-number)", textAlign: "right", zIndex: 5, position: "relative" }}>01</div>
              </div>

              <div className="kinetic-card-low hoverable grid-asymmetric-right" style={{ position: "relative", zIndex: 10 }}>
                <div className="label-md" style={{ fontSize: "4rem", color: "var(--ghost-number)", zIndex: 5, position: "relative" }}>02</div>
                <div style={{ textAlign: "right", position: "relative", zIndex: 10 }}>
                  <div className="flex justify-between items-start mb-8" style={{ flexDirection: "row-reverse" }}>
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: "3rem" }}>psychology</span>
                  </div>
                  <h3 className="label-md text-primary mb-4" style={{ fontSize: "2rem" }}>AI & Machine Learning</h3>
                  <p className="body-md mb-8" style={{ maxWidth: "90%", marginLeft: "auto", color: "var(--text-strong)", fontWeight: 500 }}>
                    Neural architectures built for the edge, not the cloud — real-time inference where connectivity can&apos;t be guaranteed.
                  </p>
                  <Link href="/services" className="tech-link label-md" style={{ textDecoration: "none", color: "var(--secondary)", fontWeight: 700 }}>See our AI work →</Link>
                </div>
              </div>

              <div className="flex gap-12" style={{ alignItems: "stretch", position: "relative", zIndex: 10 }}>
                <div className="kinetic-card tech-accent hoverable flex-col" style={{ flex: 1, position: "relative", zIndex: 10 }}>
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: "3rem", marginBottom: "2rem" }}>view_in_ar</span>
                  <h3 className="label-md text-primary mb-4" style={{ fontSize: "2rem" }}>XR & Spatial Computing</h3>
                  <p className="body-md" style={{ color: "var(--text-strong)", fontWeight: 500 }}>
                    Extended reality for industrial simulation, field guidance, and immersive operations command centers.
                  </p>
                </div>
                <div className="kinetic-card-low flex items-center justify-center" style={{ flex: 1.5, position: "relative", overflow: "hidden", padding: 0 }}>
                  <div style={{ zIndex: 10, padding: "var(--spacing-12)" }}>
                    <h4 className="label-md text-primary" style={{ fontSize: "1.5rem", lineHeight: 1.5, fontStyle: "italic" }}>
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
                      width: "60%",
                      background: "radial-gradient(circle at 70% 60%, var(--wash-a), transparent 65%), radial-gradient(circle at 90% 90%, var(--wash-b), transparent 60%)",
                    }}
                  />
                </div>
              </div>

            </div>
          </section>
        </ScrollReveal>

        {/* Contact */}
        <ScrollReveal>
          <section id="contact" className="container py-20">
            <div className="kinetic-card tech-accent grid-asymmetric-left" style={{ padding: "var(--spacing-20)" }}>
              <div>
                <h2 className="display-lg mb-4" style={{ fontSize: "3.5rem" }}>Let&apos;s <span className="text-primary italic">talk</span></h2>
                <p className="body-md" style={{ maxWidth: "80%" }}>
                  Tell us what you&apos;re building. A Nika Red engineer will get back to you.
                </p>
                <div className="flex gap-12 mt-12">
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
