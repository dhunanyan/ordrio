"use client";

import * as React from "react";

import { IconCard, type IconCardPropsType } from "./IconCard";
import { Colors } from "@config";

import "./IconCards.scss";

export type IconCardsPropsType = {
  cards: Omit<IconCardPropsType, "index">[];
  alignCardsContentLeft?: boolean;
  color: Colors;
};

export const IconCards = ({
  cards,
  color = Colors.WHITE,
  alignCardsContentLeft = false,
}: IconCardsPropsType) => (
  <ul className={"icon-cards" + (cards.length > 4 ? " icon-cards--wrap" : "")}>
    {cards.map((card, i) => (
      <li key={i} className="icon-cards__item">
        <IconCard
          index={i}
          {...card}
          alignLeft={alignCardsContentLeft}
          color={color}
        />
      </li>
    ))}
  </ul>
);

export { IconCard, type IconCardPropsType } from "./IconCard";
