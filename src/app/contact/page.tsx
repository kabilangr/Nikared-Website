import UplinkForm from "@/components/UplinkForm";

export default function Contact() {
  return (
    <main style={{ paddingBottom: "100px", minHeight: "100vh" }}>
      <header className="glass-panel" style={{ position: "fixed", top: 0, width: "100%", zIndex: 50 }}>
        <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "1rem" }}>
          <img src="/logo.png" alt="NIKA RED Logo" style={{ height: "32px", width: "auto" }} />
          <span className="label-md text-primary" style={{ fontSize: "1.2rem" }}>NIKA RED</span>
        </a>
        <nav className="label-md hidden-mobile">
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </nav>
        <a href="/contact" className="btn-primary label-md" style={{ fontSize: "0.875rem", textDecoration: "none" }}>Access Portal</a>
      </header>

      <section className="container py-20" style={{ paddingTop: "150px" }}>
        <div className="kinetic-card tech-accent grid-asymmetric-left" style={{ padding: "var(--spacing-20)", minHeight: "60vh" }}>
          <div className="mounting-bracket"></div>
          <div>
            <h1 className="display-lg mb-4" style={{ fontSize: "4rem" }}>Establish <span className="text-primary italic">Uplink</span></h1>
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
                sysadmin@nikared.com<br />
                +91 [REDACTED]
              </div>
            </div>

            <UplinkForm />
          </div>

          <div className="flex-col items-start align-right" style={{ textAlign: "right", position: "relative", height: "100%", minHeight: "300px" }}>
            <div className="label-md" style={{ fontSize: "4rem", color: "var(--ghost-border)", position: "absolute", bottom: 0, right: 0, lineHeight: 0.8 }}>SYS<br />REQ</div>
          </div>
        </div>
      </section>

      <footer className="container py-20 flex justify-between items-center" style={{ borderTop: "1px solid var(--ghost-border)", opacity: 0.6, marginTop: "auto" }}>
        <div className="label-md">© 2024 NIKA RED PRIVATE LIMITED</div>
        <div className="flex gap-8 label-sm">
          <a href="#" className="tech-link">Privacy_Protocol</a>
          <a href="#" className="tech-link">Service_Terms</a>
        </div>
      </footer>
    </main>
  );
}
