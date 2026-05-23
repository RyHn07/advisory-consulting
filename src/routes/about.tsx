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
      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              About
            </span>
            <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-foreground md:text-6xl">
              A specialized partner for <span className="italic">advisory firms</span>.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Advisory Consulting Solutions is built around one focus — helping registered
              investment advisers run compliance programs that are practical, defensible, and
              ready for regulatory scrutiny.
            </p>
          </div>
          <div className="md:col-span-5">
            <img
              src={aboutImg}
              alt="Conference room"
              className="aspect-[4/5] w-full rounded-sm object-cover"
              width={1280}
              height={900}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-16 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              What Guides Us
            </span>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground md:text-5xl">
              Built on <span className="italic">judgment</span>, not just checklists.
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Leadership
            </span>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground md:text-5xl">
              Senior compliance experience, <span className="italic">at your side</span>.
            </h2>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground md:text-lg">
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

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">
            Let's talk about your compliance program.
          </h2>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-sm bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground transition-all hover:brightness-110"
          >
            Schedule a Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}