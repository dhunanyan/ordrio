"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { AnimatedCard } from "@config";
import { renderAnimatedCard } from "@utils";

import "./BigCards.scss";

export type BigCardsPropsType = {
  cards: {
    type: AnimatedCard;
    title: string;
    description: string;
    link?: { text: string; href: string };
  }[];
};

export const BigCards = ({ cards }: BigCardsPropsType) => (
  <ul className={"big-cards" + (cards.length > 2 ? " big-cards--big" : "")}>
    {cards.map((bigCard, i) => (
      <motion.li
        key={i}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.15 * i }}
        viewport={{ once: true }}
        className={`big-cards__${bigCard.type} big-cards--big--${bigCard.type}`}
      >
        {renderAnimatedCard(bigCard.type, bigCard)}
      </motion.li>
    ))}
  </ul>
);
