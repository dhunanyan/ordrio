import * as React from "react";
import { CardAnimation } from "@config";
import {
  Tablet,
  Robot,
  Store,
  AddOns,
  Ship,
  type ShipPropsType,
  type AddOnsPropsType,
} from "@components/AnimatedCards";

export const renderAnimatedCard = (
  animationType: CardAnimation,
  props?: ShipPropsType | AddOnsPropsType
) => {
  switch (animationType) {
    case CardAnimation.ROBOT:
      return <Robot />;
    case CardAnimation.STORE:
      return <Store />;
    case CardAnimation.TABLET:
      return <Tablet />;
    case CardAnimation.ADD_ONS:
      return <AddOns {...(props as AddOnsPropsType)} />;
    case CardAnimation.SHIP:
      return <Ship {...(props as ShipPropsType)} />;
    default:
      return null;
  }
};
