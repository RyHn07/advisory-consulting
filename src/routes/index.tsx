import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Typewriter } from "@/components/Typewriter";
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
  { img: s4.url, title: "Compliance Programs", body: "Customized policies, monthly tasks, annual reports, and continuous oversight.", offset: 72 },
  { img: s2.url, title: "Mock Audits & Risk Assessments", body: "Find and address issues before regulators do.", offset: 144 },
  { img: s1.url, title: "Marketing Review", body: "SEC Marketing Rule reviews of websites, decks, social, testimonials, and advertisements.", offset: 36 },
  { img: s3.url, title: "Examination Support", body: "Hands-on guidance through SEC and state examinations.", offset: 108 },
  { img: s5.url, title: "Policies & Procedures", body: "Tailored training to build a culture of compliance at every level.", offset: 180 },
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
              className="text-[16px] md:text-[22px] font-bold uppercase leading-[150%] tracking-[3px] md:tracking-[4.4px] text-accent"
              style={{ fontFamily: '"Aptos Serif", ui-serif, Georgia, serif', color: "#DA9E3F" }}
            >
              Regulatory Compliance
            </span>
            <h1 className="mt-6 self-stretch font-serif text-[34px] leading-[40px] font-semibold text-white md:mt-8 md:text-[72px] md:leading-[82px] md:tracking-[-2.88px] lg:text-[90px] lg:leading-[100px] lg:tracking-[-3.6px]">
              <Typewriter
                text="Practical compliance."
                speed={55}
                startDelay={250}
                caret={false}
                loop
                loopDelay={10000}
              />
              <br />
              <span
                className="italic md:tracking-[-1.8px]"
                style={{ color: "#DA9E3F" }}
              >
                <Typewriter
                  text="Built to be defensible."
                  speed={55}
                  startDelay={250 + 22 * 55 + 250}
                  loop
                  loopDelay={10000}
                />
              </span>
            </h1>
            <p
              className="mt-6 w-full max-w-[818px] text-[16px] md:mt-8 md:text-[22px] font-normal leading-[150%] text-white"
              style={{ fontFamily: '"Aptos Serif", ui-serif, Georgia, serif' }}
            >
              Customized compliance consulting for registered investment advisers — from
              registration through ongoing oversight, mock audits, and exam readiness.
            </p>
            <div className="mt-9 flex flex-wrap gap-6">
              <Link
                to="/schedule"
                className="btn-consult text-accent-foreground transition-all hover:brightness-110"
                style={{ background: "#DA9E3F" }}
              >
                Schedule a Consultation
              </Link>
              <Link
                to="/services"
                className="hidden md:inline-flex h-[54px] md:h-[64px] items-center justify-center gap-[10px] rounded-none border border-white px-6 py-4 text-[16px] md:text-[22px] font-normal leading-[150%] text-white transition-colors hover:bg-primary-foreground/10"
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
          <div className="md:col-span-5" data-reveal="left">
            <span className="section-eyebrow">
              Who We Are
            </span>
            <h2 className="mt-4 section-title">
              A strategic partner for emerging and established advisory firms.
            </h2>
          </div>
          <div className="section-body space-y-6 md:col-span-7" data-reveal="right" style={{ ['--reveal-delay' as any]: '120ms' }}>
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
            <div data-reveal="up">
              <span className="section-eyebrow">
                Our Approach
              </span>
              <h2 className="mt-4 max-w-2xl section-title-light">
                Compliance programs that work in practice, not just on paper.
              </h2>
            </div>
            <Link
              to="/our-approach"
              className="inline-flex items-center gap-2 section-body-light hover:gap-3 transition-all"
              style={{ color: '#DA9E3F' }}
              data-reveal="fade"
            >
              Explore the methodology <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-px border border-primary-foreground/10 bg-primary-foreground/10 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((a, i) => (
              <div
                key={a.step}
                className="bg-primary p-8 transition-colors duration-500 hover:bg-[#0f2138]"
                data-reveal="up"
                style={{ ['--reveal-delay' as any]: `${i * 120}ms` }}
              >
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
          <p className="mt-12 max-w-3xl font-serif text-2xl italic text-primary-foreground/90 md:text-3xl" data-reveal="up">
            “Our focus is simple — identify and address issues before they become deficiencies.”
          </p>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div data-reveal="up">
              <span className="section-eyebrow">
                Services
              </span>
              <h2 className="mt-4 max-w-2xl section-title">
                Comprehensive support across the compliance lifecycle.
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 section-body hover:gap-3 transition-all"
              style={{ color: '#DA9E3F' }}
              data-reveal="fade"
            >
              All services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-x-10 gap-y-16 md:grid-cols-3 md:gap-x-12 md:gap-y-4">
            {services.map((s, i) => (
              <article
                key={s.title}
                className="group flex flex-col"
                style={{ marginTop: `${s.offset}px`, ['--reveal-delay' as any]: `${(i % 3) * 140}ms` }}
                data-reveal="up"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="aspect-[4/4.2] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    style={{
                      clipPath:
                        "polygon(0% 0%, 100% 0%, 100% 100%, 18% 100%, 0% 82%)",
                    }}
                  />
                </div>
                <h3
                  className="mt-6 text-[22px] leading-[28px] tracking-[-0.6px] md:mt-8 md:text-[32px] md:leading-[38px] md:tracking-[-1.2px]"
                  style={{
                    color: "#DA9E3F",
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontWeight: 600,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  className="mt-3 max-w-[26rem] text-[16px] md:mt-5 md:text-[22px]"
                  style={{
                    color: "#575E69",
                    fontFamily: '"Aptos Serif", ui-serif, Georgia, serif',
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
      <section style={{ backgroundColor: '#F1EAE3' }}>
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <h2
            className="self-stretch"
            data-reveal="up"
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
          <p className="section-body-dark mx-auto mt-6 max-w-2xl text-center" data-reveal="up" style={{ ['--reveal-delay' as any]: '120ms' }}>
            Whether you are launching a new advisory firm or strengthening an existing program,
            ACS can help you navigate your regulatory obligations with confidence.
          </p>
          <Link
            to="/schedule"
            className="btn-consult mt-10 text-white transition-all hover:brightness-110"
            style={{ backgroundColor: '#0D182B' }}
            data-reveal="zoom"
          >
            Schedule a Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}