import * as React from "react";
import {
  AnimatedCardBackground,
  AnimatedCardBackgroundColor,
  AnimatedCard as AnimatedCardType,
} from "@config";
import {
  Theme,
  AnimatedCard,
  type ThemePropsType,
  type AnimatedCardPropsType,
} from "@components";
import { getAnimatedCardAssets } from "./getAnimatedCardAssets";

export type ContentType = ThemePropsType | AnimatedCardPropsType["content"];

export const renderAnimatedCard = (
  animationType: AnimatedCardType,
  content?: ContentType
) => {
  switch (animationType) {
    case AnimatedCardType.GROCBAY:
    case AnimatedCardType.MOO_CHEW:
    case AnimatedCardType.AURA:
    case AnimatedCardType.RESTOBITE:
    case AnimatedCardType.MARKETPLACE:
    case AnimatedCardType.SERVICES:
    case AnimatedCardType.PET_STORES:
    case AnimatedCardType.CAFES:
      return <Theme {...(content as ThemePropsType)} type={animationType} />;
    case AnimatedCardType.MARKETING:
    case AnimatedCardType.SECURE:
    case AnimatedCardType.HASSLE:
    case AnimatedCardType.CUSTOMIZATION:
      return (
        <AnimatedCard
          type={animationType}
          assets={getAnimatedCardAssets(animationType)}
          background={{
            type: AnimatedCardBackground.TWO_TICKS,
            color: AnimatedCardBackgroundColor.GREY,
          }}
          content={content}
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
    case AnimatedCardType.WE_ARE:
    case AnimatedCardType.BLOG:
      return (
        <AnimatedCard
          type={animationType}
          assets={getAnimatedCardAssets(animationType)}
          background={{
            type: AnimatedCardBackground.TWO_TICKS,
            color: AnimatedCardBackgroundColor.LIGHT_WHITE,
          }}
          content={content}
        />
      );
    case AnimatedCardType.SHIP:
    case AnimatedCardType.ROCKET:
    case AnimatedCardType.ROCKET_V2:
    case AnimatedCardType.RELATIONSHIP:
      return (
        <AnimatedCard
          type={animationType}
          assets={getAnimatedCardAssets(animationType)}
          background={{
            type: AnimatedCardBackground.ONE_FILLED_TICK,
            color: AnimatedCardBackgroundColor.LIGHT_YELLOW,
          }}
          content={content}
        />
      );
    case AnimatedCardType.VISION:
      return (
        <AnimatedCard
          type={AnimatedCardType.VISION}
          assets={getAnimatedCardAssets(AnimatedCardType.VISION)}
          background={{
            type: AnimatedCardBackground.NO_ASSET,
            color: AnimatedCardBackgroundColor.LIGHT_YELLOW,
          }}
          content={content}
        />
      );
    case AnimatedCardType.CUSTOMER_MANAGEMENT:
    case AnimatedCardType.SMART_CONTROL:
    case AnimatedCardType.BUILT_FOR_GROWTH:
    case AnimatedCardType.EASY_MANAGEMENT:
      return (
        <AnimatedCard
          type={animationType}
          assets={getAnimatedCardAssets(animationType)}
          background={{
            type: AnimatedCardBackground.NO_ASSET,
            color: AnimatedCardBackgroundColor.GREY,
          }}
          content={content}
        />
      );
    case AnimatedCardType.ONGOING_UPDATES:
    case AnimatedCardType.SUPPORT:
    case AnimatedCardType.DELIVERY:
    case AnimatedCardType.HOW_TO_GUIDES:
    case AnimatedCardType.SPEAKER:
    case AnimatedCardType.TECHNOLOGY_PARTNER:
    case AnimatedCardType.PHONE_CHAT:
    case AnimatedCardType.MONEY_BAG:
    case AnimatedCardType.RATING:
    case AnimatedCardType.MOBILE:
      return (
        <AnimatedCard
          type={animationType}
          assets={getAnimatedCardAssets(animationType)}
          background={{
            type: AnimatedCardBackground.TWO_TICKS,
            color: AnimatedCardBackgroundColor.LIGHT_YELLOW,
          }}
          content={content}
        />
      );
    case AnimatedCardType.TWO_MEN_HANDSHAKE:
      return (
        <AnimatedCard
          type={AnimatedCardType.TWO_MEN_HANDSHAKE}
          assets={getAnimatedCardAssets(AnimatedCardType.TWO_MEN_HANDSHAKE)}
          background={{
            type: AnimatedCardBackground.TWO_TICKS,
            color: AnimatedCardBackgroundColor.RED_GRADIENT,
          }}
          content={content}
        />
      );
    case AnimatedCardType.GIRL_WITH_LAPTOP:
      return (
        <AnimatedCard
          type={AnimatedCardType.GIRL_WITH_LAPTOP}
          assets={getAnimatedCardAssets(AnimatedCardType.GIRL_WITH_LAPTOP)}
          background={{
            type: AnimatedCardBackground.TWO_TICKS,
            color: AnimatedCardBackgroundColor.GREEN_GRADIENT,
          }}
          content={content}
        />
      );
    case AnimatedCardType.MAN_WITH_TABLET:
      return (
        <AnimatedCard
          type={AnimatedCardType.MAN_WITH_TABLET}
          assets={getAnimatedCardAssets(AnimatedCardType.MAN_WITH_TABLET)}
          background={{
            type: AnimatedCardBackground.TWO_TICKS,
            color: AnimatedCardBackgroundColor.GREY_GRADIENT,
          }}
          content={content}
        />
      );
    case AnimatedCardType.MAN_WITH_SPEAKER:
    case AnimatedCardType.THREE_PEOPLE_LAPTOP:
      return (
        <AnimatedCard
          type={AnimatedCardType.THREE_PEOPLE_LAPTOP}
          assets={getAnimatedCardAssets(AnimatedCardType.THREE_PEOPLE_LAPTOP)}
          background={{
            type: AnimatedCardBackground.TWO_TICKS,
            color: AnimatedCardBackgroundColor.YELLOW_GRADIENT,
          }}
          content={content}
        />
      );
    default:
      return null;
  }
};
