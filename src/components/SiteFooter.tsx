import { Link } from "@tanstack/react-router";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/our-approach", label: "Our Approach" },
  { to: "/services", label: "Services" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteFooter() {
  return (
    <footer style={{ background: "#0D182B" }} className="text-white">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 md:grid-cols-2">
        {/* Left: logo + catalog nav */}
        <div>
          <div
            className="flex h-[140px] w-[140px] flex-col items-center justify-center border border-white/40 text-center"
            style={{
              fontFamily: '"Open Sans", ui-sans-serif, system-ui, sans-serif',
              letterSpacing: "2px",
              fontSize: "11px",
              fontWeight: 600,
              lineHeight: "16px",
            }}
          >
            <span>ADVISORY</span>
            <span>CONSULTING</span>
            <span>SOLUTIONS LLC</span>
          </div>

          <div
            className="mt-16 text-white/70"
            style={{
              fontFamily: '"Open Sans", ui-sans-serif, system-ui, sans-serif',
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "3px",
            }}
          >
            CATALOG
          </div>

          <nav
            className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: "22px",
              fontWeight: 500,
            }}
          >
            {navLinks.map((link, i) => (
              <span key={link.to} className="flex items-center gap-x-5">
                <Link to={link.to} className="text-white transition-colors hover:text-[#DA9E3F]">
                  {link.label}
                </Link>
                {i < navLinks.length - 1 && (
                  <span className="text-white/40" aria-hidden="true">
                    /
                  </span>
                )}
              </span>
            ))}
          </nav>
        </div>

        {/* Right: contact */}
        <div className="md:justify-self-end">
          <div
            className="text-white/70"
            style={{
              fontFamily: '"Open Sans", ui-sans-serif, system-ui, sans-serif',
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "3px",
            }}
          >
            CONTACT US
          </div>
          <div
            className="mt-8 space-y-5"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: "22px",
              fontWeight: 500,
            }}
          >
            <a href="tel:+16466183447" className="block text-white transition-colors hover:text-[#DA9E3F]">
              (646) 618-3447
            </a>
            <a href="mailto:info@adv-cs.com" className="block text-white transition-colors hover:text-[#DA9E3F]">
              info@adv-cs.com
            </a>
          </div>
        </div>
      </div>

      <div style={{ background: "#0A1322" }}>
        <div
          className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-6 py-6 text-white/60 md:flex-row md:items-center"
          style={{
            fontFamily: '"Open Sans", ui-sans-serif, system-ui, sans-serif',
            fontSize: "14px",
          }}
        >
          <span>© {new Date().getFullYear()} — Copyright</span>
          <span>All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}