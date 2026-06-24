"use client";

import { useState } from "react";
import { useLang } from "./LanguageProvider";
import { IconMail, IconPhone, IconUser, IconArrowRight } from "./icons";

const EMAIL = "bsdglobalcorp@gmail.com";
const PHONE_DISPLAY = "+54 9 11 3383-2945";
const PHONE_HREF = "+5491133832945";

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    country: "",
    interestIdx: 0,
    message: "",
  });
  const [sent, setSent] = useState(false);

  const update = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) =>
    setForm((f) => ({
      ...f,
      [k]: k === "interestIdx" ? Number(e.target.value) : e.target.value,
    }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Quote request — ${form.company || form.name || "New inquiry"}`;
    const body = [
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Email: ${form.email}`,
      `Country: ${form.country}`,
      `Interest: ${c.interests[form.interestIdx]}`,
      "",
      "Message:",
      form.message,
    ].join("\n");
    const href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setSent(true);
  };

  const inputClass =
    "w-full rounded-lg border border-line bg-bg px-4 py-3 text-sm text-ink placeholder:text-muted-2 transition-colors focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand-soft";
  const labelClass =
    "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted";

  return (
    <section id="contact" className="bg-bg py-24 md:py-32">
      <div className="shell">
        <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-line shadow-card lg:grid-cols-[1fr_1.25fr]">
          {/* Info panel */}
          <div className="flex flex-col justify-between gap-12 bg-mist p-8 md:p-10">
            <div>
              <p className="eyebrow">{c.eyebrow}</p>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-ink text-balance sm:text-4xl">
                {c.h2}
              </h2>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-body">
                {c.subcopy}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-4 rounded-xl border border-line bg-bg px-5 py-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-soft text-brand">
                  <IconUser width={18} height={18} />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-2">
                    {c.primaryContact}
                  </p>
                  <p className="font-display text-sm font-bold text-ink">
                    {c.contactName}
                  </p>
                </div>
              </div>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-4 rounded-xl border border-line bg-bg px-5 py-4 transition-colors hover:border-brand/40"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-soft text-brand">
                  <IconMail width={18} height={18} />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-2">
                    {c.emailLabel}
                  </p>
                  <p className="font-display text-sm font-bold text-ink">
                    {EMAIL}
                  </p>
                </div>
              </a>
              <a
                href={`tel:${PHONE_HREF}`}
                className="flex items-center gap-4 rounded-xl border border-line bg-bg px-5 py-4 transition-colors hover:border-brand/40"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-soft text-brand">
                  <IconPhone width={18} height={18} />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-2">
                    {c.phoneLabel}
                  </p>
                  <p className="font-display text-sm font-bold text-ink">
                    {PHONE_DISPLAY}
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-bg p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    {c.fullName}
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={update("name")}
                    className={inputClass}
                    placeholder={c.placeholders.name}
                  />
                </div>
                <div>
                  <label htmlFor="company" className={labelClass}>
                    {c.company}
                  </label>
                  <input
                    id="company"
                    required
                    value={form.company}
                    onChange={update("company")}
                    className={inputClass}
                    placeholder={c.placeholders.company}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className={labelClass}>
                    {c.workEmail}
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={update("email")}
                    className={inputClass}
                    placeholder={c.placeholders.email}
                  />
                </div>
                <div>
                  <label htmlFor="country" className={labelClass}>
                    {c.country}
                  </label>
                  <input
                    id="country"
                    value={form.country}
                    onChange={update("country")}
                    className={inputClass}
                    placeholder={c.placeholders.country}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="interest" className={labelClass}>
                  {c.category}
                </label>
                <select
                  id="interest"
                  value={form.interestIdx}
                  onChange={update("interestIdx")}
                  className={`${inputClass} appearance-none`}
                >
                  {c.interests.map((opt, i) => (
                    <option key={i} value={i}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>
                  {c.needs}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={update("message")}
                  className={`${inputClass} resize-none`}
                  placeholder={c.placeholders.needs}
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                {sent ? c.submitting : c.submit}
                <IconArrowRight width={18} height={18} />
              </button>
              <p className="text-center text-xs leading-relaxed text-muted">
                {c.disclaimerPre}
                {EMAIL}
                {c.disclaimerPost}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
