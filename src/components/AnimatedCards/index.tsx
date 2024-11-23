"use client";

import * as React from "react";
import { motion } from "framer-motion";

import "./AnimatedCards.scss";
import { CardAnimation } from "@config";
import { Robot } from "./Robot";
import { Store } from "./Store";
import { Tablet } from "./Tablet";

export type AnimatedCardsPropsType = {
  cards: {
    title: string;
    subtitle: string;
    animation: CardAnimation;
  }[];
};

const renderAnimation = (animationType: CardAnimation) => {
  switch (animationType) {
    case CardAnimation.ROBOT:
      return <Robot />;
    case CardAnimation.STORE:
      return <Store />;
    case CardAnimation.TABLET:
      return <Tablet />;
    default:
      return null;
  }
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
            {renderAnimation(animation)}
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
