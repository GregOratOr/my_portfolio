/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static site: `next build` emits plain HTML/CSS/JS into out/, which is what
  // GitHub Pages serves. No server, no API routes, no ISR.
  output: "export",

  // The default image optimizer needs a server, so images ship as authored.
  images: { unoptimized: true },

  // Emit /about/index.html style paths, which static hosts resolve without
  // needing rewrite rules.
  trailingSlash: true,
};

export default nextConfig;
