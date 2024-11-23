import * as React from "react";
import Link from "next/link";
import { Icons } from "@config";

import "./Plan.scss";

export type PlanPropsType = {
  free: {
    name: string;
    price: string;
    description: string;
    list: string[];
    link: { text: string; href: string };
  };
  paid: {
    name: string;
    currency: string;
    price: string;
    period: string;
    list: string[];
    isMostPopular: true;
    link: { text: string; href: string };
  }[];
  extraSection?: {
    name: string;
    price: string;
    description: string;
    link: { text: string; href: string };
  };
};

export const Plan = ({
  free: { name, price, description, list, link },
  paid,
  extraSection,
}: PlanPropsType) => (
  <div className={"plan" + (!extraSection ? " plan--dark-top" : "")}>
    <div className="plan__free">
      <span className="plan__name plan__name--free">{name}</span>
      <p className="plan__price plan__price--free">
        <span>{price}</span>
        <span>{description}</span>
      </p>
      <Link className="plan__link plan__link--free" href={link.href}>
        {link.text}
      </Link>
      <ul className="plan__benefits-list plan__benefits-list--free">
        {list.map((benefit, j) => (
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
    <div className="plan__inner-container">
      <ul className="plan__list">
        {paid.map(
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
                      <span
                        dangerouslySetInnerHTML={{ __html: Icons["info"] }}
                      />
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
      {extraSection && (
        <div className="plan__extra">
          <span className="plan__name plan__name--extra">
            {extraSection.name}
          </span>
          <p className="plan__price plan__price--extra">
            <span>{extraSection.price}</span>
            <span>{extraSection.description}</span>
          </p>
          <Link
            className="plan__link plan__link--extra"
            href={extraSection.link.href}
          >
            {extraSection.link.text}
          </Link>
        </div>
      )}
    </div>
  </div>
);
