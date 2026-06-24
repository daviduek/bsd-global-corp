import {
  IconArrowRight,
  IconLaptop,
  IconChip,
  IconNetwork,
  IconGlobe,
} from "./icons";

const facts = [
  { k: "Entity", v: "C-Corporation" },
  { k: "Jurisdiction", v: "United States" },
  { k: "Model", v: "B2B wholesale" },
  { k: "Reach", v: "Export-ready" },
];

const quickLines = [
  { icon: IconLaptop, label: "Computers & notebooks" },
  { icon: IconChip, label: "Components & hardware" },
  { icon: IconNetwork, label: "Networking & connectivity" },
  { icon: IconGlobe, label: "Electronics for export" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-bg">
      {/* Soft brand wash at the top, fading to white */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-gradient-to-b from-brand-soft/70 via-bg to-bg"
      />

      <div className="shell relative grid items-center gap-14 pb-20 pt-28 md:pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-28">
        {/* Copy */}
        <div className="max-w-2xl">
          <p className="eyebrow animate-fade-up">
            Wholesale computing &amp; electronics
          </p>

          <h1
            className="mt-5 font-display text-[2.6rem] font-extrabold leading-[1.02] tracking-tight text-ink text-balance animate-fade-up sm:text-5xl lg:text-[3.6rem]"
            style={{ animationDelay: "80ms" }}
          >
            The distribution backbone for computing &amp;{" "}
            <span className="relative whitespace-nowrap text-brand">
              electronics
              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 h-[3px] w-full origin-left rounded-full bg-brand/30 animate-draw-x motion-reduce:hidden"
              />
            </span>
            .
          </h1>

          <p
            className="mt-6 max-w-xl text-lg leading-relaxed text-body animate-fade-up"
            style={{ animationDelay: "160ms" }}
          >
            BSD Global Corp sources, stocks and distributes computers, hardware
            and electronics at wholesale — supplying resellers, distributors and
            corporate buyers across the United States.
          </p>

          <div
            className="mt-8 flex flex-col gap-3 sm:flex-row animate-fade-up"
            style={{ animationDelay: "240ms" }}
          >
            <a href="#contact" className="btn-primary group">
              Request a quote
              <IconArrowRight
                width={18}
                height={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
            <a href="#products" className="btn-secondary">
              View product lines
            </a>
          </div>

          {/* Trust facts */}
          <dl
            className="mt-12 grid max-w-xl grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4 animate-fade-up"
            style={{ animationDelay: "320ms" }}
          >
            {facts.map((f) => (
              <div key={f.k}>
                <dt className="text-xs font-medium uppercase tracking-wide text-muted-2">
                  {f.k}
                </dt>
                <dd className="mt-1 font-display text-[15px] font-bold text-ink">
                  {f.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Visual card */}
        <div
          className="relative animate-fade-up lg:justify-self-end"
          style={{ animationDelay: "200ms" }}
        >
          {/* Soft animated glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-8 -z-10 rounded-[40px] bg-brand/20 blur-3xl animate-glow motion-reduce:hidden"
          />
          <div className="w-full max-w-md rounded-2xl border border-line bg-bg p-7 shadow-card animate-float motion-reduce:animate-none sm:p-8">
            <p className="eyebrow">What we move</p>
            <p className="mt-3 font-display text-xl font-bold text-ink">
              A working catalog, sourced and stocked.
            </p>
            <ul className="mt-6 space-y-3">
              {quickLines.map((q) => {
                const Icon = q.icon;
                return (
                  <li
                    key={q.label}
                    className="flex items-center gap-3.5 rounded-xl border border-line-soft bg-mist px-4 py-3.5"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-soft text-brand">
                      <Icon width={18} height={18} />
                    </span>
                    <span className="text-sm font-semibold text-ink">
                      {q.label}
                    </span>
                  </li>
                );
              })}
            </ul>
            <a
              href="#products"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-deep"
            >
              See all six product lines
              <IconArrowRight width={16} height={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
