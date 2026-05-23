export default function Footer() {
  return (
    <footer
      className="container flex justify-between items-center"
      style={{
        borderTop: "1px solid rgba(72,72,73,0.35)",
        opacity: 0.7,
        paddingTop: "2rem",
        paddingBottom: "2rem",
        marginTop: "5rem",
      }}
    >
      <div className="label-md">© 2026 NIKA RED PRIVATE LIMITED</div>
      <div className="flex gap-8 label-sm">
        <a href="/privacy" className="tech-link">Privacy_Protocol</a>
        <a href="/terms" className="tech-link">Service_Terms</a>
      </div>
    </footer>
  );
}
