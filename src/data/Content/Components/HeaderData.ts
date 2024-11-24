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
      href: "/why-ordrio",
      type: NavItemType.BUTTON,
    },
    {
      text: "Pricing",
      id: "pricing",
      href: "/pricing",
      type: NavItemType.LINK,
    },
    {
      text: "Integrations",
      id: "integrations",
      href: "/integrations",
      type: NavItemType.LINK,
    },
    {
      text: "Resources",
      id: "resources",
      href: "/resources",
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
        href: "/product-tour",
      },
      {
        title: "Themes",
        description: "Personalise experience for user",
        href: "/themes",
      },
      {
        title: "Ordrio Ship",
        description: "Integrated with delivery",
        href: "/ordrio-ship",
      },
      {
        title: "Plugins",
        description: "Tools that you may need",
        href: "/plugins",
      },
    ],
    nav: [
      {
        title: "Solutions",
        links: [
          {
            icon: "groceries-and-supermarkets",
            text: "Groceries & Supermarkets",
            href: "/groceries-and-supermarkets",
          },
          {
            icon: "restaurants",
            text: "Restaurants",
            href: "/restaurants",
          },
          {
            icon: "milk-and-tiffin-subscriptions",
            text: "Milk & Tiffin Subscriptions",
            href: "/milk-and-tiffin-subscriptions",
          },
          {
            icon: "marketplace",
            text: "Marketplace",
            href: "/marketplace",
          },
          {
            icon: "services",
            text: "Services",
            href: "/services",
          },
          {
            icon: "pet-stores",
            text: "Pet Stores",
            href: "/pet-stores",
          },
          {
            icon: "clothing-and-accessories",
            text: "Clothing & Accessories",
            href: "/clothing-and-accessories",
          },
          {
            icon: "cafes",
            text: "Cafes",
            href: "/cafes",
          },
          {
            icon: "meat-stores",
            text: "Meat Stores",
            href: "/meat-stores",
          },
        ],
      },
      {
        title: "Company",
        links: [
          {
            icon: "about-us",
            text: "About Us",
            href: "/about-us",
          },
          {
            icon: "careers",
            text: "Careers",
            href: "/careers",
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
        href: "/community",
      },
      {
        title: "Product News",
        description: "Updates from Ordrio",
        href: "/product-news",
      },
      {
        title: "Become a Partner",
        description: "Join the team",
        href: "/become-a-partner",
      },
      {
        title: "Blog",
        description: "Get the latest updates",
        href: "/blog",
      },
    ],
    nav: [
      {
        title: "HELP CENTER",
        links: [
          {
            icon: "support",
            text: "Support",
            href: "/support",
          },
          {
            icon: "videos",
            text: "Videos",
            href: "/videos",
          },
          {
            icon: "how-to-guide",
            text: "How to Guide",
            href: "/how-to-guide",
          },
          {
            icon: "faq",
            text: "FAQ",
            href: "/faq",
          },
        ],
      },
    ],
  },
};
