"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { AnimatedCard, Colors, Icons } from "@config";
import { type ContentType, renderAnimatedCard } from "@utils";

import "./RowCardsWithBigCard.scss";

export type RowCardsWithBigCardPropsType = {
  bigCard: {
    card: AnimatedCard;
    props: ContentType;
  };
  iconColor?: Colors;
  rowCards: {
    icon: string;
    title: string;
    description: string;
  }[];
};

const ANIMATION_DELAY_ICON = 0;
const ANIMATION_DELAY_TEXT = ANIMATION_DELAY_ICON + 0.05;

export const RowCardsWithBigCard = ({
  bigCard,
  rowCards,
  iconColor = Colors.TRANSPARENT,
}: RowCardsWithBigCardPropsType) => (
  <div className="row-cards-section-with-big-card">
    <ul className="row-cards-section-with-big-card__list">
      {rowCards.map(({ title, description, icon }, i) => (
        <li key={i} className="row-cards-section-with-big-card__item">
          <motion.div
            className={`row-cards-section-with-big-card__icon row-cards-section-with-big-card__icon--${iconColor}`}
            dangerouslySetInnerHTML={{ __html: Icons[icon] }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: ANIMATION_DELAY_ICON + i * 0.05,
            }}
            viewport={{ once: true }}
          />
          <div className="row-cards-section-with-big-card__content">
            <motion.h3
              className="row-cards-section-with-big-card__title"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: ANIMATION_DELAY_TEXT + i * 0.05,
              }}
              viewport={{ once: true }}
            >
              {title}
            </motion.h3>
            <motion.p
              className="row-cards-section-with-big-card__description"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: ANIMATION_DELAY_TEXT + i * 0.05,
              }}
              viewport={{ once: true }}
            >
              {description}
            </motion.p>
          </div>
        </li>
      ))}
    </ul>
    <div className="row-cards-section-with-big-card__big-cards">
      {renderAnimatedCard(bigCard.card, bigCard.props)}
    </div>
  </div>
);
