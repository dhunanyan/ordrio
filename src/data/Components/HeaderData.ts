import { Dropdown } from "@config";

export enum NavItemType {
  LINK = "link",
  BUTTON = "button",
}

type HeaderLinkType = {
  text: string;
  id: string;
  target?: "_blank";
  href: string;
};

type DropdownAsideLinkType = {
  title: string;
  description: string;
  href: string;
  target?: string;
};

type DropdownNavLinkType = {
  icon: string;
  text: string;
  href: string;
  target?: string;
};

export type HeaderDataType = {
  links: (HeaderLinkType & {
    type: NavItemType;
  })[];
  buttons: HeaderLinkType[];
};

export type DropdownDataNavType = {
  title: string;
  links: DropdownNavLinkType[];
}[];

export type DropdownDataType = {
  [key: string]: {
    aside: DropdownAsideLinkType[];
    nav: DropdownDataNavType;
  };
};

export const HeaderData: HeaderDataType = {
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
      target: "_blank",
      href: "https://control.ordrio.com/#/login",
    },
    {
      text: "Sign up for Free",
      id: "sign-up",
      target: "_blank",
      href: "https://control.ordrio.com/#/register",
    },
  ],
};

export const DropdownData: DropdownDataType = {
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
        href: "/ordrio-ship", //LAST_PAGE
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
            href: "/marketplace", // 2/1
          },
          {
            icon: "services",
            text: "Services",
            href: "/services", // 2/2
          },
          {
            icon: "pet-stores",
            text: "Pet Stores",
            href: "/pet-stores", // 2/3
          },
          {
            icon: "clothing-and-accessories",
            text: "Clothing & Accessories",
            href: "/clothing-and-accessories",
          },
          {
            icon: "cafes",
            text: "Cafes",
            href: "/cafes", // 2/4
          },
          {
            icon: "meat-stores",
            text: "Meat Stores",
            href: "/meat-stores", // 2/5
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
        title: "Community",
        description: "A place to explore",
        target: "_blank",
        href: "https://www.facebook.com/groups/694862734867377",
      },
      //REMOVED PRODUCT NEWS
      {
        title: "Become a Partner",
        description: "Join the team",
        href: "/become-a-partner",
      },
      {
        title: "Blog",
        description: "Get the latest updates",
        href: "/news-blogs",
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
            target: "_blank",
            href: "https://www.youtube.com/@Ordrio",
          },
          {
            icon: "how-to-guide",
            text: "How to Guide",
            target: "_blank",
            href: "https://ordrio.help.center/",
          },
          {
            icon: "faq",
            text: "FAQ",
            href: "/faq", // NO FAQ PAGE
          },
        ],
      },
    ],
  },
};
