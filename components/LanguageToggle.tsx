"use client";

import { useLang } from "./LanguageProvider";
import { LANGS } from "@/lib/dictionary";

export default function LanguageToggle({
  className = "",
}: {
  className?: string;
}) {
  const { lang, setLang, t } = useLang();

  return (
    <div
      role="group"
      aria-label={t.langSwitch}
      className={`inline-flex items-center rounded-lg border border-line bg-bg p-0.5 ${className}`}
    >
      {LANGS.map((l) => {
        const active = l === lang;
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLang(l)}
            aria-pressed={active}
            className={`rounded-[6px] px-2.5 py-1 text-xs font-semibold uppercase tracking-wide transition-colors ${
              active
                ? "bg-brand text-white"
                : "text-muted hover:text-ink"
            }`}
          >
            {l}
          </button>
        );
      })}
    </div>
  );
}
