import Reveal from "./Reveal";

const points = [
  {
    k: "US-based",
    t: "A Wyoming corporation",
    d: "Incorporated in Wyoming and operating from the United States, BSD Global Corp is structured for stable, long-term commercial relationships.",
  },
  {
    k: "B2B only",
    t: "Wholesale, not retail",
    d: "We sell to businesses — resellers, distributors and corporate buyers — with pricing and terms built for volume.",
  },
  {
    k: "Sourcing",
    t: "Multi-vendor supply",
    d: "A broad supplier network lets us cover core categories and chase down the specific product a client needs.",
  },
  {
    k: "Export",
    t: "Cross-border ready",
    d: "Oriented toward exporting partners, with sourcing and handling geared to international distribution.",
  },
];

export default function Company() {
  return (
    <section id="company" className="border-y border-line bg-mist py-24 md:py-32">
      <div className="shell grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        {/* Narrative */}
        <Reveal>
          <p className="eyebrow">The company</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-ink text-balance sm:text-4xl">
            Distribution, handled with corporate discipline.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-body">
            <p>
              BSD Global Corp is dedicated to the purchase, sale and
              distribution of computing and electronics products. We
              commercialize computers, notebooks, hardware components,
              peripherals, technology accessories and other electronics —
              primarily for the corporate market.
            </p>
            <p>
              Our operation is straightforward: we acquire merchandise from
              suppliers and distributors, then commercialize it to business
              clients. That focus keeps sourcing sharp, inventory relevant and
              every order accountable to a single point of contact.
            </p>
          </div>

          <div className="mt-8 inline-flex flex-col gap-1 rounded-xl border border-line bg-bg px-5 py-4 shadow-card">
            <span className="text-xs font-medium uppercase tracking-wide text-muted-2">
              Registered entity
            </span>
            <span className="font-display text-base font-bold text-ink">
              BSD Global Corp · Corporation
            </span>
            <span className="text-sm text-muted">Wyoming, United States</span>
          </div>
        </Reveal>

        {/* Differentiators */}
        <div className="grid grid-cols-1 gap-5 self-start sm:grid-cols-2">
          {points.map((p, i) => (
            <Reveal key={p.k} delay={(i % 2) * 80}>
              <div className="flex h-full flex-col rounded-2xl border border-line bg-bg p-7 shadow-card">
                <span className="text-xs font-semibold uppercase tracking-wide text-brand">
                  {p.k}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold tracking-tight text-ink">
                  {p.t}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-body">
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
