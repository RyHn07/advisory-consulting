import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.svg";

const nav = [
  { to: "/", label: "Home" },
  { to: "/our-approach", label: "Our Approach" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/careers", label: "Careers" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute left-0 top-0 z-50 w-full bg-transparent text-primary-foreground">
      {/* Logo - overlaps top bar and main bar */}
      <Link
        to="/"
        aria-label="Advisory Consulting Solutions home"
        className="absolute left-6 top-0 z-20 hidden h-[140px] w-[140px] md:block lg:left-[8%] lg:h-[160px] lg:w-[160px] xl:left-[16%] xl:h-[184px] xl:w-[184px]"
      >
        <img
          src={logo}
          alt="Advisory Consulting Solutions LLC"
          className="h-full w-full object-contain"
        />
      </Link>

      {/* Top contact bar - full width, lighter background */}
      <div className="hidden w-full bg-[#293d55] md:block">
        <div className="flex h-[43px] items-center justify-end gap-8 pr-6 font-serif text-[20px] font-normal leading-none text-white lg:pr-[8%] xl:pr-[16.2%]">
          <a href="mailto:info@adv-cs.com" className="inline-flex items-center gap-3 hover:text-white/80">
            <Mail className="h-4 w-4" strokeWidth={1.5} />
            info@adv-cs.com
          </a>
          <a href="tel:+16466183447" className="inline-flex items-center gap-3 hover:text-white/80">
            <Phone className="h-4 w-4" strokeWidth={1.5} />
            (646) 618-3447
          </a>
        </div>
      </div>

      <div className="relative">
        {/* Main bar */}
        <div className="flex h-[87px] items-stretch justify-between bg-primary px-6 md:justify-end md:pl-[180px] md:pr-6 lg:pl-[calc(8%+180px)] lg:pr-[8%] xl:pl-0 xl:pr-[16.15%]">
          <Link to="/" className="flex items-center md:hidden" aria-label="Home">
            <img src={logo} alt="ACS" className="h-12 w-auto" />
          </Link>

          <nav className="hidden items-stretch gap-6 md:flex lg:gap-10 xl:gap-[52px]">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="group relative inline-flex items-center font-serif text-[18px] font-normal uppercase leading-none text-white transition-colors hover:text-white/80"
                activeProps={{ className: "text-accent" }}
              >
                {n.label}
                <span className="absolute bottom-6 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Link
              to="/contact"
              className="my-7 inline-flex items-center border border-white/90 px-6 font-serif text-[18px] font-normal uppercase leading-none text-white transition-all hover:border-accent hover:bg-accent hover:text-accent-foreground"
            >
              Contact
            </Link>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="ml-auto text-white md:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

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