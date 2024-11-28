"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { RenderAssetPropsType } from "./renderAsset";

export const SmallCardsAsset = ({
  index,
  type,
  initial,
  whileInView,
  transition,
  viewport,
}: Omit<RenderAssetPropsType, "url">) => (
  <div
    className={`animated-card__assets animated-card__assets--${type} animated-card__${type}--${index + 1}`}
  >
    {
      // Can be up to 16
      [...Array(10)].map((_, i) => (
        <motion.img
          key={i}
          initial={initial}
          whileInView={whileInView}
          transition={{
            ...transition,
            delay: (transition?.delay || 0) + i * 0.05,
          }}
          viewport={viewport}
          src={`/images/animated-cards/add-ons/image-${i + 1}.png`}
          alt={`Component ${i + 1}`}
        />
      ))
    }
  </div>
);
