import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ClipboardCheck, FileText, Shield, BarChart3, Megaphone, GraduationCap, UserCog, ClipboardList, SlidersHorizontal, Plus } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import servicesHero from "@/assets/hero-office.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Advisory Consulting Solutions" },
      {
        name: "description",
        content:
          "Registration, compliance programs, mock audits, marketing review, examination support, training, and outsourced CCO services for investment advisers.",
      },
      { property: "og:title", content: "Services — Advisory Consulting Solutions" },
      {
        property: "og:description",
        content: "Full-lifecycle compliance services for investment advisers.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: FileText,
    title: "Registration Services",
    body: "We handle the registration process at both the state and federal levels. Our team prepares and files required regulatory documents, coordinates filings, and helps ensure your business meets all licensing and disclosure requirements from the outset.",
  },
  {
    icon: Shield,
    title: "Compliance Programs",
    body: "Ongoing oversight and maintenance of your firm's compliance program. We develop customized policies and procedures, monitor regulatory changes, administer your monthly compliance tasks and annual compliance reports, and help ensure your compliance framework remains current and effective.",
  },
  {
    icon: ClipboardCheck,
    title: "Mock Audits / Risk Assessments",
    body: "We perform comprehensive mock audits and risk assessments designed to identify operational and regulatory vulnerabilities before regulators do. These reviews help firms strengthen internal controls, improve documentation practices, and proactively address compliance gaps.",
  },
  {
    icon: Megaphone,
    title: "Marketing Review Services",
    body: "We review advertising and marketing materials to help firms comply with SEC marketing rules and regulatory advertising requirements. Our reviews include websites, presentations, social media content, pitch books, testimonials, and other communications to help reduce regulatory risk and ensure disclosures are accurate and compliant.",
  },
  {
    icon: BarChart3,
    title: "Examination Support",
    body: "We provide hands-on support during SEC and state examinations. Our team assists with document preparation, response coordination, and communication management to help firms navigate examinations efficiently and confidently.",
  },
  {
    icon: GraduationCap,
    title: "Compliance Training",
    body: "Our compliance training programs educate employees and compliance officers on regulatory obligations, ethical standards, and industry best practices. Training sessions are tailored to your organization and designed to promote a culture of compliance across all levels of the firm.",
  },
  {
    icon: UserCog,
    title: "Outsourced CCO Services",
    body: "Our outsourced CCO services provide firms with experienced compliance leadership without the cost of a full-time executive. We oversee day-to-day compliance responsibilities, manage regulatory requirements, provide strategic guidance, and serve as a dedicated compliance resource for your organization.",
  },
  {
    icon: ClipboardList,
    title: "Regulatory Filings",
    body: "We manage the full cycle of regulatory filings for investment advisers — including Form ADV (Parts 1, 2A, 2B, and 3/CRS) amendments, Form D notice filings for private fund offerings, Form PF, state notice filings, and IARD/CRD updates. Our team tracks filing calendars, prepares supporting disclosures, and submits on time so your firm stays in good standing with the SEC and state regulators.",
  },
  {
    icon: SlidersHorizontal,
    title: "Policies & Procedures",
    body: "We draft and maintain custom compliance manuals tailored to your firm's business model, client base, and operational realities — not generic templates. Coverage includes the written supervisory procedures required under Rule 206(4)-7, code of ethics, personal trading, insider information, custody, best execution, valuation, business continuity, cybersecurity, and privacy. Manuals are kept current as your firm and the regulatory landscape evolve.",
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={servicesHero}
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
              Services
            </span>
            <h1 className="mt-6 font-serif font-semibold text-white text-5xl leading-[1.05] md:text-[90px] md:leading-[76px] md:tracking-[-5.4px]">
              Full-lifecycle support
              <br />
              <span className="text-accent">for investment advisers.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
              From initial registration to ongoing oversight and examination defense, we
              deliver the specific compliance services your firm needs at each stage.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES — sleek hover-reveal rows, no boxes or hard dividers */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-8">
          <div>
            {services.map((s, idx) => {
              const Icon = s.icon;
              return (
                <article
                  key={s.title}
                  className="group relative cursor-pointer py-8 md:py-10"
                >
                  <span aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-border" />
                  <span
                    aria-hidden
                    className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-700 ease-out group-hover:w-full"
                  />

                  <div className="grid grid-cols-[auto_1fr_auto] items-center gap-6 md:gap-10">
                    <span className="font-serif text-4xl leading-none text-accent/40 transition-colors group-hover:text-accent md:text-5xl">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div className="flex items-center gap-5">
                      <Icon
                        className="h-6 w-6 shrink-0 text-accent transition-transform duration-500 group-hover:scale-110"
                        strokeWidth={1.5}
                      />
                      <h2 className="font-serif text-2xl leading-tight text-foreground transition-colors group-hover:text-accent md:text-4xl">
                        {s.title}
                      </h2>
                    </div>
                    <span className="hidden items-center gap-3 md:inline-flex">
                      <span className="font-['Open_Sans'] text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground transition-colors group-hover:text-accent">
                        Overview
                      </span>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-500 group-hover:rotate-45 group-hover:border-accent group-hover:text-accent">
                        <Plus className="h-4 w-4" strokeWidth={1.5} />
                      </span>
                    </span>
                  </div>

                  {/* details revealed on hover */}
                  <div className="grid grid-rows-[0fr] transition-all duration-500 ease-out group-hover:grid-rows-[1fr] group-hover:pt-6">
                    <p className="overflow-hidden pl-0 text-base leading-relaxed text-muted-foreground md:pl-[calc(3rem+2.5rem)] md:text-lg">
                      {s.body}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-16 max-w-2xl">
            <span className="font-['Open_Sans'] text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              How We Work
            </span>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground md:text-5xl">
              Engagements built around <span className="italic">your firm</span>.
            </h2>
          </div>
          <div className="grid gap-x-12 gap-y-14 md:grid-cols-3">
            {[
              { k: "01", t: "Discovery", b: "We learn how your firm operates, what regulators have asked of you, and where the real risks sit." },
              { k: "02", t: "Scoped Engagement", b: "A clear scope, fixed deliverables, and a named senior consultant accountable for the work." },
              { k: "03", t: "Ongoing Partnership", b: "Many engagements roll into retained relationships — quarterly testing, annual reviews, exam standby." },
            ].map((s) => (
              <div key={s.k} className="group relative">
                <span className="block font-serif text-6xl leading-none text-accent/40 transition-colors group-hover:text-accent">
                  {s.k}
                </span>
                <span className="mt-5 block h-px w-10 bg-accent transition-all duration-300 group-hover:w-20" />
                <h3 className="mt-6 font-serif text-3xl text-foreground">{s.t}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="font-['Open_Sans'] text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                Industries Served
              </span>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground md:text-5xl">
                Specialized across the <span className="italic">adviser landscape</span>.
              </h2>
            </div>
          </div>
          <div className="grid gap-x-8 sm:grid-cols-2 md:grid-cols-3">
            {[
              "Wealth Management",
              "Private Funds",
              "Hedge Funds",
              "Family Offices",
              "Robo / Digital Advisers",
              "Institutional Advisers",
              "Real Estate Advisers",
              "Venture & PE Advisers",
              "Multi-Family Offices",
            ].map((i) => (
              <div
                key={i}
                className="group flex items-center justify-between gap-4 border-b border-border/60 py-5 transition-colors hover:border-accent"
              >
                <span className="font-serif text-xl text-foreground">{i}</span>
                <ArrowRight className="h-4 w-4 -translate-x-2 text-accent opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">
            Not sure which services fit?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/75">
            We'll walk you through your firm's regulatory obligations and recommend the right
            mix of services for your stage and structure.
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