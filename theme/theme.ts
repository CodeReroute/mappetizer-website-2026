import { colors } from "./colors";

export const breakpoints = {
  desktop: 1024,
} as const;

export const media = {
  desktop: `@media (min-width: ${breakpoints.desktop}px)`,
  mobile: `@media (max-width: ${breakpoints.desktop - 1}px)`,
} as const;

/** Figma desktop frame the layout is designed on. */
export const designFrame = { width: 1440, height: 952 } as const;

/**
 * Desktop design unit. `--u` equals 1px on a viewport at least as large as the
 * design frame and shrinks proportionally (by height or width) on smaller
 * screens, so every desktop size written as `u(n)` keeps the Figma proportions
 * and each snap section always fits the viewport.
 */
export const u = (n: number) => `calc(${n} * var(--u))`;

export const theme = {
  colors,
  media,
  breakpoints,
  radii: { pill: "75px", phone: "35px", card: "12px" },
  space: {
    xs: "8px",
    sm: "16px",
    md: "24px",
    lg: "32px",
    xl: "48px",
    xxl: "64px",
  },
  fontSizes: {
    caption: "12px",
    small: "14px",
    body: "16px",
    bodyLg: "20px",
    subtitle: "32px",
    headingMobile: "48px",
    heading: "64px",
  },
  layout: { sectionPadding: "48px", topBarHeight: "48px" },
} as const;

export type AppTheme = typeof theme;
