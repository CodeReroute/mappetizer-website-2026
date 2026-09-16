// Prefixes a root-absolute public asset path with the deployment base path.
//
// Next only rewrites basePath for next/image, next/link and framework-managed
// URLs — NOT for raw <img src> tags or CSS url(). Use this helper for those so
// assets resolve correctly when the site is served from a subpath (e.g. on
// GitHub Pages under /mappetizer-website-2026).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${basePath}${path}`;
}

export default asset;
