import Reveal from "./Reveal";

const points = [
  {
    k: "US-BASED",
    t: "A Wyoming corporation",
    d: "Incorporated in Wyoming and operating from the United States, BSD Global Corp is structured for stable, long-term commercial relationships.",
  },
  {
    k: "B2B ONLY",
    t: "Wholesale, not retail",
    d: "We sell to businesses — resellers, distributors and corporate buyers — with pricing and terms built for volume.",
  },
  {
    k: "SOURCING",
    t: "Multi-vendor supply",
    d: "A broad supplier network lets us cover core categories and chase down the specific product a client needs.",
  },
  {
    k: "EXPORT",
    t: "Cross-border ready",
    d: "Oriented toward exporting partners, with sourcing and handling geared to international distribution.",
  },
];

export default function Company() {
  return (
    <section
      id="company"
      className="relative border-t border-line bg-panel-2 py-24 md:py-32"
    >
      <div className="shell relative grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        {/* Narrative */}
        <Reveal>
          <p className="eyebrow-muted">[ 04 ] The company</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-text text-balance sm:text-4xl">
            Distribution, handled with corporate discipline.
          </h2>
          <div className="mt-7 space-y-5 text-base leading-relaxed text-muted">
            <p>
              BSD Global Corp is dedicated to the purchase, sale and
              distribution of computing and electronics products. We commercialize
              computers, notebooks, hardware components, peripherals, technology
              accessories and other electronics — primarily for the corporate
              market.
            </p>
            <p>
              Our operation is straightforward: we acquire merchandise from
              suppliers and distributors, then commercialize it to business
              clients. That focus keeps sourcing sharp, inventory relevant and
              every order accountable to a single point of contact.
            </p>
          </div>

          <div className="mt-9 inline-flex flex-col gap-1 border border-line bg-ink px-5 py-4">
            <span className="font-mono text-[10px] tracking-[0.2em] text-muted-2">
              REGISTERED ENTITY
            </span>
            <span className="font-display text-base font-bold text-text">
              BSD Global Corp · Corporation
            </span>
            <span className="font-mono text-xs text-muted">
              Wyoming, United States
            </span>
          </div>
        </Reveal>

        {/* Differentiators */}
        <div className="grid grid-cols-1 gap-px self-start border border-line bg-line sm:grid-cols-2">
          {points.map((p, i) => (
            <Reveal key={p.k} delay={(i % 2) * 80}>
              <div className="flex h-full flex-col bg-ink p-7">
                <span className="font-mono text-[11px] tracking-[0.2em] text-signal">
                  {p.k}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-text">
                  {p.t}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {p.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
