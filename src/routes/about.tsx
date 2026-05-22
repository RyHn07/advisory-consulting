import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import aboutImg from "@/assets/about-office.jpg";

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

      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <div className="rounded-sm border border-dashed border-border bg-secondary/40 p-10 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              Coming Soon
            </span>
            <h2 className="mt-4 font-serif text-2xl text-foreground md:text-3xl">
              Founder bio in progress
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              A detailed background on our principal and team experience will be published here
              ahead of the public launch.
            </p>
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