import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import aboutImg from "@/assets/about-office.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Advisory Consulting Solutions" },
      {
        name: "description",
        content:
          "Advisory Consulting Solutions is a specialized compliance consulting firm serving SEC and state-registered investment advisers.",
      },
      { property: "og:title", content: "About — Advisory Consulting Solutions" },
      {
        property: "og:description",
        content: "A specialized compliance consulting firm for investment advisers.",
      },
      { property: "og:image", content: aboutImg },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section data-reveal="fade" className="relative isolate flex min-h-[80vh] flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={aboutImg}
            alt=""
            className="h-full w-full object-cover animate-kenburns"
            width={1280}
            height={1600}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/75 to-primary/95" />
        </div>
        <div className="mx-auto w-full max-w-[1320px] px-6 pt-40 pb-28 md:pt-56 md:pb-36">
          <div className="max-w-3xl animate-fade-up text-left">
            <span className="section-eyebrow">
              About
            </span>
            <h1 className="mt-6 font-serif font-semibold text-white text-5xl leading-[1.05] md:text-[90px] md:leading-[76px] md:tracking-[-5.4px]"
                style={{ fontFamily: 'Playfair Display, Playfair, serif' }}>
              <span style={{ color: '#FFF' }}>A specialized partner</span>
              <br />
              <span style={{ color: '#DA9E3F' }}>for advisory firms.</span>
            </h1>
            <p className="mt-8 max-w-2xl section-body-light">
              Advisory Consulting Solutions is supported by a team with decades of experience
              across investment adviser compliance, securities law, regulatory oversight, and
              financial services. Our professionals include attorneys, former regulators,
              investment adviser and broker-dealer compliance specialists, and experienced
              consultants who bring diverse perspectives to complex compliance challenges.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section data-reveal="fade" style={{ backgroundColor: '#FAF6F1' }}>
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="mb-20">
            <span className="section-eyebrow">What Guides Us</span>
            <h2 className="mt-6 max-w-2xl font-serif text-4xl font-semibold leading-tight md:text-5xl" style={{ color: '#0D182B' }}>
              Practical Compliance.
              <br />
              Experienced Guidance.
            </h2>
          </div>
          <div className="grid gap-12 md:grid-cols-3 md:gap-16" data-reveal-children>
            {[
              { k: "1", t: "Specialized Focus", b: "We work exclusively with your team — every policy, control, and review is calibrated to your regulatory reality." },
              { k: "2", t: "Practical Implementation", b: "Programs designed to operate inside your firm's day-to-day workflow, not sit untouched on a shelf." },
              { k: "3", t: "Defensible Documentation", b: "Records, testing, and reviews structured to stand up to SEC and state examination scrutiny." },
            ].map((v) => (
              <div key={v.k}>
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
                  {v.k}
                </div>
                <div className="mt-6 h-px w-12 bg-[#DA9E3F]" />
                <h3
                  className="mt-8"
                  style={{
                    color: '#0D182B',
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
            Let's talk about your compliance program.
          </h2>
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