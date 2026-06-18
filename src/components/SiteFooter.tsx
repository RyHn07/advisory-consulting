import { Link } from "@tanstack/react-router";
import footerLogo from "@/assets/footer-logo.svg";

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
          <img src={footerLogo} alt="Advisory Consulting Solutions LLC" className="h-[127px] w-[127px]" />

          <div
            className="mt-16"
            style={{
              color: "rgba(255, 255, 255, 0.60)",
              fontFamily: '"Aptos Serif", Georgia, serif',
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "140%",
              letterSpacing: "0.72px",
              textTransform: "uppercase",
              fontVariantNumeric: "oldstyle-nums proportional-nums",
            }}
          >
            CATALOG
          </div>

          <nav
            className="mt-6 space-y-3"
            style={{
              color: "#FFF",
              fontFamily: '"Aptos Serif", Georgia, serif',
              fontSize: "24px",
              fontWeight: 400,
              fontStyle: "normal",
              lineHeight: "120%",
              fontVariantNumeric: "oldstyle-nums proportional-nums",
            }}
          >
            {[navLinks.slice(0, 3), navLinks.slice(3)].map((row, rIdx) => (
              <div key={rIdx} className="flex flex-wrap items-center gap-x-5 gap-y-2">
                {row.map((link, i) => (
                  <span key={link.to} className="flex items-center gap-x-5">
                    <Link to={link.to} className="text-white transition-colors hover:text-[#DA9E3F]">
                      {link.label}
                    </Link>
                    {i < row.length - 1 && (
                      <span className="text-white/40" aria-hidden="true">
                        /
                      </span>
                    )}
                  </span>
                ))}
              </div>
            ))}
          </nav>
        </div>

        {/* Right: contact */}
        <div className="md:justify-self-end">
          <div
            style={{
              color: "rgba(255, 255, 255, 0.60)",
              fontFamily: '"Aptos Serif", Georgia, serif',
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "140%",
              letterSpacing: "0.72px",
              textTransform: "uppercase",
              fontVariantNumeric: "oldstyle-nums proportional-nums",
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