/** Text shared across every page (footer, download sheet, nav). */
const siteContent = {
  footer: {
    copyright: "© mappetizer",
    links: {
      about: "About",
      contact: "Contact",
      privacyPolicy: "Privacy Policy",
      termsOfUse: "Terms of Use",
    },
  },
  stores: {
    appStore: "App Store",
    googlePlay: "Google Play",
  },
  downloadSheet: {
    title: "Get mappetizer",
    description: "Scan the QR code with your phone or pick your app store below.",
  },
} as const;

export default siteContent;
