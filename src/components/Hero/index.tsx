import * as React from "react";
import Link from "next/link";

import "./Hero.scss";
import { Icons } from "@config";

export type HeroPropsType = {
  title: string;
  list?: string[];
  description?: string;
  button?: string;
  children?: React.ReactNode;
  sectionSeparator?: "section-separator" | "section-separator-big";
};

export const Hero = ({
  title,
  list,
  description,
  button,
  children,
  sectionSeparator,
}: HeroPropsType) => (
  <section className="hero">
    <div className="hero__container">
      <h1 className="hero__title" dangerouslySetInnerHTML={{ __html: title }} />
      {description && <p className="hero__description">{description}</p>}
      {list && (
        <ul className="hero__list">
          {list.map((item, i) => (
            <li key={i} className="hero__item">
              <span dangerouslySetInnerHTML={{ __html: Icons["check"] }} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
      {button && (
        <Link href="#" className="hero__button">
          {button}
        </Link>
      )}
    </div>
    {children}
    <div
      className={
        "hero__bottom-image" + (sectionSeparator ? " " + sectionSeparator : "")
      }
    >
      <img src="/images/landing-hero.png" alt="asd" />
    </div>
    {sectionSeparator && (
      <div className={"hero__separator-image" + " " + sectionSeparator}>
        {[...Array(7)].map((_, i) => (
          <span
            key={i}
            dangerouslySetInnerHTML={{ __html: Icons[sectionSeparator] }}
          />
        ))}
      </div>
    )}
  </section>
);
