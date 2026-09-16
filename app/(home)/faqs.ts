import type { FaqItem } from "@/components/FaqAccordion";

/** Questions + answers shown on the home page. Add/edit freely. */
const faqs: FaqItem[] = [
  {
    title: "What is mappetizer?",
    description:
      "mappetizer is a restaurant discovery platform built for trustworthy and personalized restaurant recommendations.",
  },
  {
    title: "How do I make a reservation on mappetizer?",
    description:
      "Open a restaurant profile and tap Reserve. Pick a time, party size, and you’re booked — you can also invite friends straight from the app.",
  },
  {
    title: "Can I use mappetizer for restaurants that don’t take reservations?",
    description:
      "Yes. Whether a restaurant accepts reservations or not, you can still discover it, save it, and add it to your map after visiting.",
  },
  {
    title: "Is mappetizer free?",
    description: "Yes, mappetizer is free for both diners and restaurants.",
  },
  {
    title: "How does mappetizer recommend restaurants to me?",
    description:
      "Recommendations come from the people you follow and the places you’ve actually been, so they’re personal and trustworthy.",
  },
  {
    title: "Can I use mappetizer to plan a trip?",
    description:
      "Absolutely. Save restaurants and cafés in any city to a wishlist and follow local creators for recommendations before you go.",
  },
  {
    title: "What is tap to pay?",
    description:
      "Tap to pay lets you pay at the restaurant with your phone, which verifies your visit and adds the spot to your map automatically.",
  },
];

export default faqs;
