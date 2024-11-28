"use client";

import * as React from "react";
import Link from "next/link";

import { Icons, Size } from "@config";

import "./Footer.scss";

export const FooterContent = {
  nav: [
    {
      title: "Support",
      links: [
        {
          text: "FAQs",
          href: "/faq",
        },
        {
          text: "Locate Us",
          href: "/@TODO",
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
        {
          text: "Services",
          href: "/services",
        },
      ],
    },
    {
      title: "Solutions",
      links: [
        {
          text: "Groceries & Supermarkets",
          href: "/groceries-and-supermarkets",
        },
        {
          text: "Restaurants",
          href: "/restaurants",
        },
        {
          text: "Milk & Tiffin Subscriptions",
          href: "/milk-and-tiffin-subscriptions",
        },
        {
          text: "Marketplace",
          href: "/marketplace",
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
      title: "Social",
      type: Size.SMALL,
      links: [
        {
          icon: "facebook-yellow",
          href: "https://www.facebook.com/Ordrio",
          target: "_blank",
        },
        {
          icon: "instagram-yellow",
          href: "https://www.instagram.com/ordrio_com",
          target: "_blank",
        },
        {
          icon: "youtube-yellow",
          href: "https://www.youtube.com/@Ordrio",
          target: "_blank",
        },
        {
          icon: "linkedin-yellow",
          href: "https://www.linkedin.com/company/ordrio",
          target: "_blank",
        },
      ],
    },
    {
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

export const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <nav className="footer__nav">
        {FooterContent.nav.map(({ title, links }, i) => (
          <div key={i} className="footer__nav-column">
            <h3 className="footer__nav-column-title">{title}</h3>
            <ul className="footer__nav-list">
              {links.map(({ text, href, target }, j) => (
                <li key={j} className="footer__nav-list-item">
                  <Link
                    href={href}
                    target={target}
                    className="footer__nav-list-link"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <aside className="footer__aside">
          {FooterContent.aside.map(({ title, links, type }, i) => (
            <div key={i} className="footer__aside-column">
              <h3 className="footer__aside-column-title">{title}</h3>
              <ul className="footer__aside-list">
                {links.map(({ icon, href, target }, j) => (
                  <li key={j} className="footer__aside-list-item">
                    <Link
                      href={href}
                      target={target}
                      className={`footer__aside-list-link footer__aside-list-link--${type}`}
                      dangerouslySetInnerHTML={{ __html: Icons[icon] }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </aside>
      </nav>
    </div>
    <div className="footer__copyright">
      <Link
        className="footer__copyright-logo"
        href="/"
        dangerouslySetInnerHTML={{
          __html: Icons[FooterContent.copyright.icon],
        }}
      />
      <p className="footer__copyright-text">{FooterContent.copyright.text}</p>
      <ul className="footer__copyright-list">
        {FooterContent.copyright.links.map(({ href, text }, i) => (
          <li key={i} className="footer__copyright-list-item">
            {i !== 0 && <span className="footer__copyright-list-dot">•</span>}
            <Link href={href} className="footer__copyright-list-link">
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </footer>
);
