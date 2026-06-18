import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import aboutImg from "@/assets/about-office.jpg";
import founderImg from "@/assets/founder-portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Advisory Consulting Solutions" },
      {
        name: "description",
        content:
          "Advisory Consulting Solutions is a specialized compliance consulting firm serving SEC and state-registered investment advisers.",
      },
      { property: "og:title", content: "About — Advisory Consulting Solutions" },
      {
        property: "og:description",
        content: "A specialized compliance consulting firm for investment advisers.",
      },
      { property: "og:image", content: aboutImg },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="relative isolate flex min-h-[80vh] flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={aboutImg}
            alt=""
            className="h-full w-full object-cover animate-kenburns"
            width={1280}
            height={1600}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/75 to-primary/95" />
        </div>
        <div className="mx-auto w-full max-w-6xl px-6 pt-40 pb-28 md:pt-56 md:pb-36">
          <div className="max-w-3xl animate-fade-up text-left">
            <span className="section-eyebrow">
              About
            </span>
            <h1 className="mt-6 font-serif font-semibold text-white text-5xl leading-[1.05] md:text-[90px] md:leading-[76px] md:tracking-[-5.4px]"
                style={{ fontFamily: 'Playfair Display, Playfair, serif' }}>
              <span style={{ color: '#FFF' }}>A specialized partner</span>
              <br />
              <span style={{ color: '#DA9E3F' }}>for advisory firms.</span>
            </h1>
            <p className="mt-8 max-w-2xl section-body-light">
              Advisory Consulting Solutions is built around one focus — helping registered
              investment advisers run compliance programs that are practical, defensible, and
              ready for regulatory scrutiny.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-16 max-w-2xl">
            <span className="section-eyebrow">
              What Guides Us
            </span>
            <h2 className="mt-4 section-title">
              Built on judgment, not just checklists.
            </h2>
          </div>
          <div className="grid gap-px border border-border bg-border md:grid-cols-3">
            {[
              { k: "01", t: "Specialized Focus", b: "We work exclusively with investment advisers — every policy, control, and review is calibrated to your regulatory reality." },
              { k: "02", t: "Practical Implementation", b: "Programs designed to operate inside your firm's day-to-day workflow, not sit untouched on a shelf." },
              { k: "03", t: "Defensible Documentation", b: "Records, testing, and reviews structured to stand up to SEC and state examination scrutiny." },
            ].map((v) => (
              <div key={v.k} className="bg-background p-10">
                <span className="font-sans text-sm font-semibold text-accent">{v.k}</span>
                <h3 className="mt-6 font-serif text-2xl text-foreground">{v.t}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{v.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-5">
            <img
              src={founderImg}
              alt="Founder portrait"
              className="aspect-[4/5] w-full rounded-sm object-cover"
              width={1280}
              height={1600}
              loading="lazy"
            />
          </div>
          <div className="md:col-span-7">
            <span className="section-eyebrow">
              Leadership
            </span>
            <h2 className="mt-4 section-title">
              Senior compliance experience, at your side.
            </h2>
            <p className="mt-8 section-body">
              Our principal brings years of regulatory, in-house, and consulting experience
              advising registered investment advisers — from first-time registrants to multi-
              billion-dollar firms. The result is judgment-led guidance grounded in how
              regulators actually examine.
            </p>
            <div className="mt-10 inline-flex items-center rounded-sm border border-dashed border-border bg-secondary/40 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Full founder bio coming soon
            </div>
          </div>
        </div>
      </section>

      {/* BY THE NUMBERS */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-16 max-w-2xl">
            <span className="section-eyebrow">
              By the Numbers
            </span>
            <h2 className="mt-4 section-title-light">
              Experience that compounds.
            </h2>
          </div>
          <div className="grid gap-px border border-primary-foreground/10 bg-primary-foreground/10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "20+", l: "Years of combined compliance experience" },
              { n: "100%", l: "Investment adviser focus" },
              { n: "50+", l: "Firms supported through SEC and state exams" },
              { n: "1 BD", l: "Average response time" },
            ].map((s) => (
              <div key={s.l} className="bg-primary p-10">
                <div className="font-serif text-5xl text-accent md:text-6xl">{s.n}</div>
                <p className="mt-4 section-body-light">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-16 max-w-2xl">
            <span className="section-eyebrow">
              Who We Serve
            </span>
            <h2 className="mt-4 section-title">
              Built for advisers at every stage.
            </h2>
          </div>
          <div className="grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Newly Forming RIAs", b: "First-time registrants navigating Form ADV, policies, and operational setup." },
              { t: "Established RIAs", b: "Firms scaling their compliance program alongside AUM and headcount growth." },
              { t: "State-Registered Advisers", b: "Smaller advisers managing state-specific rules and renewal cycles." },
              { t: "Exempt Reporting Advisers", b: "Private fund advisers meeting their narrower — but still real — obligations." },
            ].map((g) => (
              <div key={g.t} className="bg-background p-10">
                <h3 className="font-serif text-2xl text-foreground">{g.t}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{g.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <h2 className="section-title-light">
            Let's talk about your compliance program.
          </h2>
          <Link
            to="/contact"
            className="btn-consult mt-10 bg-accent text-accent-foreground transition-all hover:brightness-110"
          >
            Schedule a Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}