export type Platform = "ios" | "android" | "other";

/** Detects the visitor's mobile platform from the browser UA. Safe to call during SSR (returns "other"). */
export function detectPlatform(): Platform {
  if (typeof navigator === "undefined") return "other";
  const ua = navigator.userAgent || "";
  if (/android/i.test(ua)) return "android";
  // iPadOS 13+ reports a Mac UA; detect via touch points.
  const isIpadOs = navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
  if (/iPhone|iPad|iPod/i.test(ua) || isIpadOs) return "ios";
  return "other";
}
