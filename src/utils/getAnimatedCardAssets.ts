import { AnimatedCard } from "@config";

export enum AnimatedCardAssetKind {
  ORDER_PROCESSING = "order-processing",
  SMALL_CARDS = "small-cards",
  INVENTORY_GRAPH = "inventory-graph",
  LOGO_IN_CIRCLE = "logo-in-circle",
}

export type AnimatedCardAssetsType = {
  initial?: { [key: string]: number };
  whileInView?: { [key: string]: number };
  transition?: { [key: string]: number };
  viewport?: { [key: string]: boolean };
  url?: string;
  kind?: AnimatedCardAssetKind;
}[];

export const getAnimatedCardAssets = (
  type: AnimatedCard
): AnimatedCardAssetsType => {
  switch (type) {
    case AnimatedCard.MOBILE:
      return [
        {
          initial: { opacity: 0, rotate: 45 },
          whileInView: { opacity: 1, rotate: 0 },
          transition: { duration: 0.5, delay: 0.3 },
          viewport: { once: true },
          url: "/images/animated-cards/circles.png",
        },
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: 0.2 },
          viewport: { once: true },
          url: "/images/animated-cards/mobile.png",
        },
      ];
    case AnimatedCard.RATING:
      return [
        {
          initial: { opacity: 0, rotate: 45 },
          whileInView: { opacity: 1, rotate: 0 },
          transition: { duration: 0.5, delay: 0.3 },
          viewport: { once: true },
          url: "/images/animated-cards/circles.png",
        },
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: 0.2 },
          viewport: { once: true },
          url: "/images/animated-cards/tiger-rating.png",
        },
      ];
    case AnimatedCard.THREE_PEOPLE_LAPTOP:
      return [
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: 0.2 },
          viewport: { once: true },
          url: "/avatars/three-people-with-laptop.png",
        },
      ];
    case AnimatedCard.GIRL_WITH_LAPTOP:
      return [
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: 0.2 },
          viewport: { once: true },
          url: "/avatars/girl-with-laptop.png",
        },
      ];
    case AnimatedCard.MAN_WITH_SPEAKER:
      return [
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: 0.2 },
          viewport: { once: true },
          url: "/avatars/man-with-speaker.png",
        },
      ];
    case AnimatedCard.TWO_MEN_HANDSHAKE:
      return [
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: 0.2 },
          viewport: { once: true },
          url: "/avatars/two-men-handshake.png",
        },
      ];
    case AnimatedCard.MAN_WITH_TABLET:
      return [
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: 0.2 },
          viewport: { once: true },
          url: "/avatars/man-with-tablet.png",
        },
      ];
    case AnimatedCard.MONEY_BAG:
      return [
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: 0.2 },
          viewport: { once: true },
          url: "/images/animated-cards/money-bag.png",
        },
      ];
    case AnimatedCard.PHONE_CHAT:
      return [
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: 0.2 },
          viewport: { once: true },
          url: "/images/animated-cards/phone-chat.png",
        },
      ];
    case AnimatedCard.TECHNOLOGY_PARTNER:
      return [
        {
          initial: { opacity: 0, scale: 1.3 },
          whileInView: { opacity: 1, scale: 1 },
          transition: { duration: 0.5, delay: 0.2 },
          viewport: { once: true },
          url: "/images/animated-cards/dashboard-view-yellow.png",
        },
        {
          initial: { opacity: 0, y: 60, scale: 0.8 },
          whileInView: { opacity: 1, y: 0, scale: 0.8 },
          transition: { duration: 0.5, delay: 0.3 },
          viewport: { once: true },
          url: "/images/logos/blue-dart.png",
          kind: AnimatedCardAssetKind.LOGO_IN_CIRCLE,
        },
        {
          initial: { opacity: 0, y: 60, scale: 0.95 },
          whileInView: { opacity: 1, y: 0, scale: 0.95 },
          transition: { duration: 0.5, delay: 0.34 },
          viewport: { once: true },
          url: "/images/logos/dunzo.png",
          kind: AnimatedCardAssetKind.LOGO_IN_CIRCLE,
        },
        {
          initial: { opacity: 0, y: 60, scale: 1 },
          whileInView: { opacity: 1, y: 0, scale: 1 },
          transition: { duration: 0.5, delay: 0.34 },
          viewport: { once: true },
          url: "/images/logos/zomato.png",
          kind: AnimatedCardAssetKind.LOGO_IN_CIRCLE,
        },
        {
          initial: { opacity: 0, y: 60, scale: 0.8 },
          whileInView: { opacity: 1, y: 0, scale: 0.8 },
          transition: { duration: 0.5, delay: 0.36 },
          viewport: { once: true },
          url: "/images/logos/dtdc.png",
          kind: AnimatedCardAssetKind.LOGO_IN_CIRCLE,
        },
        {
          initial: { opacity: 0, y: 60, scale: 0.6 },
          whileInView: { opacity: 1, y: 0, scale: 0.6 },
          transition: { duration: 0.5, delay: 0.38 },
          viewport: { once: true },
          url: "/images/logos/gmail.png",
          kind: AnimatedCardAssetKind.LOGO_IN_CIRCLE,
        },
        {
          initial: { opacity: 0, y: 60, scale: 0.6 },
          whileInView: { opacity: 1, y: 0, scale: 0.6 },
          transition: { duration: 0.5, delay: 0.4 },
          viewport: { once: true },
          url: "/images/logos/google-calendar.png",
          kind: AnimatedCardAssetKind.LOGO_IN_CIRCLE,
        },
      ];
    case AnimatedCard.SPEAKER:
      return [
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: 0.2 },
          viewport: { once: true },
          url: "/images/animated-cards/speaker.png",
        },
      ];
    case AnimatedCard.BLOG:
      return [
        {
          initial: { opacity: 0, scale: 1.3 },
          whileInView: { opacity: 1, scale: 1 },
          transition: { duration: 0.5, delay: 0.2 },
          viewport: { once: true },
          url: "/images/animated-cards/blog.png",
        },
      ];
    case AnimatedCard.HOW_TO_GUIDES:
      return [
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: 0.2 },
          viewport: { once: true },
          url: "/avatars/three-people-with-laptop.png",
        },
      ];
    case AnimatedCard.WE_ARE:
      return [
        {
          initial: { opacity: 0, y: 100, scale: 1.3 },
          whileInView: { opacity: 1, y: 0, scale: 1 },
          transition: { duration: 0.5, delay: 0.2 },
          viewport: { once: true },
          url: "/images/animated-cards/handshake.png",
        },
      ];
    case AnimatedCard.VISION:
      return [
        {
          initial: { opacity: 0, scale: 1.3 },
          whileInView: { opacity: 1, scale: 1 },
          transition: { duration: 0.6, delay: 0.2 },
          viewport: { once: true },
          url: "/images/animated-cards/globe.png",
        },
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: 0.3 },
          viewport: { once: true },
          url: "/images/animated-cards/tiger-computer.png",
        },
      ];
    case AnimatedCard.SECURE:
      return [
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: 0.3 },
          viewport: { once: true },
          url: "/images/animated-cards/shield-check.png",
        },
      ];
    case AnimatedCard.CUSTOMIZATION:
      return [
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: 0.3 },
          viewport: { once: true },
          url: "/images/animated-cards/tiger-painting.png",
        },
      ];
    case AnimatedCard.DELIVERY:
      return [
        {
          initial: { opacity: 0, rotate: 30 },
          whileInView: { opacity: 1, rotate: 0 },
          transition: { duration: 0.6, delay: 0.3 },
          viewport: { once: true },
          url: "/images/animated-cards/logos-on-circles-v2.png",
        },
      ];
    case AnimatedCard.BUILT_FOR_GROWTH:
      return [
        {
          initial: { opacity: 0, scale: 1.3 },
          whileInView: { opacity: 1, scale: 1 },
          transition: { duration: 0.3, delay: 0.2 },
          viewport: { once: true },
          url: "/images/animated-cards/circles-grey.png",
        },
        {
          initial: { opacity: 0, x: 50 },
          whileInView: { opacity: 1, x: 0 },
          transition: { duration: 0.4, delay: 0.3 },
          viewport: { once: true },
          url: "/images/animated-cards/orders-view.png",
        },
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay: 0.5 },
          viewport: { once: true },
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
          viewport: { once: true },
          url: "/images/animated-cards/circles.png",
        },
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay: 0.5 },
          viewport: { once: true },
          url: "/images/animated-cards/laptop-call.png",
        },
      ];

    case AnimatedCard.ROCKET:
      return [
        {
          initial: { opacity: 0, scale: 1.3 },
          whileInView: { opacity: 1, scale: 1 },
          transition: { duration: 0.4, delay: 0.4 },
          viewport: { once: true },
          url: "/images/animated-cards/wave.png",
        },
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay: 0.6 },
          viewport: { once: true },
          url: "/images/animated-cards/rockets.png",
        },
      ];
    case AnimatedCard.ROCKET_V2:
      return [
        {
          initial: { opacity: 0, scale: 1.3 },
          whileInView: { opacity: 1, scale: 1 },
          transition: { duration: 0.4, delay: 0.4 },
          viewport: { once: true },
          url: "/images/animated-cards/wave-v2.png",
        },
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay: 0.6 },
          viewport: { once: true },
          url: "/images/animated-cards/rocket-big.png",
        },
      ];
    case AnimatedCard.SMART_CONTROL:
      return [
        {
          initial: { opacity: 0, x: 20 },
          whileInView: { opacity: 1, x: 0 },
          transition: { duration: 0.3 },
          viewport: { once: true },
          url: "/images/animated-cards/alert-banner-component.png",
        },
        {
          initial: { opacity: 0, x: 50 },
          whileInView: { opacity: 1, x: 0 },
          transition: { duration: 0.4, delay: 0.2 },
          viewport: { once: true },
          url: "/images/animated-cards/search-results-component.png",
        },
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay: 0.5 },
          viewport: { once: true },
          kind: AnimatedCardAssetKind.INVENTORY_GRAPH,
        },
      ];
    case AnimatedCard.CUSTOMER_MANAGEMENT:
      return [
        {
          initial: { opacity: 0, y: 50 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: 0.55 },
          viewport: { once: true },
          url: "/images/animated-cards/add-customer-component.png",
        },
        {
          initial: { opacity: 0, x: 20 },
          whileInView: { opacity: 1, x: 0 },
          transition: { duration: 0.5, delay: 0.75 },
          viewport: { once: true },
          url: "/images/animated-cards/customer-details-component.png",
        },
        {
          initial: { opacity: 0, y: 50, scale: 1.4 },
          whileInView: { opacity: 1, y: 0, scale: 1 },
          transition: { duration: 0.3, delay: 0.2 },
          viewport: { once: true },
          url: "/images/animated-cards/dotted-circle.png",
        },
      ];
    case AnimatedCard.ADD_ONS:
      return [
        {
          kind: AnimatedCardAssetKind.SMALL_CARDS,
          initial: { opacity: 0, x: 50 },
          whileInView: { opacity: 1, x: 0 },
          transition: { duration: 0.5, delay: 0.2 },
        },
      ];
    case AnimatedCard.RELATIONSHIP:
      return [
        {
          initial: { opacity: 0, rotate: 45 },
          whileInView: { opacity: 1, rotate: 0 },
          transition: { duration: 0.5, delay: 0.3 },
          viewport: { once: true },
          url: "/images/animated-cards/circles.png",
        },
        {
          initial: { opacity: 0, y: 50, scale: 1.4 },
          whileInView: { opacity: 1, y: 0, scale: 1 },
          transition: { duration: 0.3, delay: 0.4 },
          viewport: { once: true },
          url: "/images/animated-cards/handshake.png",
        },
      ];
    case AnimatedCard.EASY_MANAGEMENT:
      return [
        {
          initial: { opacity: 0, y: -20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.3, delay: 0.2 },
          viewport: { once: true },
          url: "/images/animated-cards/easy-management/image-1.png",
        },
        {
          initial: { opacity: 0, x: 25 },
          whileInView: { opacity: 1, x: 0 },
          transition: { duration: 0.4, delay: 0.4 },
          viewport: { once: true },
          url: "/images/animated-cards/easy-management/image-2.png",
        },
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay: 0.6 },
          viewport: { once: true },
          url: "/images/animated-cards/easy-management/image-3.png",
        },
        {
          initial: { opacity: 0, y: 10 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.2, delay: 0.6 },
          viewport: { once: true },
          url: "/images/animated-cards/easy-management/image-4.png",
        },
        {
          initial: { opacity: 0, y: 10 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.2, delay: 0.6 + 0.05 },
          viewport: { once: true },
          url: "/images/animated-cards/easy-management/image-5.png",
        },
      ];
    case AnimatedCard.HASSLE:
      return [
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay: 0.1 },
          viewport: { once: true },
          url: "/images/animated-cards/orders-view-v2.png",
        },
        {
          initial: { opacity: 0, y: 10 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay: 0.6 },
          viewport: { once: true },
          url: "/images/animated-cards/notification.png",
        },
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay: 0.3 },
          viewport: { once: true },
          kind: AnimatedCardAssetKind.ORDER_PROCESSING,
        },
      ];
    case AnimatedCard.SHIP:
      return [
        {
          initial: { opacity: 0, rotate: 50 },
          whileInView: { opacity: 1, rotate: 0 },
          transition: { duration: 0.5, delay: 0.2 },
          viewport: { once: true },
          url: "/images/animated-cards/logos-on-circle.png",
        },
      ];
    case AnimatedCard.MARKETING:
      return [
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay: 0.6 },
          viewport: { once: true },
          url: "/images/animated-cards/dashboard-view.png",
        },
        {
          initial: { opacity: 0, y: 10 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.2, delay: 0.6 },
          viewport: { once: true },
          url: "/images/animated-cards/promote-component.png",
        },
      ];
    case AnimatedCard.ONGOING_UPDATES:
      return [
        {
          initial: { opacity: 0, y: 50 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay: 0.1 },
          viewport: { once: true },
          url: "/images/animated-cards/dashboard-view-blank.png",
        },
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.2, delay: 0.2 },
          viewport: { once: true },
          url: "/images/animated-cards/aura-component.png",
        },
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.2, delay: 0.25 },
          viewport: { once: true },
          url: "/images/animated-cards/restobite-component.png",
        },
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.2, delay: 0.3 },
          viewport: { once: true },
          url: "/images/animated-cards/grocbay-component.png",
        },
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.2, delay: 0.35 },
          viewport: { once: true },
          url: "/images/animated-cards/cloud-upload-icon.png",
        },
      ];
    default:
      throw new Error("ERROR: unsupported AnimatedCard type");
  }
};
