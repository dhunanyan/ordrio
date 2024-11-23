"use client";

import * as React from "react";
import { motion } from "framer-motion";

import "./AnimatedCards.scss";
import { CardAnimation } from "@config";
import { renderAnimatedCard } from "@utils";

export type AnimatedCardsPropsType = {
  cards: {
    title: string;
    subtitle: string;
    animation: CardAnimation;
  }[];
};

export const AnimatedCards = ({ cards }: AnimatedCardsPropsType) => {
  return (
    <ul className="animated-cards">
      {cards.map(({ title, subtitle, animation }, i) => (
        <div key={i} className="animated-card">
          <li className="animated-card__image">
            <motion.img
              src={`/images/animated/${animation}/${animation}.png`}
              alt={animation}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.05 * i }}
              viewport={{ once: true }}
            />
            {renderAnimatedCard(animation)}
          </li>
          <motion.h4
            className="animated-card__subtitle"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 * i }}
          >
            {subtitle}
          </motion.h4>
          <motion.h3
            className="animated-card__title"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * i }}
          >
            {title}
          </motion.h3>
        </div>
      ))}
    </ul>
  );
};

export { EasyManagement } from "./EasyManagement";
export { SmartControl } from "./SmartControl";
export { Ship, type ShipPropsType } from "./Ship";
export { AddOns, type AddOnsPropsType } from "./AddOns";
export { Tablet } from "./Tablet";
export { Robot } from "./Robot";
export { Store } from "./Store";
