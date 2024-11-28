"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { OrderProcessingAsset } from "./OrderProcessingAsset";
import { SmallCardsAsset } from "./SmallCardsAsset";

import { AnimatedCardAssetKind, type AnimatedCardAssetsType } from "@utils";
import { AnimatedCard } from "@config";
import { InventoryGraphAsset } from "./InventoryGraphAsset";
import { LogoInCircleAsset } from "./LogoInCircleAsset";

export type RenderAssetPropsType = {
  index: number;
  type: AnimatedCard;
} & AnimatedCardAssetsType[0];

export const renderAsset = ({
  type,
  kind,
  index,
  initial,
  whileInView,
  transition,
  viewport,
  url,
}: RenderAssetPropsType) => {
  switch (kind) {
    case AnimatedCardAssetKind.LOGO_IN_CIRCLE:
      return (
        <LogoInCircleAsset
          key={index}
          index={index}
          type={type}
          url={url}
          initial={initial}
          whileInView={whileInView}
          transition={transition}
          viewport={viewport}
        />
      );
    case AnimatedCardAssetKind.INVENTORY_GRAPH:
      return (
        <InventoryGraphAsset
          key={index}
          index={index}
          type={type}
          url={url}
          initial={initial}
          whileInView={whileInView}
          transition={transition}
          viewport={viewport}
        />
      );
    case AnimatedCardAssetKind.SMALL_CARDS:
      return (
        <SmallCardsAsset
          key={index}
          index={index}
          type={type}
          initial={initial}
          whileInView={whileInView}
          transition={transition}
          viewport={viewport}
        />
      );
    case AnimatedCardAssetKind.ORDER_PROCESSING:
      return (
        <OrderProcessingAsset
          key={index}
          index={index}
          type={type}
          initial={initial}
          whileInView={whileInView}
          transition={transition}
          viewport={viewport}
        />
      );
    default:
      return (
        <motion.img
          key={index}
          src={url}
          alt={`Asset ${index}`}
          className={`animated-card__assets animated-card__assets--${type} animated-card__${type}--${index + 1}`}
          initial={initial}
          whileInView={whileInView}
          transition={transition}
          viewport={viewport}
        />
      );
  }
};
