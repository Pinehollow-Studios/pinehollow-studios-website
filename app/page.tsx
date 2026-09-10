import type { CSSProperties } from "react";
import { CopyEmail } from "@/components/copy-email";
import { EMAIL, SUPPORT_EMAIL, VESTIGE, VESTIGE_URL } from "@/lib/site";

const step = (i: number) => ({ "--i": i }) as CSSProperties;

export default function Home() {
  return (
    <>
      <Hero />
      <Vestige />
      <Contact />
    </>
  );
}

function Hero() {
  return (
    <section className="ph-hero">
      <div className="ph-glow" aria-hidden="true" />
      <div className="lp-container ph-hero-stack">
        <span className="ph-tag ph-in" style={step(0)}>
          <span className="ph-tag-dot" aria-hidden="true" />
          Independent software studio · UK
        </span>

        <h1 className="ph-h1 ph-in" style={step(1)}>
          We make software we&apos;d want to <em>use.</em>
        </h1>

        <p className="ph-lede ph-in" style={step(2)}>
          Pinehollow is a two-person studio in the United Kingdom. We design and build our
          own products, one at a time. The first is Vestige, a golf app.
        </p>

        <div className="ph-row ph-in" style={step(3)}>
          <a href="#vestige" className="ph-btn ph-btn-vestige">
            See Vestige
            <span className="ph-btn-arrow" aria-hidden="true">↓</span>
          </a>
          <a href="#contact" className="ph-btn ph-btn-ghost">Get in touch</a>
        </div>

        <ul className="ph-facts ph-in" style={step(4)}>
          <li>Two people</li>
          <li>United Kingdom</li>
          <li>One product at a time</li>
        </ul>
      </div>
    </section>
  );
}

function Vestige() {
  const spec: Array<[label: string, value: string, live?: boolean]> = [
    ["Status", "In beta", true],
    ["Platform", "iPhone"],
    ["Public beta", VESTIGE.publicBeta],
    ["Launch", VESTIGE.launch],
  ];

  return (
    <section id="vestige" className="ph-section" aria-labelledby="vestige-h">
      <div className="lp-container">
        <div className="ph-card" data-reveal data-spot>
          <div className="ph-card-copy">
            <span className="ph-k">Now building</span>
            <h2 id="vestige-h" className="ph-h2">Vestige, a golf app.</h2>
            <p className="ph-lede">
              Every golf course in England on one map, and the ones you&apos;ve played marked
              with a tap. Free, for iPhone. The beta, the roadmap and the waiting list live
              at vestige.golf.
            </p>
            <a href={VESTIGE_URL} className="ph-btn ph-btn-vestige" target="_blank" rel="noopener noreferrer">
              Visit vestige.golf
              <span className="ph-btn-arrow ph-btn-arrow-ext" aria-hidden="true">↗</span>
            </a>
          </div>

          <dl className="ph-spec">
            {spec.map(([label, value, live], i) => (
              <div key={label} data-reveal style={step(i + 1)}>
                <dt>{label}</dt>
                <dd data-live={live || undefined}>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="ph-section" aria-labelledby="contact-h">
      <div className="lp-container ph-contact">
        <span className="ph-k" data-reveal style={step(0)}>Contact</span>
        <h2 id="contact-h" className="ph-h2" data-reveal style={step(1)}>Say hello.</h2>
        <p className="ph-lede" data-reveal style={step(2)}>
          For anything: questions, press, a hello. We read everything.
        </p>
        <div data-reveal style={step(3)}>
          <CopyEmail email={EMAIL} />
        </div>
        <p className="ph-support" data-reveal style={step(4)}>
          Need help with Vestige? Write to{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="ph-support-link">{SUPPORT_EMAIL}</a>.
        </p>
      </div>
    </section>
  );
}
