import * as React from "react";
import {
  AnimatedCardBackground,
  AnimatedCardBackgroundColor,
  AnimatedCard as AnimatedCardType,
} from "@config";
import { Theme, AnimatedCard, type ThemePropsType } from "@components";
import { getAnimatedCardAssets } from "./getAnimatedCardAssets";

export type AnimatedCardPropsType = ThemePropsType;

export const renderAnimatedCard = (
  animationType: AnimatedCardType,
  content?: AnimatedCardPropsType
) => {
  switch (animationType) {
    case AnimatedCardType.GROCBAY:
      return (
        <Theme
          {...(content as ThemePropsType)}
          type={AnimatedCardType.GROCBAY}
        />
      );
    case AnimatedCardType.MOO_CHEW:
      return (
        <Theme
          {...(content as ThemePropsType)}
          type={AnimatedCardType.MOO_CHEW}
        />
      );
    case AnimatedCardType.AURA:
      return (
        <Theme {...(content as ThemePropsType)} type={AnimatedCardType.AURA} />
      );
    case AnimatedCardType.RESTOBITE:
      return (
        <Theme
          {...(content as ThemePropsType)}
          type={AnimatedCardType.RESTOBITE}
        />
      );
    case AnimatedCardType.ADD_ONS:
      return (
        <AnimatedCard
          type={AnimatedCardType.ADD_ONS}
          assets={getAnimatedCardAssets(AnimatedCardType.ADD_ONS)}
          background={{
            type: AnimatedCardBackground.ONE_TICK,
            color: AnimatedCardBackgroundColor.GREY,
          }}
          content={content}
        />
      );
    case AnimatedCardType.SHIP:
      return (
        <AnimatedCard
          type={AnimatedCardType.SHIP}
          assets={getAnimatedCardAssets(AnimatedCardType.SHIP)}
          background={{
            type: AnimatedCardBackground.ONE_FILLED_TICK,
            color: AnimatedCardBackgroundColor.LIGHT_YELLOW,
          }}
          content={content}
        />
      );
    case AnimatedCardType.HASSLE:
      return (
        <AnimatedCard
          type={AnimatedCardType.HASSLE}
          assets={getAnimatedCardAssets(AnimatedCardType.HASSLE)}
          background={{
            type: AnimatedCardBackground.TWO_TICKS,
            color: AnimatedCardBackgroundColor.LIGHT_YELLOW,
          }}
          content={content}
        />
      );
    case AnimatedCardType.CUSTOMER_MANAGEMENT:
      return (
        <AnimatedCard
          type={AnimatedCardType.CUSTOMER_MANAGEMENT}
          assets={getAnimatedCardAssets(AnimatedCardType.CUSTOMER_MANAGEMENT)}
          background={{
            type: AnimatedCardBackground.NO_ASSET,
            color: AnimatedCardBackgroundColor.GREY,
          }}
          content={content}
        />
      );
    case AnimatedCardType.ONGOING_UPDATES:
      return (
        <AnimatedCard
          type={AnimatedCardType.ONGOING_UPDATES}
          assets={getAnimatedCardAssets(AnimatedCardType.ONGOING_UPDATES)}
          background={{
            type: AnimatedCardBackground.TWO_TICKS,
            color: AnimatedCardBackgroundColor.LIGHT_YELLOW,
          }}
          content={content}
        />
      );
    case AnimatedCardType.CONVERSION:
      return (
        <AnimatedCard
          type={AnimatedCardType.CONVERSION}
          assets={getAnimatedCardAssets(AnimatedCardType.CONVERSION)}
          background={{
            type: AnimatedCardBackground.ONE_FILLED_TICK,
            color: AnimatedCardBackgroundColor.LIGHT_YELLOW,
          }}
          content={content}
        />
      );
    case AnimatedCardType.RELATIONSHIP:
      return (
        <AnimatedCard
          type={AnimatedCardType.RELATIONSHIP}
          assets={getAnimatedCardAssets(AnimatedCardType.RELATIONSHIP)}
          background={{
            type: AnimatedCardBackground.ONE_FILLED_TICK,
            color: AnimatedCardBackgroundColor.LIGHT_YELLOW,
          }}
          content={content}
        />
      );
    case AnimatedCardType.MARKETING:
      return (
        <AnimatedCard
          type={AnimatedCardType.MARKETING}
          assets={getAnimatedCardAssets(AnimatedCardType.MARKETING)}
          background={{
            type: AnimatedCardBackground.TWO_TICKS,
            color: AnimatedCardBackgroundColor.GREY,
          }}
          content={content}
        />
      );
    case AnimatedCardType.SMART_CONTROL:
      return (
        <AnimatedCard
          type={AnimatedCardType.SMART_CONTROL}
          assets={getAnimatedCardAssets(AnimatedCardType.SMART_CONTROL)}
          background={{
            type: AnimatedCardBackground.NO_ASSET,
            color: AnimatedCardBackgroundColor.GREY,
          }}
          content={content}
        />
      );
    case AnimatedCardType.EASY_MANAGEMENT:
      return (
        <AnimatedCard
          type={AnimatedCardType.EASY_MANAGEMENT}
          assets={getAnimatedCardAssets(AnimatedCardType.EASY_MANAGEMENT)}
          background={{
            type: AnimatedCardBackground.NO_ASSET,
            color: AnimatedCardBackgroundColor.GREY,
          }}
          content={content}
        />
      );
    case AnimatedCardType.SECURE:
      return (
        <AnimatedCard
          type={AnimatedCardType.SECURE}
          assets={getAnimatedCardAssets(AnimatedCardType.SECURE)}
          background={{
            type: AnimatedCardBackground.TWO_TICKS,
            color: AnimatedCardBackgroundColor.GREY,
          }}
          content={content}
        />
      );
    case AnimatedCardType.SUPPORT:
      return (
        <AnimatedCard
          type={AnimatedCardType.SUPPORT}
          assets={getAnimatedCardAssets(AnimatedCardType.SUPPORT)}
          background={{
            type: AnimatedCardBackground.TWO_TICKS,
            color: AnimatedCardBackgroundColor.LIGHT_YELLOW,
          }}
          content={content}
        />
      );
    case AnimatedCardType.DELIVERY:
      return (
        <AnimatedCard
          type={AnimatedCardType.DELIVERY}
          assets={getAnimatedCardAssets(AnimatedCardType.DELIVERY)}
          background={{
            type: AnimatedCardBackground.TWO_TICKS,
            color: AnimatedCardBackgroundColor.LIGHT_YELLOW,
          }}
          content={content}
        />
      );
    case AnimatedCardType.BUILT_FOR_GROWTH:
      return (
        <AnimatedCard
          type={AnimatedCardType.BUILT_FOR_GROWTH}
          assets={getAnimatedCardAssets(AnimatedCardType.BUILT_FOR_GROWTH)}
          background={{
            type: AnimatedCardBackground.TWO_TICKS,
            color: AnimatedCardBackgroundColor.GREY,
          }}
          content={content}
        />
      );
    case AnimatedCardType.CUSTOMIZATION:
      return (
        <AnimatedCard
          type={AnimatedCardType.CUSTOMIZATION}
          assets={getAnimatedCardAssets(AnimatedCardType.CUSTOMIZATION)}
          background={{
            type: AnimatedCardBackground.TWO_TICKS,
            color: AnimatedCardBackgroundColor.GREY,
          }}
          content={content}
        />
      );
    default:
      return null;
  }
};
