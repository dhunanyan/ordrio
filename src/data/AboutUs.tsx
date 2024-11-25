import { AnimatedCard, Colors } from "@config";

export const AboutUs = {
  hero: {
    title: "We are More Than Just <span>Techies</span>",
    description:
      "We are dreamers, builders, and believers in the power of eCommerce. We are a bunch of passionate folks who love helping others succeed online.",
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
    title: "Our Story",
    description:
      "Ordrio started as a simple idea scribbled on a napkin (okay, maybe not a napkin, but you get the picture). We saw a need for a better eCommerce platform - one that's easy, affordable, and actually helps businesses grow. So, we rolled up our sleeves and got to work.",
  },
  contentWithImageSection2: {
    imageURL: "/images/mission.png",
    icon: "three-dots",
    title: "Mission",
    description:
      "To empower entrepreneurs and businesses by making eCommerce accessible, affordable, and easy to use for everyone. We believe in democratizing online selling, leveling the playing field, and helping businesses thrive in the digital age. ",
    switchOrder: true,
  },
  iconCardSection: {
    backgroundImageURL: "/images/grey-spiral.png",
    title: "Our Values",
    description:
      "Whether you want to boost sales, streamline operations, or simply add more functionality, we have got the tools you need to succeed.",
    color: Colors.WHITE,
    cards: [
      {
        icon: "customer-centric-blue",
        title: "Customer-Centric",
        description:
          "We put our customers first and are dedicated to their success.",
      },
      {
        icon: "bulb-blue",
        title: "Innovative",
        description:
          "We embrace new ideas, technologies, and approaches to create better solutions.",
      },
      {
        icon: "collaborative-blue",
        title: "Collaborative",
        description:
          "We believe in the power of community and work together to achieve common goals.",
      },
      {
        icon: "shield-blue",
        title: "Transparent",
        description:
          "We communicate openly and honestly with our customers, partners, and team members.",
      },
      {
        icon: "rocket-blue",
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
    backgroundImageURL: "/images/blue-spiral.png",
    title: "Join Us on the Journey",
    description:
      "We are excited about the future of eCommerce, and we are always looking for talented individuals to join our team. If you are passionate about technology, entrepreneurship, and making a difference, we would love to hear from you.",
    links: [{ text: "Explore Career Opportunities", href: "#" }],
    alignContentLeft: false,
  },
};
