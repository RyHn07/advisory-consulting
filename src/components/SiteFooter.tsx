import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.jpeg";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logo} alt="Advisory Consulting Solutions" className="h-14 w-auto rounded-sm" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Practical, regulator-focused compliance consulting for registered
            investment advisers — from registration through ongoing oversight.
          </p>
        </div>
        <div>
          <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-foreground">
            Explore
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/our-approach" className="hover:text-accent">Our Approach</Link></li>
            <li><Link to="/services" className="hover:text-accent">Services</Link></li>
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/careers" className="hover:text-accent">Careers</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-foreground">
            Contact
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/contact" className="hover:text-accent">Schedule a consultation</Link></li>
            <li>info@acscompliance.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-6 py-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Advisory Consulting Solutions. All rights reserved.</span>
          <span>Compliance consulting for registered investment advisers.</span>
        </div>
      </div>
    </footer>
  );
}