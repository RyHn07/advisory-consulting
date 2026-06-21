import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/schedule")({
  head: () => ({
    meta: [
      { title: "Schedule a Consultation — Advisory Consulting Solutions" },
      {
        name: "description",
        content:
          "Book a consultation with Advisory Consulting Solutions. Pick a time that works for you using our scheduling calendar.",
      },
      { property: "og:title", content: "Schedule a Consultation — Advisory Consulting Solutions" },
      {
        property: "og:description",
        content: "Pick a time that works for you and book a consultation.",
      },
    ],
    links: [{ rel: "stylesheet", href: "https://assets.calendly.com/assets/external/widget.css" }],
    scripts: [{ src: "https://assets.calendly.com/assets/external/widget.js", async: true }],
  }),
  component: SchedulePage,
});

function SchedulePage() {
  useEffect(() => {
    // Ensure Calendry widget script is loaded (in case head scripts not injected on client nav)
    const id = "calendly-widget-script";
    if (!document.getElementById(id)) {
      const s = document.createElement("script");
      s.id = id;
      s.src = "https://assets.calendly.com/assets/external/widget.js";
      s.async = true;
      document.body.appendChild(s);
    }
    const linkId = "calendly-widget-css";
    if (!document.getElementById(linkId)) {
      const l = document.createElement("link");
      l.id = linkId;
      l.rel = "stylesheet";
      l.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(l);
    }
  }, []);

  return (
    <SiteLayout>
      <section data-reveal="fade" className="bg-background pt-40 pb-16 md:pt-48">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <span className="section-eyebrow">Booking</span>
          <h1
            className="mt-6 font-serif font-semibold text-primary text-5xl leading-[1.05] md:text-[72px] md:leading-[72px] md:tracking-[-3px]"
            style={{ fontFamily: "Playfair Display, Playfair, serif" }}
          >
            Schedule a Consultation
          </h1>
          <p className="mt-6 mx-auto max-w-2xl section-body">
            Pick a time that works for you. We'll confirm your meeting by email with everything you
            need to get started.
          </p>
        </div>
      </section>

      <section data-reveal="fade" className="bg-background pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div
            className="calendly-inline-widget rounded-lg overflow-hidden border border-border"
            data-url="https://calendly.com/hovig-adv-cs"
            style={{ minWidth: "320px", height: "780px" }}
          />
        </div>
      </section>
    </SiteLayout>
  );
}
