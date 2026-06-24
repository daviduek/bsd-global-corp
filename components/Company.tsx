"use client";

import Reveal from "./Reveal";
import { useLang } from "./LanguageProvider";

export default function Company() {
  const { t } = useLang();

  return (
    <section id="company" className="border-y border-line bg-mist py-24 md:py-32">
      <div className="shell grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        {/* Narrative */}
        <Reveal>
          <p className="eyebrow">{t.company.eyebrow}</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-ink text-balance sm:text-4xl">
            {t.company.h2}
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-body">
            {t.company.paras.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-8 inline-flex flex-col gap-1 rounded-xl border border-line bg-bg px-5 py-4 shadow-card">
            <span className="text-xs font-medium uppercase tracking-wide text-muted-2">
              {t.company.entityLabel}
            </span>
            <span className="font-display text-base font-bold text-ink">
              {t.company.entityName}
            </span>
            <span className="text-sm text-muted">{t.company.entityLocation}</span>
          </div>
        </Reveal>

        {/* Differentiators */}
        <div className="grid grid-cols-1 gap-5 self-start sm:grid-cols-2">
          {t.company.points.map((p, i) => (
            <Reveal key={p.k} delay={(i % 2) * 80}>
              <div className="flex h-full flex-col rounded-2xl border border-line bg-bg p-7 shadow-card">
                <span className="text-xs font-semibold uppercase tracking-wide text-brand">
                  {p.k}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold tracking-tight text-ink">
                  {p.t}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-body">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
