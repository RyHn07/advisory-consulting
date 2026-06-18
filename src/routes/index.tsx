import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ClipboardCheck, FileText, Shield, BarChart3, Megaphone, GraduationCap, UserCog, ClipboardList, SlidersHorizontal } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import heroOffice from "@/assets/header-city-hero.jpg";
import whoWeAreImg from "@/assets/who-we-are.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Advisory Consulting Solutions — Compliance for Investment Advisers" },
      {
        name: "description",
        content:
          "Practical, regulator-focused compliance consulting from registration through ongoing oversight, mock audits, and outsourced CCO services.",
      },
      { property: "og:title", content: "Advisory Consulting Solutions" },
      {
        property: "og:description",
        content:
          "Practical, regulator-focused compliance consulting for registered investment advisers.",
      },
      { property: "og:image", content: heroOffice },
      { name: "twitter:image", content: heroOffice },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: FileText, title: "Registration Services", body: "State and federal registration, filings, and licensing — done right the first time." },
  { icon: Shield, title: "Compliance Programs", body: "Customized policies, monthly tasks, annual reports, and continuous oversight." },
  { icon: ClipboardCheck, title: "Mock Audits & Risk Assessments", body: "Find and address issues before regulators do." },
  { icon: Megaphone, title: "Marketing Review", body: "SEC Marketing Rule reviews of websites, decks, social, testimonials, and ads." },
  { icon: BarChart3, title: "Examination Support", body: "Hands-on guidance through SEC and state examinations." },
  { icon: GraduationCap, title: "Compliance Training", body: "Tailored training to build a culture of compliance at every level." },
  { icon: UserCog, title: "Outsourced CCO", body: "Senior compliance leadership without the cost of a full-time hire." },
  { icon: ClipboardList, title: "Regulatory Filings", body: "Timely ADV, Form D, and all required regulatory submissions." },
  { icon: SlidersHorizontal, title: "Policies & Procedures", body: "Custom compliance manuals tailored to your firm." },
];

const approach = [
  { step: "01", title: "Assess", body: "Evaluate your current compliance framework, operational risks, and regulatory exposure." },
  { step: "02", title: "Design", body: "Develop customized policies, procedures, and controls aligned with your business model." },
  { step: "03", title: "Implement", body: "Integrate compliance into daily operations through practical processes and report-based deliverables." },
  { step: "04", title: "Test & Improve", body: "Conduct mock examinations, reviews, and ongoing testing to maintain regulatory readiness." },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative isolate min-h-[860px] overflow-hidden pt-[130px]">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroOffice}
            alt=""
            className="h-full w-full object-cover"
            width={1920}
            height={838}
          />
          <div className="absolute inset-0 bg-primary/55" />
        </div>
        <div className="mx-auto flex min-h-[730px] max-w-[1320px] items-center px-6 py-24 text-left">
          <div className="max-w-[1180px] animate-fade-up">
            <span
              className="text-[22px] font-bold uppercase leading-[150%] tracking-[4.4px] text-accent"
              style={{ fontFamily: '"Aptos Serif", ui-serif, Georgia, serif', color: "#DA9E3F" }}
            >
              Regulatory Compliance
            </span>
            <h1 className="mt-8 self-stretch font-serif text-5xl font-semibold leading-[1.02] text-white md:text-[90px] md:font-semibold md:leading-[100px] md:tracking-[-3.6px]">
              Practical compliance.
              <br />
              <span
                className="italic md:tracking-[-1.8px]"
                style={{ color: "#DA9E3F" }}
              >
                Built to be defensible.
              </span>
            </h1>
            <p
              className="mt-8 w-full max-w-[818px] text-[22px] font-normal leading-[150%] text-white"
              style={{ fontFamily: '"Aptos Serif", ui-serif, Georgia, serif' }}
            >
              Customized compliance consulting for registered investment advisers — from
              registration through ongoing oversight, mock audits, and exam readiness.
            </p>
            <div className="mt-9 flex flex-wrap gap-6">
              <Link
                to="/contact"
                className="inline-flex h-[64px] items-center justify-center gap-[10px] rounded-none px-6 py-4 font-serif text-[24px] font-normal text-accent-foreground transition-all hover:brightness-110"
                style={{ background: "#DA9E3F" }}
              >
                Schedule a Consultation
              </Link>
              <Link
                to="/services"
                className="inline-flex h-[64px] items-center justify-center gap-[10px] rounded-none border border-white px-6 py-4 font-serif text-[24px] font-normal text-white transition-colors hover:bg-primary-foreground/10"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="section-eyebrow">
              Who We Are
            </span>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground md:text-5xl">
              A strategic partner for <span className="italic">emerging and established</span> advisory firms.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:col-span-7 md:text-lg">
            <p>
              Advisory Consulting Solutions (ACS) provides customized compliance consulting
              services to registered investment advisers. We support firms with registration
              and licensing, compliance program development, regulatory filings, annual
              reviews, mock audits, risk assessments, testing, and ongoing compliance oversight.
            </p>
            <p>
              We combine regulatory knowledge with practical implementation, helping firms move
              beyond check-the-box compliance toward programs that are operationally sound and
              exam-ready.
            </p>
            <p>
              Through a hands-on and responsive approach, we help firms strengthen their
              compliance programs, prepare for regulatory examinations, and confidently manage
              day-to-day compliance responsibilities.
            </p>
          </div>
        </div>
      </section>

      {/* APPROACH TEASER */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="section-eyebrow">
                Our Approach
              </span>
              <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight md:text-5xl">
                Compliance programs that work in <span className="italic">practice</span>, not just on paper.
              </h2>
            </div>
            <Link
              to="/our-approach"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all"
            >
              Explore the methodology <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-px border border-primary-foreground/10 bg-primary-foreground/10 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((a) => (
              <div key={a.step} className="bg-primary p-8">
                <div className="font-sans text-xs font-semibold text-accent">{a.step}</div>
                <h3 className="mt-6 font-serif text-2xl text-primary-foreground">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">{a.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 max-w-3xl font-serif text-2xl italic text-primary-foreground/90 md:text-3xl">
            “Our focus is simple — identify and address issues before they become deficiencies.”
          </p>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="section-eyebrow">
                Services
              </span>
              <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight text-foreground md:text-5xl">
                Comprehensive support across the compliance lifecycle.
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all"
            >
              All services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <article
                  key={s.title}
                  className="group border-t border-border bg-card p-8 transition-colors hover:border-accent"
                >
                  <Icon className="h-7 w-7 text-accent" strokeWidth={1.5} />
                  <h3 className="mt-6 font-serif text-2xl text-foreground">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <h2 className="font-serif text-4xl leading-tight text-foreground md:text-5xl">
            Ready to strengthen your compliance program?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Whether you are launching a new advisory firm or strengthening an existing program,
            ACS can help you navigate your regulatory obligations with confidence.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-sm bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent"
          >
            Schedule a Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}