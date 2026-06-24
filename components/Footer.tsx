import { IconArrowRight } from "./icons";

const cols = [
  {
    title: "Catalog",
    links: [
      { href: "#products", label: "Product lines" },
      { href: "#audience", label: "Who we serve" },
      { href: "#process", label: "How we work" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "#company", label: "About BSD" },
      { href: "#contact", label: "Request a quote" },
      { href: "#top", label: "Back to top" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-panel-2">
      <div className="shell py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center border border-line bg-ink">
                <span className="font-display text-base font-black tracking-tightest text-signal">
                  B
                </span>
              </span>
              <span className="leading-none">
                <span className="block font-display text-base font-extrabold tracking-tight text-text">
                  BSD GLOBAL CORP
                </span>
                <span className="block font-mono text-[10px] tracking-[0.28em] text-muted-2">
                  WYOMING · USA
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              Wholesale distribution of computing and electronics for resellers,
              distributors and corporate buyers.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 font-mono text-xs tracking-[0.16em] text-signal transition-colors hover:text-signal-soft"
            >
              START AN INQUIRY
              <IconArrowRight width={14} height={14} />
            </a>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.title}>
              <p className="font-mono text-[10px] tracking-[0.2em] text-muted-2">
                {col.title.toUpperCase()}
              </p>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-sm text-muted transition-colors hover:text-text"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[11px] tracking-wide text-muted-2">
            © {year} BSD Global Corp · A Wyoming Corporation. All rights
            reserved.
          </p>
          <p className="font-mono text-[11px] tracking-wide text-muted-2">
            B2B wholesale · United States
          </p>
        </div>
      </div>
    </footer>
  );
}
