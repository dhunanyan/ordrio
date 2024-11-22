import * as React from "react";
import Link from "next/link";

import "./Hero.scss";
import { Icons } from "@config";

export type HeroPropsType = {
  title: string;
  list?: string[];
  description?: string;
  link?: { text: string; href: string };
  children?: React.ReactNode;
  alignChildrenOutOfBox?: boolean;
  sectionSeparator?: "section-separator" | "section-separator-big";
  bottomImageURL?: string;
};

export const Hero = ({
  title,
  list,
  description,
  link,
  children,
  alignChildrenOutOfBox = false,
  bottomImageURL,
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
      {link && (
        <Link href={link.href} className="hero__button">
          {link.text}
        </Link>
      )}
      {children}
    </div>
    {alignChildrenOutOfBox && children}
    {bottomImageURL && (
      <div
        className={
          "hero__bottom-image" +
          (sectionSeparator ? " " + sectionSeparator : "")
        }
      >
        <img src={bottomImageURL} alt={title} />
      </div>
    )}
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
