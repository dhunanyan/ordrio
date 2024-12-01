import { AnimatedCard, Colors, Separator, BackgroundImage } from "@config";

export const ThemesContent = {
  hero: {
    title:
      "Ordrio Themes: Find the <span>Perfect Design</span> for Your Business",
    description: " Make a Lasting Impression with Your Store Design",
    separator: Separator.MEDIUM,
    isFirstSection: true,
  },
  commonSectionWithBigCards: {
    subtitle: "Find Your Perfect Fit",
    description:
      "Every brand has a unique story to tell. Ordrio's curated collection of  themes helps you express your brand's personality and captivate your customers. your brand, your products, and your customers.",
    backgroundColor: Colors.WHITE,
  },
  bigCardsInCommonSection1: {
    cards: [
      {
        title: "Grocbay",
        description:
          "Fresh, clean, and organized - perfect for showcasing your grocery and upermarket products in an inviting way.",
        icons: ["ios", "android"],
        type: AnimatedCard.GROCBAY,
      },
      {
        title: "Restobite",
        description:
          "Warm, appetizing, and stylish - designed to make your restaurant's menu and ambiance shine online.",
        icons: ["ios", "android"],
        type: AnimatedCard.RESTOBITE,
      },
    ],
  },
  bigCardsInCommonSection2: {
    cards: [
      {
        title: "Aura",
        description:
          "Artistic, unique, and customizable - perfect for highlighting the craftsmanship and personality of your handcrafted goods.",
        icons: ["ios", "android"],
        type: AnimatedCard.AURA,
      },
      {
        title: "Moo & Chew",
        description:
          "Fresh, clean, and organized - perfect for showcasing your grocery and upermarket products in an inviting way.",
        icons: ["ios", "android"],
        type: AnimatedCard.MOO_CHEW,
      },
    ],
  },
  commonSection: {
    subtitle: "Your Brand, <span>Your Story</span>",
    description:
      "With Ordrio, you have the power to create a truly unique online presence that reflects  your brand's values and resonates with your target audience",
    bottomImageURL: "/images/tablet-and-mobile-view-tiger.png",
    backgroundImage: BackgroundImage.GREY_SPIRAL,
    backgroundColor: Colors.GREY,
  },
  iconCardsContent: {
    backgroundImage: BackgroundImage.BLUE_SPIRAL,
    subtitle: "Why Choose Ordrio?",
    backgroundColor: Colors.BLUE,
  },
  iconCards: {
    iconColor: Colors.BLUE,
    color: Colors.YELLOW,
    cards: [
      {
        icon: "design",
        title: "Eye-Catching Design",
        description:
          "Our themes are crafted by Professional designers to ensure your store looks stunning.",
      },
      {
        icon: "customization",
        title: "Easy Customization",
        description:
          "Tailor your theme to your brand's colours, fonts, and overall aesthetic with our intuitive tools.",
      },
      {
        icon: "mobile",
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
    subtitle: "Frequently Asked Questions",
    link: { text: "Ask Us Now", href: "/support" },
    displayInRow: true,
    alignContentLeft: true,
    verticalAlignTop: true,
  },
  bannerSection: {
    backgroundImage: BackgroundImage.BLUE_SPIRAL,
    imageURL: "/images/tiger-boxes.png",
    icon: "check",
    title: "Ready to Make a Statement?",
    description:
      "Let your online store be an extension of your brand's unique personality. Choose Ordrio and start telling your story today",
    links: [
      {
        text: "Setup Your Free Account",
        target: "_blank",
        href: "https://control.ordrio.com/#/register",
      },
      { text: "Get a Personalized Demo", href: "/support" }, //@LINKS: requested - may be changed
    ],
  },
};
