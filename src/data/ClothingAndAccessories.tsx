import {
  AnimatedCard,
  Colors,
  Separator,
  ThemeCardVariant,
  BackgroundImage,
} from "@config";

export const ClothingAndAccessoriesContent = {
  hero: {
    title: "Elevate Your <span>Fashion</span> Brand Online",
    description: "Showcase Your Style, Captivate Your Customers",
    separator: Separator.MEDIUM,
    isFirstSection: true,
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
    subtitle: "Why Choose Aura?",
    description:
      "Aura is not just a theme; it is a digital runway for your clothing and accessories. Create an online boutique that reflects your brand's unique aesthetic and inspires shoppers to fall in love with your collections.",
    backgroundColor: Colors.WHITE,
  },
  rowAndBigCardsInCommonSection: {
    bigCard: {
      card: AnimatedCard.AURA,
      props: { variant: ThemeCardVariant.MOBILE },
    },
    iconColor: Colors.YELLOW,
    rowCards: [
      {
        icon: "clothes",
        title: "Fashion-Forward Design",
        description:
          "Aura's aesthetic is specifically tailored to the clothing and accessories industry, creating a visually appealing and on-trend shopping experience.",
      },
      {
        icon: "cursor-pointer",
        title: "Ease of Use",
        description:
          "Our intuitive platform makes it simple to set up and manage your online store, even if you have no technical experience.",
      },
      {
        icon: "graph-loupe",
        title: "SEO-Optimized",
        description:
          "Boost your store's visibility in search engine results to attract more organic traffic.",
      },
    ],
  },
  commonSection: {
    subtitle: "Unveil Your Brand's Essence",
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
  iconCardsContent: {
    backgroundImage: BackgroundImage.GREY_SPIRAL,
    subtitle: "Key Features for Fashion-Forward Brands",
    backgroundColor: Colors.GREY,
  },
  iconCards: {
    iconColor: Colors.BLUE,
    cards: [
      {
        icon: "check-paper",
        title: "Product Filtering & Sorting",
        description:
          "Help shoppers find exactly what they are looking for with easy-to-use filters and sorting options.",
      },
      {
        icon: "paper",
        title: "Size Charts & Fit Guides",
        description:
          "Provide detailed sizing information to reduce returns and increase customer satisfaction.",
      },
      {
        icon: "money",
        title: "Lookbook Creation",
        description:
          "Curate stunning lookbooks to highlight your collections and inspire shoppers.",
      },
      {
        icon: "money",
        title: "Social Media Integration",
        description:
          "Connect your online store to your social media channels to expand your reach and drive traffic.",
      },
      {
        icon: "graph",
        title: "Analytics & Reporting",
        description:
          "Gain valuable insights into customer behavior, sales trends, and product performance.",
      },
      {
        icon: "mobile",
        title: "Email Marketing Tools",
        description:
          "Build your email list and send targeted campaigns to nurture customer relationships.",
      },
    ],
  },
  bannerSection1: {
    title: "Ready to Elevate Your Fashion Brand?",
    description:
      "Let Aura be the spotlight that illuminates your clothing and accessories, turning shoppers into loyal fans.",
    link: {
      text: "Schedule a Personalized Demo",
      href: "#", //@LINKS: requested - to be added
    },
    links: [
      {
        text: "Setup Your Free Account",
        target: "_blank",
        href: "https://control.ordrio.com/#/register",
      },
    ],
    backgroundImage: BackgroundImage.BLUE_SMALL_SPIRALS,
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
    links: [
      {
        text: "Setup Your Free Account",
        target: "_blank",
        href: "https://control.ordrio.com/#/register",
      },
    ],
  },
};
