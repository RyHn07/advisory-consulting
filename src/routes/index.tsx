import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import heroOffice from "@/assets/header-city-hero.jpg";
import s0 from "@/assets/services/service-0.png.asset.json";
import s1 from "@/assets/services/service-1.png.asset.json";
import s2 from "@/assets/services/service-2.png.asset.json";
import s3 from "@/assets/services/service-3.png.asset.json";
import s4 from "@/assets/services/service-4.png.asset.json";
import s5 from "@/assets/services/service-5.png.asset.json";

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
  { img: s0.url, title: "Registration Services", body: "State and federal registration, filings, and licensing — done right the first time.", offset: 0 },
  { img: s4.url, title: "Compliance Programs", body: "Customized policies, monthly tasks, annual reports, and continuous oversight.", offset: 96 },
  { img: s2.url, title: "Mock Audits & Risk Assessments", body: "Find and address issues before regulators do.", offset: 192 },
  { img: s1.url, title: "Marketing Review", body: "SEC Marketing Rule reviews of websites, decks, social, testimonials, and ads.", offset: 48 },
  { img: s3.url, title: "Examination Support", body: "Hands-on guidance through SEC and state examinations.", offset: 144 },
  { img: s5.url, title: "Policies & Procedures", body: "Custom compliance manuals tailored to your firm.", offset: 240 },
];

const approach = [
  { step: "1", title: "Assess", body: "Evaluate your current compliance framework, operational risks, and regulatory exposure." },
  { step: "2", title: "Design", body: "Develop customized policies, procedures, and controls aligned with your business model." },
  { step: "3", title: "Implement", body: "Integrate compliance into daily operations through practical processes and report-based deliverables." },
  { step: "4", title: "Test & Improve", body: "Conduct mock examinations, reviews, and ongoing testing to maintain regulatory readiness." },
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
                className="inline-flex h-[64px] items-center justify-center gap-[10px] rounded-none border border-white px-6 py-4 text-[22px] font-normal leading-[150%] text-white transition-colors hover:bg-primary-foreground/10"
                style={{ fontFamily: '"Aptos Serif", ui-serif, Georgia, serif' }}
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
            <h2 className="mt-4 section-title">
              A strategic partner for emerging and established advisory firms.
            </h2>
          </div>
          <div className="section-body space-y-6 md:col-span-7">
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
              <h2 className="mt-4 max-w-2xl section-title-light">
                Compliance programs that work in practice, not just on paper.
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
                <div
                  className="self-stretch font-sans text-[16px] font-bold uppercase text-[#DA9E3F]"
                  style={{ fontFamily: '"Open Sans", ui-sans-serif, system-ui, sans-serif', letterSpacing: '3.2px', lineHeight: 'normal' }}
                >
                  {a.step}
                </div>
                <h3
                  className="mt-6 self-stretch text-white"
                  style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontSize: '38px',
                    fontWeight: 600,
                    lineHeight: '42px',
                    letterSpacing: '-2.28px',
                  }}
                >
                  {a.title}
                </h3>
                <p className="mt-3 section-body-light">{a.body}</p>
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
              <h2 className="mt-4 max-w-2xl section-title">
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
          <div className="grid gap-x-10 gap-y-16 md:grid-cols-3 md:gap-x-12 md:gap-y-4">
            {services.map((s) => (
              <article
                key={s.title}
                className="group flex flex-col"
                style={{ marginTop: `${s.offset}px` }}
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

      {/* CTA */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <h2
            className="self-stretch"
            style={{
              color: "#172C47",
              textAlign: "center",
              fontFamily: '"Playfair Display", serif',
              fontSize: "34px",
              fontStyle: "italic",
              fontWeight: 600,
              lineHeight: "48px",
            }}
          >
            Ready to strengthen
            <br />
            your compliance program?
          </h2>
          <p className="section-body-dark mx-auto mt-6 max-w-2xl text-center">
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