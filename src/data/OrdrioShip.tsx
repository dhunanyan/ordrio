import {
  AnimatedCard,
  Colors,
  Separator,
  BackgroundImage,
  StepCardAnimation,
} from "@config";

export const OrdrioShipContent = {
  hero: {
    title: "Effortless <span>Shipping</span> Right Inside Your Ordrio Store",
    description:
      "Say goodbye to juggling multiple platforms and hello to streamlined shipping that's built into your Ordrio store. Ordrio Ship simplifies your fulfillment, so you can focus on growing your business.",
    separator: Separator.BIG,
    bottomImageURL: "/images/tablet-and-mobile-view-tiger.png",
    isFirstSection: true,
  },
  commonSectionWithRowAndBigCards: {
    subtitle: "Why Choose PetO?",
    description: "Showcase Your Services, Simplify Your Bookings",
    backgroundColor: Colors.WHITE,
  },
  rowAndBigCardsInCommonSection: {
    bigCard: {
      card: AnimatedCard.TECHNOLOGY_PARTNER,
    },
    rowCards: [
      {
        icon: "plus-card-yellow",
        title: "Seamless Integration",
        description:
          "Ordrio Ship is built directly into your Ordrio store, eliminating the need for complex integrations or additional software.",
      },
      {
        icon: "money-yellow",
        title: "Cost-Effective",
        description:
          "Save money on shipping with our discounted rates and automated processes that reduce manual labor.",
      },
      {
        icon: "user-yellow",
        title: "Customer-Centric",
        description:
          "Offer multiple shipping options, real-time tracking, and easy returns to create a positive customer experience.",
      },
      {
        icon: "graph-yellow",
        title: "Scalable",
        description:
          "As your business grows, Ordrio Ship can easily scale to meet your increasing shipping needs.",
      },
    ],
  },
  iconCardsContent: {
    backgroundImage: BackgroundImage.GREY_SPIRAL,
    subtitle: "Key Features for Pet Product Businesses",
    backgroundColor: Colors.GREY,
  },
  iconCards: {
    iconColor: Colors.BLUE,
    cards: [
      {
        icon: "mouse",
        title: "One-Click Shipping",
        description:
          "Generate shipping labels & process orders directly from your Ordrio dashboard - no more switching.",
      },
      {
        icon: "plus-card",
        title: "Multiple Carrier Integrations",
        description:
          "Access a wide range of shipping carriers (domestic & international) and compare rates to find the best deals.",
      },
      {
        icon: "timer",
        title: "Automated Fulfillment",
        description:
          "Save time and reduce errors with automated label printing, order tracking, and customer notifications.",
      },
      {
        icon: "ticket",
        title: "Discounted Shipping Rates",
        description:
          "Take advantage of our exclusive partnerships with carriers to get the best rates possible.",
      },
      {
        icon: "bell",
        title: "Real-Time Tracking",
        description:
          "Keep your customers informed with accurate tracking updates throughout the shipping process.",
      },
      {
        icon: "thumb-up",
        title: "Returns Management",
        description:
          "Simplify returns processing and offer a hassle-free experience for your customers.",
      },
    ],
  },
  stepCardsSection: {
    subtitle: "How It Works",
    description:
      "Ordrio Ship is more than just a shipping tool; it is a game-changer for your eCommerce business",
  },
  stepCards: {
    cards: [
      {
        title: "Connect Your Store",
        subtitle: "STEP 1",
        description:
          "Activate Ordrio Ship in your Ordrio dashboard with just a few clicks.",
        animation: StepCardAnimation.STORE_CONNECT,
      },
      {
        title: "Choose Your Carriers",
        subtitle: "STEP 2",
        description:
          "Select from a wide range of carriers based on your preferences and budget.",
        animation: StepCardAnimation.BOXES,
      },
      {
        title: "Ship with Ease",
        subtitle: "STEP 3",
        description:
          "Generate shipping labels, track orders, and manage returns all within your familiar Ordrio interface.",
        animation: StepCardAnimation.DOORS,
      },
    ],
  },
  bannerSection1: {
    title: "Ready to Streamline Your Shipping?",
    description:
      "Unlock the full potential of your Ordrio store with Ordrio Ship - the shipping solution that is as simple as it is powerful.",
    links: [
      {
        text: "Request a Personalized Demo",
        href: "TODO",
        target: "_blank",
      },
    ],
    backgroundImage: BackgroundImage.BLUE_SPIRAL,

    tintColor: Colors.YELLOW,
  },
};
