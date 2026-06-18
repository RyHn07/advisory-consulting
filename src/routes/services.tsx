import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import servicesHero from "@/assets/hero-office.jpg";
import s0 from "@/assets/services/service-0.png.asset.json";
import s1 from "@/assets/services/service-1.png.asset.json";
import s2 from "@/assets/services/service-2.png.asset.json";
import s3 from "@/assets/services/service-3.png.asset.json";
import s4 from "@/assets/services/service-4.png.asset.json";
import s5 from "@/assets/services/service-5.png.asset.json";

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
    img: s0.url,
    title: "Registration Services",
    body: "State and federal registration, filings, and licensing — done right the first time.",
    offset: 0,
  },
  {
    img: s4.url,
    title: "Compliance Programs",
    body: "Customized policies, monthly tasks, annual reports, and continuous oversight.",
    offset: 96,
  },
  {
    img: s2.url,
    title: "Mock Audits & Risk Assessments",
    body: "Find and address issues before regulators do.",
    offset: 192,
  },
  {
    img: s1.url,
    title: "Marketing Review",
    body: "SEC Marketing Rule reviews of websites, decks, social, testimonials, and advertisements.",
    offset: 48,
  },
  {
    img: s3.url,
    title: "Examination Support",
    body: "Hands-on guidance through SEC and state examinations.",
    offset: 144,
  },
  {
    img: s5.url,
    title: "Policies & Procedures",
    body: "Tailored training to build a culture of compliance at every level.",
    offset: 240,
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
            <span className="section-eyebrow">
              Services
            </span>
            <h1 className="mt-6 font-serif font-semibold text-white text-5xl leading-[1.05] md:text-[90px] md:leading-[76px] md:tracking-[-5.4px]">
              Full-lifecycle support
              <br />
              <span className="text-accent">for investment advisers.</span>
            </h1>
            <p className="mt-8 max-w-2xl section-body-light">
              From initial registration to ongoing oversight and examination defense, we
              deliver the specific compliance services your firm needs at each stage.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES — sleek hover-reveal rows, no boxes or hard dividers */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1320px] px-6 pb-32 pt-20 md:pt-28">
          {/* Header row */}
          <div className="mb-16 flex flex-col items-start justify-between gap-8 md:mb-20 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <span className="section-eyebrow">Our Services</span>
              <h2 className="mt-6 section-title">
                Compliance programs that work in practice, not just on paper.
              </h2>
            </div>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 font-serif text-[20px] text-[#DA9E3F] transition-all hover:gap-3"
            >
              All services
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Staggered service grid */}
          <div className="grid gap-x-10 gap-y-16 md:grid-cols-3 md:gap-x-12 md:gap-y-4">
            {services.map((s) => (
              <article
                key={s.title}
                className="group flex flex-col"
                style={{ marginTop: `var(--svc-offset, 0px)`, ['--svc-offset' as any]: `${s.offset}px` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    style={{
                      clipPath:
                        "polygon(0% 0%, 100% 0%, 100% 100%, 18% 100%, 0% 82%)",
                    }}
                  />
                </div>
                <h3
                  className="mt-8"
                  style={{
                    color: "#DA9E3F",
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontSize: "32px",
                    fontWeight: 600,
                    lineHeight: "38px",
                    letterSpacing: "-1.2px",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  className="mt-5 max-w-[26rem]"
                  style={{
                    color: "#575E69",
                    fontFamily: '"Aptos Serif", ui-serif, Georgia, serif',
                    fontSize: "22px",
                    lineHeight: "150%",
                  }}
                >
                  {s.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-16 max-w-2xl">
            <span className="section-eyebrow">
              How We Work
            </span>
            <h2 className="mt-4 section-title">
              Engagements built around your firm.
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
              <span className="section-eyebrow">
                Industries Served
              </span>
              <h2 className="mt-4 section-title">
                Specialized across the adviser landscape.
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
          <h2 className="section-title-light">
            Not sure which services fit?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/75">
            We'll walk you through your firm's regulatory obligations and recommend the right
            mix of services for your stage and structure.
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