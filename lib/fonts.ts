import localFont from "next/font/local";

export const goga = localFont({
  variable: "--font-goga",
  display: "swap",
  src: [
    { path: "../public/fonts/goga/Goga-Regular.otf", weight: "400", style: "normal" },
    { path: "../public/fonts/goga/Goga-Medium.otf", weight: "500", style: "normal" },
    { path: "../public/fonts/goga/Goga-Semibold.otf", weight: "600", style: "normal" },
    { path: "../public/fonts/goga/Goga-Bold.otf", weight: "700", style: "normal" },
  ],
});
