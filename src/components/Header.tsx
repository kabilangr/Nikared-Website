"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="glass-panel">
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "1rem" }}>
          <img src="/logo.png" alt="NIKA RED Logo" style={{ height: "32px", width: "auto" }} />
          <span className="label-md text-primary" style={{ fontSize: "1.2rem" }}>NIKA RED</span>
        </Link>

        <nav className="label-md hidden-mobile">
          {navLinks.map(link => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                color: pathname === link.href ? "var(--primary)" : "white",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--primary)")}
              onMouseLeave={e => (e.currentTarget.style.color = pathname === link.href ? "var(--primary)" : "white")}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="btn-primary label-md hidden-mobile"
          style={{ fontSize: "0.875rem", textDecoration: "none" }}
        >
          Access Portal
        </Link>

        <button
          className="hamburger show-mobile"
          onClick={() => setMenuOpen(true)}
          aria-label="Open navigation"
        >
          <span className="material-symbols-outlined" style={{ fontSize: "1.75rem" }}>menu</span>
        </button>
      </header>

      <div className={`mobile-drawer${menuOpen ? " open" : ""}`} onClick={() => setMenuOpen(false)}>
        <div className="mobile-drawer-inner" onClick={e => e.stopPropagation()}>
          <button
            className="hamburger"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation"
            style={{ alignSelf: "flex-end", marginBottom: "2rem" }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: "1.75rem" }}>close</span>
          </button>

          {navLinks.map(link => (
            <Link
              key={link.label}
              href={link.href}
              className="label-md"
              onClick={() => setMenuOpen(false)}
              style={{
                color: pathname === link.href ? "var(--primary)" : "white",
                textDecoration: "none",
                fontSize: "1.5rem",
                letterSpacing: "0.1em",
                paddingBottom: "1rem",
                borderBottom: "1px solid rgba(72,72,73,0.35)",
                width: "100%",
                textAlign: "center",
              }}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="btn-primary label-md"
            onClick={() => setMenuOpen(false)}
            style={{ textDecoration: "none", marginTop: "2rem", textAlign: "center" }}
          >
            Access Portal
          </Link>
        </div>
      </div>
    </>
  );
}
