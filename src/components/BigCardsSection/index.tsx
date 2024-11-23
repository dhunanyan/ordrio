"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { AnimatedCard } from "@config";
import { renderAnimatedCard } from "@utils";

import "./BigCardsSection.scss";

export type BigCardsSectionPropsType = {
  cards: {
    type: AnimatedCard;
    title: string;
    description: string;
    link?: { text: string; href: string };
  }[];
};

export const BigCardsSection = ({ cards }: BigCardsSectionPropsType) => (
  <section className="big-cards">
    <div className="big-cards__container">
      <ul className="big-cards__list">
        {cards.map((bigCard, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15 * i }}
            viewport={{ once: true }}
          >
            {renderAnimatedCard(bigCard.type, bigCard)}
          </motion.li>
        ))}
      </ul>
    </div>
  </section>
);
