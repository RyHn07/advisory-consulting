import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import approachImg from "@/assets/approach-architecture.jpg";

export const Route = createFileRoute("/our-approach")({
  head: () => ({
    meta: [
      { title: "Our Approach — Advisory Consulting Solutions" },
      {
        name: "description",
        content:
          "A four-step methodology — Assess, Design, Implement, Test & Improve — for compliance programs that are practical, scalable, and regulator-focused.",
      },
      { property: "og:title", content: "Our Approach — Advisory Consulting Solutions" },
      {
        property: "og:description",
        content: "Practical, scalable, regulator-focused compliance methodology.",
      },
      { property: "og:image", content: approachImg },
    ],
  }),
  component: ApproachPage,
});

const steps = [
  {
    step: "01",
    title: "Assess",
    body: "We start by evaluating your current compliance framework, operational risks, and regulatory exposure — understanding how your firm actually runs, not just what your manual says.",
  },
  {
    step: "02",
    title: "Design",
    body: "We develop customized policies, procedures, and controls aligned with your business model, operational structure, and regulatory obligations.",
  },
  {
    step: "03",
    title: "Implement",
    body: "We integrate compliance into daily operations through practical processes, oversight, and report-based deliverables your team can actually use.",
  },
  {
    step: "04",
    title: "Test & Improve",
    body: "We conduct mock examinations, periodic reviews, and ongoing testing to maintain regulatory readiness as your firm — and the rules — evolve.",
  },
];

function ApproachPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Our Approach
            </span>
            <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-foreground md:text-6xl">
              Practical, scalable, <span className="italic">regulator-focused</span>.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              We build compliance programs designed to function in practice, not just on
              paper — programs that are operationally sound, examination-ready, and aligned
              with how your firm actually runs.
            </p>
          </div>
          <div className="md:col-span-5">
            <img
              src={approachImg}
              alt="Architectural detail"
              className="aspect-[4/5] w-full rounded-sm object-cover"
              width={1280}
              height={900}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-px border border-border bg-border md:grid-cols-2">
            {steps.map((s) => (
              <div key={s.step} className="bg-background p-10 md:p-14">
                <div className="flex items-baseline gap-6">
                  <span className="font-sans text-sm font-semibold text-accent">{s.step}</span>
                  <h2 className="font-serif text-3xl text-foreground md:text-4xl">{s.title}</h2>
                </div>
                <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-primary text-primary-foreground">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <p className="font-serif text-3xl italic leading-snug md:text-4xl">
            “Our focus is simple — identify and address issues before they become deficiencies.”
          </p>
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