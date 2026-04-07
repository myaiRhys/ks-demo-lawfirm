"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#practice-areas", label: "Practice Areas" },
  { href: "#our-team", label: "Our Team" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0f0e0d]/95 backdrop-blur-[8px] border-b border-[rgba(232,226,217,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Firm name */}
        <button
          onClick={scrollToTop}
          className="font-display text-[16px] text-[var(--text)] hover:opacity-80 transition-opacity"
        >
          Van der Berg & Associates
        </button>

        {/* Navigation */}
        <div className="flex items-center gap-10">
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-ui text-[var(--text-faint)] hover:text-[var(--accent)] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="btn-ghost text-[11px] py-2 px-4">
            Book a consultation
          </a>
        </div>
      </nav>
    </header>
  );
}
