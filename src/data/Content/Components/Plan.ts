export const PlanContent = {
  free: {
    name: "Seed",
    price: "FREE",
    description: "For all member no included taxes",
    list: [
      "Storefront",
      "Ordrio Ship",
      "Ordrio Money",
      "Unlimited Product Listings",
      "Rewards & Loyalty Programs",
      "Advanced Analytics",
      "Multiple Payment Gateways",
      "Smart Notifications",
      "Customizable Add-Ons",
      "Wish Lists",
      "In-Store Pickup",
      "Abandoned Cart Recovery",
    ],
    link: { text: "Subscribe", href: "#" },
  },
  paid: [
    {
      name: "Launch",
      currency: "$",
      price: "9",
      period: " / month",
      list: [
        "All for Seed",
        "Manual Order Creation",
        "Custom Domain",
        "Smart Inventory",
        "Abandoned Cart Recovery",
      ],
      link: { text: "Subscribe", href: "#" },
    },
    {
      name: "Grow",
      currency: "$",
      price: "19",
      period: " / month",
      list: ["All for Launch", "Mobile Commerce Apps", "2 Team Member Access"],
      isMostPopular: true,
      link: { text: "Subscribe", href: "#" },
    },
    {
      name: "Scale",
      currency: "$",
      price: "29",
      period: " / month",
      list: [
        "All for Grow",
        "+2 Team Member Access",
        "2 Multi-Location Management",
        "Easy Returns & Exchanges",
        "Volume Discounts",
        "Product Bundles",
      ],
      link: { text: "Subscribe", href: "#" },
    },
    {
      name: "Max",
      currency: "$",
      price: "49",
      period: " / month",
      list: [
        "All for Scale",
        "Unlimited Member Access",
        "+2 Multi-Location Management",
        "Membership Program",
        "Delivery Partner System",
        "Multi-Language Support",
        "B2B Pricing",
        "Flow",
        "Real-Time Shipping Rates",
        "Subscription Services",
        "Flexible Delivery Options",
        "Multi-Vendor Marketplace",
      ],
      link: { text: "Subscribe", href: "#" },
    },
  ],
};

export const PlanWithExtraContent = {
  ...PlanContent,
  extraSection: {
    name: "Enterprise Plan",
    price: "Ordrio X",
    description:
      "Flexible plans with features you can customize to fit your unique goals.",
    link: { text: "Schedule a Meeting Now", href: "#" },
  },
};
