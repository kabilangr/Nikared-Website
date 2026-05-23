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
            <div className="status-chip label-md">System Status: Operational</div>
            <h1 className="display-lg mb-8" style={{ textShadow: "0 0 40px rgba(129,236,255,0.4)" }}>
              <span className="text-primary italic">Industrial</span> grade
              <br />Intelligence
            </h1>
            <p className="body-md mb-8" style={{ fontSize: "1.25rem", maxWidth: "80%" }}>
              NIKA RED builds industrial-grade software and AI systems — engineered for the physical world.
            </p>
            <div className="flex gap-4">
              <Link href="/contact" className="btn-primary label-md" style={{ textDecoration: "none" }}>Initiate Link</Link>
              <Link href="/services" className="btn-secondary label-md" style={{ textDecoration: "none" }}>System Specs</Link>
            </div>
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
            <img src="/hero_neural_mesh_1775043239514.png" alt="Neural Mesh" className="img-monochrome" />
          </div>
        </section>

        {/* About Us */}
        <ScrollReveal>
          <section id="about" className="container py-20 grid-asymmetric-right">
            <div className="kinetic-card electric-glow" style={{ padding: 0, position: "relative", overflow: "hidden", zIndex: 1 }}>
              <div className="mounting-bracket" style={{ zIndex: 3 }}></div>
              <div className="light-leak" style={{ width: "100%", height: "100%", position: "relative", zIndex: 2 }}>
                <img src="/chennai_node_1775043257682.png" alt="High Tech Hub" className="img-monochrome" />
                <div style={{ position: "absolute", bottom: 0, left: 0, background: "var(--primary)", color: "black", padding: "0.5rem 1rem" }} className="label-md">
                  NODE: CHENNAI_HQ
                </div>
              </div>
            </div>

            <div className="flex-col items-start align-right" style={{ textAlign: "right", position: "relative", zIndex: 10 }}>
              <h2 className="display-lg mb-8" style={{ fontSize: "4.5rem", lineHeight: 1, textShadow: "0 0 10px rgba(129,236,255,0.3)" }}>
                Legacy of <br /><span className="text-primary italic">Kinetic Precision</span>
              </h2>
              <p className="body-md mb-8" style={{ maxWidth: "80%", marginLeft: "auto", color: "white", fontWeight: 500 }}>
                Based in the heart of Chennai's innovation corridor, NIKA RED represents a convergence of engineering excellence and creative vision. We don't just build software; we architect the infrastructure of tomorrow.
              </p>
              <div className="body-md mb-8" style={{ borderRight: "2px solid var(--primary)", paddingRight: "1rem", fontWeight: 500, fontStyle: "italic", maxWidth: "80%", marginLeft: "auto", color: "white" }}>
                "Form Follows Protocol" — where every line of code serves a singular, powerful purpose.
              </div>
              <div className="flex gap-12" style={{ justifyContent: "flex-end" }}>
                <span className="label-md flex items-center gap-4" style={{ color: "white" }}>
                  <span className="material-symbols-outlined text-primary">analytics</span> R&D Focused
                </span>
                <span className="label-md flex items-center gap-4" style={{ color: "white" }}>
                  <span className="material-symbols-outlined text-primary">memory</span> Hardware Native
                </span>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Services */}
        <ScrollReveal>
          <section id="services" className="container py-20">
            <h2 className="display-lg mb-12">Core <span className="text-primary italic">Disciplines</span></h2>
            <div className="flex-col gap-12">

              <div className="kinetic-card tech-accent electric-glow hoverable grid-asymmetric-left">
                <div className="mounting-bracket"></div>
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: "3rem" }}>terminal</span>
                  </div>
                  <h3 className="label-md text-primary mb-4" style={{ fontSize: "2rem" }}>Enterprise Foundry</h3>
                  <p className="body-md mb-8" style={{ maxWidth: "90%" }}>
                    Developing robust, industrial-grade custom software and hardware management systems designed for maximum operational throughput.
                  </p>
                  <Link href="/services" className="tech-link label-md" style={{ textDecoration: "none" }}>Deploy Systems</Link>
                </div>
                <div className="flex-col gap-4 align-right" style={{ textAlign: "right" }}>
                  <span className="label-sm ghost-border" style={{ padding: "0.5rem 1rem" }}>System Architecture</span>
                  <span className="label-sm ghost-border" style={{ padding: "0.5rem 1rem" }}>Legacy Bridge</span>
                </div>
                <div className="label-md" style={{ fontSize: "5rem", color: "rgba(255, 255, 255, 0.4)", textAlign: "right", zIndex: 5, position: "relative" }}>01</div>
              </div>

              <div className="kinetic-card-low hoverable grid-asymmetric-right" style={{ position: "relative", zIndex: 10 }}>
                <div className="mounting-bracket"></div>
                <div className="label-md" style={{ fontSize: "5rem", color: "rgba(255, 255, 255, 0.4)", zIndex: 5, position: "relative" }}>02</div>
                <div style={{ textAlign: "right", position: "relative", zIndex: 10 }}>
                  <div className="flex justify-between items-start mb-8" style={{ flexDirection: "row-reverse" }}>
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: "3rem" }}>psychology</span>
                  </div>
                  <h3 className="label-md text-primary mb-4" style={{ fontSize: "2rem" }}>AI Core R&D</h3>
                  <p className="body-md mb-8" style={{ maxWidth: "90%", marginLeft: "auto", color: "white", fontWeight: 500 }}>
                    Proprietary neural architectures optimized for edge deployment and real-time sensor integration.
                  </p>
                  <Link href="/services" className="tech-link label-md" style={{ textDecoration: "none", color: "var(--primary)", fontWeight: 700 }}>Request Research Data</Link>
                </div>
              </div>

              <div className="flex gap-12" style={{ alignItems: "stretch", position: "relative", zIndex: 10 }}>
                <div className="kinetic-card tech-accent hoverable flex-col" style={{ flex: 1, position: "relative", zIndex: 10 }}>
                  <div className="mounting-bracket"></div>
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: "3rem", marginBottom: "2rem" }}>view_in_ar</span>
                  <h3 className="label-md text-primary mb-4" style={{ fontSize: "2rem" }}>XR Frontiers</h3>
                  <p className="body-md" style={{ color: "white", fontWeight: 500 }}>
                    Extended Reality implementation for industrial simulation, spatial computing, and immersive data command centers.
                  </p>
                </div>
                <div className="kinetic-card-low flex items-center justify-center" style={{ flex: 1.5, position: "relative", overflow: "hidden", padding: 0 }}>
                  <div style={{ zIndex: 10, padding: "var(--spacing-12)" }}>
                    <h4 className="label-md text-primary" style={{ fontSize: "1.5rem", lineHeight: 1.5, fontStyle: "italic" }}>
                      "THE FUTURE IS NOT PREDICTED, <br />IT IS MANUFACTURED."
                    </h4>
                  </div>
                  <div className="light-leak" style={{ position: "absolute", right: 0, bottom: 0, height: "100%", width: "50%" }}>
                    <img
                      src="/screen.png"
                      className="img-monochrome"
                      alt="Circuit"
                      style={{
                        maskImage: "linear-gradient(to right, transparent, black)",
                        WebkitMaskImage: "linear-gradient(to right, transparent, black)",
                      }}
                    />
                  </div>
                </div>
              </div>

            </div>
          </section>
        </ScrollReveal>

        {/* Contact System */}
        <ScrollReveal>
          <section id="contact" className="container py-20">
            <div className="kinetic-card tech-accent grid-asymmetric-left" style={{ padding: "var(--spacing-20)" }}>
              <div className="mounting-bracket"></div>
              <div>
                <h2 className="display-lg mb-4" style={{ fontSize: "4rem" }}>Establish <span className="text-primary italic">Uplink</span></h2>
                <p className="body-md" style={{ maxWidth: "80%" }}>
                  Secure transmission lines are open. Connect with NIKA RED engineering.
                </p>
                <div className="flex gap-12 mt-12">
                  <address className="body-md" style={{ fontStyle: "normal" }}>
                    <span className="label-sm block mb-2">Location</span>
                    Chennai<br />
                    India
                  </address>
                  <div className="body-md">
                    <span className="label-sm block mb-2">Direct Line</span>
                    contact@nikared.com
                  </div>
                </div>

                <UplinkForm />
              </div>

              <div className="contact-right-panel contact-meta" style={{ position: "relative" }}>
                <div className="contact-meta-item">
                  <p className="label-sm mb-2">Response Time</p>
                  <p className="label-md text-white">24–48 Hours</p>
                </div>
                <div className="contact-meta-item">
                  <p className="label-sm mb-2">Timezone</p>
                  <p className="label-md text-white">IST — UTC+5:30</p>
                </div>
                <div className="contact-meta-item">
                  <p className="label-sm mb-2">Preferred Channel</p>
                  <p className="label-md text-white">Email Uplink</p>
                </div>
                <div className="label-md" style={{ fontSize: "3rem", color: "rgba(129,236,255,0.06)", position: "absolute", bottom: 0, right: 0, lineHeight: 0.8 }}>SYS<br />REQ</div>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </main>

      <Footer />
    </>
  );
}
