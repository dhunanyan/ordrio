"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { RenderAssetPropsType } from "./renderAsset";
import { IconCard } from "@components/IconCards";
import { PluginsComponentContent } from "@data";

import "./SmallCardsAsset.scss";

export const SmallCardsAsset = ({
  index,
  type,
  initial,
  whileInView,
  transition,
  viewport,
}: Omit<RenderAssetPropsType, "url">) => (
  <ul
    className={`animated-card__assets animated-card__assets--${type} animated-card__${type}--${index + 1}`}
  >
    {PluginsComponentContent.map((card, i) => (
      <motion.li
        key={i}
        initial={initial}
        whileInView={whileInView}
        transition={{
          ...transition,
          delay: (transition?.delay || 0) + i * 0.05,
        }}
        viewport={viewport}
      >
        <IconCard index={i} {...card} />
      </motion.li>
    ))}
  </ul>
);
