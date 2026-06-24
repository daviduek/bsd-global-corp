"use client";

import { useLang } from "./LanguageProvider";
import { IconArrowRight } from "./icons";

const catalogHrefs = ["#products", "#audience", "#process"];
const companyHrefs = ["#company", "#contact", "#top"];

export default function Footer() {
  const { t } = useLang();
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
              {t.footer.description}
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-deep"
            >
              {t.footer.startInquiry}
              <IconArrowRight width={14} height={14} />
            </a>
          </div>

          {/* Link columns */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-2">
              {t.footer.catalogTitle}
            </p>
            <ul className="mt-4 space-y-3">
              {t.footer.catalogLinks.map((label, i) => (
                <li key={catalogHrefs[i]}>
                  <a
                    href={catalogHrefs[i]}
                    className="text-sm text-muted transition-colors hover:text-ink"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-2">
              {t.footer.companyTitle}
            </p>
            <ul className="mt-4 space-y-3">
              {t.footer.companyLinks.map((label, i) => (
                <li key={companyHrefs[i]}>
                  <a
                    href={companyHrefs[i]}
                    className="text-sm text-muted transition-colors hover:text-ink"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted-2">
            © {year} BSD Global Corp · {t.footer.rights}
          </p>
          <p className="text-xs text-muted-2">{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
