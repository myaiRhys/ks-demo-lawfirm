const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#practice-areas", label: "Practice Areas" },
  { href: "#our-team", label: "Our Team" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Row 1 */}
        <div className="flex flex-wrap items-center justify-between gap-6">
          <span className="font-display text-[14px] text-[var(--text)]">
            Van der Berg & Associates
          </span>

          <ul className="flex flex-wrap items-center gap-8">
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
        </div>

        {/* Row 2 */}
        <div className="flex flex-wrap items-center justify-between gap-6 mt-8 pt-8 border-t border-[var(--border)]">
          <p className="font-ui text-[var(--text-faint)]">
            © {year} Van der Berg & Associates. All rights reserved.
          </p>

          <a
            href="https://kinnearsystems.co.za"
            target="_blank"
            rel="noopener noreferrer"
            className="font-ui text-[var(--accent)] hover:opacity-70 transition-opacity"
          >
            Site by Kinnear Systems
          </a>
        </div>
      </div>
    </footer>
  );
}
