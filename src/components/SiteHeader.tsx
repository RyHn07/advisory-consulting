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
      {/* Left fill behind logo - matches logo height, header (primary) color */}
      <div
        aria-hidden
        className="absolute left-0 top-0 z-0 hidden bg-primary md:block md:h-[140px] md:w-[calc(1.5rem+5px+140px)] lg:h-[160px] lg:w-[calc(6%+5px+160px)] 2xl:h-[184px] 2xl:w-[calc(16%+184px)]"
      />
      <div
        aria-hidden
        className="absolute left-0 top-0 z-10 h-[138px] w-[146px] bg-primary md:hidden"
      />
      {/* Logo - overlaps top bar and main bar */}
      <Link
        to="/"
        aria-label="Advisory Consulting Solutions home"
        className="absolute left-[calc(1.5rem+5px)] top-0 z-30 hidden h-[140px] w-[140px] md:block lg:left-[calc(6%+5px)] lg:h-[160px] lg:w-[160px] 2xl:left-[16%] 2xl:h-[184px] 2xl:w-[184px]"
      >
        <img
          src={logo}
          alt="Advisory Consulting Solutions LLC"
          className="h-full w-full object-contain"
        />
      </Link>

      {/* Top contact bar - full width, lighter background */}
      <div className="relative z-20 hidden w-full bg-[#293d55] md:block">
        <div className="site-header-serif flex h-[43px] flex-nowrap items-center justify-end gap-4 whitespace-nowrap pr-6 text-[16px] leading-none text-white lg:gap-8 lg:pr-[6%] lg:text-[20px] 2xl:pr-[16.2%]">
          <a
            href="mailto:info@adv-cs.com"
            className="inline-flex items-center gap-3 hover:text-white/80"
          >
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
        <div className="flex h-[87px] items-stretch justify-between bg-primary px-6 md:justify-end md:pl-[160px] md:pr-6 lg:pl-[calc(6%+180px)] lg:pr-[6%] 2xl:pl-[calc(16%+200px)] 2xl:pr-[16.15%]">
          <Link to="/" className="absolute left-4 top-2 z-40 md:hidden" aria-label="Home">
            <img src={logo} alt="ACS" className="h-32 w-auto drop-shadow-lg" />
          </Link>

          <nav className="site-header-menu hidden translate-y-[8px] items-center gap-6 lg:flex lg:gap-8 xl:gap-10 2xl:gap-[52px]">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="group relative inline-flex items-center whitespace-nowrap transition-colors hover:text-white/80"
                activeProps={{ className: "text-accent" }}
              >
                {n.label}
                <span className="absolute bottom-6 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Link
              to="/contact"
              className="inline-flex h-[48px] items-center justify-center gap-[10px] whitespace-nowrap border border-white/90 px-[22px] transition-all hover:border-accent hover:bg-accent hover:text-accent-foreground"
            >
              Contact
            </Link>
          </nav>

          {/* Tablet + mobile cluster: Contact (tablet only) + menu icon */}
          <div className="ml-auto flex items-center gap-4 lg:hidden">
            <Link
              to="/contact"
              className="site-header-menu hidden h-[48px] items-center justify-center gap-[10px] whitespace-nowrap border border-white/90 px-[22px] transition-all hover:border-accent hover:bg-accent hover:text-accent-foreground md:inline-flex"
            >
              Contact
            </Link>
            <button onClick={() => setOpen(!open)} className="text-white" aria-label="Menu">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Slide-in drawer (mobile + tablet) */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
        />
        {/* Panel */}
        <aside
          className={`absolute left-0 top-0 h-full w-[300px] max-w-[85%] bg-primary shadow-2xl transition-transform duration-300 ease-out ${open ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <img src={logo} alt="ACS" className="h-36 w-auto" />
            <button onClick={() => setOpen(false)} className="text-white" aria-label="Close menu">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-6 gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-2 py-3 font-serif text-[16px] uppercase tracking-[0.12em] text-white/85 hover:text-accent"
                activeProps={{ className: "text-accent" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 border border-white/40 px-4 py-3 text-center font-serif text-[14px] uppercase tracking-[0.18em] text-white hover:bg-accent hover:text-accent-foreground"
            >
              Contact
            </Link>
          </nav>
        </aside>
      </div>
    </header>
  );
}
