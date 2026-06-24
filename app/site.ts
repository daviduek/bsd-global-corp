// Canonical site URL. Resolves to the real deployment automatically:
//  1. NEXT_PUBLIC_SITE_URL  — set this once a custom domain is live.
//  2. VERCEL_PROJECT_PRODUCTION_URL — the stable Vercel production URL (build-time).
//  3. The intended custom domain as a final fallback for local builds.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://bsdglobalcorp.com")
).replace(/\/$/, "");
