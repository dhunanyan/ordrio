import {
  AnimatedCard,
  Colors,
  Separator,
  ThemeCardVariant,
  BackgroundImage,
} from "@config";

export const MeatStoresContent = {
  hero: {
    title: "Elevate Your <span>Meat & Fish</span> Business",
    description: "Bring the Butcher Shop Experience Online",
    separator: Separator.MEDIUM,
    isFirstSection: true,
  },
  heroComponent: {
    // @TODO - images should be changed
    imageURLs: [
      "/images/slideshow/meat-stores/image-1.png",
      "/images/slideshow/meat-stores/image-2.png",
      "/images/slideshow/meat-stores/image-3.png",
      "/images/slideshow/meat-stores/image-4.png",
    ],
  },
  commonSectionWithRowAndBigCards: {
    subtitle: "Why Choose MeatCraft?",
    description:
      "MeatCraft is the perfect theme to highlight the quality and freshness of your products, creating an online experience that is as enticing as your finest cuts.",
    backgroundColor: Colors.WHITE,
  },
  rowAndBigCardsInCommonSection: {
    bigCard: {
      card: AnimatedCard.PET_STORES,
      props: { variant: ThemeCardVariant.MOBILE },
    },
    iconColor: Colors.YELLOW,
    rowCards: [
      {
        icon: "fork",
        title: "Designed for Meat & Fish Enthusiasts",
        description:
          "We understand the passion and care that goes into choosing the best products for our furry friends. Our theme reflects this with a playful, engaging design.",
      },
      {
        icon: "cursor-pointer",
        title: "Ease of Use",
        description:
          "Our intuitive interface makes it simple to set up and manage your online store, even if you have no technical experience.",
      },
      {
        icon: "graph-loupe",
        title: "SEO-Friendly",
        description:
          "Our theme is optimized for search engines, helping you attract more organic traffic.",
      },
    ],
  },
  commonSection: {
    subtitle: "Your Butcher Shop, Reimagined Online",
    backgroundColor: Colors.YELLOW,
  },
  commonSectionImageCards: {
    cards: [
      {
        title: "Showcase Your Premium Selection",
        description:
          "Present your products in detail, with high-res images, detailed descriptions, and  category filters.",
        imageURL: "/images/tiger-boxes-card.png",
      },
      {
        title: "Create a Personalized Experience",
        description:
          "Offer personalized recommendations based on customer preferences, dietary restrictions, or cooking styles.",
        imageURL: "/images/mobile-card.png",
      },
      {
        title: "Build a Loyal Community",
        description:
          "Engage with your customers through reviews, ratings, social  sharing, and loyalty programs.",
        imageURL: "/images/mobile-message-boxes-card.png",
      },
      {
        title: "Drive Sales & Growth",
        description:
          "Optimize your store for conversions with strategic product placement, enticing banners, and exclusive offers.",
        imageURL: "/images/rocket-card.png",
      },
    ],
  },
  bigCardsSection1: {
    cards: [
      {
        title: "Customization",
        description:
          "Tailor your MeatCraft theme to match your brand's unique colors, fonts, and style.",
        type: AnimatedCard.CUSTOMIZATION,
      },
      {
        title: "Mobile-Optimized",
        description:
          "Ensure your store looks great and functions flawlessly on any device, so customers can shop on the go.",
        type: AnimatedCard.MOBILE,
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
        title: "Specialized Product Categories",
        description:
          "Easily organize your products by type (beef, poultry, pork, seafood), cut, or preparation style.",
      },
      {
        icon: "skillet",
        title: "Recipe & Pairing Suggestions",
        description:
          "Inspire your customers with delicious recipes and wine or beer pairing suggestions.",
      },
      {
        icon: "cube",
        title: "Subscription Boxes",
        description:
          "Offer curated boxes of your finest products delivered regularly.",
      },
      {
        icon: "car",
        title: "Bulk Ordering Options",
        description:
          "Cater to restaurants, caterers, and other businesses with wholesale pricing and bulk ordering options.",
      },
      {
        icon: "book",
        title: "Educational Resources",
        description:
          "Share your expertise with customers through blogs, videos, cooking guides on handling & preparing meat & fish.",
      },
      {
        icon: "mobile",
        title: "Mobile-First Design",
        description:
          "Ensure your online shop looks & functions beautifully on all devices, from smartphones to desktops.",
      },
    ],
  },
  bannerSection1: {
    title: "Ready to Take Your Meat & Fish Business Online?",
    description:
      "Let MeatCraft be your digital butcher shop, showcasing your craftmanship and bringing your premium products to a wider audience.",
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
        title: "Reviews & Ratings",
        description:
          "Enable customers to leave feedback and build social proof.",
        type: AnimatedCard.RATING,
      },
      {
        title: "Promotional Tools",
        description:
          "Create discount codes, offer special packages, and run targeted marketing campaigns.",
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
