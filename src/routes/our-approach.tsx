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
      <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden">
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
            <span className="section-eyebrow">
              Our Approach
            </span>
            <h1 className="mt-6 font-serif font-semibold text-white text-5xl leading-[1.05] md:text-[90px] md:leading-[76px] md:tracking-[-5.4px]">
              Practical, scalable,
              <br />
              <span className="text-accent">regulator-focused.</span>
            </h1>
            <p className="mt-8 max-w-2xl section-body-light">
              We build compliance programs designed to function in practice, not just on
              paper — programs that are operationally sound, examination-ready, and aligned
              with how your firm actually runs.
            </p>
          </div>
        </div>
      </section>

      {/* METHODOLOGY — sleek vertical rhythm, no boxes */}
      <section className="relative bg-background">
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
          <div className="mb-20 max-w-2xl">
            <span className="section-eyebrow">
              Methodology
            </span>
            <h2 className="mt-4 section-title">
              A four-part rhythm, repeated as you grow.
            </h2>
          </div>
          <ol className="relative">
            {/* vertical accent rail */}
            <span
              aria-hidden
              className="absolute left-[7px] top-3 hidden h-[calc(100%-3rem)] w-px bg-gradient-to-b from-accent/70 via-accent/20 to-transparent md:block"
            />
            {steps.map((s, i) => (
              <li
                key={s.step}
                className="group relative grid grid-cols-[auto_1fr] gap-x-8 gap-y-4 py-12 md:grid-cols-[200px_1fr] md:gap-x-16"
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-[3.25rem] hidden h-3.5 w-3.5 -translate-x-[5px] rounded-full border-2 border-accent bg-background md:block transition-transform group-hover:scale-125"
                />
                <div className="flex items-start gap-4 md:pl-10">
                  <span className="font-serif text-[5rem] leading-none text-accent/30 transition-colors group-hover:text-accent md:text-[7rem]">
                    {s.step}
                  </span>
                </div>
                <div className="pt-3 md:pt-6">
                  <h3 className="font-serif text-4xl text-foreground md:text-5xl">
                    {s.title}
                  </h3>
                  <p className="mt-5 max-w-xl section-body">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="border-y border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-16 max-w-2xl">
            <span className="section-eyebrow">
              Principles
            </span>
            <h2 className="mt-4 section-title">
              The standards we hold every program to.
            </h2>
          </div>
          <div className="grid gap-x-12 gap-y-14 md:grid-cols-2">
            {[
              { t: "Risk-Calibrated", b: "Controls are sized to your firm's actual risk profile — not pulled from a generic template." },
              { t: "Operationally Realistic", b: "Procedures your team can actually follow on a busy week, not aspirational paperwork." },
              { t: "Examination-Ready", b: "Documentation, testing, and records structured the way examiners actually request them." },
              { t: "Continuously Tested", b: "Programs are reviewed, retested, and refined as your firm and the rulebook evolve." },
            ].map((p, i) => (
              <div key={p.t} className="group relative pl-8">
                <span className="absolute left-0 top-2 h-8 w-px bg-accent transition-all duration-300 group-hover:h-12" />
                <span className="font-sans text-xs font-semibold tracking-[0.2em] text-accent/70">
                  / {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-serif text-3xl text-foreground">{p.t}</h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-16 max-w-2xl">
            <span className="section-eyebrow">
              What You Get
            </span>
            <h2 className="mt-4 section-title">
              Concrete deliverables at every step.
            </h2>
          </div>
          <div className="grid gap-x-10 md:grid-cols-2">
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
                className="group flex items-center gap-5 border-b border-border/60 py-5 transition-colors hover:border-accent"
              >
                <span className="h-px w-6 bg-accent transition-all duration-300 group-hover:w-10" />
                <span className="font-serif text-lg text-foreground md:text-xl">{d}</span>
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