import { AnimatedCard, Colors, Separator, ThemeCardVariant } from "@config";

export const CafesContent = {
  hero: {
    title: "Unleash Your <span>Pet</span> Product Potential",
    description: "Create a Pawsome Online Store for Your Furry Friends",
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
    subtitle: "Why Choose PetO?",
    description: "Showcase Your Services, Simplify Your Bookings",
    backgroundColor: Colors.WHITE,
  },
  rowAndBigCardsInCommonSection: {
    bigCard: {
      card: AnimatedCard.CAFES,
      props: { variant: ThemeCardVariant.MOBILE },
    },
    rowCards: [
      {
        icon: "customization-yellow",
        title: "Designed for Pet Lovers",
        description:
          "We understand the passion and care that goes into choosing the best products for our furry friends. Our theme reflects this with a playful, engaging design.",
      },
      {
        icon: "cursor-yellow",
        title: "Ease of Use",
        description:
          "Our intuitive interface makes it simple to set up and manage your online store, even if you have no technical experience.",
      },
      {
        icon: "graph-yellow",
        title: "SEO-Friendly",
        description:
          "Our theme is optimized for search engines, helping you attract more organic traffic.",
      },
    ],
  },
  imageCardsWithContentSection: {
    backgroundImageURL: "/images/yellow-brush.png",
    title: "Your Coffee Shop, Reimagined Online",
    description:
      "Escafe offers a comprehensive solution to help your coffee business thrive online",
    link: { text: "Find Out More", href: "/product-tour" },
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
    backgroundImageURL: "/images/grey-spiral.png",
    subtitle: "Key Features for Pet Product Businesses",
    backgroundColor: Colors.GREY,
  },
  iconCards: {
    cards: [
      {
        icon: "bullet-points-blue",
        title: "Intuitive Online Menu Builder",
        description:
          "Easily create a visually appealing and interactive menu that showcases your coffee creations.",
      },
      {
        icon: "plus-card-blue",
        title: "Customizable Ordering Options",
        description:
          "Allow customers to personalize their orders with modifiers, add-ons, and special requests.",
      },
      {
        icon: "check-save-blue",
        title: "Seamless Order Management",
        description:
          "Track orders in real-time, manage inventory, and streamline fulfillment for a smooth customer experience.",
      },
      {
        icon: "handshake-blue",
        title: "Loyalty & Rewards Programs",
        description:
          "Incentivize repeat business and build lasting customer relationships with personalized rewards and discounts.",
      },
      {
        icon: "present-blue",
        title: "Analytics & Insights",
        description:
          "Track sales data, customer behavior, and popular menu items to make informed business decisions.",
      },
      {
        icon: "book-blue",
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
    backgroundImageURL: "/images/blue-small-spirals.png",
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
    imageURL: "/images/tiger-computer.png",
    icon: "check",
    title: "Join the Ordrio Family",
    description:
      "We're here to support you every step of the way, from setup to your first online order and beyond.",
    links: [{ text: "Setup Your Free Account", href: "/support" }],
  },
};
