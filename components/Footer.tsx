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
    <footer className="border-t border-line bg-mist">
      <div className="shell py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand">
                <span className="font-display text-base font-black text-white">
                  B
                </span>
              </span>
              <span className="font-display text-base font-extrabold tracking-tight text-ink">
                BSD Global Corp
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-body">
              Wholesale distribution of computing and electronics for resellers,
              distributors and corporate buyers.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-deep"
            >
              Start an inquiry
              <IconArrowRight width={14} height={14} />
            </a>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-2">
                {col.title}
              </p>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-sm text-muted transition-colors hover:text-ink"
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
          <p className="text-xs text-muted-2">
            © {year} BSD Global Corp · A Wyoming Corporation. All rights
            reserved.
          </p>
          <p className="text-xs text-muted-2">B2B wholesale · United States</p>
        </div>
      </div>
    </footer>
  );
}
