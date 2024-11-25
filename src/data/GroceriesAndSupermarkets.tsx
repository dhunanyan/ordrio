import {
  AnimatedCard,
  Colors,
  Icons,
  SectionSeparator,
  ThemeCardVariant,
} from "@config";

export const GroceriesAndSupermarketsContent = {
  hero: {
    title: "Grocbay: Your <span>Grocery</span> Store, Online.",
    description: "Bring the heart of your grocery store to the digital world.",
    sectionSeparator: SectionSeparator.MEDIUM,
  },
  heroComponent: {
    imageURLs: [
      "/images/slideshow/groceries-and-supermarkets/image-1.png",
      "/images/slideshow/groceries-and-supermarkets/image-2.png",
      "/images/slideshow/groceries-and-supermarkets/image-3.png",
      "/images/slideshow/groceries-and-supermarkets/image-4.png",
    ],
  },
  commonSectionWithRowAndBigCards: {
    title: "Why Grocbay?",
    description:
      "Grocbay is the easiest way to create your own online store - no marketplace fuss, just your brand, your products, and your customers.",
    backgroundColor: Colors.WHITE,
  },
  rowAndBigCardsInCommonSection: {
    bigCard: {
      card: AnimatedCard.GROCBAY,
      props: { variant: ThemeCardVariant.MOBILE },
    },
    rowCards: [
      {
        icon: "marketplace-yellow",
        title: "Your Store, Your Way",
        description: "Showcase your unique brand, not someone else's.",
      },
      {
        icon: "squares-yellow",
        title: "Simple to Set Up",
        description:
          "Get your online store running quickly, even if you're not tech savvy.",
      },
      {
        icon: "window-check-yellow",
        title: "Easy to Manage",
        description: "Update your inventory, prices, and promotions with ease.",
      },
    ],
  },
  imageCardsWithContentSection: {
    backgroundImageURL: "/images/yellow-brush.png",
    title: "No More Tool Juggling",
    description:
      "One powerful platform for eCommerce, shipping, and payments - everything working together seamlessly",
    link: { text: "Find Out More", href: "#" },
    cards: [
      {
        title: "Add your first product",
        description:
          "Add first product with price. Photos and It's description that you want to sell",
        imageURL: "/images/tiger-boxes-card.png",
      },
      {
        title: "Set up payments",
        description:
          "Revolutionize your payment experience with Ordrio swipe feature",
        imageURL: "/images/credit-cards-card.png",
      },
      {
        title: "Other Store details",
        description:
          "Add store information, including store name and store type",
        imageURL: "/images/papers-card.png",
      },
      {
        title: "Customize Your Store",
        description:
          "Unleash the Power of Personalization with Our Store Customization Options!",
        imageURL: "/images/tiger-painting-card.png",
      },
      {
        title: "Add delivery location",
        description:
          "Configure pickup address, delivery type, and delivery charge",
        imageURL: "/images/tiger-backpack-card.png",
      },
    ],
  },
  bigCardsSection1: {
    cards: [
      {
        title: "<span>Delivery</span> or Store Pickup",
        description:
          "Choose delivery or pickup options that work best for your business.",
        type: AnimatedCard.DELIVERY,
      },
      {
        title: "Built for Growth",
        description:
          "Get the tools you need to attract new customers and keep them coming back.",
        type: AnimatedCard.BUILT_FOR_GROWTH,
      },
    ],
  },
  iconCardSection: {
    backgroundImageURL: "/images/grey-spiral.png",
    title: "Features That Make Your Grocery Store Shine Online",
    color: Colors.GREY,
    cards: [
      {
        icon: "marketplace-blue",
        title: "Customizable Storefront",
        description:
          "Design your online store to match your brand's personality.",
      },
      {
        icon: "mobile-blue",
        title: "Custom Mobile Apps",
        description:
          "Give your customers a dedicated app for easy ordering and a seamless shopping experience.",
      },
      {
        icon: "paper-check-blue",
        title: "Easy Inventory Management",
        description: "Keep your online shelves stocked and organized.",
      },
      {
        icon: "ticket-blue",
        title: "Flexible Pricing & Promotions",
        description:
          "Track ingredient usage, optimize stock levels, and control costs.",
      },
      {
        icon: "paper-blue",
        title: "Convenient Ordering & Checkout",
        description: "Make it easy for customers to shop and pay.",
      },
      {
        icon: "car-blue",
        title: "Delivery & Pickup Options",
        description:
          "Let your customers choose how they want to receive their groceries.",
      },
      ,
    ],
  },
  bannerSection1: {
    title: "Sales Insights",
    description:
      "Monitor your performance in real-time with detailed analytics, allowing you to make informed, data-driven decisions. Utilize these insights to optimize your strategies, enhance productivity, and achieve superior results",
    subtitle: "Download App",
    links: [
      { text: Icons["google-play"], href: "#" },
      { text: Icons["app-store"], href: "#" },
    ],
    backgroundImageURL: "/images/blue-small-spirals.png",
    imageURL: "/images/tiger-in-phone.png",
    tintColor: "white",
  },
  bigCardsSection2: {
    cards: [
      {
        title: "Customer Accounts",
        description:
          "Build relationships with customers through profiles and order history.",
        type: AnimatedCard.RELATIONSHIP,
      },
      {
        title: "Marketing <span>Tools</span>",
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
    links: [{ text: "Setup Your Free Account", href: "#" }],
  },
};
