import { AnimatedCard, Colors, Icons, Separator } from "@config";

export const ProductTourContent = {
  hero: {
    title: "See Ordrio from the inside",
    description:
      "Get to know the key elements of Ordrio even before creating your account.",
    separator: Separator.MEDIUM,
    isFirstSection: true,
  },
  listSection: {
    title: "Easy Product Management",
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
    applyCardStyles: true,
  },
  listSectionReversed: {
    title: "Smart Inventory Control",
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
    switchOrder: true,
    applyCardStyles: true,
  },
  iconCardSection: {
    withIcon: true,
    backgroundImageURL: "/images/blue-spiral.png",
    title: "Marketing and Promotion",
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
    backgroundImageURL: "/images/blue-small-spirals.png",
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
          text: "View Detail's",
          href: "/plugins",
        },
        type: AnimatedCard.ADD_ONS,
      },
    ],
  },
  accordionSection: {
    title: "Frequently Asked Questions",
    link: { text: "Ask Us Now", href: "/support" },
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
