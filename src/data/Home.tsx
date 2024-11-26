import { AnimatedCard, Icons, Separator } from "@config";
import { PlanContent } from "./Components";

export const HomeContent = {
  hero: {
    title: "The Ultimate <span>eCommerce</span> Business Solution",
    description: `
      <span>${Icons["check"]} Simplify online store</span>
      <span>${Icons["check"]}Streamline shipping</span>
      <span>${Icons["check"]}Manage sales & more</span>
    `,
    link: {
      text: "Get Started for Free",
      target: "_blank",
      href: "https://control.ordrio.com",
    },
    separator: Separator.BIG,
    bottomImageURL: "/images/tablet-and-mobile-view-tiger.png",
    isFirstSection: true,
  },
  listSection: {
    imageURL: "/images/tiger-painting.png",
    title: "eCommerce Shouldn't Be a Juggling Act",
    list: [
      "At Ordrio, we handle the tech headaches so you can focus on growing your brand",
      "Sell incredible products and manage sales seamlessly",
      "Connect with customers, nurture relationships, and watch your business thrive",
    ],
  },
  partnerSection: {
    backgroundImageURL: "/images/grey-spiral.png",
    title: "Helping <span>Businesses</span> Thrive",
    partners: [
      {
        imageURL: "/images/logos/chenai-start.png",
        target: "_blank",
        href: "https://chennaistar.com",
        height: 43,
        width: 152,
      },
      {
        imageURL: "/images/logos/tokree.png",
        target: "_blank",
        href: "https://www.quickcompany.in/trademarks/2848950-tokree-no-more-khit-pit",
        height: 66,
        width: 164,
      },
      {
        imageURL: "/images/logos/fib.png",
        target: "_blank",
        href: "https://appagg.com/android/shopping/feel-it-buy-38658831.html",
        height: 60,
        width: 90,
      },
      {
        imageURL: "/images/logos/country.png",
        target: "_blank",
        href: "https://www.countrychickenco.in",
        height: 58,
        width: 88,
      },
      {
        imageURL: "/images/logos/shree-baba.png",
        target: "_blank",
        href: "https://www.instagram.com/shreebabaramdevdhaba",
        height: 48,
        width: 202,
      },
    ],
    quotes: [
      {
        quote:
          "“Ordrio has transformed the way we do business. The platform is incredibly user-friendly, and the customer support is outstanding. We saw a significant increase in sales within the first month!”",
        author: "<span>John D.</span> - Small Business Owner",
      },
      {
        quote:
          "“Ordrio has transformed the way we do business. The platform is incredibly user-friendly, and the customer support is outstanding. We saw a significant increase in sales within the first month!”",
        author: "<span>John D.</span> - Small Business Owner",
      },
    ],
  },
  imageCardsWithContentSection: {
    backgroundImageURL: "/images/yellow-brush.png",
    title: "No More Tool Juggling",
    description:
      "One powerful platform for eCommerce, shipping, and payments - everything working together seamlessly",
    link: { text: "Find Out More", href: "/product-tour" },
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
  bigCardsSection: {
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
        link: { text: "View Detail's", href: "/plugins" },
        type: AnimatedCard.ADD_ONS,
      },
    ],
  },
  websiteAndMobileSection: {
    content: {
      spans: ["Website", "Mobile App"],
      title: "Seamless Mobile Shopping",
      description:
        "Deliver a smooth shopping experience for your customers on any device.",
      bottomLinks: [
        { text: "google-play", href: "#" }, //@LINKS: requested - to be added
        { text: "app-store", href: "#" }, //@LINKS: requested - to be added
      ],
    },
    screenshotURLs: ["/images/carousels/landing-screenshot/0.png"],
  },
  carouselSection: {
    title: "Themes & Customization",
    subtitle: "Ordrio adapts to every business's needs.",
    description:
      "Whether you're launching a restaurant, boutique, or tech store, we offer stunning templates tailored to you. Customize easily to match your brand and start selling!",
    buttons: [
      { text: `${Icons["arrow-left"]}` },
      { text: `${Icons["arrow-right"]}` },
    ],
    imageURLs: [
      "/images/carousels/landing-theme/0.png",
      "/images/carousels/landing-theme/1.png",
      "/images/carousels/landing-theme/2.png",
      "/images/carousels/landing-theme/3.png",
    ],
  },
  planSection: {
    description: "No matter your budget",
    subtitle: "We've got a plan that fits",
  },
  planSectionInCommonSection: PlanContent,
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
  bannerSection: {
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
