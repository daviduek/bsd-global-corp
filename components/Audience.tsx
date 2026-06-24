import Reveal from "./Reveal";
import { IconTag, IconBox, IconHandshake, IconShield, IconGlobe } from "./icons";

const audience = [
  {
    icon: IconTag,
    title: "Resellers",
    desc: "Stock fast-moving lines at wholesale margins and keep your shelves and storefronts supplied.",
  },
  {
    icon: IconBox,
    title: "Distributors",
    desc: "Reliable upstream supply with volume pricing to feed your own distribution network.",
  },
  {
    icon: IconHandshake,
    title: "Specialty retailers",
    desc: "Curated computing and electronics for shops that serve a focused customer base.",
  },
  {
    icon: IconShield,
    title: "Corporate procurement",
    desc: "Equip teams and refresh fleets with consistent sourcing and a single point of contact.",
  },
  {
    icon: IconGlobe,
    title: "Exporters",
    desc: "Source US-market product for export programs, built for partners moving goods across borders.",
  },
];

export default function Audience() {
  return (
    <section id="audience" className="relative border-t border-line bg-panel-2 py-24 md:py-32">
      <div className="absolute inset-0 grid-texture opacity-[0.35]" aria-hidden="true" />
      <div className="shell relative">
        <Reveal>
          <p className="eyebrow-muted">[ 02 ] Who we serve</p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-extrabold leading-tight tracking-tight text-text text-balance sm:text-4xl lg:text-5xl">
            Built for businesses that buy to sell, equip and export.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {audience.map((a, i) => {
            const Icon = a.icon;
            return (
              <Reveal
                key={a.title}
                delay={(i % 3) * 70}
                className={i === 0 ? "lg:col-span-1" : ""}
              >
                <article className="flex h-full flex-col border border-line bg-ink p-7 transition-colors duration-300 hover:border-signal/30">
                  <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-signal/10 text-signal">
                    <Icon width={20} height={20} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-text">
                    {a.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
                    {a.desc}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
