import { SectionSeparator } from "@config";

export const ProductTourContent = {
  hero: {
    title: "See Ordrio from the inside ",
    description:
      "Get to know the key elements of Ordrio even before creating your account. ",
    sectionSeparator: SectionSeparator.MEDIUM,
  },
  listSection: {
    title: "Easy Product Management",
    list: [
      "Add new products effortlessly with our intuitive tools.",
      "Update product details quickly with a user-friendly interface.",
      "Visualize and manage your product catalog with ease.",
    ],
    link: { text: "Signup Now for Free", href: "#" },
    applyCardStyles: true,
  },
  listSectionReversed: {
    title: "Smart Inventory Control",
    list: [
      "Monitor your inventory levels in real-time to prevent stockouts.",
      "Receive automatic alerts when stock levels are low to ensure timely restocking.",
      "Easily update inventory details for multiple products at once.",
    ],
    link: { text: "Signup Now for Free", href: "#" },
    switchOrder: true,
    applyCardStyles: true,
  },
  iconCardSection: {
    withIcon: true,
    backgroundImageURL: "/images/blue-spiral.png",
    title: "Marketing and Promotion",
    cards: [
      {
        icon: "coupons",
        title: "Create Coupons",
        description: "Design enticing coupons to attract and retain customers.",
      },
      {
        icon: "sale",
        title: "Offer Discounts",
        description: "Boost sales by offering attractive discounts and deals.",
      },
      {
        icon: "megaphone",
        title: "Run Campaigns",
        description:
          "Run effective email marketing campaigns to engage customers.",
      },
    ],
  },
};
