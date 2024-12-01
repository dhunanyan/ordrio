import { AnimatedCard, Colors, Separator, BackgroundImage } from "@config";

export const SupportContent = {
  hero: {
    title: "Get the <span>Support</span> You Need",
    description: "Find answers, get help, and learn how to use Ordrio.",
    separator: Separator.MEDIUM,
    isFirstSection: true,
  },
  heroComponent: {
    moreHelp: {
      addressTitle: "Office address",
      addressDescription:
        "1st floor, Pritvi soudha bldg. N.H. 66 Junction Ambalpady Udupi Karnataka- 576 103",
      title: "Need More Help?",
      links: [
        {
          description: "Call our support team at",
          text: "+917204707513",
          href: "tel:+917204707513",
          icon: "phone",
        },
        {
          description: "Send us an email at",
          text: "Support@Ordrio.com",
          href: "mailto:Support@Ordrio.com",
          icon: "mail",
        },
        {
          description: "Chat with us in real-time.",
          text: "Chat with us",
          target: "_blank",
          href: "https://api.whatsapp.com/send?phone=917204707513",
          icon: "chat",
        },
      ],
    },
    iconColor: Colors.BLUE,
    cards: [
      {
        icon: "book",
        title: "Search Our Knowledge Base",
        description:
          "Find solutions and helpful guides in our extensive knowledge base.",
        link: {
          text: "Browse All",
          target: "_blank",
          href: "https://ordrio.help.center/",
          icon: "arrow-right-circle",
        },
      },
      {
        icon: "book-question",
        title: "Browse FAQs",
        description:
          "Check out our most frequently asked questions for quick answers.",
        link: { text: "Browse All", href: "#", icon: "arrow-right-circle" }, //@LINKS: requested - to be added
      },
      {
        icon: "video",
        title: "Watch Video Tutorials",
        description:
          "Learn how to use Ordrio features with our easy-to-follow video tutorials.",
        link: {
          text: "Browse All",
          target: "_blank",
          href: "https://www.youtube.com/@Ordrio/videos",
          icon: "arrow-right-circle",
        },
      },
    ],
    color: Colors.GREY,
  },
  commonSection: {
    subtitle: "Additional Resources",
    description: "We welcome a diverse range of partners, including",
    backgroundColor: Colors.WHITE,
  },
  bigCardsInCommonSection: {
    cards: [
      {
        title: "How-To Guides",
        description:
          "Step-by-step instructions to get the most out of your store.",
        link: {
          text: "Open Resources",
          target: "_blank",
          href: "https://ordrio.help.center/",
        },
        type: AnimatedCard.HOW_TO_GUIDES,
      },
      {
        title: "Blog",
        description:
          "Stay updated with the latest eCommerce tips and Ordrio news.",
        link: { text: "Open Blogs", href: "/blog" }, //@LINKS: requested - to be added
        type: AnimatedCard.BLOG,
      },
    ],
  },
  bannerSection: {
    backgroundImage: BackgroundImage.BLUE_SPIRAL,
    title: "We are Committed to Your Success",
    description:
      "We want you to succeed with Ordrio. Our team is here to provide the support you need to reach your goals.",
    links: [
      {
        text: "Get Started",
        target: "_blank",
        href: "https://control.ordrio.com/#/register",
      },
    ],
    alignContentLeft: false,
  },
};
