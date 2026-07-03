"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

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
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <img src="/logo.svg" alt="Nika Red" style={{ height: "30px", width: "auto" }} />
          <span className="label-md" style={{ fontSize: "1rem", color: "var(--text-strong)" }}>Nika Red</span>
        </Link>

        <nav className="label-md hidden-mobile">
          {navLinks.map(link => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                color: pathname === link.href ? "var(--secondary)" : "var(--text-strong)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--secondary)")}
              onMouseLeave={e => (e.currentTarget.style.color = pathname === link.href ? "var(--secondary)" : "var(--text-strong)")}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          {/* <Link
            href="/contact"
            className="btn-primary label-md hidden-mobile"
            style={{ fontSize: "0.8125rem", textDecoration: "none" }}
          >
            Start a project
          </Link> */}

          <button
            className="hamburger show-mobile"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation"
          >
            <span className="material-symbols-outlined" style={{ fontSize: "1.75rem" }}>menu</span>
          </button>
        </div>
      </header>

      <div className={`mobile-drawer${menuOpen ? " open" : ""}`} onClick={() => setMenuOpen(false)}>
        <div className="mobile-drawer-inner" onClick={e => e.stopPropagation()}>
          <div className="flex items-center justify-between w-full" style={{ marginBottom: "2rem" }}>
            <ThemeToggle />
            <button
              className="hamburger"
              onClick={() => setMenuOpen(false)}
              aria-label="Close navigation"
            >
              <span className="material-symbols-outlined" style={{ fontSize: "1.75rem" }}>close</span>
            </button>
          </div>

          {navLinks.map(link => (
            <Link
              key={link.label}
              href={link.href}
              className="label-md"
              onClick={() => setMenuOpen(false)}
              style={{
                color: pathname === link.href ? "var(--secondary)" : "var(--text-strong)",
                textDecoration: "none",
                fontSize: "1.5rem",
                letterSpacing: "0.04em",
                paddingBottom: "1rem",
                borderBottom: "1px solid var(--ghost-border)",
                width: "100%",
                textAlign: "center",
              }}
            >
              {link.label}
            </Link>
          ))}

          {/* <Link
            href="/contact"
            className="btn-primary label-md"
            onClick={() => setMenuOpen(false)}
            style={{ textDecoration: "none", marginTop: "2rem", textAlign: "center" }}
          >
            Start a project
          </Link> */}
        </div>
      </div>
    </>
  );
}
