import {
  AnimatedCard,
  Colors,
  Separator,
  ThemeCardVariant,
  BackgroundImage,
} from "@config";

export const PetStoresContent = {
  hero: {
    title: "Unleash Your <span>Pet</span> Product Potential",
    description: "Create a Pawsome Online Store for Your Furry Friends",
    separator: Separator.MEDIUM,
    isFirstSection: true,
  },
  heroComponent: {
    imageURLs: [
      "/images/slideshow/pet-stores/image-1.png",
      "/images/slideshow/pet-stores/image-2.png",
      "/images/slideshow/pet-stores/image-3.png",
      "/images/slideshow/pet-stores/image-4.png",
    ],
  },
  commonSectionWithRowAndBigCards: {
    subtitle: "Why Choose PetO?",
    description: "Showcase Your Services, Simplify Your Bookings",
    backgroundColor: Colors.WHITE,
  },
  rowAndBigCardsInCommonSection: {
    bigCard: {
      card: AnimatedCard.PET_STORES,
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
  commonSection: {
    subtitle: "Cater to Every Pet Parent's Needs",
    backgroundColor: Colors.YELLOW,
  },
  commonSectionImageCards: {
    cards: [
      {
        title: "Showcase Your Products",
        description:
          "Present your pet products in a visually appealing and informative way, with high-quality images, detailed descriptions, and easy-to-use category filters.",
        imageURL: "/images/tiger-boxes-card.png",
      },
      {
        title: "Create a Personalized Experience",
        description:
          "Offer personalized product recommendations based on pet type, breed, and age, making it easier for customers to find what they need.",
        imageURL: "/images/mobile-card.png",
      },
      {
        title: "Build a Loyal Community",
        description:
          "Encourage customer engagement with reviews, ratings, social media sharing, and loyalty programs.",
        imageURL: "/images/mobile-message-boxes-card.png",
      },
      {
        title: "Drive Sales & Growth",
        description:
          "Optimize your store for conversions with strategic product placement, eye-catching banners, and special offers.",
        imageURL: "/images/rocket-card.png",
      },
    ],
  },
  bigCardsSection1: {
    cards: [
      {
        title: "Customization",
        description:
          "Tailor your Aura theme to your brand's unique colors, fonts, and style preferences.",
        type: AnimatedCard.CUSTOMIZATION,
      },
      {
        title: "Mobile-Optimized",
        description:
          "Our team is here to help you every step of the way, from setting up your store to launching successful campaigns.",
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
    cards: [
      {
        icon: "bullet-points-blue",
        title: "Pet-Specific Categories",
        description:
          "Organize your products by species (dogs, cats, birds, etc.), breed, age, & category (food, toys, grooming, etc.)",
      },
      {
        icon: "plus-card-blue",
        title: "Product Bundles & Kits",
        description:
          "Offer curated bundles of products that complement each other, encouraging larger purchases.",
      },
      {
        icon: "check-save-blue",
        title: "Subscription Options",
        description:
          "Allow customers to subscribe to recurring deliveries of food, treats, or other essentials.",
      },
      {
        icon: "handshake-blue",
        title: "Loyalty Programs",
        description:
          "Reward loyal customers with points, discounts, or exclusive offers.",
      },
      {
        icon: "present-blue",
        title: "Gift Registries",
        description:
          "Enable customers to create Wishlist's for their pets or for upcoming pet adoptions.",
      },
      {
        icon: "book-blue",
        title: "Educational Resources",
        description:
          "Helpful articles, blog posts, & guides to position yourself as a trusted expert in the pet care industry.",
      },
    ],
  },
  bannerSection1: {
    title: "Ready to Pamper Your Customers (and Their Pets)?",
    description:
      "Let PetO be your partner in creating a delightful online shopping experience for pet parents and their beloved companions.",
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
