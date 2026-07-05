import UplinkForm from "@/components/UplinkForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Start a project with Nika Red. Tell us about your industrial software, edge AI, or XR challenge — a Chennai-based engineer will respond within 24–48 hours.",
  path: "/contact",
});

export default function Contact() {
  return (
    <main style={{ paddingBottom: "100px", minHeight: "100vh" }}>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <Header />

      <ScrollReveal>
        <section className="container" style={{ paddingTop: "120px", paddingBottom: "5rem" }}>
          <div className="flex gap-4 mb-8 items-center">
            <div className="line-accent"></div>
            <div className="label-sm text-primary">Get in touch</div>
          </div>
          <h1 className="display-lg mb-12">Let&apos;s <span className="text-primary italic">talk</span></h1>

          <div className="kinetic-card tech-accent grid-asymmetric-left" style={{ padding: "var(--spacing-20)", minHeight: "60vh" }}>
            <div>
              <p className="body-md mb-12" style={{ maxWidth: "80%", fontSize: "1.0625rem" }}>
                Tell us what you&apos;re building and a Nika Red engineer will respond within 24–48 hours.
              </p>

              <div className="flex gap-12 mb-12">
                <address className="body-md" style={{ fontStyle: "normal" }}>
                  <span className="label-sm block mb-2">Location</span>
                  Chennai<br />
                  India
                </address>
                <div className="body-md">
                  <span className="label-sm block mb-2">Email</span>
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
                <p className="label-sm mb-2">Response time</p>
                <p className="label-md" style={{ color: "var(--text-strong)" }}>24–48 hours</p>
              </div>
              <div className="contact-meta-item">
                <p className="label-sm mb-2">Disciplines</p>
                <p className="label-md" style={{ color: "var(--text-strong)" }}>Software · AI · XR</p>
              </div>
              <div className="contact-meta-item">
                <p className="label-sm mb-2">Deployment model</p>
                <p className="label-md" style={{ color: "var(--text-strong)" }}>Cloud · On-prem · Edge</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </main>
  );
}
