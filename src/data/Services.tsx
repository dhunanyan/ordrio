import {
  AnimatedCard,
  Colors,
  Separator,
  ThemeCardVariant,
  BackgroundImage,
} from "@config";

export const ServicesContent = {
  hero: {
    title: "Your <span>Services,</span> Front and Center",
    description:
      "ServiOps is the perfect theme to highlight your expertise and make booking your services a breeze. Whether you are an auto repair shop, a spa, a salon, or any other service provider, ServiOps puts your offerings in the spotlight.",
    separator: Separator.MEDIUM,
    isFirstSection: true,
  },
  heroComponent: {
    imageURLs: [
      "/images/slideshow/services/image-1.png",
      "/images/slideshow/services/image-2.png",
      "/images/slideshow/services/image-3.png",
      "/images/slideshow/services/image-4.png",
    ],
  },
  commonSectionWithRowAndBigCards: {
    subtitle: "Why Choose ServiOps?",
    description: "Showcase Your Services, Simplify Your Bookings",
    backgroundColor: Colors.WHITE,
  },
  rowAndBigCardsInCommonSection: {
    bigCard: {
      card: AnimatedCard.SERVICES,
      props: { variant: ThemeCardVariant.MOBILE },
    },
    rowCards: [
      {
        icon: "customization-yellow",
        title: "Designed for Service Providers",
        description:
          "We understand the unique needs of service-based businesses, and our platform is built to address them.",
      },
      {
        icon: "cursor-yellow",
        title: "Ease of Use",
        description:
          "Even if you are not tech-savvy, you will find our interface simple and intuitive.",
      },
      {
        icon: "money-yellow",
        title: "Affordable",
        description:
          "Our pricing plans are flexible and scalable to fit your budget.",
      },
    ],
  },
  imageCardsSection: {
    backgroundImage: BackgroundImage.YELLOW_BRUSH,
    subtitle: "Highlight Your Expertise, Attract More Customers",
    description:
      "ServiOps empowers you to Showcase Your Services, Simplify Your Bookings",
    link: { text: "Find Out More", href: "/product-tour" },
    backgroundColor: Colors.YELLOW,
    displayInRow: true,
    alignContentLeft: true,
  },
  imageCards: {
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
  iconCardsContent: {
    backgroundImage: BackgroundImage.GREY_SPIRAL,
    subtitle: "Key Features for Service-Based Businesses",
    backgroundColor: Colors.GREY,
  },
  iconCards: {
    cards: [
      {
        icon: "check-save-blue",
        title: "Intuitive Booking System",
        description:
          "User can easily browse your services, select their preferred time and date, and book appointments online.",
      },
      {
        icon: "calendar-blue",
        title: "Calendar Integration",
        description:
          "Sync your ServiOps calendar with your personal calendar (Google, Outlook, etc) to avoid double-booking.",
      },
      {
        icon: "worker-blue",
        title: "Staff Management",
        description:
          "Assign appointments to specific staff members, manage their schedules, and track their availability.",
      },
      {
        icon: "bank-blue",
        title: "Payment Processing",
        description: "Accept payments online through secure payment gateways.",
      },
      {
        icon: "user-blue",
        title: "Client Management",
        description:
          "Store customer information, track their appointment history, and send personalized reminders.",
      },
      {
        icon: "mobile-blue",
        title: "Mobile-Optimized",
        description:
          "Your booking system looks great and functions seamlessly on any device.",
      },
    ],
  },
  bannerSection1: {
    title: "Ready to Streamline Your Services?",
    description:
      "Let ServiOps take the hassle out of managing your services, so you can focus on delivering exceptional customer experiences.",
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
          "Enable customers to leave feedback and build social proof. ",
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
