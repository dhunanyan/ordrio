"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { AnimatedCard } from "@config";
import { RenderAssetPropsType } from "./renderAsset";

import "./LogoInCircleAsset.scss";

export type LogoInCircleAssetPropsType = {
  index: number;
  type: AnimatedCard;
};

export const LogoInCircleAsset = ({
  type,
  index,
  initial,
  whileInView,
  transition,
  viewport,
  url,
}: RenderAssetPropsType) => (
  <motion.div
    className={`logo-in-circle-asset animated-card__assets animated-card__assets--${type} animated-card__${type}--${index + 1}`}
    initial={initial}
    whileInView={whileInView}
    transition={{
      ...transition,
      delay: (transition?.delay || 0) + 0.05 * index,
    }}
    viewport={viewport}
  >
    <img
      src={url || "/images/animated-cards/inventory.png"}
      alt={`Component ${index}`}
    />
  </motion.div>
);
