import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/structured-data";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Nika Red collects, uses, and protects the personal information you share through nikared.com and our project inquiries.",
  path: "/privacy",
});

const LAST_UPDATED = "5 July 2026";

export default function Privacy() {
  return (
    <main style={{ paddingBottom: "100px", minHeight: "100vh" }}>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ])}
      />
      <Header />

      <section className="container subpage-hero" style={{ maxWidth: "820px" }}>
        <div className="flex gap-4 mb-8 items-center">
          <div className="line-accent"></div>
          <div className="label-sm text-primary">Legal</div>
        </div>
        <h1 className="display-lg mb-4">Privacy <span className="text-primary italic">Policy</span></h1>
        <p className="label-sm mb-12" style={{ color: "var(--on-surface-variant)" }}>Last updated: {LAST_UPDATED}</p>

        <div className="flex-col gap-8 body-md" style={{ fontSize: "1.0625rem" }}>
          <p>
            This Privacy Policy explains how {SITE.legalName} (&ldquo;Nika Red&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) handles
            information collected through {SITE.url} and in the course of our engineering engagements. We are based in
            {" "}{SITE.locality}, {SITE.region}, {SITE.country}.
          </p>

          <div>
            <h2 className="label-md mb-4" style={{ color: "var(--text-strong)", fontSize: "1.375rem", textTransform: "none" }}>Information we collect</h2>
            <p>
              We only collect the information you choose to give us. When you submit a project inquiry through our contact
              form, we receive the name, email address, and message details you provide. We do not sell personal
              information, and we do not use third-party advertising trackers on this site.
            </p>
          </div>

          <div>
            <h2 className="label-md mb-4" style={{ color: "var(--text-strong)", fontSize: "1.375rem", textTransform: "none" }}>How we use your information</h2>
            <p>
              We use the information you submit solely to respond to your inquiry, scope potential work, and communicate
              with you about a possible or ongoing engagement. We retain inquiry records only for as long as needed for
              these purposes or as required by applicable law.
            </p>
          </div>

          <div>
            <h2 className="label-md mb-4" style={{ color: "var(--text-strong)", fontSize: "1.375rem", textTransform: "none" }}>How we protect it</h2>
            <p>
              We apply reasonable technical and organizational safeguards to protect the information you share. No method
              of transmission over the internet is completely secure, but we work to limit access to your data to those
              who need it to respond to you.
            </p>
          </div>

          <div>
            <h2 className="label-md mb-4" style={{ color: "var(--text-strong)", fontSize: "1.375rem", textTransform: "none" }}>Your choices</h2>
            <p>
              You may request access to, correction of, or deletion of the personal information you have shared with us
              at any time by emailing <a className="tech-link" href={`mailto:${SITE.email}`}>{SITE.email}</a>. We will respond
              to reasonable requests in line with applicable data protection law.
            </p>
          </div>

          <div>
            <h2 className="label-md mb-4" style={{ color: "var(--text-strong)", fontSize: "1.375rem", textTransform: "none" }}>Contact</h2>
            <p>
              Questions about this policy can be sent to{" "}
              <a className="tech-link" href={`mailto:${SITE.email}`}>{SITE.email}</a>. We may update this policy from time
              to time; the &ldquo;last updated&rdquo; date above reflects the most recent revision.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
