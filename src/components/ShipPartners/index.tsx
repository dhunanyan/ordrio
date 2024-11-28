"use client";

import * as React from "react";
import { motion } from "framer-motion";

import "./ShipPartners.scss";

export type ShipPartnersPropsType = {
  title: string;
  imageURLs: string[];
  description: string;
};

const ANIMATION_DELAY_TITLE = 0;
const ANIMATION_DELAY_IMAGE = 0.05;
const ANIMATION_DELAY_DESCRIPTION = ANIMATION_DELAY_TITLE + 0.05;

export const ShipPartners = ({
  title,
  imageURLs,
  description,
}: ShipPartnersPropsType) => (
  <section className="ship-partners">
    <div className="ship-partners__container">
      <motion.h3
        className="ship-partners__title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          delay: ANIMATION_DELAY_TITLE,
        }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h3>
      <ul className="ship-partners__list">
        {imageURLs.map((imageURL, i) => (
          <motion.li
            key={i}
            className="ship-partners__item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: ANIMATION_DELAY_IMAGE,
            }}
            viewport={{ once: true }}
          >
            <img src={imageURL} alt={`Partner ${i}`} />
          </motion.li>
        ))}
      </ul>
      <motion.p
        className="ship-partners__description"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          delay: ANIMATION_DELAY_DESCRIPTION,
        }}
        viewport={{ once: true }}
      >
        {description}
      </motion.p>
    </div>
  </section>
);
