"use client";

import * as React from "react";

import { motion } from "framer-motion";

import "./ImageCards.scss";
import { ImageCard, type ImageCardPropsType } from "./ImageCard";
import { Icons } from "@config";

export type ImageCardsPropsType = {
  cards: ImageCardPropsType[];
  isCarousel?: boolean;
};

export const ImageCards = ({
  cards,
  isCarousel = false,
}: ImageCardsPropsType) => {
  const cardCount = cards.length;
  const [positions, setPositions] = React.useState(
    [...Array(cardCount)].map((_, i) => i)
  );

  const handleBack = () => {
    setPositions((prev) => prev.map((index) => (index + 1) % cardCount));
  };

  const handleNext = () => {
    setPositions((prev) =>
      prev.map((index) => (index - 1 + cardCount) % cardCount)
    );
  };

  const variants = cards
    .map((_, i) => ({
      x: `${i * 200}%`,
      opacity: i === cardCount - 1 ? 0 : 1,
      zIndex: cardCount - 1 - i,
    }))
    .reduce((acc, val, index) => ({ ...acc, [String(index)]: val }), {});

  return (
    <div
      className={`image-cards image-cards--${isCarousel ? "carousel" : "standard"}`}
    >
      <motion.ul
        className={`image-cards__list image-cards__list--${isCarousel ? "carousel" : "standard"}`}
        initial={{ opacity: 0, x: 10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {cards.map((card, i) => (
          <motion.li
            key={i}
            initial={isCarousel && i.toString()}
            animate={isCarousel && positions[i].toString()}
            variants={isCarousel ? variants : {}}
            transition={isCarousel ? { duration: 0.9 } : {}}
          >
            <ImageCard {...card} isCarousel={isCarousel} index={i} />
          </motion.li>
        ))}
      </motion.ul>

      {isCarousel && (
        <div className="image-cards__buttons">
          <motion.button
            onClick={handleBack}
            className="image-cards__button"
            dangerouslySetInnerHTML={{ __html: Icons["arrow-left"] }}
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          />
          <motion.button
            onClick={handleNext}
            className="image-cards__button"
            dangerouslySetInnerHTML={{ __html: Icons["arrow-right"] }}
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          />
        </div>
      )}
    </div>
  );
};
