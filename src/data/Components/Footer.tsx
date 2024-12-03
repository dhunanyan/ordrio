import { Size } from "@config";

type NavLinkType = {
  text: string;
  href: string;
  target?: string;
};

type AsideLinkType = {
  icon: string;
  href: string;
  target?: string;
};

type FooterContentNavType = {
  id: string;
  title: string;
  links: NavLinkType[];
};

type FooterContentAsideType = {
  id: string;
  title: string;
  type: Size;
  links: AsideLinkType[];
};

type FooterContentCopyrightType = {
  icon: string;
  text: string;
  links: NavLinkType[];
};
export type FooterContentType = {
  nav: FooterContentNavType[];
  aside: FooterContentAsideType[];
  copyright: FooterContentCopyrightType;
};

export const FooterContent: FooterContentType = {
  nav: [
    {
      id: "support",
      title: "Support",
      links: [
        {
          text: "FAQs",
          href: "/faq",
        },
        {
          text: "Locate Us",
          href: "/support#locate-us",
        },
        {
          text: "Contact Us",
          href: "/support",
        },
        {
          text: "How to Guide",
          href: "https://ordrio.help.center/",
          target: "_blank",
        },
        {
          text: "Videos",
          href: "https://www.youtube.com/@Ordrio",
          target: "_blank",
        },
      ],
    },
    {
      id: "our-company",
      title: "Our Company",
      links: [
        {
          text: "Blogs",
          href: "/new-blogs",
        },
        {
          text: "About Us",
          href: "/about-us",
        },
        {
          text: "Community",
          href: "https://www.facebook.com/groups/694862734867377",
          target: "_blank",
        },
        {
          text: "Become a partner",
          href: "/become-a-partner",
        },
        {
          text: "Careers",
          href: "/careers",
        },
      ],
    },
    {
      id: "solutions",
      title: "Solutions",
      links: [
        {
          text: "Groceries & Supermarkets",
          href: "/grocbay",
        },
        {
          text: "Milk & Tiffin Subscriptions",
          href: "/milk-and-tiffin-subscriptions",
        },
        {
          text: "Restaurants",
          href: "/restaurants",
        },
        {
          text: "Marketplace",
          href: "/marketplace",
        },
        {
          text: "Services",
          href: "/services",
        },
        {
          text: "Fashion & more",
          href: "/clothing-and-accessories",
        },
        {
          text: "Meat stores",
          href: "/meat-stores",
        },
        {
          text: "Pet Stores",
          href: "/pet-stores",
        },
        {
          text: "Cafes",
          href: "/cafes",
        },
      ],
    },
  ],
  aside: [
    {
      id: "social",
      title: "Social",
      type: Size.SMALL,
      links: [
        {
          icon: "facebook",
          href: "https://www.facebook.com/Ordrio",
          target: "_blank",
        },
        {
          icon: "instagram",
          href: "https://www.instagram.com/ordrio_com",
          target: "_blank",
        },
        {
          icon: "twitter",
          href: "https://x.com/Ordrio_tech",
          target: "_blank",
        },
        {
          icon: "youtube",
          href: "https://www.youtube.com/@Ordrio",
          target: "_blank",
        },
        {
          icon: "linkedin",
          href: "https://www.linkedin.com/company/ordrio",
          target: "_blank",
        },
      ],
    },
    {
      id: "download-app",
      title: "Download App",
      type: Size.BIG,
      links: [
        {
          icon: "google-play-white",
          href: "/@TODO",
          target: "_blank",
        },
        {
          icon: "app-store-white",
          href: "/@TODO",
          target: "_blank",
        },
      ],
    },
  ],
  copyright: {
    icon: "logo",
    text: "Copyright © 2024 Ordrio. All rights reserved.",
    links: [
      {
        text: "Policies",
        href: "/policies",
      },
      {
        text: "Terms & Conditions",
        href: "/terms-and-conditions",
      },
    ],
  },
};
