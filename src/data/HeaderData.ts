import { Dropdown } from "@config";

export enum NavItemType {
  LINK = "link",
  BUTTON = "button",
}

export const HeaderData = {
  links: [
    {
      text: "Why Ordrio",
      id: "why-ordrio",
      type: NavItemType.BUTTON,
    },
    {
      text: "Pricing",
      id: "pricing",
      type: NavItemType.LINK,
    },
    {
      text: "Integrations",
      id: "integrations",
      type: NavItemType.LINK,
    },
    {
      text: "Resources",
      id: "resources",
      type: NavItemType.BUTTON,
    },
  ],
  buttons: [
    {
      text: "Login",
      id: "login",
    },
    {
      text: "Sign up for Free",
      id: "sign-up",
    },
  ],
};

export const DropdownData = {
  [Dropdown.RESOURCES]: {
    aside: [
      {
        title: "Product Tour",
        description: "Overall concept of the product",
        href: "#",
      },
      {
        title: "Themes",
        description: "Personalise experience for user",
        href: "#",
      },
      {
        title: "Ordrio Ship",
        description: "Integrated with delivery",
        href: "#",
      },
      {
        title: "Plugins",
        description: "Tools that you may need",
        href: "#",
      },
    ],
    nav: [
      {
        title: "Solutions",
        links: [
          {
            icon: "groceries-and-supermarkets",
            text: "Groceries & Supermarkets",
            href: "#",
          },
          {
            icon: "restaurants",
            text: "Restaurants",
            href: "#",
          },
          {
            icon: "milk-and-tiffin-subscriptions",
            text: "Milk & Tiffin Subscriptions",
            href: "#",
          },
          {
            icon: "marketplace",
            text: "Marketplace",
            href: "#",
          },
          {
            icon: "services",
            text: "Services",
            href: "#",
          },
          {
            icon: "pet-stores",
            text: "Pet Stores",
            href: "#",
          },
          {
            icon: "clothing-and-accessories",
            text: "Clothing & Accessories",
            href: "#",
          },
          {
            icon: "cafes",
            text: "Cafes",
            href: "#",
          },
          {
            icon: "meat-stores",
            text: "Meat Stores",
            href: "#",
          },
        ],
      },
      {
        title: "Company",
        links: [
          {
            icon: "about-us",
            text: "About Us",
            href: "#",
          },
          {
            icon: "careers",
            text: "Careers",
            href: "#",
          },
        ],
      },
    ],
  },
  [Dropdown.WHY_ORDIO]: {
    aside: [
      {
        title: "Community ",
        description: "A place to explore",
        href: "#",
      },
      {
        title: "Product News",
        description: "Updates from Ordrio",
        href: "#",
      },
      {
        title: "Become a Partner",
        description: "Join the team",
        href: "#",
      },
      {
        title: "Blog",
        description: "Get the latest updates",
        href: "#",
      },
    ],
    nav: [
      {
        title: "HELP CENTER",
        links: [
          {
            icon: "support",
            text: "Support",
            href: "#",
          },
          {
            icon: "videos",
            text: "Videos",
            href: "#",
          },
          {
            icon: "how-to-guide",
            text: "How to Guide",
            href: "#",
          },
          {
            icon: "faq",
            text: "FAQ",
            href: "#",
          },
        ],
      },
    ],
  },
};
