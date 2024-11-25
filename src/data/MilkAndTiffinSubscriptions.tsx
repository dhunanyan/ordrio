import {
  AnimatedCard,
  Colors,
  SectionSeparator,
  ThemeCardVariant,
} from "@config";

export const MilkAndTiffinSubscriptionsContent = {
  hero: {
    title: "Simplify <span>Subscriptions</span>\nDelight Customers",
    description:
      "Moo & Chew is the all-in-one platform designed to help you manage your milk and tiffin subscription business effortlessly.",
    sectionSeparator: SectionSeparator.MEDIUM,
  },
  heroComponent: {
    imageURLs: [
      "/images/slideshow/milk-and-tiffin-subscriptions/image-1.png",
      "/images/slideshow/milk-and-tiffin-subscriptions/image-2.png",
      "/images/slideshow/milk-and-tiffin-subscriptions/image-3.png",
      "/images/slideshow/milk-and-tiffin-subscriptions/image-4.png",
    ],
  },
  commonSectionWithRowAndBigCards: {
    title: "Why Moo & Chew?",
    description:
      "Restobite is more than just online ordering. It is a comprehensive solution that empowers your restaurant to",
    backgroundColor: Colors.WHITE,
  },
  rowAndBigCardsInCommonSection: {
    bigCard: {
      card: AnimatedCard.GROCBAY,
      props: { variant: ThemeCardVariant.MOBILE },
    },
    rowCards: [
      {
        icon: "marketplace-yellow",
        title: "Built for Your Business",
        description:
          "Our platform is specifically designed for milk and tiffin subscription services, catering to your unique needs.",
      },
      {
        icon: "cursor-yellow",
        title: "Easy to Use",
        description:
          "Our intuitive interface makes it simple to set up and manage your subscriptions, even if you are not tech-savvy.",
      },
      {
        icon: "money-yellow",
        title: "Affordable & Flexible",
        description:
          "Choose the plan that fits your business size and budget, and easily upgrade as you grow.",
      },
    ],
  },
  commonSection: {
    title: "Unveil Your Brand's Essence",
    backgroundColor: Colors.YELLOW,
  },
  commonSectionImageCards: {
    cards: [
      {
        title: "Effortless Subscription Management",
        description:
          "Let customers easily subscribe, pause, or modify their milk and tiffin plans online or through your branded mobile app.",
        imageURL: "/images/tiger-boxes-card.png",
      },
      {
        title: "Grow Your Business",
        description:
          "Expand your reach, increase customer satisfaction, and streamline operations with our comprehensive platform.",
        imageURL: "/images/rocket-card.png",
      },
      {
        title: "Simplify Payments & Billing",
        description:
          "Automate recurring payments, manage invoices, and track outstanding balances with ease.",
        imageURL: "/images/papers-card.png",
      },
      {
        title: "Enhance Customer Engagement",
        description:
          "Build customer loyalty with personalized offers, notifications, and feedback mechanisms.",
        imageURL: "/images/handshake-card.png",
      },
    ],
  },
  iconCardSection: {
    backgroundImageURL: "/images/grey-spiral.png",
    title: "Key Features for a Thriving Restaurant",
    color: Colors.GREY,
    cards: [
      {
        icon: "car-blue",
        title: "Online Subscription Management",
        description:
          "Customers can easily sign up, manage their subscriptions, and make changes on their own.",
      },
      {
        icon: "table-blue",
        title: "Customer Communication",
        description:
          "Send automated reminders, notifications, and promotional offers to keep your customers engaged.",
      },
      {
        icon: "paper-check-blue",
        title: "Inventory Management",
        description:
          "Track your stock levels, manage product variants, and ensure you always have enough to meet demand.",
      },
      {
        icon: "paper-blue",
        title: "Flexible Billing Options",
        description:
          "Set up recurring billing, offer discounts, and manage payment methods effortlessly.",
      },
      {
        icon: "graph-blue",
        title: "Reporting & Analytics",
        description:
          "Gain insights into sales, customer behaviour, and operational efficiency.",
      },
      {
        icon: "mobile-blue",
        title: "Custom Mobile Apps",
        description:
          "Provide a branded app for iOS and Android for an even more seamless experience.",
      },
      ,
    ],
  },
  bannerSection1: {
    title: "Ready to Unleash Your Marketplace Potential?",
    description:
      "Your vision. Your marketplace. Your success. HIVE is here to make it happen.",
    link: { text: "Schedule a Personalized Demo", href: "#" },
    links: [{ text: "Setup Your Free Account", href: "#" }],
    backgroundImageURL: "/images/blue-small-spirals.png",
    alignContentLeft: false,
  },
  bigCardsSection2: {
    cards: [
      {
        title: "Reliable & Secure",
        description:
          "Our platform is built on robust technology to ensure your data and transactions are safe.",
        type: AnimatedCard.SECURE,
      },
      {
        title: "Dedicated Support",
        description:
          "Our team of experts is available to help and guide every step of the way.",
        type: AnimatedCard.SUPPORT,
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
  bannerSection2: {
    backgroundImageURL: "/images/blue-spiral.png",
    imageURL: "/images/tiger-cart.png",
    icon: "check",
    title: "Join the Ordrio Family",
    description:
      "We're here to support you every step of the way, from setup to your first online order and beyond.",
    links: [{ text: "Setup Your Free Account", href: "#" }],
  },
};
