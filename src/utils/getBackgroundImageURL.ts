import { BackgroundImage } from "@config";

export const getBackgroundImageURL = (backgroundImage: BackgroundImage) => {
  switch (backgroundImage) {
    case BackgroundImage.GRADIENT:
    case BackgroundImage.GREY_SPIRAL:
    case BackgroundImage.GREY_SPIRALS:
    case BackgroundImage.BLUE_SPIRAL:
    case BackgroundImage.BLUE_SMALL_SPIRALS:
    case BackgroundImage.YELLOW_BRUSH:
    case BackgroundImage.WHITE_BRUSHES_FLIPPED:
      return `/images/${backgroundImage}.png`;
    default:
      throw new Error("Unsupported Background Image");
  }
};
