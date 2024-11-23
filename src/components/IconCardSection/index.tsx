"use client";

import * as React from "react";
import Image from "next/image";

import { motion } from "framer-motion";

import { IconCard, type IconCardPropsType } from "./IconCard";
import { Icons } from "@config";

import "./IconCardSection.scss";

export type IconCardSectionPropsType = {
  withIcon?: boolean;
  backgroundImageURL: string;
  title: string;
  cards: Omit<IconCardPropsType, "index">[];
};

export const IconCardSection = ({
  withIcon,
  backgroundImageURL,
  title,
  cards,
}: IconCardSectionPropsType) => (
  <section className="icon-card-section">
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

    <div className="icon-card-section__container">
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
      </div>
      <ul className="icon-card-section__cards">
        {cards.map((card, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="icon-card-section__cards-item"
          >
            <IconCard index={i} {...card} />
          </motion.li>
        ))}
      </ul>
    </div>
  </section>
);