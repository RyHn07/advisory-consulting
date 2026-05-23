import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Clock } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import contactImg from "@/assets/contact-meeting.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Advisory Consulting Solutions" },
      {
        name: "description",
        content:
          "Schedule a consultation with Advisory Consulting Solutions. We help advisory firms launch, strengthen, and defend their compliance programs.",
      },
      { property: "og:title", content: "Contact — Advisory Consulting Solutions" },
      {
        property: "og:description",
        content: "Schedule a compliance consultation.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <SiteLayout>
      <section className="relative isolate overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10">
          <img
            src={contactImg}
            alt=""
            className="h-full w-full object-cover animate-kenburns"
            width={1280}
            height={1600}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/95" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-28 md:py-36">
          <div className="max-w-3xl animate-fade-up">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Contact
            </span>
            <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-primary-foreground md:text-6xl">
              Schedule a <span className="italic text-accent">consultation</span>.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
              Whether you are launching a new advisory firm or strengthening an existing
              compliance program, ACS can help you navigate your regulatory obligations with
              confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-12">
          <div className="space-y-8 md:col-span-4">
            <ContactItem
              icon={Mail}
              label="Email"
              value="info@acscompliance.com"
            />
            <ContactItem
              icon={MapPin}
              label="Office"
              value="United States"
            />
            <ContactItem
              icon={Clock}
              label="Response Time"
              value="Within one business day"
            />
          </div>

          <div className="md:col-span-8">
            <div className="rounded-sm border border-border bg-background p-8 md:p-12">
              {submitted ? (
                <div className="py-12 text-center">
                  <h2 className="font-serif text-3xl text-foreground">Thank you.</h2>
                  <p className="mt-4 text-muted-foreground">
                    We have received your request and will be in touch within one business day.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="grid gap-6"
                >
                  <div className="grid gap-6 md:grid-cols-2">
                    <Field label="Full name" name="name" required />
                    <Field label="Firm name" name="firm" required />
                    <Field label="Email" name="email" type="email" required />
                    <Field label="Phone" name="phone" type="tel" />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-foreground">
                      Firm type
                    </label>
                    <select
                      name="firm-type"
                      className="block w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                    >
                      <option>Registered Investment Adviser (RIA)</option>
                      <option>Exempt Reporting Adviser (ERA)</option>
                      <option>State-registered Adviser</option>
                      <option>Newly forming firm</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-foreground">
                      How can we help? <span className="text-accent">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={6}
                      required
                      className="block w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-2 inline-flex items-center justify-center rounded-sm bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent"
                  >
                    Request Consultation
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-foreground">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="block w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
      />
    </div>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
}) {
  return (
    <div className="border-l-2 border-accent pl-5">
      <Icon className="mb-3 h-5 w-5 text-accent" strokeWidth={1.5} />
      <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
      <div className="mt-1 font-serif text-lg text-foreground">{value}</div>
    </div>
  );
}