export default function About() {
  return (
    <main style={{ paddingBottom: "100px" }}>
      {/* Header element to link back home */}
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

      {/* Hero Section */}
      <section className="container relative" style={{ paddingTop: "150px", minHeight: "60vh", display: "flex", alignItems: "center" }}>
        <div style={{ zIndex: 10, maxWidth: "65%" }}>
          <div className="flex gap-4 mb-8 items-center">
             <div style={{ width: "40px", height: "2px", backgroundColor: "var(--primary)" }}></div>
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
        
        <div className="light-leak" style={{ position: "absolute", right: 0, top: 0, height: "100%", width: "45%", zIndex: 1, maskImage: "linear-gradient(to left, black, transparent)", WebkitMaskImage: "linear-gradient(to left, black, transparent)" }}>
          <img src="/chennai_node_1775043257682.png" alt="High Tech Hub" className="img-monochrome" />
        </div>
      </section>

      {/* Mission Statement */}
      <section className="container py-20 bg-low relative" style={{ marginTop: "5rem" }}>
        <div style={{ maxWidth: "1000px" }}>
            <div className="label-sm text-primary mb-8 tracking-[0.3em] font-bold">// CORE_MISSION</div>
            <h2 className="display-lg uppercase" style={{ fontSize: "4rem", lineHeight: 1.1 }}>
                WE DON'T JUST BUILD SOFTWARE; <br />
                <span style={{ WebkitTextStroke: "1px #81ecff", color: "transparent", borderBottom: "4px solid var(--primary)", marginRight: "10px" }}>WE ARCHITECT</span> 
                 THE INFRASTRUCTURE OF TOMORROW.
            </h2>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="container py-20">
         <div className="grid-asymmetric-left" style={{ gap: 0 }}>
             
             {/* Stat Card 1 */}
             <div className="kinetic-card electric-glow" style={{ minHeight: "400px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                 <div className="mounting-bracket"></div>
                 <div>
                    <div className="flex justify-between items-start mb-12">
                        <h3 className="display-lg" style={{ fontSize: "3rem" }}>R&D FOCUSED</h3>
                        <span className="material-symbols-outlined text-primary" style={{ fontSize: "3rem" }}>neurology</span>
                    </div>
                    <p className="body-md">
                        Continuous integration of neural computing patterns into industrial automation. Our lab protocols prioritize sovereign execution over traditional cloud dependency.
                    </p>
                 </div>
                 <div className="flex gap-12 mt-12">
                     <div>
                         <p className="label-sm">SYSTEM_ID</p>
                         <p className="label-md text-white">CHN-99</p>
                     </div>
                     <div>
                         <p className="label-sm">UPTIME</p>
                         <p className="label-md text-white">99.9%</p>
                     </div>
                 </div>
             </div>

             {/* Stat Card 2 */}
             <div className="kinetic-card" style={{ backgroundColor: "var(--primary)", minHeight: "400px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                 <div>
                    <div className="flex justify-between items-start mb-12">
                        <h3 className="display-lg" style={{ fontSize: "2.5rem", color: "black", textShadow: "none" }}>HARDWARE NATIVE</h3>
                        <span className="material-symbols-outlined" style={{ fontSize: "3rem", color: "black" }}>developer_board</span>
                    </div>
                    <p className="body-md" style={{ color: "black", fontWeight: 500 }}>
                        Direct silicon-level optimization for mission-critical industrial hardware. No layers, no bloat. Pure kinetic efficiency.
                    </p>
                 </div>
                 <div className="mt-12" style={{ borderTop: "1px solid rgba(0,0,0,0.2)", paddingTop: "1rem" }}>
                     <p className="label-sm italic" style={{ color: "black" }}>"THE SILICON IS THE FINAL FRONTIER"</p>
                 </div>
             </div>
         </div>

         {/* Bottom Row */}
         <div className="grid-asymmetric-right" style={{ gap: 0, marginTop: "0" }}>
             <div className="kinetic-card-low" style={{ borderTop: "1px solid var(--surface)" }}>
                 <p className="display-lg" style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>2.4 PB</p>
                 <p className="label-sm">DATA_THROUGHPUT / SEC</p>
             </div>
             <div className="kinetic-card-low flex items-center justify-between" style={{ borderTop: "1px solid var(--surface)", borderLeft: "1px solid var(--surface)" }}>
                  <p className="body-md" style={{ maxWidth: "60%" }}>
                      NIKA RED protocols are currently active across 14 sovereign industrial zones, managing the energy and data flow of tomorrow's megacities.
                  </p>
                  <span className="material-symbols-outlined" style={{ fontSize: "4rem", color: "rgba(129, 236, 255, 0.2)" }}>grid_view</span>
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
