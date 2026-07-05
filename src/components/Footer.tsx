import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="container"
      style={{
        borderTop: "1px solid var(--ghost-border)",
        opacity: 0.9,
        paddingTop: "2rem",
        paddingBottom: "2rem",
        marginTop: "5rem",
      }}
    >
      <nav
        className="flex justify-between items-center flex-wrap gap-8"
        aria-label="Footer"
        style={{ marginBottom: "1.5rem" }}
      >
        <div className="flex gap-8 label-sm flex-wrap">
          <Link href="/services" className="tech-link">Services</Link>
          <Link href="/about" className="tech-link">About</Link>
          <Link href="/contact" className="tech-link">Contact</Link>
        </div>
        <div className="flex gap-8 label-sm flex-wrap">
          <Link href="/privacy" className="tech-link">Privacy</Link>
          <Link href="/terms" className="tech-link">Terms</Link>
        </div>
      </nav>
      <div className="label-md" style={{ color: "var(--text-strong)" }}>
        © 2026 Nika Red Private Limited — Industrial software, edge AI &amp; XR, engineered in Chennai.
      </div>
    </footer>
  );
}
