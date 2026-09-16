import type { Viewport } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import { goga } from "@/lib/fonts";
import { buildSeo } from "@/lib/seo";
import { colors } from "@/theme/colors";

export const metadata = buildSeo({
  title: "mappetizer",
  description:
    "Discover, save, plan, go. See where your friends are eating and get personalized restaurant recommendations you can trust.",
});

export const viewport: Viewport = {
  themeColor: colors.softGlow,
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={goga.variable}>
      <body style={{ fontFamily: "var(--font-goga), system-ui, sans-serif" }}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
