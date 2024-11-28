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
    link?: { text: string; href: string; target?: string };
  };
  background?: {
    type?: AnimatedCardBackground;
    color?: AnimatedCardBackgroundColor;
  };
  assets: AnimatedCardAssetsType;
};

const ANIMATION_DELAY_TITLE = 0;
const ANIMATION_DELAY_DESCRIPTION = ANIMATION_DELAY_TITLE + 0.05;
const ANIMATION_DELAY_LINK = ANIMATION_DELAY_DESCRIPTION + 0.005;

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
    <img
      className="animated-card__workaround"
      src="/images/animated-cards/workaround.png"
      alt="I'm Hidden"
    />
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
            transition={{ duration: 0.3, delay: ANIMATION_DELAY_TITLE }}
            viewport={{ once: true }}
          />
        )}
        {content.description && (
          <motion.p
            className="animated-card__description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.3, delay: ANIMATION_DELAY_DESCRIPTION }}
            viewport={{ once: true }}
          >
            {content.description}
          </motion.p>
        )}
        {content.link && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.3, delay: ANIMATION_DELAY_LINK }}
            viewport={{ once: true }}
          >
            <Link
              href={content.link.href}
              target={content.link.target}
              className="animated-card__link"
            >
              {content.link.text}
            </Link>
          </motion.div>
        )}
      </div>
    )}
    {assets &&
      assets.map(
        ({ url, initial, whileInView, transition, kind, viewport }, index) =>
          renderAsset({
            url,
            type,
            kind,
            index,
            initial,
            whileInView,
            transition,
            viewport,
          })
      )}
  </div>
);
