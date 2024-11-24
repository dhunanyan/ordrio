import {
  AnimatedCard,
  Colors,
  SectionSeparator,
  ThemeCardVariant,
} from "@config";

export const ClothingAndAccessoriesContent = {
  hero: {
    title: "Elevate Your <span>Fashion</span> Brand Online",
    description: "Showcase Your Style, Captivate Your Customers",
    sectionSeparator: SectionSeparator.MEDIUM,
  },
  heroComponent: {
    imageURLs: [
      "/images/slideshow/clothing-and-accessories/image-1.png",
      "/images/slideshow/clothing-and-accessories/image-2.png",
      "/images/slideshow/clothing-and-accessories/image-3.png",
      "/images/slideshow/clothing-and-accessories/image-4.png",
    ],
  },
  commonSectionWithRowAndBigCards: {
    title: "Why Choose Aura?",
    description:
      "Aura is not just a theme; it is a digital runway for your clothing and accessories. Create an online boutique that reflects your brand's unique aesthetic and inspires shoppers to fall in love with your collections.",
    backgroundColor: Colors.WHITE,
  },
  rowAndBigCardsInCommonSection: {
    bigCard: {
      card: AnimatedCard.AURA,
      props: { variant: ThemeCardVariant.MOBILE },
    },
    rowCards: [
      {
        icon: "clothes-yellow",
        title: "Fashion-Forward Design",
        description:
          "Aura's aesthetic is specifically tailored to the clothing and accessories industry, creating a visually appealing and on-trend shopping experience. ",
      },
      {
        icon: "cursor-yellow",
        title: "Ease of Use",
        description:
          "Our intuitive platform makes it simple to set up and manage your online store, even if you have no technical experience. ",
      },
      {
        icon: "graph-yellow",
        title: "SEO-Optimized",
        description:
          "Boost your store's visibility in search engine results to attract more organic traffic.",
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
        title: "Create a Visual Feast",
        description:
          "Highlight your clothing and accessories with high-res images, captivating product descriptions, and dynamic lookbooks that bring your collections to life.",
        imageURL: "/images/tiger-boxes-card.png",
      },
      {
        title: "Curate an Immersive Experience",
        description:
          "Guide shoppers through your online store with intuitive navigation, personalized recommendations, and a seamless checkout process.",
        imageURL: "/images/credit-cards-card.png",
      },
      {
        title: "Build a Loyal Following",
        description:
          "Foster customer engagement with social media integrations, wish lists, and email marketing campaigns that keep your brand top-of-mind.",
        imageURL: "/images/papers-card.png",
      },
      {
        title: "Drive Sales & Growth",
        description:
          "Optimize your store for conversions with strategic product placement, compelling calls to action, and abandoned cart recovery tools.",
        imageURL: "/images/tiger-painting-card.png",
      },
    ],
  },
  iconCardSection: {
    backgroundImageURL: "/images/grey-spiral.png",
    title: "Key Features for Fashion-Forward Brands ",
    color: Colors.WHITE,
    cards: [
      {
        icon: "paper-check-blue",
        title: "Product Filtering & Sorting",
        description:
          "Help shoppers find exactly what they are looking for with easy-to-use filters and sorting options.",
      },
      {
        icon: "paper-blue",
        title: "Size Charts & Fit Guides",
        description:
          "Provide detailed sizing information to reduce returns and increase customer satisfaction.",
      },
      {
        icon: "money-blue",
        title: "Lookbook Creation",
        description:
          "Curate stunning lookbooks to highlight your collections and inspire shoppers.",
      },
      {
        icon: "money-blue",
        title: "Social Media Integration",
        description:
          "Connect your online store to your social media channels to expand your reach and drive traffic.",
      },
      {
        icon: "graph-blue",
        title: "Analytics & Reporting",
        description:
          " Gain valuable insights into customer behavior, sales trends, and product performance.",
      },
      {
        icon: "mobile-blue",
        title: "Email Marketing Tools",
        description:
          "Build your email list and send targeted campaigns to nurture customer relationships.",
      },
      ,
    ],
  },
  bannerSection1: {
    title: "Ready to Elevate Your Fashion Brand? ",
    description:
      "Let Aura be the spotlight that illuminates your clothing and accessories, turning shoppers into loyal fans. ",
    subtitle: "Download App",
    link: { text: "Schedule a Personalized Demo", href: "#" },
    links: [{ text: "Setup Your Free Account", href: "#" }],
    backgroundImageURL: "/images/blue-small-spirals.png",
    alignContentLeft: false,
  },
  bigCardsSection2: {
    cards: [
      {
        title: "Customization",
        description:
          "Tailor your Aura theme to your brand's unique colors, fonts, and style preferences.",
        type: AnimatedCard.CUSTOMIZATION,
      },
      {
        title: "Dedicated <span>Support</span>",
        description:
          "Our team is here to help you every step of the way, from setting up your store to launching successful campaigns.",
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
    imageURL: "/images/tiger-computer.png",
    showIcon: true,
    title: "Join the Ordrio Family",
    description:
      "We're here to support you every step of the way, from setup to your first online order and beyond.",
    links: [{ text: "Setup Your Free Account", href: "#" }],
  },
};
