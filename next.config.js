/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Fonts are loaded client-side via <link> in app/layout.tsx, so we skip
  // Next's build-time font inlining (keeps builds self-contained).
  optimizeFonts: false,
};

module.exports = nextConfig;
