"use client";

import Reveal from "./Reveal";
import { useLang } from "./LanguageProvider";
import {
  IconLaptop,
  IconChip,
  IconKeyboard,
  IconNetwork,
  IconStorage,
  IconElectronics,
} from "./icons";

const icons = [
  IconLaptop,
  IconChip,
  IconKeyboard,
  IconNetwork,
  IconStorage,
  IconElectronics,
];

export default function Products() {
  const { t } = useLang();

  return (
    <section id="products" className="bg-bg py-24 md:py-32">
      <div className="shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="eyebrow">{t.products.eyebrow}</p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-extrabold leading-tight tracking-tight text-ink text-balance sm:text-4xl lg:text-[2.75rem]">
              {t.products.h2}
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="max-w-sm text-base leading-relaxed text-body">
              {t.products.intro}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.products.items.map((c, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={c.title} delay={(i % 3) * 70}>
                <article className="group flex h-full flex-col rounded-2xl border border-line bg-bg p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-card-hover">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                    <Icon width={22} height={22} />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-ink">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-body">
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
