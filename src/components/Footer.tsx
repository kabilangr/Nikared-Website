export default function Footer() {
  return (
    <footer
      className="container flex justify-between items-center"
      style={{
        borderTop: "1px solid var(--ghost-border)",
        opacity: 0.8,
        paddingTop: "2rem",
        paddingBottom: "2rem",
        marginTop: "5rem",
      }}
    >
      <div className="label-md" style={{ color: "var(--text-strong)" }}>© 2026 Nika Red Private Limited</div>
      <div className="flex gap-8 label-sm">
        <a href="/privacy" className="tech-link">Privacy</a>
        <a href="/terms" className="tech-link">Terms</a>
      </div>
    </footer>
  );
}
