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
      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Careers
            </span>
            <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-foreground md:text-6xl">
              Join a <span className="italic">collaborative</span>, client-focused team.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Advisory Consulting Solutions offers opportunities for experienced compliance
              professionals, former Chief Compliance Officers, attorneys, and regulatory
              consultants. If you are interested in joining ACS, please submit your
              information and resume confidentially through the form below.
            </p>
          </div>
          <div className="md:col-span-5">
            <img
              src={careersImg}
              alt="Modern workspace"
              className="aspect-[4/5] w-full rounded-sm object-cover"
              width={1280}
              height={900}
              loading="lazy"
            />
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