import {
  AnimatedCard,
  Colors,
  Icons,
  Separator,
  ThemeCardVariant,
} from "@config";

export const RestaurantsContent = {
  hero: {
    title: "Your <span>Restaurant's</span> Digital Command Center",
    description: "Delight Diners, Simplify Operations, Grow Your Business",
    separator: Separator.MEDIUM,
    isFirstSection: true,
  },
  heroComponent: {
    imageURLs: [
      "/images/slideshow/restaurants/image-1.png",
      "/images/slideshow/restaurants/image-2.png",
      "/images/slideshow/restaurants/image-3.png",
      "/images/slideshow/restaurants/image-4.png",
    ],
  },
  commonSectionWithRowAndBigCards: {
    title: "Why Restobite?",
    description:
      "Restobite is more than just online ordering. It is a comprehensive solution that empowers your restaurant to",
    backgroundColor: Colors.WHITE,
  },
  rowAndBigCardsInCommonSection: {
    bigCard: {
      card: AnimatedCard.RESTOBITE,
      props: { variant: ThemeCardVariant.MOBILE },
    },
    rowCards: [
      {
        icon: "marketplace-yellow",
        title: "Built for Restaurants",
        description:
          "Our platform is designed by restaurant professionals who understand your unique challenges.",
      },
      {
        icon: "cursor-yellow",
        title: "Easy to Use",
        description:
          "Our intuitive interface makes it simple to set up and manage your online presence, even if you are not tech-savvy.",
      },
      {
        icon: "money-yellow",
        title: "Affordable & Flexible",
        description:
          "Choose the plan that fits your restaurant's size and budget.",
      },
    ],
  },
  imageCardsWithContentSection: {
    backgroundImageURL: "/images/yellow-brush.png",
    title: "Your Restaurant, Transformed",
    description:
      "Restobite is more than just online ordering. It is a comprehensive solution that empowers your restaurant to:",
    link: { text: "Find Out More", href: "/product-tour" },
    cards: [
      {
        title: "Own Your Online Presence",
        description:
          "Create a beautiful, branded website or mobile app where customers can easily browse your menu, place orders, and make reservations.",
        imageURL: "/images/tiger-boxes-card.png",
      },
      {
        title: "Boost Sales & Efficiency",
        description:
          "Maximize table turnover, reduce errors, and increase average order value with seamless online ordering and contactless payments.",
        imageURL: "/images/rocket-card.png",
      },
      {
        title: "Streamline Operations",
        description:
          "Manage orders, inventory, table reservations, and staff schedules from a single, intuitive dashboard.",
        imageURL: "/images/papers-card.png",
      },
      {
        title: "Engage & Retain Customers",
        description:
          "Build lasting relationships with loyalty programs, personalized promotions, and targeted marketing campaigns.",
        imageURL: "/images/handshake-card.png",
      },
      {
        title: "Gain Valuable Insights",
        description:
          "Track sales data, customer preferences, and operational trends to make informed decisions and optimize your business.",
        imageURL: "/images/toys-card.png",
      },
    ],
  },
  bigCardsSection1: {
    cards: [
      {
        title: "Dedicated <span>Support</span>",
        description:
          "Build customer profiles, track order history, and send personalized offers.",
        type: AnimatedCard.SUPPORT,
      },
      {
        title: "<span>Reliable</span> & Secure",
        description:
          "Create targeted campaigns, send email newsletters, and manage social media.",
        type: AnimatedCard.SECURE,
      },
    ],
  },
  iconCardSection: {
    backgroundImageURL: "/images/grey-spiral.png",
    title: "Key Features for a Thriving Restaurant",
    color: Colors.GREY,
    cards: [
      {
        icon: "car-blue",
        title: "Online Ordering & Delivery",
        description:
          "Offer convenient online ordering for pickup, delivery, or dine-in.",
      },
      {
        icon: "table-blue",
        title: "Table Reservations",
        description: "Manage reservations seamlessly and avoid overbooking.",
      },
      {
        icon: "paper-check-blue",
        title: "Menu Management",
        description:
          "Easily update your menu with photos, descriptions, and pricing.",
      },
      {
        icon: "paper-blue",
        title: "Inventory & Recipe Management",
        description:
          "Track ingredient usage, optimize stock levels, and control costs.",
      },
      {
        icon: "graph-blue",
        title: "Reporting & Analytics",
        description:
          "Gain insights into sales, customer behaviour, and operational efficiency.",
      },
      {
        icon: "mobile-blue",
        title: "Custom Mobile Apps",
        description:
          "Provide a branded app for iOS and Android for an even more seamless experience.",
      },
    ],
  },
  bannerSection1: {
    title: "Integrated Payments",
    description: "Accept a variety of payment methods securely and seamlessly.",
    subtitle: "Download App",
    links: [
      { text: Icons["google-play"], href: "#" }, //@LINKS: requested - to be added
      { text: Icons["app-store"], href: "#" }, //@LINKS: requested - to be added
    ],
    backgroundImageURL: "/images/blue-small-spirals.png",
    imageURL: "/images/mobile-payments.png",
    tintColor: "white",
  },
  bigCardsSection2: {
    cards: [
      {
        title: "Customer Relationship Management",
        description:
          "Build customer profiles, track order history, and send personalized offers.",
        type: AnimatedCard.RELATIONSHIP,
      },
      {
        title: "Marketing & <span>Promotions</span>",
        description:
          "Create targeted campaigns, send email newsletters, and manage social media.",
        type: AnimatedCard.MARKETING,
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
    imageURL: "/images/tiger-boxes.png",
    icon: "check",
    title: "Join the Ordrio Family",
    description:
      "We're here to support you every step of the way, from setup to your first online order and beyond.",
    links: [{ text: "Setup Your Free Account", href: "/support" }],
  },
};
