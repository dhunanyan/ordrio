import * as React from "react";
import { AnimatedCard } from "@config";
import {
  Tablet,
  Robot,
  Store,
  AddOns,
  Ship,
  Hassle,
  CustomerManagement,
  type ShipPropsType,
  type AddOnsPropsType,
  type HasslePropsType,
  type CustomerManagementPropsType,
} from "@components";

export const renderAnimatedCard = (
  animationType: AnimatedCard,
  props?: ShipPropsType | AddOnsPropsType
) => {
  switch (animationType) {
    case AnimatedCard.ROBOT:
      return <Robot />;
    case AnimatedCard.STORE:
      return <Store />;
    case AnimatedCard.TABLET:
      return <Tablet />;
    case AnimatedCard.ADD_ONS:
      return <AddOns {...(props as AddOnsPropsType)} />;
    case AnimatedCard.SHIP:
      return <Ship {...(props as ShipPropsType)} />;
    case AnimatedCard.HASSLE:
      return <Hassle {...(props as HasslePropsType)} />;
    case AnimatedCard.CUSTOMER_MANAGEMENT:
      return <CustomerManagement {...(props as CustomerManagementPropsType)} />;
    default:
      return null;
  }
};
