import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Lock } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import careersImg from "@/assets/careers-workspace.jpg";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Advisory Consulting Solutions" },
      {
        name: "description",
        content:
          "Opportunities for experienced compliance professionals, former CCOs, attorneys, and regulatory consultants seeking a collaborative environment.",
      },
      { property: "og:title", content: "Careers — Advisory Consulting Solutions" },
      {
        property: "og:description",
        content: "Join a collaborative, client-focused compliance consulting team.",
      },
      { property: "og:image", content: careersImg },
    ],
  }),
  component: CareersPage,
});

function CareersPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <SiteLayout>
      <section className="relative isolate flex min-h-[80vh] flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={careersImg}
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
              Careers
            </span>
            <h1 className="mt-6 font-serif font-semibold text-white text-5xl leading-[1.05] md:text-[90px] md:leading-[76px] md:tracking-[-5.4px]"
                style={{ fontFamily: 'Playfair Display, Playfair, serif' }}>
              <span style={{ color: '#FFF' }}>Join a collaborative,</span>
              <br />
              <span style={{ color: '#DA9E3F' }}>client-focused team.</span>
            </h1>
            <p className="mt-8 max-w-2xl section-body-light">
              Advisory Consulting Solutions offers opportunities for experienced compliance
              professionals, former Chief Compliance Officers, attorneys, and regulatory
              consultants. If you are interested in joining ACS, please submit your
              information and resume confidentially through the form below.
            </p>
          </div>
        </div>
      </section>

      {/* WHY ACS */}
      <section style={{ backgroundColor: '#FAF6F1' }}>
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-28">
          <div className="grid gap-12 md:grid-cols-3 md:gap-16">
            {[
              { t: "Senior-Level Work", b: "Real client work. Real responsibility. From day one." },
              { t: "Collaborative Team", b: "Boutique by design. Collaborative by practice." },
              { t: "Flexible Structure", b: "Less hierarchy. More autonomy. A culture built around results." },
            ].map((v) => (
              <div key={v.t}>
                <h3
                  style={{
                    color: '#DA9E3F',
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontSize: '28px',
                    fontWeight: 600,
                    lineHeight: '34px',
                    letterSpacing: '-0.5px',
                  }}
                >
                  {v.t}
                </h3>
                <p className="mt-5 section-body">{v.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE LOOK FOR */}
      <section style={{ backgroundColor: '#FAF6F1' }}>
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-28">
          <div className="mb-16 max-w-3xl">
            <span className="section-eyebrow">What We Look For</span>
            <h2 className="mt-6 font-serif text-4xl font-semibold leading-tight md:text-5xl" style={{ color: '#0D182B' }}>
              Experience That Matters
            </h2>
          </div>
          <div className="grid border" style={{ borderColor: '#E5DCC9' }}>
            <div className="grid md:grid-cols-2">
              {[
                { t: "Investment Adviser Depth", b: "Deep experience advising registered investment advisers on regulatory obligations, compliance programs, and SEC examinations. You bring sound judgment to complex compliance challenges." },
                { t: "Client-Ready Communication", b: "You can sit across from a CCO or CEO and translate regulatory complexity into clear guidance." },
                { t: "Owner's Mindset", b: "You take responsibility for outcomes — not just deliverables." },
                { t: "Collaborative Default", b: "You believe the best client outcomes come from shared expertise, constructive challenge, and a commitment to collective success." },
              ].map((q, idx) => (
                <div
                  key={q.t}
                  className="px-12 py-14"
                  style={{
                    borderRight: idx % 2 === 0 ? '1px solid #E5DCC9' : 'none',
                    borderBottom: idx < 2 ? '1px solid #E5DCC9' : 'none',
                  }}
                >
                  <h3
                    style={{
                      color: '#0D182B',
                      fontFamily: '"Playfair Display", Georgia, serif',
                      fontSize: '28px',
                      fontWeight: 600,
                      lineHeight: '34px',
                      letterSpacing: '-0.5px',
                    }}
                  >
                    {q.t}
                  </h3>
                  <p className="mt-5 section-body">{q.b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OPEN ROLES */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="section-eyebrow">
                Open Roles
              </span>
              <h2 className="mt-4 section-title">
                Where we're hiring.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              We always welcome confidential introductions from senior compliance professionals, even when a role isn't actively posted.
            </p>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {[
              { t: "Senior Compliance Consultant", l: "Remote · Full-time", b: "Lead client engagements across registration, ongoing oversight, and exam support." },
              { t: "Outsourced CCO", l: "Remote · Full-time", b: "Serve as named CCO for a portfolio of advisory firms with senior-level autonomy." },
              { t: "Marketing Rule Specialist", l: "Remote · Part-time / Full-time", b: "Review advertising, websites, and marketing materials under SEC Rule 206(4)-1." },
            ].map((r) => (
              <article key={r.t} className="grid gap-6 py-10 md:grid-cols-12">
                <div className="md:col-span-5">
                  <h3 className="font-serif text-2xl text-foreground md:text-3xl">{r.t}</h3>
                  <div className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">{r.l}</div>
                </div>
                <p className="text-base leading-relaxed text-muted-foreground md:col-span-7 md:text-lg">
                  {r.b}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <div className="rounded-sm border border-border bg-background p-8 md:p-12">
            <div className="mb-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
              <Lock className="h-3.5 w-3.5" />
              Confidential Submission
            </div>
            {submitted ? (
              <div className="py-12 text-center">
                <h2 className="font-serif text-3xl text-foreground">Thank you.</h2>
                <p className="mt-4 text-muted-foreground">
                  Your submission has been received. We will be in touch directly.
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
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" />
                  <Field label="LinkedIn URL" name="linkedin" type="url" />
                </div>
                <Field label="Years of compliance experience" name="experience" />
                <Field label="Role of interest" name="role" placeholder="e.g. Senior Consultant, Outsourced CCO" />
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-foreground">
                    Resume / CV
                  </label>
                  <input
                    type="file"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    className="block w-full rounded-sm border border-input bg-background px-4 py-3 text-sm file:mr-4 file:rounded-sm file:border-0 file:bg-secondary file:px-4 file:py-2 file:text-xs file:font-semibold file:uppercase file:tracking-widest file:text-foreground hover:file:bg-accent hover:file:text-accent-foreground"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-foreground">
                    Cover note
                  </label>
                  <textarea
                    name="note"
                    rows={5}
                    className="block w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center rounded-sm bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent"
                >
                  Submit Confidentially
                </button>
                <p className="text-xs text-muted-foreground">
                  Information submitted here is treated as confidential and shared only with the
                  ACS hiring team.
                </p>
              </form>
            )}
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
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
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
        placeholder={placeholder}
        className="block w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
      />
    </div>
  );
}