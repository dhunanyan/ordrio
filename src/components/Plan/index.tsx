import * as React from "react";
import Link from "next/link";
import { Icons } from "@config";

import "./Plan.scss";

export type PlanPropsType = {
  title: string;
  description: string;
};

const PLAN_DATA = {
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

export const Plan = () => (
  <div className="plan">
    <div className="plan__free">
      <span className="plan__name plan__name--free">{PLAN_DATA.free.name}</span>
      <p className="plan__price plan__price--free">
        <span>{PLAN_DATA.free.price}</span>
        <span>{PLAN_DATA.free.description}</span>
      </p>
      <Link
        className="plan__link plan__link--free"
        href={PLAN_DATA.free.link.href}
      >
        {PLAN_DATA.free.link.text}
      </Link>
      <ul className="plan__benefits-list plan__benefits-list--free">
        {PLAN_DATA.free.list.map((benefit, j) => (
          <li key={j} className="plan__benefits-item">
            <p>
              <span dangerouslySetInnerHTML={{ __html: Icons["check"] }} />
              {benefit}
              <span dangerouslySetInnerHTML={{ __html: Icons["info"] }} />
            </p>
          </li>
        ))}
      </ul>
    </div>
    <ul className="plan__list">
      {PLAN_DATA.paid.map(
        (
          {
            name,
            currency,
            price,
            period,
            list,
            isMostPopular,
            link: { text, href },
          },
          i
        ) => (
          <li key={i} className="plan__item">
            {isMostPopular && (
              <span className="plan__most-popular">MOST POPULAR</span>
            )}
            <span className="plan__name">{name}</span>
            <p className="plan__price">
              <span>{currency}</span>
              <span>{price}</span>
              <span>{period}</span>
            </p>
            <span className="plan__separator" />
            <ul className="plan__benefits-list">
              {list.map((benefit, j) => (
                <li key={j} className="plan__benefits-item">
                  <p>
                    <span
                      dangerouslySetInnerHTML={{ __html: Icons["check"] }}
                    />
                    {benefit}
                    <span dangerouslySetInnerHTML={{ __html: Icons["info"] }} />
                  </p>
                </li>
              ))}
            </ul>
            <Link className="plan__link" href={href}>
              {text}
            </Link>
          </li>
        )
      )}
    </ul>
  </div>
);
