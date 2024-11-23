"use client";

import * as React from "react";

import "./AnimatedCards.scss";
import { CardAnimation } from "@config";
import { Robot } from "./Robot";
import { Store } from "./Store";
import { Tablet } from "./Tablet";

export type AnimatedCardsPropsType = {
  cards: {
    title: string;
    subtitle: string;
    animation: CardAnimation;
  }[];
};

const renderAnimation = (animationType: CardAnimation) => {
  switch (animationType) {
    case CardAnimation.ROBOT:
      return <Robot />;
    case CardAnimation.STORE:
      return <Store />;
    case CardAnimation.TABLET:
      return <Tablet />;
    default:
      return null;
  }
};

export const AnimatedCards = ({ cards }: AnimatedCardsPropsType) => {
  return (
    <div className="animated-cards">
      {cards.map(({ title, subtitle, animation }, i) => (
        <div key={i} className="animated-card">
          <div className="animated-card__image">
            <img
              src={`/images/animated/${animation}/${animation}.png`}
              alt="Robot"
            />
            {renderAnimation(animation)}
          </div>
          <h4 className="animated-card__subtitle">{subtitle}</h4>
          <h3 className="animated-card__title">{title}</h3>
        </div>
      ))}
    </div>
  );
};
