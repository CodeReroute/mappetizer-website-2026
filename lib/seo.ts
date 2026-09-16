import type { Metadata } from "next";
import webConfig from "@/config/webConfig";

export type SeoProps = {
  title: string;
  description: string;
  /** Route path, e.g. "/about". Used for the canonical URL. */
  path?: string;
  /** Absolute or root-relative image URL. Defaults to the sharing meta image. */
  image?: string;
  keywords?: string[];
  noIndex?: boolean;
};

/**
 * Builds the full set of SEO tags (title, description, canonical, Open Graph,
 * Twitter card, robots, icons) for a static page. Use it as a page's
 * `export const metadata = buildSeo({...})`.
 */
export function buildSeo({
  title,
  description,
  path = "/",
  image = webConfig.images.sharingMeta,
  keywords,
  noIndex = false,
}: SeoProps): Metadata {
  const url = new URL(path, webConfig.siteUrl).toString();
  const imageUrl = new URL(image, webConfig.siteUrl).toString();
  const fullTitle = title === webConfig.siteName ? title : `${title} | ${webConfig.siteName}`;

  return {
    metadataBase: new URL(webConfig.siteUrl),
    title: fullTitle,
    description,
    keywords,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      type: "website",
      url,
      siteName: webConfig.siteName,
      title: fullTitle,
      description,
      images: [{ url: imageUrl, width: 1200, height: 1200, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
    },
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon.png", type: "image/png", media: "(prefers-color-scheme: light)" },
        { url: "/favicon-white.png", type: "image/png", media: "(prefers-color-scheme: dark)" },
      ],
      shortcut: "/favicon.ico",
      apple: "/favicon.png",
    },
  };
}
