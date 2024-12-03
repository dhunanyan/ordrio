"use client";

import * as React from "react";

import { IconCard, type IconCardPropsType } from "./IconCard";
import { Colors } from "@config";

import "./IconCards.scss";

export type IconCardsPropsType = {
  cards: Omit<IconCardPropsType, "index">[];
  alignCardsContentLeft?: boolean;
  iconColor?: Colors;
  color?: Colors;
};

export const IconCards = ({
  cards,
  iconColor = Colors.TRANSPARENT,
  color = Colors.WHITE,
  alignCardsContentLeft = false,
}: IconCardsPropsType) => (
  <ul
    className={
      "icon-cards" +
      (cards.length > 6
        ? " icon-cards--very-big"
        : cards.length > 4
          ? " icon-cards--big"
          : cards.length === 4
            ? " icon-cards--standard"
            : "")
    }
  >
    {cards.map((card, i) => (
      <li key={i} className="icon-cards__item">
        <IconCard
          index={i}
          {...card}
          alignLeft={alignCardsContentLeft}
          color={color}
          iconColor={iconColor}
        />
      </li>
    ))}
  </ul>
);

export { IconCard, type IconCardPropsType } from "./IconCard";
