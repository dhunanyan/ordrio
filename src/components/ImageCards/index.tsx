"use client";

import * as React from "react";

import { motion } from "framer-motion";

import "./ImageCards.scss";
import { ImageCard, type ImageCardPropsType } from "@components";

export type ImageCardsPropsType = {
  cards: ImageCardPropsType[];
};

export const ImageCards = ({ cards }: ImageCardsPropsType) => (
  <ul
    className={
      "image-cards" +
      (cards.length > 4 ? " image-cards--big" : " image-cards--standard")
    }
  >
    {cards.map((card, i) => (
      <motion.li
        key={i}
        initial={{ opacity: 0, x: 10, y: -5 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.3, delay: 0.15 * i }}
        viewport={{ once: true }}
      >
        <ImageCard {...card} smallerText={cards.length > 4} index={i} />
      </motion.li>
    ))}
  </ul>
);
