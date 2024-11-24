import { AnimatedCard } from "@config";

export enum AnimatedCardAssetKind {
  ORDER_PROCESSING = "order-processing",
  SMALL_CARDS = "small-cards",
  INVENTORY_GRAPH = "inventory-graph",
}

export type AnimatedCardAssetsType = {
  initial?: { [key: string]: number };
  whileInView?: { [key: string]: number };
  transition?: { [key: string]: number };
  url?: string;
  kind?: AnimatedCardAssetKind;
}[];

export const getAnimatedCardAssets = (
  type: AnimatedCard
): AnimatedCardAssetsType => {
  switch (type) {
    case AnimatedCard.CUSTOMIZATION:
      return [
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: 0.3 },
          url: "/images/animated-cards/tiger-painting.png",
        },
      ];
    case AnimatedCard.DELIVERY:
      return [
        {
          initial: { opacity: 0, rotate: 30 },
          whileInView: { opacity: 1, rotate: 0 },
          transition: { duration: 0.6, delay: 0.3 },
          url: "/images/animated-cards/logos-on-circles-v2.png",
        },
      ];
    case AnimatedCard.BUILT_FOR_GROWTH:
      return [
        {
          initial: { opacity: 0, scale: 1.3 },
          whileInView: { opacity: 1, scale: 1 },
          transition: { duration: 0.3, delay: 0.2 },
          url: "/images/animated-cards/circles.png",
        },
        {
          initial: { opacity: 0, x: 50 },
          whileInView: { opacity: 1, x: 0 },
          transition: { duration: 0.4, delay: 0.3 },
          url: "/images/animated-cards/customer-list-component.png",
        },
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay: 0.5 },
          kind: AnimatedCardAssetKind.INVENTORY_GRAPH,
          url: "/images/animated-cards/order-history.png",
        },
      ];
    case AnimatedCard.SUPPORT:
      return [
        {
          initial: { opacity: 0, rotate: 45 },
          whileInView: { opacity: 1, rotate: 0 },
          transition: { duration: 0.5, delay: 0.6 },
          url: "/images/animated-cards/circles.png",
        },
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay: 0.5 },
          url: "/images/animated-cards/laptop-call.png",
        },
      ];
    case AnimatedCard.CONVERSION:
      return [
        {
          initial: { opacity: 0, scale: 1.3 },
          whileInView: { opacity: 1, scale: 1 },
          transition: { duration: 0.4, delay: 0.4 },
          url: "/images/animated-cards/wave.png",
        },
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay: 0.6 },
          url: "/images/animated-cards/rockets.png",
        },
      ];
    case AnimatedCard.SMART_CONTROL:
      return [
        {
          initial: { opacity: 0, x: 20 },
          whileInView: { opacity: 1, x: 0 },
          transition: { duration: 0.3 },
          url: "/images/animated-cards/alert-banner-component.png",
        },
        {
          initial: { opacity: 0, x: 50 },
          whileInView: { opacity: 1, x: 0 },
          transition: { duration: 0.4, delay: 0.2 },
          url: "/images/animated-cards/search-results-component.png",
        },
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay: 0.5 },
          kind: AnimatedCardAssetKind.INVENTORY_GRAPH,
        },
      ];
    case AnimatedCard.CUSTOMER_MANAGEMENT:
      return [
        {
          initial: { opacity: 0, y: 50 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: 0.55 },
          url: "/images/animated-cards/add-customer-component.png",
        },
        {
          initial: { opacity: 0, x: 20 },
          whileInView: { opacity: 1, x: 0 },
          transition: { duration: 0.5, delay: 0.75 },
          url: "/images/animated-cards/customer-details-component.png",
        },
        {
          initial: { opacity: 0, y: 50, scale: 1.4 },
          whileInView: { opacity: 1, y: 0, scale: 1 },
          transition: { duration: 0.3, delay: 0.2 },
          url: "/images/animated-cards/dotted-circle.png",
        },
      ];
    case AnimatedCard.ADD_ONS:
      return [
        {
          initial: { opacity: 0, y: -50, scale: 1.3 },
          whileInView: { opacity: 1, y: 0, scale: 1 },
          transition: { duration: 0.5, delay: 0.2 },
          url: "/images/animated-cards/add-ons/image-17.png",
        },
        {
          kind: AnimatedCardAssetKind.SMALL_CARDS,
        },
      ];
    case AnimatedCard.RELATIONSHIP:
      return [
        {
          initial: { opacity: 0, rotate: 45 },
          whileInView: { opacity: 1, rotate: 0 },
          transition: { duration: 0.5, delay: 0.3 },
          url: "/images/animated-cards/circles.png",
        },
        {
          initial: { opacity: 0, y: 50, scale: 1.4 },
          whileInView: { opacity: 1, y: 0, scale: 1 },
          transition: { duration: 0.3, delay: 0.4 },
          url: "/images/animated-cards/handshake.png",
        },
      ];
    case AnimatedCard.EASY_MANAGEMENT:
      return [
        {
          initial: { opacity: 0, y: -20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.3, delay: 0.2 },
          url: "/images/animated-cards/easy-management/image-1.png",
        },
        {
          initial: { opacity: 0, x: 25 },
          whileInView: { opacity: 1, x: 0 },
          transition: { duration: 0.4, delay: 0.4 },
          url: "/images/animated-cards/easy-management/image-2.png",
        },
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay: 0.6 },
          url: "/images/animated-cards/easy-management/image-3.png",
        },
        {
          initial: { opacity: 0, y: 10 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.2, delay: 0.6 },
          url: "/images/animated-cards/easy-management/image-4.png",
        },
        {
          initial: { opacity: 0, y: 10 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.2, delay: 0.6 + 0.05 },
          url: "/images/animated-cards/easy-management/image-5.png",
        },
      ];
    case AnimatedCard.HASSLE:
      return [
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay: 0.1 },
          url: "/images/animated-cards/orders-view.png",
        },
        {
          initial: { opacity: 0, y: 10 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay: 0.6 },
          url: "/images/animated-cards/notification.png",
        },
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay: 0.3 },
          kind: AnimatedCardAssetKind.ORDER_PROCESSING,
        },
      ];
    case AnimatedCard.SHIP:
      return [
        {
          initial: { opacity: 0, rotate: 50 },
          whileInView: { opacity: 1, rotate: 0 },
          transition: { duration: 0.5, delay: 0.2 },
          url: "/images/animated-cards/logos-on-circle.png",
        },
      ];
    case AnimatedCard.MARKETING:
      return [
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay: 0.6 },
          url: "/images/animated-cards/dashboard-view.png",
        },
        {
          initial: { opacity: 0, y: 10 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.2, delay: 0.6 },
          url: "/images/animated-cards/promote-component.png",
        },
      ];
    case AnimatedCard.ONGOING_UPDATES:
      return [
        {
          initial: { opacity: 0, y: 50 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay: 0.1 },
          url: "/images/animated-cards/dashboard-view-blank.png",
        },
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.2, delay: 0.2 },
          url: "/images/animated-cards/aura-component.png",
        },
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.2, delay: 0.25 },
          url: "/images/animated-cards/restobite-component.png",
        },
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.2, delay: 0.3 },
          url: "/images/animated-cards/grocbay-component.png",
        },
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.2, delay: 0.35 },
          url: "/images/animated-cards/cloud-upload-icon.png",
        },
      ];
    default:
      throw new Error("ERROR: unsupported AnimatedCard type");
  }
};
