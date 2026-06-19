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
    step: "1",
    title: "Assess",
    body: "We start by evaluating your current compliance framework, operational risks, and regulatory exposure — understanding how your firm actually runs, not just what your manual says.",
  },
  {
    step: "2",
    title: "Design",
    body: "We develop customized policies, procedures, and controls aligned with your business model, operational structure, and regulatory obligations.",
  },
  {
    step: "3",
    title: "Implement",
    body: "We integrate compliance into daily operations through practical processes, oversight, and report-based deliverables your team can actually use.",
  },
  {
    step: "4",
    title: "Test & Improve",
    body: "We conduct mock examinations, periodic reviews, and ongoing testing to maintain regulatory readiness as your firm — and the rules — evolve.",
  },
];

function ApproachPage() {
  return (
    <SiteLayout>
      <section data-reveal="fade" className="relative isolate flex min-h-[80vh] flex-col justify-center overflow-hidden">
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
        <div className="mx-auto w-full max-w-[1320px] px-6 pt-40 pb-28 md:pt-56 md:pb-36">
          <div className="max-w-3xl animate-fade-up text-left">
            <span className="section-eyebrow">
              Our Approach
            </span>
            <h1 className="mt-6 font-serif font-semibold text-white text-5xl leading-[1.05] md:text-[90px] md:leading-[76px] md:tracking-[-5.4px]"
                style={{ fontFamily: 'Playfair Display, Playfair, serif' }}>
              <span style={{ color: '#FFF' }}>Practical, scalable,</span>
              <br />
              <span style={{ color: '#DA9E3F' }}>regulator-focused.</span>
            </h1>
            <p className="mt-8 max-w-2xl section-body-light">
              We build compliance programs designed to function in practice, not just on
              paper programs that are operationally sound, examination-ready, and aligned
              with how your firm actually runs.
            </p>
          </div>
        </div>
      </section>

      {/* METHODOLOGY — sleek vertical rhythm, no boxes */}
      <section data-reveal="fade" className="relative bg-background">
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
          <div className="mb-20 max-w-2xl">
            <span className="section-eyebrow">
              Methodology
            </span>
            <h2 className="mt-4 section-title">
              A four-part rhythm, repeated as you grow.
            </h2>
          </div>
          <ol className="relative" data-reveal-children>
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
                  className="absolute left-[7px] top-[6.625rem] hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent md:block transition-transform group-hover:scale-125"
                />
                <div className="md:pl-10">
                  <span
                    className="step-number flex h-[116px] w-[150px] flex-shrink-0 flex-col justify-center text-center transition-colors duration-300 group-hover:[color:#DA9E3F] group-hover:[animation:step-shake_0.6s_ease-in-out]"
                    style={{
                      color: 'rgba(218, 158, 63, 0.50)',
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: '146px',
                      fontWeight: 600,
                      lineHeight: '76px',
                    }}
                  >
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
      <section data-reveal="fade" style={{ backgroundColor: '#0D182B' }}>
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-16 max-w-2xl">
            <span className="section-eyebrow">
              Principles
            </span>
            <h2 className="mt-4 font-serif text-4xl font-semibold text-white md:text-5xl">
              The standards we<br />hold every program to.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2" data-reveal-children>
            {[
              { t: "Risk-Calibrated", b: "Controls are sized to your firm's actual risk profile — not pulled from a generic template." },
              { t: "Operationally Realistic", b: "Procedures your team can actually follow on a busy week, not aspirational paperwork." },
              { t: "Examination-Ready", b: "Documentation, testing, and records structured the way examiners actually request them." },
              { t: "Continuously Tested", b: "Programs are reviewed, retested, and refined as your firm and the rulebook evolve." },
            ].map((p) => (
              <div
                key={p.t}
                className="group p-10 transition-colors duration-300"
                style={{ backgroundColor: '#172C47' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#DA9E3F')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#172C47')}
              >
                <h3 className="font-serif text-3xl font-semibold text-white transition-colors duration-300 group-hover:text-[#0D182B] md:text-4xl">
                  {p.t}
                </h3>
                <p className="section-body-light mt-5 max-w-md transition-colors duration-300 group-hover:text-[#0D182B]">
                  {p.b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section data-reveal="fade" style={{ backgroundColor: '#F4EFE3' }}>
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-16 max-w-2xl">
            <span className="section-eyebrow">
              What You Get
            </span>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl" style={{ color: '#0D182B' }}>
              Concrete deliverables<br />at every step.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2" data-reveal-children>
            {[
              "Tailored compliance policies and procedures",
              "Annual compliance review report",
              "Mock examination findings and remediation plan",
              "Marketing rule review memos",
              "Risk assessment matrix and testing schedule",
              "Form ADV, Form CRS, and regulatory filing support",
              "Code of ethics and personal trading framework",
              "Examination response package, document index, and deficiency letter remediation support",
            ].map((d) => (
              <div
                key={d}
                className="group relative flex items-center px-8 py-7 transition-all duration-300 hover:translate-x-1"
                style={{ backgroundColor: '#FAF6EC' }}
              >
                <span
                  className="absolute left-0 top-1/2 h-[60%] w-[3px] -translate-y-1/2 transition-all duration-300 group-hover:h-[80%]"
                  style={{ backgroundColor: '#DA9E3F' }}
                />
                <span className="font-serif text-lg md:text-xl" style={{ color: '#0D182B' }}>{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section data-reveal="fade" style={{ backgroundColor: '#F1EAE3' }}>
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <p className="font-serif text-3xl italic leading-snug md:text-4xl" style={{ color: '#0D182B' }}>
            “Our focus is simple — identify and address issues before they become deficiencies.”
          </p>
          <Link
            to="/schedule"
            className="btn-consult mt-10 text-white transition-all hover:brightness-110"
            style={{ backgroundColor: '#0D182B' }}
          >
            Schedule a Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}