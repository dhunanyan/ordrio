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
    animation: StepCardAnimation;
  }[];
};

const renderAnimation = (animation: StepCardAnimation) => {
  switch (animation) {
    case StepCardAnimation.ROBOT:
      return <Robot />;
    case StepCardAnimation.STORE:
      return <Store />;
    case StepCardAnimation.TABLET:
      return <Tablet />;
  }
};

export const StepCards = ({ cards }: StepCardsPropsType) => {
  return (
    <ul className="step-cards">
      {cards.map(({ title, subtitle, animation }, i) => (
        <li key={i} className="step-card">
          <div className="step-card__image">
            <motion.img
              src={`/images/step-cards/${animation}.png`}
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
        </li>
      ))}
    </ul>
  );
};
