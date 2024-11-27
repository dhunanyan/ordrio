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
      return <Theme {...(content as ThemePropsType)} type={animationType} />;
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
    case AnimatedCardType.WE_ARE:
      return (
        <AnimatedCard
          type={AnimatedCardType.WE_ARE}
          assets={getAnimatedCardAssets(AnimatedCardType.WE_ARE)}
          background={{
            type: AnimatedCardBackground.TWO_TICKS,
            color: AnimatedCardBackgroundColor.LIGHT_WHITE,
          }}
          content={content}
        />
      );
    case AnimatedCardType.BLOG:
      return (
        <AnimatedCard
          type={AnimatedCardType.BLOG}
          assets={getAnimatedCardAssets(AnimatedCardType.BLOG)}
          background={{
            type: AnimatedCardBackground.TWO_TICKS,
            color: AnimatedCardBackgroundColor.LIGHT_WHITE,
          }}
          content={content}
        />
      );
    case AnimatedCardType.HOW_TO_GUIDES:
      return (
        <AnimatedCard
          type={AnimatedCardType.HOW_TO_GUIDES}
          assets={getAnimatedCardAssets(AnimatedCardType.HOW_TO_GUIDES)}
          background={{
            type: AnimatedCardBackground.TWO_TICKS,
            color: AnimatedCardBackgroundColor.LIGHT_YELLOW,
          }}
          content={content}
        />
      );
    case AnimatedCardType.SPEAKER:
      return (
        <AnimatedCard
          type={AnimatedCardType.SPEAKER}
          assets={getAnimatedCardAssets(AnimatedCardType.SPEAKER)}
          background={{
            type: AnimatedCardBackground.TWO_TICKS,
            color: AnimatedCardBackgroundColor.LIGHT_YELLOW,
          }}
          content={content}
        />
      );
    case AnimatedCardType.TECHNOLOGY_PARTNER:
      return (
        <AnimatedCard
          type={AnimatedCardType.TECHNOLOGY_PARTNER}
          assets={getAnimatedCardAssets(AnimatedCardType.TECHNOLOGY_PARTNER)}
          background={{
            type: AnimatedCardBackground.TWO_TICKS,
            color: AnimatedCardBackgroundColor.LIGHT_YELLOW,
          }}
          content={content}
        />
      );
    case AnimatedCardType.PHONE_CHAT:
      return (
        <AnimatedCard
          type={AnimatedCardType.PHONE_CHAT}
          assets={getAnimatedCardAssets(AnimatedCardType.PHONE_CHAT)}
          background={{
            type: AnimatedCardBackground.TWO_TICKS,
            color: AnimatedCardBackgroundColor.LIGHT_YELLOW,
          }}
          content={content}
        />
      );
    case AnimatedCardType.MONEY_BAG:
      return (
        <AnimatedCard
          type={AnimatedCardType.MONEY_BAG}
          assets={getAnimatedCardAssets(AnimatedCardType.MONEY_BAG)}
          background={{
            type: AnimatedCardBackground.TWO_TICKS,
            color: AnimatedCardBackgroundColor.LIGHT_YELLOW,
          }}
          content={content}
        />
      );
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
      return (
        <AnimatedCard
          type={AnimatedCardType.MAN_WITH_SPEAKER}
          assets={getAnimatedCardAssets(AnimatedCardType.MAN_WITH_SPEAKER)}
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
