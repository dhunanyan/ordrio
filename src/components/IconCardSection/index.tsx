"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import { IconCard, type IconCardPropsType } from "../IconCard";
import { Colors, Icons } from "@config";

import "./IconCardSection.scss";

export type IconCardSectionPropsType = {
  withIcon?: boolean;
  backgroundImageURL: string;
  title: string;
  link?: { text: string; href: string; target?: string };
  description: string;
  cards: Omit<IconCardPropsType, "index">[];
  color?: Colors;
  alignCardsContentLeft?: boolean;
  displayInRow?: boolean;
};

export const IconCardSection = ({
  withIcon,
  backgroundImageURL,
  title,
  description,
  cards,
  link,
  color = Colors.YELLOW,
  alignCardsContentLeft = false,
  displayInRow = false,
}: IconCardSectionPropsType) => {
  return (
    <section className={`icon-card-section icon-card-section--${color}`}>
      {backgroundImageURL && (
        <Image
          placeholder="blur"
          blurDataURL={backgroundImageURL}
          src={backgroundImageURL}
          alt="Background layout"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      )}
      <div
        className={
          "icon-card-section__container" +
          (displayInRow ? " icon-card-section__container--row" : "")
        }
      >
        <div className="icon-card-section__content">
          {withIcon && (
            <motion.div
              className="icon-card-section__icon"
              dangerouslySetInnerHTML={{ __html: Icons["check"] }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            />
          )}
          <motion.h2
            className="icon-card-section__title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>
          {description && (
            <motion.p
              className="icon-card-section__description"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {description}
            </motion.p>
          )}
          {link && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.65 }}
            >
              <Link
                href={link?.href}
                target={link.target}
                className="icon-card-section__link"
              >
                {link.text}
              </Link>
            </motion.div>
          )}
        </div>
        <ul
          className={
            "icon-card-section__cards" +
            (cards.length > 4 ? " icon-card-section__cards--wrap" : "")
          }
        >
          {cards.map((card, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="icon-card-section__cards-item"
            >
              <IconCard index={i} {...card} alignLeft={alignCardsContentLeft} />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};
