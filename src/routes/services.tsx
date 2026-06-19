import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileText, ShieldCheck, Search, Megaphone, LifeBuoy, GraduationCap, UserCog, FileSignature, BookOpen } from "lucide-react";
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
    body: "We guide firms through the registration process at both the state and federal levels. Our team prepares and files required regulatory documents, coordinates filings, and helps ensure your business meets applicable licensing and disclosure requirements from day one.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Programs",
    body: "We partner with advisers to develop and maintain compliance programs that evolve alongside regulatory requirements. Through ongoing oversight, regulatory monitoring, compliance testing, and annual reviews, we help ensure your program remains effective, defensible, and examination-ready.",
  },
  {
    icon: Search,
    title: "Mock Audits & Risk Assessments",
    body: "We perform comprehensive mock audits and risk assessments designed to identify operational and regulatory vulnerabilities. These reviews help firms strengthen internal controls, improve documentation practices, and proactively address compliance gaps.",
  },
  {
    icon: Megaphone,
    title: "Marketing Review",
    body: "We review marketing and client communications to help firms comply with SEC marketing rules and related regulatory requirements. From websites and pitch books to social media content and testimonials, our reviews help ensure disclosures are accurate, communications are balanced and, and marketing align with regulatory expectations.",
  },
  {
    icon: LifeBuoy,
    title: "Examination Support",
    body: "We provide hands-on support throughout SEC and state examinations. Our team assists with document preparation, response coordination, regulator communications, and deficiency letter responses to help firms navigate the examination process efficiently and confidently.",
  },
  {
    icon: GraduationCap,
    title: "Compliance Training",
    body: "Our compliance training programs educate employees and compliance officers on regulatory obligations, ethical standards, and industry best practices. Training sessions are tailored to your organization and designed to strengthen compliance awareness and promote a culture of compliance across all levels of your firm.",
  },
  {
    icon: UserCog,
    title: "Outsourced CCO",
    body: "Our outsourced CCO services provide firms with experienced compliance leadership without the cost of a full-time executive. We oversee day-to-day compliance responsibilities, manage regulatory requirements, provide strategic guidance, and serve as a dedicated compliance resource for your organization.",
  },
  {
    icon: FileSignature,
    title: "Regulatory Filings",
    body: "We manage regulatory filing requirements for investment advisers, including Form ADV amendments, Form CRS, Form D, Form PF, Forms 13F, 13D, and 13H, state notice filings, and IARD/CRD updates. Our team monitors filing calendars, prepares disclosures, and coordinates submissions to help firms stay compliant and in good standing with regulators.",
  },
  {
    icon: BookOpen,
    title: "Policies & Procedures",
    body: "We draft and maintain customized compliance manuals designed around to your firm's business model, client base, and operational realities — not generic templates. Coverage includes the written supervisory procedures required under Rule 206(4)-7, code of ethics personal trading, insider information, custody, best execution, valuation, business continuity, cybersecurity, and privacy. Manuals are kept current as your firm and the regulatory landscape evolve.",
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <section data-reveal="fade" className="relative isolate flex min-h-[80vh] flex-col justify-center overflow-hidden">
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
        <div className="mx-auto w-full max-w-6xl px-6 pt-40 pb-28 md:pt-56 md:pb-36">
          <div className="max-w-3xl animate-fade-up text-left">
            <span className="section-eyebrow">
              Services
            </span>
            <h1 className="mt-6 font-serif font-semibold text-white text-5xl leading-[1.05] md:text-[90px] md:leading-[76px] md:tracking-[-5.4px]"
                style={{ fontFamily: 'Playfair Display, Playfair, serif' }}>
              <span style={{ color: '#FFF' }}>Full-lifecycle support</span>
              <br />
              <span style={{ color: '#DA9E3F' }}>for investment advisers.</span>
            </h1>
            <p className="mt-8 max-w-2xl section-body-light">
              From initial registration to ongoing oversight and examination defense, we
              deliver the specific compliance services your firm needs at each stage.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES — numbered hover-reveal rows */}
      <section data-reveal="fade" style={{ backgroundColor: '#F1EAE3' }}>
        <div className="mx-auto max-w-[1320px] px-6 pb-32 pt-20 md:pt-28">
          {/* Header row */}
          <div className="mb-16 flex flex-col items-start justify-between gap-8 md:mb-20 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <span className="section-eyebrow">Our Services</span>
              <h2 className="mt-6 section-title" style={{ color: '#0D182B' }}>
                Compliance programs that work in practice, not just on paper.
              </h2>
            </div>
          </div>

          {/* Numbered rows with hover-reveal description */}
          <div className="border-t" style={{ borderColor: 'rgba(13,24,43,0.18)' }}>
            {services.map((s, i) => {
              const Icon = s.icon;
              const num = String(i + 1);
              return (
                <article
                  key={s.title}
                  className="group relative grid grid-cols-1 gap-6 border-b py-8 md:grid-cols-12 md:gap-8 md:py-10"
                  style={{ borderColor: 'rgba(13,24,43,0.18)' }}
                >
                  {/* Left gold bar reveal on hover */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute left-0 top-1/2 h-0 w-[3px] -translate-y-1/2 transition-all duration-500 group-hover:h-[70%]"
                    style={{ backgroundColor: '#DA9E3F' }}
                  />
                  <div className="md:col-span-7 flex items-center gap-6 md:gap-10 md:pl-6 self-start">
                    <span
                      className="font-serif text-6xl md:text-7xl font-semibold leading-none transition-colors duration-300 group-hover:text-[#DA9E3F] -mt-2"
                      style={{ color: '#0D182B', fontFamily: '"Playfair Display", Georgia, serif' }}
                    >
                      {num}
                    </span>
                    <div className="flex items-center gap-4">
                      <Icon className="h-7 w-7 shrink-0" style={{ color: '#DA9E3F' }} strokeWidth={1.5} />
                      <h3
                        className="font-serif text-3xl md:text-4xl leading-none"
                        style={{ color: '#DA9E3F', fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 600, letterSpacing: '-0.5px' }}
                      >
                        {s.title}
                      </h3>
                    </div>
                  </div>
                  <div className="md:col-span-5 md:pr-2 overflow-hidden grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-out group-hover:grid-rows-[1fr] group-hover:opacity-100">
                    <p
                      className="min-h-0"
                      style={{ color: '#0D182B', fontFamily: '"Aptos Serif", ui-serif, Georgia, serif', fontSize: '17px', lineHeight: '1.65' }}
                    >
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
      <section data-reveal="fade" className="text-white" style={{ background: '#172C47', borderBottom: '1px solid #DEDBD9' }}>
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="mb-20">
            <span className="section-eyebrow">How We Work</span>
            <h2 className="mt-6 max-w-2xl section-title-light">
              Engagements built around
              <br />
              your firm.
            </h2>
          </div>
          <div className="grid gap-12 md:grid-cols-3 md:gap-16" data-reveal-children>
            {[
              { k: "1", t: "Discovery", b: "We learn how your firm operates, what regulators have asked of you, and where the real risks sit." },
              { k: "2", t: "Scoped Engagement", b: "A clear scope, fixed deliverables, and a named senior consultant accountable for the work." },
              { k: "3", t: "Ongoing Partnership", b: "Many engagements roll into retained relationships — quarterly testing, annual reviews, exam standby." },
            ].map((s) => (
              <div key={s.k}>
                <div
                  style={{
                    color: '#DA9E3F',
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '94px',
                    fontWeight: 600,
                    lineHeight: '95%',
                    letterSpacing: '18.8px',
                    textTransform: 'uppercase',
                  }}
                >
                  {s.k}
                </div>
                <div className="mt-6 h-px w-12 bg-[#DA9E3F]" />
                <h3
                  className="mt-8 text-white"
                  style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontSize: '28px',
                    fontWeight: 600,
                    lineHeight: '34px',
                    letterSpacing: '-0.5px',
                  }}
                >
                  {s.t}
                </h3>
                <p className="mt-5 section-body-light">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section data-reveal="fade" style={{ backgroundColor: '#F4EFE3' }}>
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-16 max-w-2xl">
            <span className="section-eyebrow">
              Industries Served
            </span>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl" style={{ color: '#0D182B' }}>
              Specialized across<br />the adviser landscape.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3" data-reveal-children>
            {[
              "Investment Advisers",
              "Private Fund Advisers",
              "Family Offices & Multi-Family Offices",
              "Robo / Digital Advisers",
              "Institutional Advisers",
              "Venture Capital & Private Equity Advisers",
              "Real Estate Fund Advisers",
              "Broker-Dealer / RIA Hybrid Firms",
              "Exempt Reporting Advisers (ERAs)",
            ].map((i) => (
              <div
                key={i}
                className="group relative flex items-center px-8 py-7 transition-all duration-300 hover:translate-x-1"
                style={{ backgroundColor: '#FAF6EC' }}
              >
                <span
                  className="absolute left-0 top-1/2 h-[60%] w-[3px] -translate-y-1/2 transition-all duration-300 group-hover:h-[80%]"
                  style={{ backgroundColor: '#DA9E3F' }}
                />
                <span className="font-serif text-lg md:text-xl" style={{ color: '#0D182B' }}>{i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section data-reveal="fade" style={{ backgroundColor: '#F1EAE3' }}>
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <h2
            style={{
              color: '#0D182B',
              textAlign: 'center',
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: '34px',
              fontStyle: 'italic',
              fontWeight: 500,
              lineHeight: '48px',
            }}
          >
            Not sure which services fit?
          </h2>
          <p className="section-body mx-auto mt-6 max-w-4xl">
            We'll walk you through your firm's regulatory obligations and recommend
            <br />
            the right mix of services for your stage and structure.
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