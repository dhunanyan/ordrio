import {
  AnimatedCard,
  Colors,
  Separator,
  ThemeCardVariant,
  BackgroundImage,
} from "@config";

export const MarketplaceContent = {
  hero: {
    title: "Power Your <span>Online</span> <span>Marketplace</span> Empire",
    description: "Build, Grow, and Thrive: Your Marketplace, Your Rules",
    separator: Separator.MEDIUM,
    isFirstSection: true,
  },
  heroComponent: {
    imageURLs: [
      "/images/slideshow/marketplace/image-1.png",
      "/images/slideshow/marketplace/image-2.png",
      "/images/slideshow/marketplace/image-3.png",
      "/images/slideshow/marketplace/image-4.png",
    ],
  },
  commonSectionWithRowAndBigCards: {
    subtitle: "Why Choose HIVE?",
    description:
      "Launch your dream online marketplace - whether it is a niche haven, a bustling bazaar, or a global emporium - with HIVE's powerful, scalable, and customizable platform.",
    backgroundColor: Colors.WHITE,
  },
  rowAndBigCardsInCommonSection: {
    bigCard: {
      card: AnimatedCard.MARKETPLACE,
      props: { variant: ThemeCardVariant.MOBILE },
    },
    iconColor: Colors.YELLOW,
    rowCards: [
      {
        icon: "time",
        title: "Proven Track Record",
        description:
          "Trusted by successful marketplaces across diverse industries.",
      },
      {
        icon: "graph-loupe",
        title: "Focus on Your Success",
        description:
          "We are committed to your growth, providing ongoing support and resources.",
      },
      {
        icon: "bulb",
        title: "Cutting-Edge Technology",
        description:
          "Stay ahead of the curve with our innovative features and continuous updates.",
      },
      {
        icon: "money",
        title: "Transparent Pricing",
        description:
          "Choose a plan that fits your budget and needs, with no hidden fees or surprises.",
      },
    ],
  },
  imageCardsSection: {
    backgroundImage: BackgroundImage.YELLOW_BRUSH,
    subtitle: "Your Marketplace, Your Way",
    description:
      "HIVE is not just another platform; it is your strategic partner in building a successful online community.",
    link: { text: "Find Out More", href: "/product-tour" },
    backgroundColor: Colors.YELLOW,
    displayInRow: true,
    alignContentLeft: true,
  },
  imageCards: {
    cards: [
      {
        title: "Limitless Possibilities",
        description:
          "Sell anything you can imagine - products, services, digital goods, rentals, and more.",
        imageURL: "/images/tiger-boxes-card.png",
      },
      {
        title: "Grow & Scale Effortlessly",
        description:
          "Our flexible architecture adapts to your growing needs, from startups to enterprise-level marketplaces.",
        imageURL: "/images/rocket-card.png",
      },
      {
        title: "Attract & Delight Buyers",
        description:
          "Offer a seamless shopping experience with powerful search, personalized recommendations, secure payments, and social engagement features.",
        imageURL: "/images/credit-cards-card.png",
      },
      {
        title: "Empower Your Sellers",
        description:
          "Provide intuitive tools for managing products, inventory, orders, and customer interactions.",
        imageURL: "/images/handshake-card.png",
      },
      {
        title:
          "From branding to user experience, tailor every aspect to match your vision.",
        description:
          "Build lasting relationships with loyalty programs, personalized promotions, and targeted marketing campaigns.",
        imageURL: "/images/tiger-painting-vertical.png",
      },
    ],
  },
  iconCardsContent: {
    backgroundImage: BackgroundImage.GREY_SPIRAL,
    subtitle: "Feature Highlights That Drive Marketplace Success",
    backgroundColor: Colors.GREY,
  },
  iconCards: {
    iconColor: Colors.BLUE,
    cards: [
      {
        icon: "check-window",
        title: "Intuitive Vendor Dashboard",
        description:
          "Empower sellers to effortlessly manage their listings, orders, and financials.",
      },
      {
        icon: "check-paper",
        title: "Robust Catalog Management",
        description:
          "Organize, categorize, and highlight products with ease, regardless of complexity or scale.",
      },
      {
        icon: "paper",
        title: "Streamlined Order Management",
        description:
          "Rack orders, manage shipping, and handle returns efficiently, ensuring customer satisfaction.",
      },
      {
        icon: "money",
        title: "Secure Payment Gateway",
        description:
          "Accept multiple payment methods and ensure secure transactions for both buyers and sellers.",
      },
      {
        icon: "graph",
        title: "Analytics & Reporting",
        description:
          "Gain valuable insights into your marketplace's performance, customer behavior, and sales trends.",
      },
      {
        icon: "mobile",
        title: "Seamless Mobile Experience",
        description:
          "Deliver a smooth, engaging experience for buyers and sellers on any device.",
      },
    ],
  },
  bannerSection1: {
    title: "Ready to Unleash Your Marketplace Potential?",
    description:
      "Your vision. Your marketplace. Your success. HIVE is here to make it happen.",
    links: [
      {
        text: "Setup Your Free Account",
        href: "https://control.ordrio.com/#/register",
        target: "_blank",
      },
    ],
    link: {
      text: "Schedule a Personalized Demo", //@LINKS: requested - to be added
      href: "#",
    },
    backgroundImage: BackgroundImage.BLUE_SMALL_SPIRALS,
    tintColor: Colors.YELLOW,
  },
  bigCardsSection1: {
    cards: [
      {
        title: "Dedicated <span>Support</span>",
        description:
          "Our team of experts is here to help you every step of the way, from launch to scaling.",
        type: AnimatedCard.SUPPORT,
      },
      {
        title: "Advanced Marketing & Promotion <span>Tools</span>",
        description:
          "Drive traffic, boost sales, and create targeted campaigns to reach your ideal customers.",
        type: AnimatedCard.MARKETING,
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
    imageURL: "/images/tiger-boxes.png",
    icon: "check",
    title: "Join the Ordrio Family",
    description:
      "We're here to support you every step of the way, from setup to your first online order and beyond.",
    links: [{ text: "Setup Your Free Account", href: "/support" }],
  },
};
