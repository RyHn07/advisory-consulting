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
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={approachImg}
            alt=""
            className="h-full w-full object-cover animate-kenburns"
            width={1280}
            height={1600}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/75 to-primary/95" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-28 md:py-40">
          <div className="max-w-3xl animate-fade-up">
            <span className="font-['Open_Sans'] text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Our Approach
            </span>
            <h1 className="mt-6 font-serif font-semibold text-white text-5xl leading-[1.05] md:text-[90px] md:leading-[76px] md:tracking-[-5.4px]">
              Practical, scalable,
              <br />
              <span className="text-accent">regulator-focused.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
              We build compliance programs designed to function in practice, not just on
              paper — programs that are operationally sound, examination-ready, and aligned
              with how your firm actually runs.
            </p>
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

      {/* PRINCIPLES */}
      <section className="border-y border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-16 max-w-2xl">
            <span className="font-['Open_Sans'] text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Principles
            </span>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground md:text-5xl">
              The standards we hold <span className="italic">every program to</span>.
            </h2>
          </div>
          <div className="grid gap-px border border-border bg-border md:grid-cols-2">
            {[
              { t: "Risk-Calibrated", b: "Controls are sized to your firm's actual risk profile — not pulled from a generic template." },
              { t: "Operationally Realistic", b: "Procedures your team can actually follow on a busy week, not aspirational paperwork." },
              { t: "Examination-Ready", b: "Documentation, testing, and records structured the way examiners actually request them." },
              { t: "Continuously Tested", b: "Programs are reviewed, retested, and refined as your firm and the rulebook evolve." },
            ].map((p) => (
              <div key={p.t} className="bg-background p-10">
                <h3 className="font-serif text-2xl text-foreground">{p.t}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-16 max-w-2xl">
            <span className="font-['Open_Sans'] text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              What You Get
            </span>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground md:text-5xl">
              Concrete deliverables at <span className="italic">every step</span>.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Tailored compliance policies and procedures",
              "Annual compliance review report",
              "Mock examination findings and remediation plan",
              "Marketing rule review memos",
              "Risk assessment matrix and testing schedule",
              "Form ADV, Form CRS, and regulatory filing support",
              "Code of ethics and personal trading framework",
              "Examination response toolkit and document index",
            ].map((d) => (
              <div
                key={d}
                className="flex items-start gap-4 border-l-2 border-accent bg-background px-6 py-5"
              >
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span className="text-base text-foreground">{d}</span>
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