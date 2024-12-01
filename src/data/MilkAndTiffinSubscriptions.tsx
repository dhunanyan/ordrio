import {
  AnimatedCard,
  Colors,
  Separator,
  ThemeCardVariant,
  BackgroundImage,
} from "@config";

export const MilkAndTiffinSubscriptionsContent = {
  hero: {
    title: "Simplify <span>Subscriptions</span>\nDelight Customers",
    description:
      "Moo & Chew is the all-in-one platform designed to help you manage your milk and tiffin subscription business effortlessly.",
    separator: Separator.MEDIUM,
    isFirstSection: true,
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
    subtitle: "Why Moo & Chew?",
    description:
      "Restobite is more than just online ordering. It is a comprehensive solution that empowers your restaurant to",
    backgroundColor: Colors.WHITE,
  },
  rowAndBigCardsInCommonSection: {
    bigCard: {
      card: AnimatedCard.GROCBAY,
      props: { variant: ThemeCardVariant.MOBILE },
    },
    iconColor: Colors.YELLOW,
    rowCards: [
      {
        icon: "marketplace",
        title: "Built for Your Business",
        description:
          "Our platform is specifically designed for milk and tiffin subscription services, catering to your unique needs.",
      },
      {
        icon: "cursor",
        title: "Easy to Use",
        description:
          "Our intuitive interface makes it simple to set up and manage your subscriptions, even if you are not tech-savvy.",
      },
      {
        icon: "money",
        title: "Affordable & Flexible",
        description:
          "Choose the plan that fits your business size and budget, and easily upgrade as you grow.",
      },
    ],
  },
  commonSection: {
    subtitle: "Moo & Chew empowers you to",
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
  iconCardsContent: {
    backgroundImage: BackgroundImage.GREY_SPIRAL,
    subtitle: "Key Features for a Thriving Restaurant",
    backgroundColor: Colors.GREY,
  },
  iconCards: {
    iconColor: Colors.BLUE,
    cards: [
      {
        icon: "car",
        title: "Online Subscription Management",
        description:
          "Customers can easily sign up, manage their subscriptions, and make changes on their own.",
      },
      {
        icon: "table",
        title: "Customer Communication",
        description:
          "Send automated reminders, notifications, and promotional offers to keep your customers engaged.",
      },
      {
        icon: "paper-check",
        title: "Inventory Management",
        description:
          "Track your stock levels, manage product variants, and ensure you always have enough to meet demand.",
      },
      {
        icon: "paper",
        title: "Flexible Billing Options",
        description:
          "Set up recurring billing, offer discounts, and manage payment methods effortlessly.",
      },
      {
        icon: "graph",
        title: "Reporting & Analytics",
        description:
          "Gain insights into sales, customer behaviour, and operational efficiency.",
      },
      {
        icon: "mobile",
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
    link: { text: "Schedule a Personalized Demo", href: "#" }, //@LINKS: requested - to be added
    links: [
      {
        text: "Setup Your Free Account",
        target: "_blank",
        href: "https://control.ordrio.com/#/register",
      },
    ],
    backgroundImage: BackgroundImage.BLUE_SMALL_SPIRALS,
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
    subtitle: "Frequently Asked Questions",
    link: { text: "Ask Us Now", href: "/support" },
    displayInRow: true,
    alignContentLeft: true,
    verticalAlignTop: true,
  },
  bannerSection2: {
    backgroundImage: BackgroundImage.BLUE_SPIRAL,
    imageURL: "/images/tiger-cart.png",
    icon: "check",
    title: "Join the Ordrio Family",
    description:
      "We're here to support you every step of the way, from setup to your first online order and beyond.",
    links: [
      {
        text: "Setup Your Free Account",
        target: "_blank",
        href: "https://control.ordrio.com/#/register",
      },
    ],
  },
};
