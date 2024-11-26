"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { IconCard, type IconCardPropsType } from "../IconCard";
import { Colors } from "@config";

import "./IconCards.scss";

export type IconCardsPropsType = {
  cards: Omit<IconCardPropsType, "index">[];
  alignCardsContentLeft?: boolean;
  color: Colors;
};

export const IconCards = ({
  cards,
  color = Colors.WHITE,
  alignCardsContentLeft = false,
}: IconCardsPropsType) => {
  return (
    <ul
      className={"icon-cards" + (cards.length > 4 ? " icon-cards--wrap" : "")}
    >
      {cards.map((card, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: i * 0.1 }}
          viewport={{ once: true }}
          className="icon-cards__item"
        >
          <IconCard
            index={i}
            {...card}
            alignLeft={alignCardsContentLeft}
            color={color}
          />
        </motion.li>
      ))}
    </ul>
  );
};
