import * as React from "react";
import { AnimatedCard } from "@config";
import {
  Tablet,
  Robot,
  Store,
  AddOns,
  Theme,
  Ship,
  Hassle,
  CustomerManagement,
  Conversion,
  OngoingUpdates,
  Relationship,
  Marketing,
  SmartControl,
  type RelationshipPropsType,
  type MarketingPropsType,
  type OngoingUpdatesPropsType,
  type ConversionPropsType,
  type ShipPropsType,
  type AddOnsPropsType,
  type HasslePropsType,
  type CustomerManagementPropsType,
  type ThemePropsType,
} from "@components";

export type AnimatedCardPropsType =
  | ShipPropsType
  | AddOnsPropsType
  | HasslePropsType
  | OngoingUpdatesPropsType
  | ConversionPropsType
  | ThemePropsType
  | RelationshipPropsType
  | MarketingPropsType;

export const renderAnimatedCard = (
  animationType: AnimatedCard,
  props?: AnimatedCardPropsType
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
    case AnimatedCard.ONGOING_UPDATES:
      return <OngoingUpdates {...(props as OngoingUpdatesPropsType)} />;
    case AnimatedCard.CONVERSION:
      return <Conversion {...(props as ConversionPropsType)} />;
    case AnimatedCard.GROCBAY:
      return (
        <Theme {...(props as ThemePropsType)} type={AnimatedCard.GROCBAY} />
      );
    case AnimatedCard.MOO_CHEW:
      return (
        <Theme {...(props as ThemePropsType)} type={AnimatedCard.MOO_CHEW} />
      );
    case AnimatedCard.AURA:
      return <Theme {...(props as ThemePropsType)} type={AnimatedCard.AURA} />;
    case AnimatedCard.RESTOBITE:
      return (
        <Theme {...(props as ThemePropsType)} type={AnimatedCard.RESTOBITE} />
      );
    case AnimatedCard.RELATIONSHIP:
      return <Relationship {...(props as RelationshipPropsType)} />;
    case AnimatedCard.MARKETING:
      return <Marketing {...(props as MarketingPropsType)} />;
    case AnimatedCard.SMART_CONTROL:
      return <SmartControl />;
    default:
      return null;
  }
};
