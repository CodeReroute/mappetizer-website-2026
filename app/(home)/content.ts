/** Every piece of copy on the home page lives here. */
const homeContent = {
  seo: {
    title: "mappetizer",
    description:
      "Discover, save, plan, go. See where your friends are eating and get personalized restaurant recommendations you can trust.",
  },
  hero: {
    downloadButton: "Download",
    headingLines: ["Discover", "Save", "Plan", "Go"],
    /** The "+" is rendered at the end of this heading line (0-based). */
    headingPlus: { symbol: "+", line: 2 },
    paragraphs: [
      "See where your friends are eating and get personalized recommendations that you can trust.",
      "Make a reservation and/or send an invite to the group chat directly through mappetizer.",
      "We’ll update your map with all the cool restaurants and cafés that you visit.",
    ],
    creators: {
      followersLabel: "followers",
      dapo: { name: "Dapo Abi", followers: "400K" },
      danielle: { name: "danielle DuFour", followers: "585K" },
      liam: { name: "Liam Smith", followers: "1.2M" },
    },
  },
  teasers: {
    heading: "Scroll with purpose",
    paragraphs: [
      "Upload your restaurant content to build a loyal following on mappetizer or follow a content creator with great restaurant recommendations.",
      "Limit the scrolling. Get outside and enjoy a local restaurant with the people you love.",
    ],
  },
  restaurants: {
    heading: "Expand your reach",
    paragraphs: [
      "Join our platform built to match diners with restaurants and cafés.",
      "It’s free to use. Just download the app and claim your restaurant.",
      "Whether you accept reservations or not, mappetizer works the same.",
      "Diner’s pay through a simple tap to pay feature on their phone to verify that they’ve been to your restaurant and to add it to their map.",
    ],
  },
  faq: {
    headingLines: ["QUESTIONS", "+ ANSWERS"],
  },
  download: {
    scanLabel: "SCAN",
  },
  /** Labels for the right-edge section indicator (shown on hover / active). */
  indicator: {
    hero: "Discover",
    teasers: "Creators",
    restaurants: "Restaurants",
    faq: "Q + A",
    download: "Download",
  },
} as const;

export default homeContent;
