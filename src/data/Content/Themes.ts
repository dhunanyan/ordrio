import { AnimatedCard, Colors, SectionSeparator } from "@config";

export const ThemesContent = {
  hero: {
    title:
      "Ordrio Themes: Find the <span>Perfect Design</span> for Your Business",
    description: " Make a Lasting Impression with Your Store Design",
    sectionSeparator: SectionSeparator.MEDIUM,
  },
  commonSectionWithBigCards: {
    title: "Find Your Perfect Fit",
    description:
      "Every brand has a unique story to tell. Ordrio's curated collection of  themes helps you express your brand's personality and captivate your customers. your brand, your products, and your customers.",
    backgroundColor: Colors.WHITE,
  },
  bigCardsInCommonSection: {
    cards: [
      {
        title: "Grocbay",
        description:
          "Fresh, clean, and organized - perfect for showcasing your grocery and upermarket products in an inviting way.",
        links: [
          { id: "ios", href: "#" },
          { id: "android", href: "#" },
        ],
        type: AnimatedCard.GROCBAY,
      },
      {
        title: "Restobite",
        description:
          "Warm, appetizing, and stylish – designed to make your restaurant's menu and ambiance shine online.",
        links: [
          { id: "ios", href: "#" },
          { id: "android", href: "#" },
        ],
        type: AnimatedCard.RESTOBITE,
      },
      {
        title: "Aura",
        description:
          "Artistic, unique, and customizable – perfect for highlighting the craftsmanship and personality of your handcrafted goods.",
        links: [
          { id: "ios", href: "#" },
          { id: "android", href: "#" },
        ],
        type: AnimatedCard.AURA,
      },
      {
        title: "Moo & Chew",
        description:
          "Fresh, clean, and organized - perfect for showcasing your grocery and upermarket products in an inviting way.",
        links: [
          { id: "ios", href: "#" },
          { id: "android", href: "#" },
        ],
        type: AnimatedCard.MOO_CHEW,
      },
    ],
  },
  commonSection: {
    title: "Your Brand, <span>Your Story</span>",
    description:
      "With Ordrio, you have the power to create a truly unique online presence that reflects  your brand's values and resonates with your target audience",
    imageURL: "/images/tablet-and-mobile-view-tiger.png",
    backgroundImageURL: "images/grey-spiral.png",
  },
  iconCardSection: {
    withIcon: true,
    backgroundImageURL: "/images/blue-spiral.png",
    title: "Why Choose Ordrio?",
    cards: [
      {
        icon: "design-blue",
        title: "Eye-Catching Design",
        description:
          "Our themes are crafted by Professional designers to ensure your store looks stunning.",
      },
      {
        icon: "customization-blue",
        title: "Easy Customization",
        description:
          "Tailor your theme to your brand's colours, fonts, and overall aesthetic with our intuitive tools.",
      },
      {
        icon: "mobile-blue",
        title: "Mobile-First Approach",
        description:
          "Your store will look and function flawlessly on any device, from smartphones to desktops.",
      },
    ],
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
