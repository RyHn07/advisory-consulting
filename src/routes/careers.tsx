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
      <section className="relative isolate overflow-hidden">
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
        <div className="mx-auto max-w-7xl px-6 py-28 md:py-40">
          <div className="max-w-3xl animate-fade-up">
            <span className="font-['Open_Sans'] text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Careers
            </span>
            <h1 className="mt-6 font-serif font-semibold text-white text-5xl leading-[1.05] md:text-[90px] md:leading-[76px] md:tracking-[-5.4px]">
              Join a collaborative,
              <br />
              <span className="text-accent">client-focused team.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
              Advisory Consulting Solutions offers opportunities for experienced compliance
              professionals, former Chief Compliance Officers, attorneys, and regulatory
              consultants. If you are interested in joining ACS, please submit your
              information and resume confidentially through the form below.
            </p>
          </div>
        </div>
      </section>

      {/* WHY ACS */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-px border border-border bg-border md:grid-cols-3">
            {[
              { t: "Senior-Level Work", b: "Substantive client engagements from day one — no manual-shuffling, no busywork." },
              { t: "Collaborative Team", b: "A small, experienced group of compliance professionals who share judgment, not silos." },
              { t: "Flexible Structure", b: "Remote-first with a results-focused culture built for senior practitioners." },
            ].map((v) => (
              <div key={v.t} className="bg-background p-10">
                <h3 className="font-serif text-2xl text-foreground">{v.t}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{v.b}</p>
              </div>
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