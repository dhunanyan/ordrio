"use client";

import * as React from "react";

export type BigCardsSectionPropsType = {
  bigCards: {
    title: string;
    description: string;
    imageURL: string;
    link?: { text: string; href: string };
    backgroundColor: string;
  }[];
  content: {
    topLinks: { text: string; href: string }[];
    title: string;
    description: string;
    bottomLinks?: { text: string; href: string }[];
    bottomButtons?: { text: string }[];
  };
  screenshotURL: string;
};

import "./BigCardsSection.scss";
import { ImageCard } from "@components/ImageCard";
import { CardVariant, Icons } from "@config";
import Link from "next/link";

export const BigCardsSection = ({
  bigCards,
  content: { title, description, bottomButtons, bottomLinks, topLinks },
  screenshotURL,
}: BigCardsSectionPropsType) => {
  // const [activeScreenshot, setActiveScreenshot] = React.useState(0);

  return (
    <section className="big-cards-section">
      <div className="big-cards-section__container">
        <ul className="big-cards-section__big-cards">
          {bigCards.map((bigCard, i) => (
            <li key={i}>
              <ImageCard {...bigCard} variant={CardVariant.BIG} />
            </li>
          ))}
        </ul>

        <div className="big-cards-section__content">
          <div className="big-cards-section__top-links">
            {topLinks.map(({ href, text }, i) => (
              <Link key={i} className="big-cards-section__top-link" href={href}>
                {text}
              </Link>
            ))}
          </div>
          <h2 className="big-cards-section__title">{title}</h2>
          <p className="big-cards-section__description">{description}</p>
          {bottomLinks && (
            <div className="big-cards-section__bottom-links">
              {bottomLinks.map(({ href, text }, i) => (
                <Link
                  key={i}
                  className="big-cards-section__bottom-link"
                  href={href}
                  dangerouslySetInnerHTML={{ __html: Icons[text] }}
                />
              ))}
            </div>
          )}
          {bottomButtons && (
            <div className="big-cards-section__bottom-links">
              {bottomButtons.map(({ text }, i) => (
                <button key={i} className="big-cards-section__bottom-link">
                  {text}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="big-cards-section__bottom-image">
          <img src={screenshotURL} alt="asd" />
        </div>
      </div>
    </section>
  );
};
