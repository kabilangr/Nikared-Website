import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/structured-data";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description:
    "The terms that govern your use of nikared.com and any engagement with Nika Red for industrial software, edge AI, and XR engineering work.",
  path: "/terms",
});

const LAST_UPDATED = "5 July 2026";

export default function Terms() {
  return (
    <main style={{ paddingBottom: "100px", minHeight: "100vh" }}>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Terms of Service", path: "/terms" },
        ])}
      />
      <Header />

      <section className="container subpage-hero" style={{ maxWidth: "820px" }}>
        <div className="flex gap-4 mb-8 items-center">
          <div className="line-accent"></div>
          <div className="label-sm text-primary">Legal</div>
        </div>
        <h1 className="display-lg mb-4">Terms of <span className="text-primary italic">Service</span></h1>
        <p className="label-sm mb-12" style={{ color: "var(--on-surface-variant)" }}>Last updated: {LAST_UPDATED}</p>

        <div className="flex-col gap-8 body-md" style={{ fontSize: "1.0625rem" }}>
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of {SITE.url} (the &ldquo;Site&rdquo;),
            operated by {SITE.legalName} (&ldquo;Nika Red&rdquo;). By using the Site you agree to these Terms.
          </p>

          <div>
            <h2 className="label-md mb-4" style={{ color: "var(--text-strong)", fontSize: "1.375rem", textTransform: "none" }}>Use of the site</h2>
            <p>
              The Site is provided for general information about Nika Red&apos;s engineering services. You agree to use it
              lawfully and not to attempt to disrupt, reverse-engineer, or gain unauthorized access to any part of the
              Site or its underlying systems.
            </p>
          </div>

          <div>
            <h2 className="label-md mb-4" style={{ color: "var(--text-strong)", fontSize: "1.375rem", textTransform: "none" }}>Intellectual property</h2>
            <p>
              All content on this Site — including text, graphics, logos, and the Nika Red name and mark — is the property
              of {SITE.legalName} unless otherwise stated, and is protected by applicable intellectual property laws. You
              may not reproduce or redistribute it without prior written permission.
            </p>
          </div>

          <div>
            <h2 className="label-md mb-4" style={{ color: "var(--text-strong)", fontSize: "1.375rem", textTransform: "none" }}>Engagements</h2>
            <p>
              Nothing on this Site constitutes a binding offer of services. Any project engagement is governed by a
              separate written agreement between you and Nika Red that sets out scope, deliverables, fees, and ownership.
              In the event of a conflict, that agreement takes precedence over these Terms for the work it covers.
            </p>
          </div>

          <div>
            <h2 className="label-md mb-4" style={{ color: "var(--text-strong)", fontSize: "1.375rem", textTransform: "none" }}>Disclaimer &amp; liability</h2>
            <p>
              The Site is provided &ldquo;as is&rdquo; without warranties of any kind. To the fullest extent permitted by
              law, Nika Red is not liable for any indirect or consequential loss arising from your use of the Site.
            </p>
          </div>

          <div>
            <h2 className="label-md mb-4" style={{ color: "var(--text-strong)", fontSize: "1.375rem", textTransform: "none" }}>Governing law &amp; contact</h2>
            <p>
              These Terms are governed by the laws of India. Questions about these Terms can be sent to{" "}
              <a className="tech-link" href={`mailto:${SITE.email}`}>{SITE.email}</a>. We may revise these Terms from time
              to time; continued use of the Site after changes constitutes acceptance of the revised Terms.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
