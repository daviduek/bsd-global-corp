import Reveal from "./Reveal";
import {
  IconLaptop,
  IconChip,
  IconKeyboard,
  IconNetwork,
  IconStorage,
  IconElectronics,
} from "./icons";

const categories = [
  {
    code: "CAT-01",
    icon: IconLaptop,
    title: "Computers & Notebooks",
    desc: "Desktops, laptops, workstations and all-in-ones from leading manufacturers, available in volume for resale and corporate fleets.",
  },
  {
    code: "CAT-02",
    icon: IconChip,
    title: "Components & Hardware",
    desc: "Processors, motherboards, memory, graphics cards and power supplies for system builders and integrators.",
  },
  {
    code: "CAT-03",
    icon: IconKeyboard,
    title: "Peripherals & Input",
    desc: "Monitors, keyboards, mice, docks and webcams — the everyday hardware that equips a working office.",
  },
  {
    code: "CAT-04",
    icon: IconNetwork,
    title: "Networking & Connectivity",
    desc: "Routers, switches, access points and cabling to build and scale reliable business infrastructure.",
  },
  {
    code: "CAT-05",
    icon: IconStorage,
    title: "Storage & Memory",
    desc: "Solid-state drives, hard disks, modules and external storage across consumer and enterprise grades.",
  },
  {
    code: "CAT-06",
    icon: IconElectronics,
    title: "Accessories & Electronics",
    desc: "Cables, chargers, power, audio and a broad catalog of supporting electronics to complete every order.",
  },
];

export default function Products() {
  return (
    <section id="products" className="relative bg-ink py-24 md:py-32">
      <div className="shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="eyebrow-muted">[ 01 ] Product lines</p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-extrabold leading-tight tracking-tight text-text text-balance sm:text-4xl lg:text-5xl">
              A full catalog of computing and electronics, ready to move.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="max-w-sm text-base leading-relaxed text-muted">
              We carry the categories businesses order most — and source what
              they ask for next. Specifications and availability confirmed per
              quote.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.code} delay={(i % 3) * 70}>
                <article className="group relative flex h-full flex-col bg-panel-2 p-7 transition-colors duration-300 hover:bg-panel">
                  <span className="absolute left-0 top-0 h-0 w-px bg-signal transition-all duration-300 group-hover:h-full" />
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center border border-line text-signal transition-colors duration-300 group-hover:border-signal/40">
                      <Icon width={22} height={22} />
                    </span>
                    <span className="font-mono text-xs tracking-[0.18em] text-muted-2">
                      {c.code}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-text">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {c.desc}
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
