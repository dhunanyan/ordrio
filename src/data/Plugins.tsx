import { AnimatedCard, Colors, BackgroundImage } from "@config";
import { PluginsContent as PluginComponentContent } from "./Components";

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
  plugins: {
    color: Colors.LIGHT_WHITE,
    alignCardsContentLeft: true,
    cards: PluginComponentContent,
  },
  iconCardsContent: {
    backgroundImage: BackgroundImage.GREY_SPIRAL,
    subtitle: "Unlock New Possibilities",
    description:
      "Whether you want to boost sales, streamline operations, or simply add more functionality, we have got the tools you need to succeed.",
    backgroundColor: Colors.GREY,
  },
  iconCards: {
    iconColor: Colors.BLUE,
    cards: [
      {
        icon: "monitor",
        title: "Streamline Operations",
        description:
          "Optimize order packing, manage multiple locations effortlessly, & gain deep insights with advanced analytics.",
      },
      {
        icon: "customization",
        title: "Enhance Customer Experience",
        description:
          "Offer flexible delivery options, enable in-store pickup, and cater to B2B clients with specialized pricing.",
      },
      {
        icon: "globe",
        title: "Go Global",
        description:
          "Reach international customers with multi-language support and real-time shipping rates.",
      },
    ],
  },
  bigCardsSection: {
    cards: [
      {
        title: "Boost Sales & Marketing",
        description:
          "Implement abandoned cart recovery, run targeted promotions, and create engaging membership programs to drive revenue.",
        type: AnimatedCard.ROCKET_V2,
      },
    ],
  },
  bannerSection: {
    backgroundImage: BackgroundImage.BLUE_SPIRAL,
    title:
      "Discover the power of Ordrio add-ons and transform your online store into a thriving business.",
    links: [{ text: "Request a Personalized Demo", href: "#" }], //@LINKS: requested - to be added
    alignContentLeft: false,
    tintColor: Colors.YELLOW,
  },
};
