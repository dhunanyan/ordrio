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
    iconColor: Colors.YELLOW,
    rowCards: [
      {
        icon: "customization",
        title: "Designed for Service Providers",
        description:
          "We understand the unique needs of service-based businesses, and our platform is built to address them.",
      },
      {
        icon: "cursor-pointer",
        title: "Ease of Use",
        description:
          "Even if you are not tech-savvy, you will find our interface simple and intuitive.",
      },
      {
        icon: "money",
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
    isCarousel: true,
    cards: [
      {
        title: "Showcase Your Services",
        description:
          "Present your services in a clear, organized way with detailed descriptions, pricing, and images.",
        imageURL: "/images/paper-card.png",
      },
      {
        title: "Manage Your Schedule",
        description:
          "Keep track of appointments, staff availability, and customer information in one central location.",
        imageURL: "/images/calendar-card.png",
      },
      {
        title: "Drive More Business",
        description:
          "Attract new customers and encourage repeat bookings with special offers, promotions, and loyalty programs.",
        imageURL: "/images/handshake-card.png",
      },
      {
        title: "Simplify Booking",
        description:
          "Enable customers to easily schedule appointments online, 24/7.",
        imageURL: "/images/mobile-card.png",
      },
      {
        title: "Boost Your Brand",
        description:
          "Create a professional online presence that highlights your expertise and builds trust.",
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
    iconColor: Colors.BLUE,
    cards: [
      {
        icon: "check-save",
        title: "Intuitive Booking System",
        description:
          "User can easily browse your services, select their preferred time and date, and book appointments online.",
      },
      {
        icon: "calendar",
        title: "Calendar Integration",
        description:
          "Sync your ServiOps calendar with your personal calendar (Google, Outlook, etc) to avoid double-booking.",
      },
      {
        icon: "worker",
        title: "Staff Management",
        description:
          "Assign appointments to specific staff members, manage their schedules, and track their availability.",
      },
      {
        icon: "bank",
        title: "Payment Processing",
        description: "Accept payments online through secure payment gateways.",
      },
      {
        icon: "user",
        title: "Client Management",
        description:
          "Store customer information, track their appointment history, and send personalized reminders.",
      },
      {
        icon: "mobile",
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
