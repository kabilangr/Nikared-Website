import type { Metadata } from "next";
import UplinkForm from "@/components/UplinkForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact — NIKA RED",
  description: "Establish an uplink with NIKA RED engineering. Based in Chennai, India.",
};

export default function Contact() {
  return (
    <main style={{ paddingBottom: "100px", minHeight: "100vh" }}>
      <Header />

      <ScrollReveal>
        <section className="container" style={{ paddingTop: "120px", paddingBottom: "5rem" }}>
          <div className="flex gap-4 mb-8 items-center">
            <div className="line-accent"></div>
            <div className="label-sm text-primary">UPLINK // SECURE CHANNEL</div>
          </div>
          <h1 className="display-lg mb-12">Establish <span className="text-primary italic">Uplink</span></h1>

          <div className="kinetic-card tech-accent grid-asymmetric-left" style={{ padding: "var(--spacing-20)", minHeight: "60vh" }}>
            <div className="mounting-bracket"></div>
            <div>
              <p className="body-md mb-12" style={{ maxWidth: "80%", fontSize: "1.0625rem" }}>
                Secure transmission lines are open. Describe your operational environment and a NIKA RED engineer will respond within 24–48 hours.
              </p>

              <div className="flex gap-12 mb-12">
                <address className="body-md" style={{ fontStyle: "normal" }}>
                  <span className="label-sm block mb-2">Location</span>
                  Chennai<br />
                  India
                </address>
                <div className="body-md">
                  <span className="label-sm block mb-2">Direct Line</span>
                  contact@nikared.com
                </div>
                <div className="body-md">
                  <span className="label-sm block mb-2">Timezone</span>
                  IST — UTC+5:30
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
                <p className="label-sm mb-2">Disciplines</p>
                <p className="label-md text-white">Enterprise · AI · XR</p>
              </div>
              <div className="contact-meta-item">
                <p className="label-sm mb-2">Deployment Model</p>
                <p className="label-md text-white">Sovereign · On-Prem · Edge</p>
              </div>
              <div className="label-md" style={{ fontSize: "3rem", color: "rgba(129,236,255,0.06)", position: "absolute", bottom: 0, right: 0, lineHeight: 0.8 }}>
                SYS<br />REQ
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </main>
  );
}
