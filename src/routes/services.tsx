import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ClipboardCheck, FileText, Shield, BarChart3, Megaphone, GraduationCap, UserCog } from "lucide-react";
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

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="divide-y divide-border border-y border-border">
            {services.map((s, idx) => {
              const Icon = s.icon;
              return (
                <article key={s.title} className="grid gap-8 py-14 md:grid-cols-12">
                  <div className="md:col-span-1">
                    <span className="font-sans text-sm font-semibold text-accent">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <Icon className="mb-5 h-8 w-8 text-accent" strokeWidth={1.5} />
                    <h2 className="font-serif text-3xl text-foreground md:text-4xl">{s.title}</h2>
                  </div>
                  <p className="text-base leading-relaxed text-muted-foreground md:col-span-7 md:text-lg">
                    {s.body}
                  </p>
                </article>
              );
            })}
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