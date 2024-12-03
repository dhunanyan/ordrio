import {
  AnimatedCard,
  Colors,
  Icons,
  Separator,
  ThemeCardVariant,
  BackgroundImage,
} from "@config";

export const GroceriesAndSupermarketsContent = {
  hero: {
    title: "Grocbay: Your <span>Grocery</span> Store, Online.",
    description: "Bring the heart of your grocery store to the digital world.",
    separator: Separator.MEDIUM,
    isFirstSection: true,
  },
  heroComponent: {
    imageURLs: [
      "/images/slideshow/grocbay/image-1.png",
      "/images/slideshow/grocbay/image-2.png",
      "/images/slideshow/grocbay/image-3.png",
      "/images/slideshow/grocbay/image-4.png",
    ],
  },
  commonSectionWithRowAndBigCards: {
    subtitle: "Why Grocbay?",
    description:
      "Grocbay is the easiest way to create your own online store - no marketplace fuss, just your brand, your products, and your customers.",
    backgroundColor: Colors.WHITE,
  },
  rowAndBigCardsInCommonSection: {
    bigCard: {
      card: AnimatedCard.GROCBAY,
      props: { variant: ThemeCardVariant.MOBILE },
    },
    iconColor: Colors.YELLOW,
    rowCards: [
      {
        icon: "marketplace",
        title: "Your Store, Your Way",
        description: "Showcase your unique brand, not someone else's.",
      },
      {
        icon: "squares",
        title: "Simple to Set Up",
        description:
          "Get your online store running quickly, even if you're not tech savvy.",
      },
      {
        icon: "check-window",
        title: "Easy to Manage",
        description: "Update your inventory, prices, and promotions with ease.",
      },
    ],
  },
  imageCardsSection: {
    backgroundImage: BackgroundImage.YELLOW_BRUSH,
    subtitle: "No More Tool Juggling",
    description:
      "One powerful platform for eCommerce, shipping, and payments - everything working together seamlessly",
    link: { text: "Find Out More", href: "/product-tour" },
    backgroundColor: Colors.YELLOW,
    displayInRow: true,
    alignContentLeft: true,
  },
  imageCards: {
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
  iconCardsContent: {
    backgroundImage: BackgroundImage.GREY_SPIRAL,
    subtitle: "Features That Make Your Grocery Store Shine Online",
    backgroundColor: Colors.GREY,
  },
  iconCards: {
    iconColor: Colors.BLUE,
    cards: [
      {
        icon: "marketplace",
        title: "Customizable Storefront",
        description:
          "Design your online store to match your brand's personality.",
      },
      {
        icon: "mobile",
        title: "Custom Mobile Apps",
        description:
          "Give your customers a dedicated app for easy ordering and a seamless shopping experience.",
      },
      {
        icon: "check-paper",
        title: "Easy Inventory Management",
        description: "Keep your online shelves stocked and organized.",
      },
      {
        icon: "ticket",
        title: "Flexible Pricing & Promotions",
        description:
          "Track ingredient usage, optimize stock levels, and control costs.",
      },
      {
        icon: "paper",
        title: "Convenient Ordering & Checkout",
        description: "Make it easy for customers to shop and pay.",
      },
      {
        icon: "car",
        title: "Delivery & Pickup Options",
        description:
          "Let your customers choose how they want to receive their groceries.",
      },
    ],
  },
  bannerSection1: {
    title: "Sales Insights",
    description:
      "Monitor your performance in real-time with detailed analytics, allowing you to make informed, data-driven decisions. Utilize these insights to optimize your strategies, enhance productivity, and achieve superior results",
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
