import DistributionGrid from "./DistributionGrid";
import { IconArrowRight } from "./icons";

const facts = [
  { k: "ENTITY", v: "C-Corporation" },
  { k: "JURISDICTION", v: "Wyoming, USA" },
  { k: "MODEL", v: "B2B wholesale" },
  { k: "REACH", v: "Export-ready" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink">
      {/* Signature: animated distribution / circuit network */}
      <div className="pointer-events-none absolute inset-0">
        <DistributionGrid />
        {/* Legibility masks — keep type crisp over the network */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-transparent to-ink" />
      </div>

      <div className="shell relative flex min-h-[100svh] flex-col justify-center pb-20 pt-28 md:pt-32">
        <div className="max-w-3xl">
          <div className="animate-fade-up">
            <p className="eyebrow flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-signal" />
              Wholesale distribution · Computing &amp; electronics
            </p>
          </div>

          <h1
            className="mt-7 font-display text-[2.7rem] font-black leading-[0.98] tracking-tightest text-text text-balance animate-fade-up sm:text-6xl lg:text-[4.6rem]"
            style={{ animationDelay: "80ms" }}
          >
            The distribution backbone
            <br />
            for{" "}
            <span className="text-signal">computing &amp; electronics</span>.
          </h1>

          <p
            className="mt-7 max-w-xl text-lg leading-relaxed text-muted animate-fade-up"
            style={{ animationDelay: "160ms" }}
          >
            BSD Global Corp sources, stocks and distributes computers, hardware
            and electronics at wholesale — supplying resellers, distributors and
            corporate buyers across the United States.
          </p>

          <div
            className="mt-9 flex flex-col gap-3 sm:flex-row animate-fade-up"
            style={{ animationDelay: "240ms" }}
          >
            <a href="#contact" className="btn-signal">
              Request a quote
              <IconArrowRight width={18} height={18} />
            </a>
            <a href="#products" className="btn-ghost">
              View product lines
            </a>
          </div>

          {/* Entity manifest */}
          <dl
            className="mt-14 grid max-w-2xl grid-cols-2 gap-px overflow-hidden border border-line bg-line sm:grid-cols-4 animate-fade-up"
            style={{ animationDelay: "320ms" }}
          >
            {facts.map((f) => (
              <div key={f.k} className="bg-panel-2 px-4 py-4">
                <dt className="font-mono text-[10px] tracking-[0.2em] text-muted-2">
                  {f.k}
                </dt>
                <dd className="mt-1.5 font-display text-sm font-bold text-text">
                  {f.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Bottom hairline */}
      <div className="relative h-px w-full bg-line" />
    </section>
  );
}
