import type { NextConfig } from "next";

// When deployed to GitHub Pages under a project repo, the site is served from
// a subpath (e.g. /mappetizer-website-2026). Set NEXT_PUBLIC_BASE_PATH to that
// subpath so both Next and our asset() helper prefix URLs correctly. Leave it
// empty for local dev or a custom-domain/root deployment.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  compiler: { styledComponents: true },
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
