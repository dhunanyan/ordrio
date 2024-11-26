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
    color: Colors.LIGHT_WHITE,
    alignCardsContentLeft: true,
    cards: [
      {
        icon: "/icons/marketplace.png",
        title: "Marketplace",
        description:
          "Create a seamless online experience with an optimized, efficient shipping process.",
      },
      {
        icon: "/icons/wallet.png",
        title: "Wallet",
        description:
          "Share your unique link, and both you and your friends can enjoy exclusive benefits",
      },
      {
        icon: "/icons/loyalty.png",
        title: "Loyalty",
        description:
          "Share your unique link, and both you and your friends can enjoy exclusive benefits",
      },
      {
        icon: "/icons/refer-and-earn.png",
        title: "Refer and Earn",
        description:
          "Share your unique link, and both you and your friends can enjoy exclusive benefits",
      },
      {
        icon: "/icons/store-timings.png",
        title: "Store Timings ",
        description:
          "Specify the hours your store will be open to customers each day.",
      },
      {
        icon: "/icons/add-ons.png",
        title: "Add-Ons",
        description:
          "Add custom filters to effectively create and manage add-ons for specific products",
      },
      {
        icon: "/icons/filters.png",
        title: "Filters",
        description:
          "Add a custom filter to your products to ease the product-finding process.",
      },
      {
        icon: "/icons/brands.png",
        title: "Brands",
        description:
          "Streamline brand development with effortless build, edit, and management tools.",
      },
      {
        icon: "/icons/seo-master.png",
        title: "SEO Master",
        description:
          "Unlock unmatched SEO power with All-in-one SEO's streamlined interface.",
      },
      {
        icon: "/icons/google-analytics.png",
        title: "Google Analytics",
        description:
          "Google Analytics offers a full platform for tracking website traffic.",
      },
      {
        icon: "/icons/careem.png",
        title: "Careem",
        description:
          "Drive or deliver with Careem and earn with every ride. Choose your own hours.",
      },
      {
        icon: "/icons/in-house-delivery-fleet.png",
        title: "In House delivery Fleet",
        description:
          "Drive with Careem, earn per ride, and set your own hours.",
      },
      {
        icon: "/icons/selling-method.png",
        title: "Selling method",
        description:
          "Empower your eCommerce with unit-based dynamic weight and volume selling options",
      },
      {
        icon: "/icons/packing-batch.png",
        title: "Packing batch",
        description:
          "Optimize packaging, boost efficiency, and streamline operations with our plugin.",
      },
      {
        icon: "/icons/google-merchant-center.png",
        title: "Google Merchant Center",
        description:
          "Get your business noticed when customers search for similar products on Google.",
      },
      {
        icon: "/icons/polygon.png",
        title: "Polygon",
        description:
          "Gain precise control over your deliveries and blocks planning with our Polygon plugin.",
      },
    ],
  },
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
