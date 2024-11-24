"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { AnimatedCard } from "@config";

export type SmallCardsAssetPropsType = {
  index: number;
  type: AnimatedCard;
};

export const SmallCardsAsset = ({ index, type }: SmallCardsAssetPropsType) => (
  <div
    className={`animated-card__assets animated-card__assets--${type} animated-card__${type}--${index + 1}`}
  >
    {
      // Can be up to 16
      [...Array(10)].map((_, i) => (
        <motion.img
          key={i}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 + i * 0.05 }}
          src={`/images/animated-cards/add-ons/image-${i + 1}.png`}
          alt={`Component ${i + 1}`}
        />
      ))
    }
  </div>
);
