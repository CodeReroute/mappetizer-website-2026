const webConfig = {
  siteName: "mappetizer",
  siteUrl: "https://mappetizer.com",
  /** Snap each full-screen section into view while scrolling (desktop only). */
  snapSections: true,
  /** Bounce animation on the "scroll down" arrow buttons. */
  animateDownButton: true,
  /** Vertical step indicator on the right edge showing the current section (desktop only). */
  showSectionIndicator: true,
  /** Motion settings. All animations respect the user's "reduce motion" preference. */
  animations: {
    /** Content fades and slides into place each time a section scrolls into view. */
    revealOnScroll: true,
    /** Gentle up/down float on the phone mockups. */
    floatPhone: true,
    /** Gentle bobbing on the hero creator avatars. */
    floatAvatars: true,
  },
  downloads: {
    ios: "https://apps.apple.com/",
    android: "https://play.google.com/store/apps",
  },
  social: {
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    facebook: "https://facebook.com/",
  },
  images: {
    qrCode: "/images/download/qr-code.png",
    sharingMeta: "/sharing-meta-image.png",
  },
} as const;

export type WebConfig = typeof webConfig;
export default webConfig;
