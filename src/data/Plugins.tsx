import { AnimatedCard, Colors } from "@config";

export const PluginsContent = {
  hero: {
    title: "Customize Your Store with Powerful <span>Add-ons</span>",
    description:
      "Take your Ordrio store to the next level with our handpicked selection of add-ons.",
    link: {
      text: "Signup for free",
      target: "_blank",
      href: "https://control.ordrio.com/#/register",
    },
    isFirstSection: true,
  },
  // @TODO: PLUGINS HERE
  iconCardSection: {
    backgroundImageURL: "/images/grey-spiral.png",
    title: "Unlock New Possibilities",
    description:
      "Whether you want to boost sales, streamline operations, or simply add more functionality, we have got the tools you need to succeed.",
    color: Colors.GREY,
    cards: [
      {
        icon: "monitor-blue",
        title: "Streamline Operations",
        description:
          "Optimize order packing, manage multiple locations effortlessly, & gain deep insights with advanced analytics.",
      },
      {
        icon: "customization-blue",
        title: "Enhance Customer Experience",
        description:
          "Offer flexible delivery options, enable in-store pickup, and cater to B2B clients with specialized pricing.",
      },
      {
        icon: "globe-blue",
        title: "Go Global",
        description:
          "Reach international customers with multi-language support and real-time shipping rates.",
      },
      ,
    ],
  },
  bigCardsSection: {
    cards: [
      {
        title: "Boost Sales & Marketing",
        description:
          "Implement abandoned cart recovery, run targeted promotions, and create engaging membership programs to drive revenue.",
        type: AnimatedCard.CONVERSION,
      },
      //@LINKS: Replace the card with "Marketing & Promotions"
      {
        title: "<span>100+</span> Add-ons",
        description:
          "Boost your store's potential with the perfect add-ons for marketing, analytics, and more.",
        link: { text: "View Details", href: "#" },
        type: AnimatedCard.ADD_ONS,
      },
    ],
  },
  bannerSection: {
    backgroundImageURL: "/images/blue-spiral.png",
    title:
      "Discover the power of Ordrio add-ons and transform your online store into a thriving business.",
    links: [{ text: "Setup Your Free Account", href: "#" }], //@LINKS: requested - to be added
    alignContentLeft: false,
  },
};
