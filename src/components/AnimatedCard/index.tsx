"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { renderAsset } from "./Assets";

import {
  AnimatedCard as AnimatedCardType,
  AnimatedCardBackground,
  AnimatedCardBackgroundColor,
} from "@config";

import {
  AnimatedCardAssetsType,
  renderAnimatedCardBackgroundAssets,
} from "@utils";

import "./AnimatedCard.scss";
import Link from "next/link";

export type AnimatedCardPropsType = {
  type: AnimatedCardType;
  content?: {
    title?: string;
    description?: string;
    link?: { text: string; href: string };
  };
  background?: {
    type?: AnimatedCardBackground;
    color?: AnimatedCardBackgroundColor;
  };
  assets: AnimatedCardAssetsType;
};

export const AnimatedCard = ({
  type,
  content,
  assets,
  background = {
    color: AnimatedCardBackgroundColor.LIGHT_WHITE,
    type: AnimatedCardBackground.NO_ASSET,
  },
}: AnimatedCardPropsType) => (
  <div
    className={`animated-card animated-card--${type} animated-card--${background.color}`}
  >
    <img src="/images/animated-cards/workaround.png" alt="I'm Hidden" />
    {renderAnimatedCardBackgroundAssets(
      background?.type || AnimatedCardBackground.NO_ASSET
    )}
    {content && (
      <div className="animated-card__content">
        {content.title && (
          <motion.h3
            className="animated-card__title"
            dangerouslySetInnerHTML={{ __html: content.title }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
        {content.description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="animated-card__description"
          >
            {content.description}
          </motion.p>
        )}
        {content.link && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.3, delay: 0.25 }}
          >
            <Link href={content.link.href} className="animated-card__link">
              {content.link.text}
            </Link>
          </motion.div>
        )}
      </div>
    )}
    {assets &&
      assets.map(({ url, initial, whileInView, transition, kind }, index) =>
        renderAsset({
          url,
          initial,
          whileInView,
          transition,
          type,
          kind,
          index,
        })
      )}
  </div>
);
