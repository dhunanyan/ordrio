import { AnimatedCard, Colors, BackgroundImage } from "@config";

export const AboutUsContent = {
  hero: {
    title: "We are More Than Just <span>Techies</span>",
    description:
      "We are dreamers, builders, and believers in the power of eCommerce. We are a bunch of passionate folks who love helping others succeed online.",
    isFirstSection: true,
  },
  heroComponent: {
    imageURLs: [
      "/images/slideshow/about-us/image-1.png",
      "/images/slideshow/about-us/image-2.png",
      "/images/slideshow/about-us/image-3.png",
      "/images/slideshow/about-us/image-4.png",
    ],
  },
  contentWithImageSection1: {
    imageURL: "/images/our-story.png",
    icon: "three-dots",
    subtitle: "Our Story",
    description:
      "Ordrio started as a simple idea scribbled on a napkin (okay, maybe not a napkin, but you get the picture). We saw a need for a better eCommerce platform - one that's easy, affordable, and actually helps businesses grow. So, we rolled up our sleeves and got to work.",
    displayInRow: true,
    alignContentLeft: true,
    switchOrder: true,
    linkColor: Colors.TRANSPARENT,
  },
  contentWithImageSection2: {
    imageURL: "/images/mission.png",
    icon: "three-dots",
    subtitle: "Mission",
    description:
      "To empower entrepreneurs and businesses by making eCommerce accessible, affordable, and easy to use for everyone. We believe in democratizing online selling, leveling the playing field, and helping businesses thrive in the digital age.",
    displayInRow: true,
    alignContentLeft: true,
    linkColor: Colors.TRANSPARENT,
  },
  iconCardsContent: {
    backgroundImage: BackgroundImage.GREY_SPIRAL,
    subtitle: "Our Values",
    description:
      "Whether you want to boost sales, streamline operations, or simply add more functionality, we have got the tools you need to succeed.",
    backgroundColor: Colors.GREY,
  },
  iconCards: {
    iconColor: Colors.BLUE,
    cards: [
      {
        icon: "customer-centric",
        title: "Customer-Centric",
        description:
          "We put our customers first and are dedicated to their success.",
      },
      {
        icon: "bulb",
        title: "Innovative",
        description:
          "We embrace new ideas, technologies, and approaches to create better solutions.",
      },
      {
        icon: "collaborative",
        title: "Collaborative",
        description:
          "We believe in the power of community and work together to achieve common goals.",
      },
      {
        icon: "shield",
        title: "Transparent",
        description:
          "We communicate openly and honestly with our customers, partners, and team members.",
      },
      {
        icon: "rocket",
        title: "Impactful",
        description:
          "We strive to make a positive difference in the world through our work.",
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
        type: AnimatedCard.VISION,
      },
      {
        title: "We are <span>more than</span> just a platform",
        description:
          "We are your partner, your cheerleader, your go-to resource for all things eCommerce. We are here to help you every step of the way, from launching your store to scaling your business.",
        type: AnimatedCard.WE_ARE,
      },
    ],
  },
  bannerSection: {
    backgroundImage: BackgroundImage.BLUE_SPIRAL,
    title: "Join Us on the Journey",
    description:
      "We are excited about the future of eCommerce, and we are always looking for talented individuals to join our team. If you are passionate about technology, entrepreneurship, and making a difference, we would love to hear from you.",
    links: [{ text: "Explore Career Opportunities", href: "/careers" }],
    alignContentLeft: false,
  },
};
