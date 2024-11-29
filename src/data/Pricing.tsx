import { Separator } from "@config";

export const PricingContent = {
  hero: {
    title: "Unleash Your Store's Roar with the Perfect Plan",
    description:
      "Unlock the essential tools to build, manage, and scale your eCommerce business, with pricing that grows alongside your success.",
    separator: Separator.MEDIUM,
    isFirstSection: true,
  },
  comparePlansSection: {
    subtitle: "Compare Plans",
    description:
      "Dive into the details and choose the best plan tailored for you",
  },
  accordionSection: {
    subtitle: "Frequently Asked Questions",
    link: { text: "Ask Us Now", href: "/support" },
    displayInRow: true,
    alignContentLeft: true,
  },
  bannerSection: {
    backgroundImageURL: "/images/blue-spiral.png",
    imageURL: "/images/tiger-boxes.png",
    icon: "check",
    title:
      "Let's Bring Your Business Online With just a few clicks, get started for free!",
    links: [
      {
        text: "Get Started for Free",
        target: "_blank",
        href: "https://control.ordrio.com/#/register",
      },
    ],
  },
};
