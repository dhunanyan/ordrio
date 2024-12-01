import {
  AnimatedCard,
  Colors,
  Separator,
  ThemeCardVariant,
  BackgroundImage,
} from "@config";

export const CafesContent = {
  hero: {
    title: "Entice <span>Coffee</span> Lovers, Grow Your Café Empire",
    description: "Brew Your Online Coffee Shop Success",
    separator: Separator.MEDIUM,
    isFirstSection: true,
  },
  heroComponent: {
    imageURLs: [
      "/images/slideshow/cafes/image-1.png",
      "/images/slideshow/cafes/image-2.png",
      "/images/slideshow/cafes/image-3.png",
      "/images/slideshow/cafes/image-4.png",
    ],
  },
  commonSectionWithRowAndBigCards: {
    subtitle: "Why Choose Escafe?",
    description:
      "Whether you are a cozy corner cafe or a bustling roastery, Escafe empowers you to create a captivating online presence that showcases your coffee expertise and converts visitors into loyal customers.",
    backgroundColor: Colors.WHITE,
  },
  rowAndBigCardsInCommonSection: {
    bigCard: {
      card: AnimatedCard.CAFES,
      props: { variant: ThemeCardVariant.MOBILE },
    },
    rowCards: [
      {
        icon: "cup-yellow",
        title: "Built for Coffee Lovers",
        description:
          "Our platform is designed by coffee enthusiasts who understand the nuances of the industry and the unique needs of coffee businesses.",
      },
      {
        icon: "cursor-yellow",
        title: "Ease of Use",
        description:
          "Our intuitive interface makes it simple to set up and manage your online coffee shop, even if you have no technical experience.",
      },
      {
        icon: "graph-yellow",
        title: "Flexible & Scalable",
        description:
          "Escafe can adapt to your business size and needs, whether you are a small independent cafe or a multi-location roastery.",
      },
    ],
  },
  imageCardsSection: {
    backgroundImage: BackgroundImage.YELLOW_BRUSH,
    subtitle: "Your Coffee Shop, Reimagined Online",
    description:
      "Escafe offers a comprehensive solution to help your coffee business thrive online",
    link: { text: "Find Out More", href: "/product-tour" },
    backgroundColor: Colors.YELLOW,
    displayInRow: true,
    alignContentLeft: true,
  },
  imageCards: {
    //@CONTENT - to be changed
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
  bigCardsSection1: {
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
          "Our team is here to help you every step of the way, from getting started to maximizing your online success.",
        type: AnimatedCard.SUPPORT,
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
        icon: "bullet-points",
        title: "Intuitive Online Menu Builder",
        description:
          "Easily create a visually appealing and interactive menu that showcases your coffee creations.",
      },
      {
        icon: "plus-card",
        title: "Customizable Ordering Options",
        description:
          "Allow customers to personalize their orders with modifiers, add-ons, and special requests.",
      },
      {
        icon: "check-save",
        title: "Seamless Order Management",
        description:
          "Track orders in real-time, manage inventory, and streamline fulfillment for a smooth customer experience.",
      },
      {
        icon: "handshake",
        title: "Loyalty & Rewards Programs",
        description:
          "Incentivize repeat business and build lasting customer relationships with personalized rewards and discounts.",
      },
      {
        icon: "gift",
        title: "Analytics & Insights",
        description:
          "Track sales data, customer behavior, and popular menu items to make informed business decisions.",
      },
      {
        icon: "book",
        title: "Mobile-First Design",
        description:
          "Ensure your online coffee shop looks & functions beautifully on all devices, from smartphones to desktops.",
      },
    ],
  },
  bannerSection1: {
    title: "Ready to Brew Up Your Online Success?",
    description:
      "The perfect blend of technology and taste to elevate your coffee business online.",
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
  bigCardsSection2: {
    cards: [
      {
        title: "Reviews & <span>Ratings</span>",
        description:
          "Enable customers to leave feedback and build social proof.",
        type: AnimatedCard.RATING,
      },
      {
        title: "Marketing & <span>Promotions</span>",
        description:
          "Reach your target audience with targeted email campaigns, social media promotions, and exclusive offers.",
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
    imageURL: "/images/tiger-computer.png",
    icon: "check",
    title: "Join the Ordrio Family",
    description:
      "We're here to support you every step of the way, from setup to your first online order and beyond.",
    links: [{ text: "Setup Your Free Account", href: "/support" }],
  },
};
