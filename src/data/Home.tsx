import {
  AnimatedCard,
  Icons,
  Separator,
  BackgroundImage,
  Colors,
} from "@config";
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
    subtitle: "eCommerce Made Simple—No More Juggling!",
    list: [
      "Let Ordrio handle the tech, while you grow your brand",
      "Sell with ease and manage your business seamlessly",
      "Build connections, nurture customers, and thrive",
    ],
    displayInRow: true,
    alignContentLeft: true,
    switchOrder: true,
  },
  partnerSection: {
    backgroundImage: BackgroundImage.GREY_SPIRAL,
    title: "Helping <span>Businesses</span> Thrive",
    partners: [
      {
        imageURL: "/images/logos/chenai-start.png",
        target: "_blank",
        href: "https://chennaistar.com",
      },
      {
        imageURL: "/images/logos/ziippy.png",
        target: "_blank",
        href: "https://zippyonline.com",
      },
      {
        imageURL: "/images/logos/kg-cart.png",
        target: "_blank",
        href: "https://kgcart.com",
      },
      {
        imageURL: "/images/logos/jayalaxmi-silks.png",
        target: "_blank",
        href: "https://jayalaxmisilks.co",
      },
      {
        imageURL: "/images/logos/purity-prayag.png",
        target: "_blank",
        href: "https://purityprayag.com",
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
  imageCardsSection: {
    backgroundImage: BackgroundImage.YELLOW_BRUSH,
    subtitle: "One Platform, Endless Possibilities",
    description:
      "Simplify your workflow with a single solution for eCommerce, shipping, and payments—all perfectly in sync.",
    link: { text: "Find Out More", href: "/product-tour" },
    backgroundColor: Colors.YELLOW,
    displayInRow: true,
    alignContentLeft: true,
    biggerGap: true,
  },
  imageCards: {
    isCarousel: true,
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
        link: { text: "View Details", href: "/plugins" },
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
    slides: [
      {
        imageURL: "/images/carousels/landing-theme/0.png",
        href: "/restaurants",
      },
      {
        imageURL: "/images/carousels/landing-theme/1.png",
        href: "/milk-and-tiffin-subscriptions",
      },
      {
        imageURL: "/images/carousels/landing-theme/2.png",
        href: "/grocbay",
      },
      {
        imageURL: "/images/carousels/landing-theme/3.png",
        href: "/clothing-and-accessories",
      },
    ],
  },
  planSection: {
    description: "No matter your budget",
    subtitle: "there's a plan tailored just for you",
  },
  planSectionInCommonSection: PlanContent,
  accordionSection: {
    subtitle: "Frequently Asked Questions",
    link: { text: "Ask Us Now", href: "/support" },
    displayInRow: true,
    verticalAlignTop: true,
    alignContentLeft: true,
  },
  bannerSection: {
    backgroundImage: BackgroundImage.BLUE_SPIRAL,
    imageURL: "/images/tiger-boxes.png",
    icon: "check",
    title: "Take Your Business Online Today",
    description: "Launch your store in just a few clicks—no cost, no hassle!",
    links: [
      {
        text: "Get Started for Free",
        target: "_blank",
        href: "https://control.ordrio.com/#/register",
      },
    ],
  },
};
