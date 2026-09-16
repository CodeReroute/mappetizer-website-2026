export const colors = {
  midnightMap: "#101010",
  softGlow: "#FFFFFF",
  black: "#000000",
  cream: "#F0EED5",
  linen: "#F1F1EE",
  fog: "#F0EFEA",
  overlay: "rgba(0, 0, 0, 0.2)",
  whiteMuted: "rgba(255, 255, 255, 0.6)",
  divider: "rgba(16, 16, 16, 0.15)",
  shadow: "rgba(0, 0, 0, 0.15)",
} as const;

export type Colors = typeof colors;
