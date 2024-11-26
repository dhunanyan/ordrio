import { Colors, Separator } from "@config";

export const CareersContent = {
  hero: {
    title: "Join the <span>Ordrio Crew</span>",
    description:
      "Shape the Future of eCommerce, We are not just building a company; we are building a movement.",
    separator: Separator.MEDIUM,
    isFirstSection: true,
  },
  heroComponent: {
    imageURLs: [
      "/images/slideshow/careers/image-1.png",
      "/images/slideshow/careers/image-2.png",
      "/images/slideshow/careers/image-3.png",
      "/images/slideshow/careers/image-4.png",
      "/images/slideshow/careers/image-5.png",
    ],
  },
  positionsSection: {
    title: "Ready to Work a with Great Team?",
    description: "Let's Explore the opportunities",
  },
  positionsSectionComponent: {
    positions: [
      {
        title: "User Interface Designer",
        requirements: [
          "Full-time",
          "On-site",
          "User Interface Design",
          "+1 years experience",
        ],
        link: { text: "Apply Now", href: "mailto:careers@ordrio.com" },
      },
      {
        title: "Motion Designer",
        requirements: [
          "Full-time",
          "Remotely",
          "Motion and Graphics",
          "+5 years experience",
          "",
        ],
        link: { text: "Apply Now", href: "mailto:careers@ordrio.com" },
      },
      {
        title: "Experienced Blockchain and MERN Developer",
        requirements: [
          "Full-time",
          "Remotely",
          "Blockchain, MERN Developer",
          "+5 years experience",
        ],
        link: { text: "Apply Now", href: "mailto:careers@ordrio.com" },
      },
    ],
  },
  iconCardSection: {
    backgroundImageURL: "/images/white-brushes-flipped.png",
    title: "Our Values",
    description:
      "Whether you want to boost sales, streamline operations, or simply add more functionality, we have got the tools you need to succeed.",
    color: Colors.GREY,
    cards: [
      {
        icon: "rocket-yellow",
        title: "Make an Impact",
        description:
          "Your work will directly influence the success of thousands of online businesses worldwide.",
      },
      {
        icon: "bulb-yellow",
        title: "Embrace Innovation",
        description:
          "We are constantly pushing boundaries and exploring new technologies to stay ahead of the curve.",
      },
      {
        icon: "collaborative-yellow",
        title: "Collaborative Culture",
        description:
          "We believe in teamwork, open communication, and a supportive environment where everyone's ideas are valued.",
      },
      {
        icon: "graph-yellow",
        title: "Growth Opportunitie",
        description:
          "We invest in our employees' development, providing opportunities for learning, mentorship, and career advancement.",
      },
    ],
  },
  bannerSection: {
    backgroundImageURL: "/images/blue-spiral.png",
    title: "Ready to Join the Ordrio Crew?",
    description:
      "If you're ready to be a part of a team that values innovation, diversity, and professional growth, Reach us at Careers@ordrio.com",
    links: [
      { text: "Send Mail to Ordrio Team", href: "mailto:careers@ordrio.com" },
    ],
    alignContentLeft: false,
  },
};
