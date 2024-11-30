import {
  AnimatedCard,
  Colors,
  Icons,
  Separator,
  BackgroundImage,
  StepCardAnimation,
} from "@config";

export const ProductTourContent = {
  hero: {
    title: "See Ordrio from the inside",
    description:
      "Get to know the key elements of Ordrio even before creating your account.",
    separator: Separator.MEDIUM,
    isFirstSection: true,
  },
  stepCards: {
    cards: [
      {
        title: "Register your Account",
        subtitle: "STEP 1",
        animation: StepCardAnimation.TABLET,
      },
      {
        title: "Answer few Easy Questions",
        subtitle: "STEP 2",
        animation: StepCardAnimation.ROBOT,
      },
      {
        title: "Get your Online Store Ready",
        subtitle: "STEP 3",
        animation: StepCardAnimation.STORE,
      },
    ],
  },
  listSection: {
    subtitle: "Easy Product Management",
    list: [
      "Add new products effortlessly with our intuitive tools.",
      "Update product details quickly with a user-friendly interface.",
      "Visualize and manage your product catalog with ease.",
    ],
    link: {
      text: "Signup Now for Free",
      target: "_blank",
      href: "https://control.ordrio.com/#/register",
    },
    displayInRow: true,
    alignContentLeft: true,
    switchOrder: true,
  },
  listSectionReversed: {
    subtitle: "Smart Inventory Control",
    list: [
      "Monitor your inventory levels in real-time to prevent stockouts.",
      "Receive automatic alerts when stock levels are low to ensure timely restocking.",
      "Easily update inventory details for multiple products at once.",
    ],
    link: {
      text: "Signup Now for Free",
      target: "_blank",
      href: "https://control.ordrio.com/#/register",
    },
    displayInRow: true,
    alignContentLeft: true,
  },
  iconCardsContent: {
    icon: "check",
    backgroundImage: BackgroundImage.BLUE_SPIRAL,
    subtitle: "Marketing and Promotion",
    backgroundColor: Colors.BLUE,
    linkColor: Colors.YELLOW,
  },
  iconCards: {
    color: Colors.YELLOW,
    cards: [
      {
        icon: "coupons",
        title: "Create Coupons",
        description: "Design enticing coupons to attract and retain customers.",
      },
      {
        icon: "sale",
        title: "Offer Discounts",
        description: "Boost sales by offering attractive discounts and deals.",
      },
      {
        icon: "megaphone",
        title: "Run Campaigns",
        description:
          "Run effective email marketing campaigns to engage customers.",
      },
    ],
  },
  bigCardsSection: {
    cards: [
      {
        title: "<span>Hassle-Free</span> Orders & Fulfillment",
        description:
          "Our platform integrates with Ordrio Ship to provide multiple fulfillment options and automated notifications, ensuring timely and accurate delivery to your customers.",
        type: AnimatedCard.HASSLE,
      },
      {
        title: "Customer Management",
        description:
          "Ordrio's customer management tools allow you to create and manage customer accounts, access order histories, and utilize powerful CRM functionalities to enhance customer engagement.",
        type: AnimatedCard.CUSTOMER_MANAGEMENT,
      },
    ],
  },
  websiteAndMobileSection: {
    content: {
      spans: ["Website", "Mobile App"],
      title: "Insightful Reporting & Analytics",
      bottomButtons: [
        "Sales Data Analysis",
        "Customer Behavior",
        "Performance Metrics",
      ],
    },
    screenshotURLs: [
      "/images/carousels/product-tour-screenshot/0.png",
      "/images/carousels/product-tour-screenshot/1.png",
      "/images/carousels/product-tour-screenshot/2.png",
    ],
  },
  bannerSection1: {
    title: "Seamless Mobile App Integration",
    description:
      "Manage your store on the go with Ordrio's mobile app integration. Receive real-time notifications, update your inventory, and engage with customers anytime, anywhere, directly from your mobile device.",
    subtitle: "Download App",
    links: [
      { text: Icons["google-play"], href: "#" }, //@LINKS: requested - to be added
      { text: Icons["app-store"], href: "#" }, //@LINKS: requested - to be added
    ],
    backgroundImage: BackgroundImage.BLUE_SMALL_SPIRALS,
    imageURL: "/images/tiger-in-phone.png",
    tintColor: Colors.WHITE,
  },
  bigCardsSection2: {
    cards: [
      {
        title: "Ordrio Ship",
        description:
          "Tired of shipping feeling like a second job? Enjoy stress-free, integrated shipping solutions with Ordrio.",
        type: AnimatedCard.SHIP,
      },
      {
        title: "<span>100+</span> Add-ons",
        description:
          "Boost your store's potential with the perfect add-ons for marketing, analytics, and more.",
        link: {
          text: "View Details",
          href: "/plugins",
        },
        type: AnimatedCard.ADD_ONS,
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
    title:
      "Let's Bring Your Business Online With just a few clicks, get started for free!",
    links: [
      {
        text: "Get Started for Free",
        target: "_blank",
        href: "https://control.ordrio.com/#/register",
      },
    ],
  },
};
