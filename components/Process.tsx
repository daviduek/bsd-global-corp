"use client";

import Reveal from "./Reveal";
import { useLang } from "./LanguageProvider";

export default function Process() {
  const { t } = useLang();

  return (
    <section id="process" className="bg-bg py-24 md:py-32">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">{t.process.eyebrow}</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-extrabold leading-tight tracking-tight text-ink text-balance sm:text-4xl lg:text-[2.75rem]">
            {t.process.h2}
          </h2>
        </Reveal>

        <ol className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {t.process.steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 80} as="li">
              <div className="flex h-full flex-col rounded-2xl border border-line bg-bg p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand text-sm font-bold text-white">
                    {String(i + 1).padStart(2, "0")}
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
