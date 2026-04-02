export default function Services() {
  return (
    <main style={{ paddingBottom: "100px" }}>
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

      <section className="container relative" style={{ paddingTop: "150px" }}>
        <h1 className="display-lg mb-12">Core <span className="text-primary italic">Disciplines</span></h1>
        <div className="flex-col gap-12">
            
            <div className="kinetic-card tech-accent electric-glow grid-asymmetric-left">
              <div className="mounting-bracket"></div>
              <div>
                <div className="flex justify-between items-start mb-8">
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: "3rem" }}>terminal</span>
                </div>
                <h3 className="label-md text-primary mb-4" style={{ fontSize: "2rem" }}>Enterprise Foundry</h3>
                <p className="body-md mb-8" style={{ maxWidth: "90%" }}>
                  Developing robust, industrial-grade custom software and hardware management systems designed for maximum operational throughput.
                </p>
                <a href="/contact" className="tech-link label-md">Deploy Systems</a>
              </div>
              <div className="flex-col gap-4 align-right" style={{ textAlign: "right" }}>
                <span className="label-sm ghost-border" style={{ padding: "0.5rem 1rem" }}>System Architecture</span>
                <span className="label-sm ghost-border" style={{ padding: "0.5rem 1rem" }}>Legacy Bridge</span>
              </div>
              <div className="label-md" style={{ fontSize: "5rem", color: "rgba(255, 255, 255, 0.4)", textAlign: "right", zIndex: 5, position: "relative" }}>01</div>
            </div>

            <div className="kinetic-card-low grid-asymmetric-right" style={{ position: "relative", zIndex: 10 }}>
              <div className="mounting-bracket"></div>
              <div className="label-md" style={{ fontSize: "5rem", color: "rgba(255, 255, 255, 0.4)", zIndex: 5, position: "relative" }}>02</div>
              <div style={{ textAlign: "right", position: "relative", zIndex: 10 }}>
                <div className="flex justify-between items-start mb-8" style={{ flexDirection: "row-reverse" }}>
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: "3rem", color: "#81ecff !important" }}>psychology</span>
                </div>
                <h3 className="label-md text-primary mb-4" style={{ fontSize: "2rem", color: "#81ecff !important", textShadow: "0 0 10px rgba(129,236,255,0.3)" }}>AI Core R&D</h3>
                <p className="body-md mb-8" style={{ maxWidth: "90%", marginLeft: "auto", color: "#ffffff !important", fontWeight: 500 }}>
                  Proprietary neural architectures optimized for edge deployment and real-time sensor integration.
                </p>
                <a href="/contact" className="tech-link label-md" style={{ color: "#81ecff !important", fontWeight: 700 }}>Request Research Data</a>
              </div>
            </div>

            <div className="flex gap-12" style={{ alignItems: "stretch", position: "relative", zIndex: 10 }}>
              <div className="kinetic-card tech-accent flex-col" style={{ flex: 1, position: "relative", zIndex: 10 }}>
                <div className="mounting-bracket"></div>
                <span className="material-symbols-outlined text-primary" style={{ fontSize: "3rem", marginBottom: "2rem", color: "#81ecff !important", opacity: "1 !important" }}>view_in_ar</span>
                <h3 className="label-md text-primary mb-4" style={{ fontSize: "2rem", color: "#81ecff !important", textShadow: "0 0 10px rgba(129,236,255,0.3)" }}>XR Frontiers</h3>
                <p className="body-md" style={{ color: "#ffffff !important", fontWeight: 500 }}>
                  Extended Reality implementation for industrial simulation, spatial computing, and immersive data command centers.
                </p>
              </div>
              <div className="kinetic-card-low flex items-center justify-center p-0" style={{ flex: 1.5, position: "relative", overflow: "hidden" }}>
                <div style={{ zIndex: 10, padding: "var(--spacing-12)" }}>
                  <h4 className="label-md text-primary" style={{ fontSize: "1.5rem", lineHeight: 1.5, fontStyle: "italic" }}>
                    "THE FUTURE IS NOT PREDICTED, <br />IT IS MANUFACTURED."
                  </h4>
                </div>
                <div className="light-leak" style={{ position: "absolute", right: 0, bottom: 0, height: "100%", width: "50%" }}>
                  <img src="/screen.png" className="img-monochrome" alt="Circuit" style={{ maskImage: "linear-gradient(to right, transparent, black)", WebkitMaskImage: "linear-gradient(to right, transparent, black)" }} />
                </div>
              </div>
            </div>

        </div>
      </section>

      <footer className="container py-20 flex justify-between items-center" style={{ borderTop: "1px solid var(--ghost-border)", opacity: 0.6, marginTop: "5rem" }}>
        <div className="label-md">© 2024 NIKA RED PRIVATE LIMITED</div>
        <div className="flex gap-8 label-sm">
          <a href="#" className="tech-link">Privacy_Protocol</a>
          <a href="#" className="tech-link">Service_Terms</a>
        </div>
      </footer>
    </main>
  );
}
