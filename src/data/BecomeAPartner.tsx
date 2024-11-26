import { AnimatedCard, Colors, Separator } from "@config";

export const BecomeAPartnerContent = {
  hero: {
    title: "<span>Grow</span> Your Business, Empower Entrepreneurs",
    description: "Join the Ordrio Partner Program and Thrive Together",
    separator: Separator.MEDIUM,
    isFirstSection: true,
    //@LINKS: Join Partner Program -> /support
  },
  heroComponent: {
    imageURLs: [
      "/images/slideshow/become-a-partner/image-1.png",
      "/images/slideshow/become-a-partner/image-2.png",
      "/images/slideshow/become-a-partner/image-3.png",
      "/images/slideshow/become-a-partner/image-4.png",
      "/images/slideshow/become-a-partner/image-5.png",
    ],
  },
  commonSection1: {
    subtitle: "Partnership Opportunities",
    description:
      "We offer a variety of partnership programs to suit your skills and interests",
    separator: Separator.MEDIUM,
  },
  bigCardsInCommonSection1: {
    cards: [
      {
        title: "<span>Referral</span> Partner",
        description:
          "Refer new customers to Ordrio and earn a commission on their subscription fees.",
        type: AnimatedCard.MONEY_BAG,
      },
      {
        title: "<span>Solution</span> Partner",
        description:
          "Provide consulting, development, or design services to Ordrio merchants and help them get the most out of our platform.",
        type: AnimatedCard.PHONE_CHAT,
      },
    ],
  },
  bigCardsInCommonSection2: {
    cards: [
      {
        title: "<span>Technology</span> Partner",
        description:
          "Integrate your technology with Ordrio to offer enhanced functionality and value to our customers.",
        type: AnimatedCard.TECHNOLOGY_PARTNER,
      },
      {
        title: "<span>Affiliate</span> Partner",
        description:
          "Promote Ordrio on your website or social media channels and earn a commission on every sale you generate.",
        type: AnimatedCard.SPEAKER,
      },
    ],
  },
  commonSection2: {
    subtitle: "Who Can Become an Ordrio Partner?",
    description: "We welcome a diverse range of partners, including",
  },
  bigCardsInCommonSection3: {
    cards: [
      {
        title: "Digital Agencies",
        description: "Help businesses build and manage their online stores.",
        link: {
          text: "Join Now",
          href: "https://control.ordrio.com/#/register",
          target: "_blank",
        },
        type: AnimatedCard.THREE_PEOPLE_LAPTOP,
      },

      {
        title: "eCommerce Consultants",
        description:
          "Provide expert guidance and support to online businesses.",
        type: AnimatedCard.TWO_MEN_HANDSHAKE,
      },
    ],
  },
  bigCardsInCommonSection4: {
    cards: [
      {
        title: "Web Developers & Designers",
        description:
          "Create custom themes, integrations, and features for Ordrio stores.",
        type: AnimatedCard.GIRL_WITH_LAPTOP,
      },
      {
        title: "Marketing Professionals",
        description:
          "Help businesses promote their online stores and drive sales.",
        type: AnimatedCard.MAN_WITH_TABLET,
      },
      {
        title: "Bloggers & Influencers",
        description:
          "Share your knowledge and expertise with your audience and refer them to Ordrio.",
        type: AnimatedCard.MAN_WITH_SPEAKER,
      },
    ],
  },
  iconCardSection: {
    backgroundImageURL: "/images/grey-spiral.png",
    title: "Why Partner with Ordrio?",
    description:
      "Unlock new revenue streams, expand your reach, and help businesses succeed online with Ordrio, the leading eCommerce platform for growing brands.",
    color: Colors.GREY,
    cards: [
      {
        icon: "wallet-blue",
        title: "Lucrative Earning Potential",
        description:
          "Earn generous commissions & recurring revenue by referring new customers to Ordrio or providing valuable services to our existing merchants.",
      },
      {
        icon: "customer-centric-blue",
        title: "Expand Your Reach",
        description:
          "Tap into our vast network of eCommerce businesses and gain exposure to a global audience.",
      },
      {
        icon: "check-medal-blue",
        title: "Access Exclusive Resources",
        description:
          "Get priority support, training materials, co-marketing opportunities, and early access to new features.",
      },
      {
        icon: "rocket-blue",
        title: "Make a Real Impact",
        description:
          "Help entrepreneurs and small businesses achieve their eCommerce dreams by providing them with the tools and support they need.",
      },
      {
        icon: "chat-blue",
        title: "Join a Thriving Community",
        description:
          "Connect with other passionate professionals in the eCommerce space and build valuable relationships.",
      },
    ],
  },
  bannerSection: {
    backgroundImageURL: "/images/blue-spiral.png",
    title: "Ready to Partner with Us?",
    description:
      "Join the Ordrio Partner Program and become part of a growing community of eCommerce professionals dedicated to empowering businesses worldwide.",
    links: [{ text: "Contact Us", href: "/support" }],
    alignContentLeft: false,
  },
};
