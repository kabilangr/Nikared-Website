import Link from "next/link";
import NeuralCanvas from "@/components/NeuralCanvas";
import UplinkForm from "@/components/UplinkForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/structured-data";
import { PostCard } from "@/components/PageBits";
import { getAllPosts } from "@/lib/content/blog";
import { ProductMark } from "@/components/ProductBits";
import { PRODUCTS } from "@/lib/content/products";

const HOME_FAQS = [
  {
    question: "What does Nika Red build?",
    answer:
      "Nika Red is a Chennai engineering studio with four disciplines: industrial software and integration, edge AI and machine learning, XR and spatial computing, and product engineering for mobile apps and SaaS. We also build and run our own products, Valam and Viduthi.",
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
    question: "What products has Nika Red built?",
    answer:
      "Valam is a private personal finance app for Android with an AI coach that runs on the phone. Viduthi is a platform for finding verified hostels and PGs in India, with management software for hostel owners. Both are designed, built, and operated by Nika Red. A third, Alavi, is a data usage meter and firewall for Android that is coming soon to Google Play.",
  },
  {
    question: "How quickly will you respond to a project inquiry?",
    answer:
      "A Nika Red engineer typically responds to new project inquiries within 24 to 48 hours. Reach us at contact@nikared.com or through the contact form.",
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
            <div className="status-chip label-md">Based in Chennai, building worldwide</div>
            <h1 className="display-lg mb-8 hero-display" style={{ fontSize: "4rem" }}>
              Industrial Intelligence,<br /><span className="text-primary italic">Forged in Code</span>
            </h1>
            <p className="body-md mb-8 body-lg-text" style={{ fontSize: "1.25rem", maxWidth: "80%" }}>
              Nika Red is a Chennai engineering studio. We connect factory floors to the business, put AI on the machines that need it, and give technicians spatial tools for complex equipment. We also design, ship, and run our own products.
            </p>
            <div className="flex gap-4">
              <Link href="/contact" className="btn-primary label-md" style={{ textDecoration: "none" }}>Start a project</Link>
              <Link href="/services" className="btn-secondary label-md" style={{ textDecoration: "none" }}>Explore services</Link>
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

        {/* Products */}
        <ScrollReveal>
          <section className="container py-20" aria-labelledby="our-products">
            <div className="flex justify-between items-center flex-wrap gap-4 mb-12">
              <h2 id="our-products" className="display-lg section-heading-lg" style={{ fontSize: "2.75rem" }}>Proof of work: products we <span className="text-primary italic">build and run</span></h2>
              <Link href="/products" className="tech-link label-md">All products →</Link>
            </div>
            <div className="card-grid-3">
              {PRODUCTS.map((p) => (
                <Link key={p.slug} href={`/products/${p.slug}`} className="kinetic-card-low hoverable link-card">
                  <ProductMark product={p} size={52} />
                  <p className="body-md" style={{ marginTop: "1.25rem", color: "var(--text-strong)", fontWeight: 500 }}>{p.tagline}</p>
                  <p className="body-md" style={{ marginTop: "0.5rem", fontSize: "0.9375rem" }}>{p.summary}</p>
                  <span className="tech-link label-md">About {p.name} →</span>
                </Link>
              ))}
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
                  <h3 className="label-md text-primary mb-4 card-heading-lg" style={{ fontSize: "2rem" }}>Connected operations</h3>
                  <p className="body-md mb-8" style={{ maxWidth: "90%" }}>
                    MES, ERP, and SCADA integration that gets live machine data to the people planning the work, added alongside the systems you already run without stopping production.
                  </p>
                  <Link href="/services/industrial-software" className="tech-link label-md" style={{ textDecoration: "none" }}>Industrial software engineering →</Link>
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
                  <h3 className="label-md text-primary mb-4 card-heading-lg" style={{ fontSize: "2rem" }}>Edge intelligence</h3>
                  <p className="body-md mb-8" style={{ maxWidth: "90%", marginLeft: "auto", color: "var(--text-strong)", fontWeight: 500 }}>
                    Vision inspection at line speed and anomaly detection that flags degrading equipment before it stops the line, running on hardware next to the machine.
                  </p>
                  <Link href="/services/edge-ai" className="tech-link label-md" style={{ textDecoration: "none", color: "var(--secondary)", fontWeight: 700 }}>Edge AI and machine learning →</Link>
                </div>
              </div>

              <div className="flex gap-12 service-flex-row" style={{ alignItems: "stretch", position: "relative", zIndex: 10 }}>
                <div className="kinetic-card tech-accent hoverable flex-col" style={{ flex: 1, position: "relative", zIndex: 10 }}>
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: "3rem", marginBottom: "2rem" }}>view_in_ar</span>
                  <h3 className="label-md text-primary mb-4 card-heading-lg" style={{ fontSize: "2rem" }}>Augmented workforce</h3>
                  <p className="body-md" style={{ color: "var(--text-strong)", fontWeight: 500 }}>
                    AR work instructions, digital twins, and VR training that help technicians learn and service complex equipment safely.
                  </p>
                  <Link href="/services/xr-spatial-computing" className="tech-link label-md" style={{ textDecoration: "none", marginTop: "1.5rem" }}>XR and spatial computing →</Link>
                </div>
                <div className="kinetic-card-low hoverable flex-col" style={{ flex: 1.5, position: "relative", overflow: "hidden" }}>
                  <div style={{ zIndex: 10, position: "relative" }}>
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: "3rem", marginBottom: "2rem", display: "block" }}>rocket_launch</span>
                    <h3 className="label-md text-primary mb-4 card-heading-lg" style={{ fontSize: "2rem" }}>Product engineering</h3>
                    <p className="body-md" style={{ color: "var(--text-strong)", fontWeight: 500 }}>
                      Mobile apps and SaaS platforms from idea to launch, built by the team that ships and runs Valam and Viduthi.
                    </p>
                    <Link href="/services/product-engineering" className="tech-link label-md" style={{ textDecoration: "none", marginTop: "1.5rem", display: "inline-block" }}>Product engineering →</Link>
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
            <h2 className="display-lg mb-12 section-heading-lg" style={{ fontSize: "2.75rem" }}>Industries we <span className="text-primary italic">serve</span></h2>
            <div className="work-grid industries-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
              {[
                { icon: "factory", href: "/industries/manufacturing", label: "Manufacturing", body: "Custom industrial software and edge AI for quality control, predictive maintenance, and real-time SCADA integration on the factory floor." },
                { icon: "local_shipping", href: "/industries/logistics", label: "Logistics & Supply Chain", body: "Equipment-to-WMS integration, vision at the dock, and warehouse digital twins for distribution and supply chain operations." },
                { icon: "bolt", href: "/industries/energy-infrastructure", label: "Energy & Infrastructure", body: "Remote monitoring that survives weak links, anomaly detection on telemetry, and digital twins for distributed critical assets." },
              ].map(industry => (
                <Link key={industry.label} href={industry.href} className="kinetic-card hoverable link-card" style={{ padding: "2rem" }}>
                  <span className="material-symbols-outlined text-primary mb-4" style={{ fontSize: "2.5rem" }}>{industry.icon}</span>
                  <h3 className="label-md mb-4" style={{ fontSize: "1.25rem", color: "var(--text-strong)", textTransform: "none" }}>{industry.label}</h3>
                  <p className="body-md" style={{ fontSize: "0.9375rem" }}>{industry.body}</p>
                </Link>
              ))}
            </div>
            <Link href="/industries" className="tech-link label-md" style={{ display: "inline-block", marginTop: "2rem" }}>All industries →</Link>
          </section>
        </ScrollReveal>

        {/* Overview: SEO-rich narrative */}
        <ScrollReveal>
          <section className="container py-20">
            <div className="grid-asymmetric-left" style={{ gap: "3rem", alignItems: "start" }}>
              <div>
                <div className="who-label text-primary" style={{ letterSpacing: "0.1em" }}>WHO WE ARE</div>
                <h2 className="display-lg mb-8 section-heading-lg" style={{ fontSize: "2.75rem", lineHeight: 1.1 }}>
                  A software studio for the <span className="text-primary italic">physical world</span>
                </h2>
                <p className="body-md mb-4" style={{ fontSize: "1.0625rem" }}>
                  Nika Red is a Chennai-based engineering studio building the software that heavy industry runs on. We partner with manufacturers, logistics operators, and energy and infrastructure companies to design custom industrial software, deploy edge AI where the cloud can&apos;t reach, and bring spatial computing to the factory floor. We apply the same discipline to our own products, Valam and Viduthi, which we design, ship, and operate ourselves.
                </p>
                <p className="body-md" style={{ fontSize: "1.0625rem" }}>
                  Unlike generalist agencies, every system we ship is built for the constraints of real hardware: PLCs and sensors, intermittent connectivity, and environments where a few milliseconds of latency decides whether a line keeps moving. From legacy SCADA modernization to on-device computer vision for quality control, we engineer software with the same precision as the machines it runs alongside.
                </p>
              </div>
              <div className="flex-col gap-4">
                <div className="kinetic-card-low hoverable" style={{ padding: "1.75rem" }}>
                  <span className="material-symbols-outlined text-primary mb-4" style={{ fontSize: "2rem" }}>precision_manufacturing</span>
                  <h3 className="label-md mb-2" style={{ color: "var(--text-strong)", fontSize: "1.0625rem", textTransform: "none" }}>Built for uptime</h3>
                  <p className="body-md" style={{ fontSize: "0.9375rem" }}>Store-and-forward at the edge, read-only rollouts beside live systems, and a rollback plan for every change, so a dropped network costs latency, not data.</p>
                </div>
                <div className="kinetic-card-low hoverable" style={{ padding: "1.75rem" }}>
                  <span className="material-symbols-outlined text-primary mb-4" style={{ fontSize: "2rem" }}>hub</span>
                  <h3 className="label-md mb-2" style={{ color: "var(--text-strong)", fontSize: "1.0625rem", textTransform: "none" }}>Edge-first AI</h3>
                  <p className="body-md" style={{ fontSize: "0.9375rem" }}>On-device inference for predictive maintenance and quality control, with no cloud dependency and full data control.</p>
                </div>
                <div className="kinetic-card-low hoverable" style={{ padding: "1.75rem" }}>
                  <span className="material-symbols-outlined text-primary mb-4" style={{ fontSize: "2rem" }}>handshake</span>
                  <h3 className="label-md mb-2" style={{ color: "var(--text-strong)", fontSize: "1.0625rem", textTransform: "none" }}>No lock-in</h3>
                  <p className="body-md" style={{ fontSize: "0.9375rem" }}>You keep full operational control after launch. We build systems your team can own and run.</p>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Latest from the blog */}
        <ScrollReveal>
          <section className="container py-20" aria-labelledby="latest-posts">
            <div className="flex justify-between items-center flex-wrap gap-4 mb-12">
              <h2 id="latest-posts" className="display-lg section-heading-lg" style={{ fontSize: "2.75rem" }}>From the <span className="text-primary italic">blog</span></h2>
              <Link href="/blog" className="tech-link label-md">All articles →</Link>
            </div>
            <div className="card-grid-3">
              {getAllPosts().slice(0, 3).map((p) => <PostCard key={p.slug} post={p} />)}
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
                  <p className="label-md" style={{ color: "var(--text-strong)" }}>24 to 48 hours</p>
                </div>
                <div className="contact-meta-item">
                  <p className="label-sm mb-2">Timezone</p>
                  <p className="label-md" style={{ color: "var(--text-strong)" }}>IST (UTC+5:30)</p>
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
