"use client";

import * as React from "react";
import { motion } from "framer-motion";

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
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.15 * i }}
              viewport={{ once: true }}
            >
              <ImageCard {...bigCard} variant={CardVariant.BIG} index={i} />
            </motion.li>
          ))}
        </ul>

        <div className="big-cards-section__content">
          <ul className="big-cards-section__top-links">
            {topLinks.map(({ href, text }, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 * i }}
              >
                <Link className="big-cards-section__top-link" href={href}>
                  {text}
                </Link>
              </motion.li>
            ))}
          </ul>
          <motion.h2
            className="big-cards-section__title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="big-cards-section__description"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {description}
          </motion.p>
          {bottomLinks && (
            <ul className="big-cards-section__bottom-links">
              {bottomLinks.map(({ href, text }, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 * i }}
                >
                  <Link
                    className="big-cards-section__bottom-link"
                    href={href}
                    dangerouslySetInnerHTML={{ __html: Icons[text] }}
                  />
                </motion.li>
              ))}
            </ul>
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

        <motion.div
          className="big-cards-section__bottom-image"
          initial={{ opacity: 0, y: 80 + 10 }}
          whileInView={{ opacity: 1, y: 80 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img src={screenshotURL} alt="Screenshot" />
        </motion.div>
      </div>
    </section>
  );
};
