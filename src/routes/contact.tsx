import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Clock } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
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
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || "").trim(),
      firm: String(fd.get("firm") || "").trim() || null,
      email: String(fd.get("email") || "").trim(),
      phone: String(fd.get("phone") || "").trim() || null,
      firm_type: String(fd.get("firm-type") || "").trim() || null,
      message: String(fd.get("message") || "").trim(),
    };
    if (!payload.name || !payload.email || !payload.message) {
      toast.error("Please fill in name, email, and message.");
      setSubmitting(false);
      return;
    }
    const { error } = await supabase.from("contact_submissions").insert(payload);
    setSubmitting(false);
    if (error) {
      toast.error("Could not send your message. Please try again.");
      return;
    }
    setSubmitted(true);
  }

  return (
    <SiteLayout>
      <section data-reveal="fade" className="relative isolate flex min-h-[80vh] flex-col justify-center overflow-hidden border-b border-border">
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
        <div className="mx-auto w-full max-w-[1320px] px-6 pt-40 pb-28 md:pt-56 md:pb-36">
          <div className="max-w-3xl animate-fade-up text-left">
            <span className="section-eyebrow">
              Contact
            </span>
            <h1 className="mt-6 font-semibold text-white text-5xl leading-[1.05] md:text-[90px] md:leading-[76px] md:tracking-[-5.4px]"
                style={{ fontFamily: 'Playfair, "Playfair Display", serif' }}>
              <span style={{ color: '#FFF' }}>Schedule a</span>
              <br />
              <span style={{ color: '#DA9E3F' }}>consultation.</span>
            </h1>
            <p className="mt-8 max-w-2xl section-body-light">
              Whether you are launching a new advisory firm or strengthening an existing
              compliance program, ACS can help you navigate your regulatory obligations with
              confidence.
            </p>
          </div>
        </div>
      </section>

      <section data-reveal="fade" className="bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-12">
          <div className="space-y-8 md:col-span-4">
            <ContactItem
              icon={Mail}
              label="Email"
              value="info@adv-cs.com"
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
                <form onSubmit={handleSubmit} className="grid gap-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <Field label="Full name" name="name" required />
                    <Field label="Firm name" name="firm" required />
                    <Field label="Email" name="email" type="email" required />
                    <Field label="Phone" name="phone" type="tel" />
                  </div>
                  <div>
                    <label
                      className="mb-2 block uppercase"
                      style={{
                        color: "#0D182B",
                        fontFamily: '"Aptos Serif"',
                        fontSize: "18px",
                        fontWeight: 700,
                        lineHeight: "normal",
                        letterSpacing: "1.8px",
                      }}
                    >
                      Firm type
                    </label>
                    <select
                      name="firm-type"
                      className="block w-full rounded-sm border border-input bg-background px-4 py-3 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                      style={{
                        color: "#0D182B",
                        fontFamily: '"Aptos Serif"',
                        fontSize: "16px",
                        fontWeight: 400,
                        lineHeight: "normal",
                      }}
                    >
                      <option>Registered Investment Adviser (RIA)</option>
                      <option>Exempt Reporting Adviser (ERA)</option>
                      <option>State-registered Adviser</option>
                      <option>Newly forming firm</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      className="mb-2 block uppercase"
                      style={{
                        color: "#0D182B",
                        fontFamily: '"Aptos Serif"',
                        fontSize: "18px",
                        fontWeight: 700,
                        lineHeight: "normal",
                        letterSpacing: "1.8px",
                      }}
                    >
                      How can we help? <span className="text-accent">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={6}
                      required
                      className="block w-full rounded-sm border border-input bg-background px-4 py-3 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                      style={{
                        color: "#0D182B",
                        fontFamily: '"Aptos Serif"',
                        fontSize: "16px",
                        fontWeight: 400,
                        lineHeight: "normal",
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="mt-2 inline-flex items-center justify-center rounded-sm bg-primary px-8 py-3.5 text-primary-foreground transition-colors hover:bg-accent"
                    style={{
                      fontFamily: '"Aptos Serif"',
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "normal",
                    }}
                  >
                    {submitting ? "Sending..." : "Request Consultation"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section data-reveal="fade" className="border-t border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-16 max-w-2xl">
            <span className="section-eyebrow">
              Frequently Asked
            </span>
            <h2 className="mt-4 section-title">
              What to expect when you reach out.
            </h2>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {[
              { q: "How quickly will I hear back?", a: "We respond to every inquiry within one business day, typically the same day during business hours." },
              { q: "Do you charge for an initial consultation?", a: "No. The first conversation is a scoping call so we both understand fit, timing, and what a useful engagement would look like." },
              { q: "Do you work with firms that aren't registered yet?", a: "Yes — we routinely guide newly forming RIAs through Form ADV preparation, initial policies, and registration filings." },
              { q: "Can you support us during an active SEC exam?", a: "Yes. We provide hands-on exam support including document preparation, response drafting, and communication with examiners." },
              { q: "Are engagements project-based or ongoing?", a: "Both. Many clients start with a defined project — a mock audit, registration, or annual review — and move into ongoing oversight." },
            ].map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex cursor-pointer items-start justify-between gap-6 list-none">
                  <h3 className="font-serif text-xl text-foreground md:text-2xl">{f.q}</h3>
                  <span className="mt-1 font-serif text-2xl text-accent transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-3xl section-body">{f.a}</p>
              </details>
            ))}
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
      <label
        className="mb-2 block uppercase"
        style={{
          color: "#0D182B",
          fontFamily: '"Aptos Serif"',
          fontSize: "18px",
          fontWeight: 700,
          lineHeight: "normal",
          letterSpacing: "1.8px",
        }}
      >
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="block w-full rounded-sm border border-input bg-background px-4 py-3 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
        style={{
          color: "#0D182B",
          fontFamily: '"Aptos Serif"',
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "normal",
        }}
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
      <div
        className="uppercase"
        style={{
          color: "#575E69",
          fontFamily: '"Aptos Serif"',
          fontSize: "16px",
          fontWeight: 700,
          lineHeight: "150%",
          letterSpacing: "1.6px",
        }}
      >
        {label}
      </div>
      <div className="mt-1 font-serif text-lg text-foreground">{value}</div>
    </div>
  );
}