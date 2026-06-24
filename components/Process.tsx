import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Source",
    desc: "We acquire product from a network of manufacturers, distributors and suppliers — confirming specs, condition and price before anything is committed.",
  },
  {
    n: "02",
    title: "Stock",
    desc: "Inventory is consolidated and held so orders can be fulfilled quickly, with availability verified against every quote we issue.",
  },
  {
    n: "03",
    title: "Distribute",
    desc: "Goods move to resellers, retailers and corporate buyers across the United States, coordinated through a single account contact.",
  },
  {
    n: "04",
    title: "Export",
    desc: "For partners shipping abroad, we prepare US-market product for export programs and cross-border distribution.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-bg py-24 md:py-32">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">How we work</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-extrabold leading-tight tracking-tight text-ink text-balance sm:text-4xl lg:text-[2.75rem]">
            One model, end to end: source, stock, distribute, export.
          </h2>
        </Reveal>

        <ol className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 80} as="li">
              <div className="flex h-full flex-col rounded-2xl border border-line bg-bg p-7 shadow-card">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand text-sm font-bold text-white">
                    {s.n}
                  </span>
                  <span className="h-px flex-1 bg-line" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-ink">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
