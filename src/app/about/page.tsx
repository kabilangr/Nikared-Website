import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import JsonLd from "@/components/JsonLd";
import { CtaCard } from "@/components/PageBits";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/structured-data";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Nika Red is a Chennai engineering studio building industrial software, edge AI, XR, and mobile products, and the team that ships and runs its own apps, Valam and Viduthi.",
  path: "/about",
});

const PRODUCTS = [
  {
    name: "Valam",
    href: "/products/valam",
    post: "/blog/on-device-llm-in-a-private-finance-app",
    kind: "Personal finance app",
    body: "A private money app with an AI coach, Mathi, that runs a fine-tuned language model on the phone. There is no account and no backend holding user data by default.",
    facts: [
      "256-bit vault key sealed by the Secure Enclave or Android Keystore",
      "Every number the coach says is checked against a tested finance engine",
      "More than 2,600 automated tests, including prompt-injection attacks",
    ],
  },
  {
    name: "Viduthi",
    href: "/products/viduthi",
    post: "/blog/payments-that-reconcile",
    kind: "Hostel and PG platform",
    body: "Verified hostel listings for residents and management software for owners: a live bed board, resident KYC, invoices, and rent collection.",
    facts: [
      "Public listings, resident app, and owner desk share one bed board",
      "Razorpay payments recorded idempotently, with cash and UPI in the same daily report",
      "Consent and data requests designed for India's DPDP Act, 2023",
    ],
  },
  {
    name: "Alavi",
    href: "/products/alavi",
    post: undefined as string | undefined,
    kind: "Data meter and firewall, coming soon",
    body: "An Android app that shows how much mobile data and Wi-Fi each app uses, per SIM and per day, and blocks the apps that waste it with a firewall that never leaves the phone.",
    facts: [
      "No internet permission, so nothing it measures can leave the phone",
      "Only blocked apps are routed through the local VPN; every other app bypasses it",
      "Blocked connections are refused at once instead of left to time out",
    ],
  },
];

const PRINCIPLES = [
  { icon: "memory", label: "Local first", body: "Run where the work happens: on the machine, at the site, or on the phone. Operations keep going when the network drops, and sensitive data does not have to leave." },
  { icon: "engineering", label: "Hardware-aware", body: "Software is designed around the real physical layer, from PLCs and sensors to low-end phones, with drift, outages, and device limits treated as normal conditions." },
  { icon: "lock_open", label: "No lock-in", body: "Code, infrastructure, and documentation live in your accounts. Your own team, or anyone you choose, can run and extend what we build." },
  { icon: "verified", label: "Privacy by design", body: "We collect only what a system needs, keep personal data on site or on the device where possible, and design for India's DPDP Act from the start." },
];

