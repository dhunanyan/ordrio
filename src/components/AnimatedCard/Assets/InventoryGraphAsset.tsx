"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { AnimatedCard } from "@config";
import { RenderAssetPropsType } from "./renderAsset";

import "./InventoryGraphAsset.scss";

export type InventoryGraphAssetPropsType = {
  index: number;
  type: AnimatedCard;
};

export const InventoryGraphAsset = ({
  type,
  index,
  initial,
  whileInView,
  transition,
  url,
}: RenderAssetPropsType) => (
  <motion.div
    initial={initial}
    whileInView={whileInView}
    transition={transition}
    className={`inventory-graph-asset animated-card__assets animated-card__assets--${type} animated-card__${type}--${index + 1}`}
  >
    <div>
      <img
        src={url || "/images/animated-cards/inventory.png"}
        alt="Component 3"
      />
      <ul className="lines-list">
        {[...Array(7)].map((_, i) => (
          <motion.li
            key={i}
            className="lines-list__item"
            initial={{ opacity: 0, height: 0 }}
            whileInView={{ opacity: 1, height: 35 + i * 10 }}
            transition={{ duration: 0.4, delay: 0.45 + i * 0.05 }}
          />
        ))}
      </ul>
    </div>
  </motion.div>
);
