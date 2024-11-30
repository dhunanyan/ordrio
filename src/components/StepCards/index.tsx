"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { StepCardAnimation } from "@config";

import { Robot } from "./Robot";
import { Store } from "./Store";
import { Tablet } from "./Tablet";

import "./StepCards.scss";

export type StepCardsPropsType = {
  cards: {
    title: string;
    subtitle: string;
    description?: string;
    animation: StepCardAnimation;
  }[];
};

const renderAnimation = (animation: StepCardAnimation) => {
  switch (animation) {
    case StepCardAnimation.ROBOT:
      return <Robot />;
    case StepCardAnimation.STORE:
      return <Store />;
    case StepCardAnimation.STORE_CONNECT:
      return <Store isConnect />;
    case StepCardAnimation.TABLET:
      return <Tablet />;
    case StepCardAnimation.BOXES:
    case StepCardAnimation.DOORS:
    default:
      return null;
  }
};

export const StepCards = ({ cards }: StepCardsPropsType) => {
  return (
    <ul className="step-cards">
      {cards.map(({ title, subtitle, description, animation }, i) => (
        <li key={i} className="step-card">
          <div className="step-card__image">
            <motion.img
              src={`/images/step-cards/${animation === StepCardAnimation.STORE_CONNECT ? StepCardAnimation.STORE : animation}.png`}
              alt={animation}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.05 * i }}
              viewport={{ once: true }}
            />
            {renderAnimation(animation)}
          </div>
          <motion.h4
            className="step-card__subtitle"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 * i }}
          >
            {subtitle}
          </motion.h4>
          <motion.h3
            className="step-card__title"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * i }}
          >
            {title}
          </motion.h3>
          {description && (
            <motion.p
              className="step-card__description"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * i }}
            >
              {description}
            </motion.p>
          )}
        </li>
      ))}
    </ul>
  );
};