const STEPS = [
  { title: "Understand", body: "We start on the floor or with your users: walking the line, reading the old system, or testing the current app. The output is a short written plan with the problem, the measure of success, and the risks." },
  { title: "Prove", body: "We build the smallest version that answers the question on real data and real hardware, usually read-only and alongside what you already run. You see working software within weeks, not a slide deck." },
  { title: "Harden and roll out", body: "Security, monitoring, updates, and edge cases come next, followed by a staged rollout with a tested way back at every step." },
  { title: "Hand over", body: "You receive the code, infrastructure, and documentation, and your team is trained to run it. We stay on for support if you want us to." },
];

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
            Nika Red designs and builds software that has to work outside the office: on production lines, at remote sites, and on the phones people carry every day. We do it for manufacturers, logistics operators, infrastructure owners, and equipment makers, and we do it for ourselves, with two products we ship and run from Chennai and a third on the way.
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
          <img src="/chennai_node_1775043257682.png" alt="Abstract network map centred on Chennai" className="img-monochrome" />
        </div>
      </section>

      {/* Mission Statement */}
      <ScrollReveal>
        <section className="container py-20" style={{ marginTop: "5rem", background: "var(--surface-container-low)", maxWidth: "100%" }}>
          <div className="container" style={{ maxWidth: "1000px" }}>
            <div className="label-sm text-primary mb-8" style={{ letterSpacing: "0.2em", fontWeight: 700 }}>Our mission</div>
            <h2 className="display-lg mission-heading" style={{ fontSize: "3.5rem", lineHeight: 1.15 }}>
              Make the software around machines, money, and people{" "}
              <span style={{ WebkitTextStroke: "1px var(--primary)", color: "transparent" }}>as dependable</span>{" "}
              as the things it runs.
            </h2>
            <p className="body-md" style={{ fontSize: "1.125rem", maxWidth: "70ch", marginTop: "2.5rem" }}>
              A crashed dashboard in an office is an annoyance. A missed defect, a lost sensor reading, or a rent payment recorded twice is a real cost to a real person. We build for the second kind of environment, where software is judged by whether it keeps working on an ordinary shift, not by how it looks in a demo.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* Capability Cards */}
      <ScrollReveal>
        <section className="container py-20">
          <div className="grid-asymmetric-left" style={{ gap: "1.5rem" }}>

            <div className="kinetic-card hoverable capability-card" style={{ minHeight: "400px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div className="flex justify-between items-start mb-12">
                  <h3 className="display-lg section-heading-lg" style={{ fontSize: "2.75rem" }}>Engineering-led</h3>
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: "3rem" }}>neurology</span>
                </div>
                <p className="body-md">
                  Engineers lead every engagement, from the first conversation to handover. Technology choices are made on evidence: we prototype on your data and your hardware before committing, and we adopt new tools such as on-device language models or spatial computing only when they hold up in real use.
                </p>
              </div>
              <div className="flex gap-12 mt-12" style={{ flexWrap: "wrap" }}>
                <div>
                  <p className="label-sm">Founded</p>
                  <p className="label-md" style={{ color: "var(--text-strong)" }}>{SITE.foundingDate}</p>
                </div>
                <div>
                  <p className="label-sm">Base</p>
                  <p className="label-md" style={{ color: "var(--text-strong)" }}>Chennai, IN</p>
                </div>
                <div>
                  <p className="label-sm">Company</p>
                  <p className="label-md" style={{ color: "var(--text-strong)" }}>Nika Red Private Limited</p>
                </div>
              </div>
            </div>

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
                The disciplines feed each other. The skills that fit a vision model onto an edge computer are the same ones that put a language model on a phone in Valam. Running Viduthi day to day shows us what billing, payments, and support really demand, and that shapes every platform we build for clients.
              </p>
              <span className="material-symbols-outlined" style={{ fontSize: "4rem", color: "var(--ghost-icon)" }}>grid_view</span>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Our own products */}
      <ScrollReveal>
        <section className="container py-20">
          <div className="mb-12">
            <div className="label-sm text-primary mb-4" style={{ letterSpacing: "0.1em" }}>WHAT WE RUN OURSELVES</div>
            <h2 className="display-lg section-heading-lg" style={{ fontSize: "2.75rem", lineHeight: 1.1 }}>
              We ship <span className="text-primary italic">and operate</span> our own products
            </h2>
            <p className="body-md" style={{ maxWidth: "70ch", marginTop: "1.5rem" }}>
              Building products we have to support ourselves keeps us honest about what works. Every lesson about app stores, payments, privacy law, and support queues comes back into client work.
            </p>
          </div>
          <div className="card-grid-3">
            {PRODUCTS.map((p) => (
              <div key={p.name} className="kinetic-card tech-accent hoverable" style={{ display: "flex", flexDirection: "column" }}>
                <p className="label-sm mb-4">{p.kind}</p>
                <h3 className="display-lg mb-8" style={{ fontSize: "2.5rem" }}>{p.name}</h3>
                <p className="body-md mb-8">{p.body}</p>
                <ul className="service-deliverables mb-8">
                  {p.facts.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <p className="label-md" style={{ marginTop: "auto", display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
                  <Link href={p.href} className="tech-link">About {p.name} →</Link>
                  {p.post && <Link href={p.post} className="tech-link">Engineering notes →</Link>}
                </p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Principles */}
      <ScrollReveal>
        <section className="container py-20">
          <div className="mb-12">
            <div className="label-sm text-primary mb-4" style={{ letterSpacing: "0.1em" }}>HOW WE THINK</div>
            <h2 className="display-lg section-heading-lg" style={{ fontSize: "2.75rem", lineHeight: 1.1 }}>
              Principles that <span className="text-primary italic">hold up</span> in production
            </h2>
          </div>
          <div className="work-grid">
            {PRINCIPLES.map((p) => (
              <div key={p.label} className="kinetic-card-low hoverable" style={{ padding: "2rem" }}>
                <span className="material-symbols-outlined text-primary mb-4" style={{ fontSize: "2.5rem" }}>{p.icon}</span>
                <h3 className="label-md mb-4" style={{ fontSize: "1.25rem", color: "var(--text-strong)", textTransform: "none" }}>{p.label}</h3>
                <p className="body-md" style={{ fontSize: "0.9375rem" }}>{p.body}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* How an engagement works */}
      <ScrollReveal>
        <section className="container py-20">
          <div className="mb-12">
            <div className="label-sm text-primary mb-4" style={{ letterSpacing: "0.1em" }}>WORKING TOGETHER</div>
            <h2 className="display-lg section-heading-lg" style={{ fontSize: "2.75rem", lineHeight: 1.1 }}>
              How an engagement <span className="text-primary italic">works</span>
            </h2>
          </div>
          <div className="work-grid">
            {STEPS.map((s, i) => (
              <div key={s.title} className="kinetic-card-low" style={{ padding: "2rem" }}>
                <p className="display-lg" style={{ fontSize: "2.25rem", color: "var(--ghost-number)", marginBottom: "1rem" }}>{String(i + 1).padStart(2, "0")}</p>
                <h3 className="label-md mb-4" style={{ fontSize: "1.25rem", color: "var(--text-strong)", textTransform: "none" }}>{s.title}</h3>
                <p className="body-md" style={{ fontSize: "0.9375rem" }}>{s.body}</p>
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
              <h3 className="label-md text-primary mb-6" style={{ fontSize: "1.5rem" }}>Who we work with</h3>
              <ul className="service-deliverables">
                <li><Link href="/industries/manufacturing" className="tech-link">Manufacturing</Link>: inline inspection, condition monitoring, and PLC to MES integration</li>
                <li><Link href="/industries/logistics" className="tech-link">Logistics and supply chain</Link>: equipment to WMS integration, vision at the dock, and floor apps</li>
                <li><Link href="/industries/energy-infrastructure" className="tech-link">Energy and infrastructure</Link>: remote monitoring, alarm reduction, and crew training</li>
                <li><Link href="/industries/heavy-machinery" className="tech-link">Heavy machinery and OEMs</Link>: connected fleets, on-machine diagnostics, and service tools</li>
                <li><Link href="/services/product-engineering" className="tech-link">Founders and product teams</Link>: mobile apps, SaaS platforms, and on-device AI</li>
              </ul>
            </div>
            <div>
              <h2 className="display-lg mb-8 section-heading-lg" style={{ fontSize: "2.5rem", lineHeight: 1.1 }}>
                Based in Chennai, <span className="text-primary italic">building worldwide</span>
              </h2>
              <p className="body-md mb-4" style={{ fontSize: "1.0625rem" }}>
                Chennai is one of India&apos;s largest centres for automotive, electronics, and heavy engineering, and home to a deep pool of software talent. Working from here puts us close to the kind of operations we build for, and we work with clients across India and abroad.
              </p>
              <p className="body-md">
                Whether you are modernizing a decades-old SCADA system, putting a vision model on a production line, or launching an app that has to handle real money and real personal data, the first step is the same: a conversation with an engineer about what you run and what is getting in the way.
              </p>
              <Link href="/contact" className="tech-link label-md" style={{ textDecoration: "none", display: "inline-block", marginTop: "2rem" }}>Start a conversation →</Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <section className="container">
        <CtaCard title="Have a problem worth" accent="solving" body="Tell us about the operation or product, and we will tell you honestly whether we are the right team for it." label="Talk to an engineer" />
      </section>

      <Footer />
    </main>
  );
}
