import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.svg";

const nav = [
  { to: "/our-approach", label: "Our Approach" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/careers", label: "Careers" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground">
      {/* Top contact bar */}
      <div className="hidden bg-primary-foreground/[0.06] md:block">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-end gap-8 px-6 md:px-10 text-[12px] text-primary-foreground/80">
          <a href="mailto:info@acscompliance.com" className="inline-flex items-center gap-2 hover:text-primary-foreground">
            <Mail className="h-3.5 w-3.5" strokeWidth={1.5} />
            info@acscompliance.com
          </a>
          <a href="tel:+10001112223333" className="inline-flex items-center gap-2 hover:text-primary-foreground">
            <Phone className="h-3.5 w-3.5" strokeWidth={1.5} />
            000 111 222 3333
          </a>
        </div>
      </div>

      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 md:px-10">
        <Link
          to="/"
          className="flex items-center"
          aria-label="Advisory Consulting Solutions home"
        >
          <img
            src={logo}
            alt="Advisory Consulting Solutions LLC"
            className="h-16 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="group relative text-[13px] font-medium uppercase tracking-[0.18em] text-primary-foreground/70 transition-colors hover:text-primary-foreground"
              activeProps={{ className: "text-primary-foreground" }}
            >
              {n.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-2 inline-flex items-center border border-primary-foreground/60 px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-all hover:border-accent hover:bg-accent hover:text-accent-foreground"
          >
            Contact
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="text-primary-foreground md:hidden"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div className="h-px w-full bg-primary-foreground/10" />

      {open && (
        <div className="bg-primary md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-6">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-2 py-3 text-[13px] font-medium uppercase tracking-[0.18em] text-primary-foreground/80 hover:text-primary-foreground"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 border border-primary-foreground/40 px-4 py-3 text-center text-[12px] font-semibold uppercase tracking-[0.2em] text-primary-foreground hover:bg-accent hover:text-accent-foreground"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}