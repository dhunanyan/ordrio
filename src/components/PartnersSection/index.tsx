"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { getBackgroundImageURL, renderHighlightedTitle } from "@utils";
import { BackgroundImage } from "@config";

import "./PartnersSection.scss";

export type PartnersSectionPropsType = {
  backgroundImage: BackgroundImage;
  title: string;
  partners: {
    imageURL: string;
    height: number;
    width: number;
    href: string;
    target?: string;
  }[];
  quotes: { quote: string; author: string }[];
};

export const PartnersSection = ({
  backgroundImage,
  title,
  partners,
  quotes,
}: PartnersSectionPropsType) => (
  <section className="partners-section">
    <img src={getBackgroundImageURL(backgroundImage)} alt="Background layout" />
    <div className="partners-section__container">
      <h2 className="partners-section__title">
        {renderHighlightedTitle(title)}
      </h2>
      <ul className="partners-section__logos-list">
        {partners.map(({ imageURL, href, target }, i) => (
          <motion.li
            key={i}
            className="partners-section__logos-item"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, delay: 0.15 * i }}
            viewport={{ once: true }}
          >
            <Link
              className="partners-section__logos-link"
              href={href}
              target={target}
            >
              <img src={imageURL} alt={"Partner" + i} />
            </Link>
          </motion.li>
        ))}
      </ul>
      <span className="partners-section__separator" />
      <ul className="partners-section__quotes-list">
        {quotes.map(({ quote, author }, i) => (
          <li key={i} className="partners-section__quotes-item">
            <p className="partners-section__quotes-text">{quote}</p>
            <p
              className="partners-section__quotes-author"
              dangerouslySetInnerHTML={{ __html: author }}
            />
          </li>
        ))}
      </ul>
    </div>
  </section>
);
