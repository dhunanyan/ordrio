import { AnimatedCard, Colors, SectionSeparator } from "@config";

export const IntegrationsContent = {
  hero: {
    title: "Connect Ordrio with Your <span>Favourite Tools</span>",
    description:
      "Ordrio's extensive suite of integrations empowers you to streamline your workflow, expand your reach, and unlock new growth opportunities.",
    sectionSeparator: SectionSeparator.MEDIUM,
    link: { text: "Signup for free", href: "#" },
  },
  iconCardSection: {
    title: "Marketing & Sales",
    description:
      "Ordrio seamlessly integrates with a wide range of 3rd party platforms and tools, including",
    link: { text: "Sign-in to Explore More", href: "#" },
    color: Colors.WHITE,
    displayInRow: true,
    alignCardsContentLeft: true,
    cards: [
      {
        icon: "icons/whatsapp-business.png",
        title: "Make an Impact",
        description:
          "Your work will directly influence the success of thousands of online businesses worldwide.",
        link: { text: "Install", href: "#", icon: "arrow-right-circle" },
      },
      {
        icon: "icons/facebook-ads.png",
        title: "Embrace Innovation",
        description:
          "We are constantly pushing boundaries and exploring new technologies to stay ahead of the curve.",
        link: { text: "Install", href: "#", icon: "arrow-right-circle" },
      },
      {
        icon: "icons/google-merchant-center.png",
        title: "Collaborative Culture",
        description:
          "We believe in teamwork, open communication, and a supportive environment where everyone's ideas are valued.",
        link: { text: "Install", href: "#", icon: "arrow-right-circle" },
      },
      {
        icon: "icons/multiple-payments-gateways.png",
        title: "Growth Opportunitie",
        description:
          "We invest in our employees' development, providing opportunities for learning, mentorship, and career advancement.",
        link: { text: "Install", href: "#", icon: "arrow-right-circle" },
      },
    ],
  },
  imageCardsWithContentSection: {
    backgroundImageURL: "/images/yellow-brush.png",
    title: "Benefits of Ordrio Integrations ",
    description:
      "Ordrio's extensive suite of integrations empowers you to streamline your workflow.",
    link: { text: "Get Started Now", href: "#" },
    cards: [
      {
        title: "Simplified Setup",
        description:
          "Easily connect Ordrio with your chosen platforms in just a few clicks.",
        imageURL: "/images/mobile-card.png",
      },
      {
        title: "Enhanced Functionality",
        description:
          "Unlock new features and functionalities within Ordrio through powerful integrations.",
        imageURL: "/images/puzzle-card.png",
      },
      {
        title: "Improved Efficiency",
        description:
          "Streamline your workflow and save time and resources with automated processes.",
        imageURL: "/images/rocket-small-card.png",
      },
      {
        title: "Scalability",
        description:
          "Adapt your eCommerce ecosystem to your evolving needs with flexible integrations.",
        imageURL: "/images/scalability.png.png",
      },
      {
        title: "Seamless Data Flow",
        description:
          "Auto sync data between Ordrio & integrated tools, eliminating manual data entry & ensuring accuracy.",
        imageURL: "/images/cloud-card.png",
      },
    ],
  },
  bigCardsSection: {
    cards: [
      {
        title: "<span>Shipping</span> Partners",
        description:
          "Integrate with leading shipping carriers to streamline order fulfilment and track shipments in real-time. Customer Support",
        type: AnimatedCard.DELIVERY,
      },
      {
        title: "Live Chat <span>Solutions</span>",
        description:
          "Provide instant customer support through live chat, email, and other channels. And more!",
        type: AnimatedCard.SUPPORT,
      },
    ],
  },
  shipPartners: {
    title: "Our Integration Partners",
    imageURLs: [
      "/images/logos/zomato.png",
      "/images/logos/blue-dart.png",
      "/images/logos/dunzo.png",
      "/images/logos/dtdc.png",
    ],
    description:
      "Ordrio's growing library of integrations continues to expand, offering you the flexibility to connect your store with the tools you need to succeed",
  },
  bannerSection: {
    backgroundImageURL: "/images/blue-spiral.png",
    title: "Get Started Today",
    description:
      "Explore our extensive library of integrations and discover how Ordrio can help you connect your store with the tools you need to thrive in the competitive eCommerce landscape.",
    links: [{ text: "Start Your Free Trial", href: "#" }],
    subtitle:
      "Let Ordrio be your one-stop shop for all your eCommerce integration needs.",
    alignContentLeft: false,
  },
};
