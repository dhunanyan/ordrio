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
  plugins: {
    iconCardSection: {
      color: Colors.GREY,
      alignCardsContentLeft: true,
      cards: [
        {
          icon: "icons/whatsapp-business.png",
          title: "Make an Impact",
          description:
            "Your work will directly influence the success of thousands of online businesses worldwide.",
          link: {
            text: "Install",
            target: "_blank",
            href: "https://control.ordrio.com/#/register",
            icon: "arrow-right-circle",
          },
        },
        {
          icon: "icons/facebook-ads.png",
          title: "Embrace Innovation",
          description:
            "We are constantly pushing boundaries and exploring new technologies to stay ahead of the curve.",
          link: {
            text: "Install",
            target: "_blank",
            href: "https://control.ordrio.com/#/register",
            icon: "arrow-right-circle",
          },
        },
        {
          icon: "icons/google-merchant-center-small.png",
          title: "Collaborative Culture",
          description:
            "We believe in teamwork, open communication, and a supportive environment where everyone's ideas are valued.",
          link: {
            text: "Install",
            target: "_blank",
            href: "https://control.ordrio.com/#/register",
            icon: "arrow-right-circle",
          },
        },
        {
          icon: "icons/multiple-payments-gateways.png",
          title: "Growth Opportunitie",
          description:
            "We invest in our employees' development, providing opportunities for learning, mentorship, and career advancement.",
          link: {
            text: "Install",
            target: "_blank",
            href: "https://control.ordrio.com/#/register",
            icon: "arrow-right-circle",
          },
        },
      ],
    },
  },
  // @TODO: PLUGINS HERE
  iconCardsContent: {
    backgroundImageURL: "/images/grey-spiral.png",
    title: "Unlock New Possibilities",
    description:
      "Whether you want to boost sales, streamline operations, or simply add more functionality, we have got the tools you need to succeed.",
    backgroundColor: Colors.GREY,
  },
  iconCards: {
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
      {
        title: "Marketing & <span>Promotions</span>",
        description:
          "Create targeted campaigns, send email newsletters, and manage social media.",
        type: AnimatedCard.MARKETING,
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
