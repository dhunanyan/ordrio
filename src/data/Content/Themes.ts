import { AnimatedCard, SectionSeparator } from "@config";

export const ThemesContent = {
  hero: {
    title:
      "Ordrio Themes: Find the <span>Perfect Design</span> for Your Business",
    description: " Make a Lasting Impression with Your Store Design",
    sectionSeparator: SectionSeparator.MEDIUM,
  },
  bigCardsSection: {
    cards: [
      {
        title: "Conversion Optimized",
        description:
          "Our themes are designed to guide customers smoothly through the purchase process",
        type: AnimatedCard.CONVERSION,
      },
      {
        title: "Ongoing Updates",
        description:
          "We regularly add new themes and features to keep your store looking fresh.",
        type: AnimatedCard.ONGOING_UPDATES,
      },
    ],
  },
  accordionSection: {
    title: "Frequently Asked Questions",
    accordions: [
      {
        title: "What features does Ordrio offer?",
        description:
          "Ordrio offers a comprehensive suite of features including store setup, sales management, shipping integration, customer engagement tools, and mobile app connectivity.",
      },
      {
        title: "How do I set up my online store with Ordrio?",
        description:
          "Ordrio offers a comprehensive suite of features including store setup, sales management, shipping integration, customer engagement tools, and mobile app connectivity.",
      },
      {
        title: "Can I integrate Ordrio with my existing website?",
        description:
          "Ordrio offers a comprehensive suite of features including store setup, sales management, shipping integration, customer engagement tools, and mobile app connectivity.",
      },
      {
        title: "What kind of customer support does Ordrio provide?",
        description:
          "Ordrio offers a comprehensive suite of features including store setup, sales management, shipping integration, customer engagement tools, and mobile app connectivity.",
      },
      {
        title: "What are the pricing plans for Ordrio?",
        description:
          "Ordrio offers a comprehensive suite of features including store setup, sales management, shipping integration, customer engagement tools, and mobile app connectivity.",
      },
      {
        title: "How secure is Ordrio?",
        description:
          "Ordrio offers a comprehensive suite of features including store setup, sales management, shipping integration, customer engagement tools, and mobile app connectivity. Ordrio offers a comprehensive suite of features including store setup, sales management, shipping integration, customer engagement tools, and mobile app connectivity.",
      },
    ],
  },
  bannerSection: {
    backgroundImageURL: "/images/blue-spiral.png",
    imageURL: "/images/tiger-boxes.png",
    showIcon: true,
    title: "Ready to Make a Statement?",
    description:
      "Let your online store be an extension of your brand's unique personality. Choose Ordrio and start telling your story today",
    links: [
      { text: "Setup Your Free Account", href: "#" },
      { text: "Get a Personalized Demo", href: "#" },
    ],
  },
};
