import { AnimatedCard, Colors, Icons, SectionSeparator } from "@config";

export const RestaurantsContent = {
  hero: {
    title:
      "Ordrio Themes: Find the <span>Perfect Design</span> for Your Business",
    description: " Make a Lasting Impression with Your Store Design",
    sectionSeparator: SectionSeparator.MEDIUM,
  },
  commonSectionWithBigCards: {
    title: "Find Your Perfect Fit",
    description:
      "Every brand has a unique story to tell. Ordrio's curated collection of  themes helps you express your brand's personality and captivate your customers. your brand, your products, and your customers.",
    backgroundColor: Colors.WHITE,
  },

  // iconCardSection: {
  //   withIcon: true,
  //   backgroundImageURL: "/images/blue-spiral.png",
  //   title: "Why Choose Ordrio?",
  //   cards: [
  //     {
  //       icon: "design-blue",
  //       title: "Eye-Catching Design",
  //       description:
  //         "Our themes are crafted by Professional designers to ensure your store looks stunning.",
  //     },
  //     {
  //       icon: "customization-blue",
  //       title: "Easy Customization",
  //       description:
  //         "Tailor your theme to your brand's colours, fonts, and overall aesthetic with our intuitive tools.",
  //     },
  //     {
  //       icon: "mobile-blue",
  //       title: "Mobile-First Approach",
  //       description:
  //         "Your store will look and function flawlessly on any device, from smartphones to desktops.",
  //     },
  //   ],
  // },
  bannerSection1: {
    title: "Integrated Payments",
    description:
      "Accept a variety of payment methods securely and seamlessly. ",
    subtitle: "Download App",
    links: [
      { text: Icons["google-play"], href: "#" },
      { text: Icons["app-store"], href: "#" },
    ],
    backgroundImageURL: "/images/blue-small-spirals.png",
    imageURL: "/images/mobile-payments.png",
    tintColor: "white",
  },
  bigCardsSection: {
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
    showIcon: true,
    title: "Join the Ordrio Family",
    description:
      "We're here to support you every step of the way, from setup to your first online order and beyond.",
    links: [{ text: "Setup Your Free Account", href: "#" }],
  },
};
