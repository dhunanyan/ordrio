import * as React from "react";

import "./SlideshowSection.scss";

export type SlideshowSectionPropsType = {
  imageURLs: string[];
};

export const SlideshowSection = ({ imageURLs }: SlideshowSectionPropsType) => (
  <ul className="slideshow-section">
    {(
      Array(10) // This is to duplicate the pictures to ensure that on big screens we also show something
        .fill(imageURLs)
        .reduce((prev, next) => prev.concat(next)) as string[]
    ).map((imageURL, i) => (
      <li key={i} className="slideshow-section__item">
        <img src={imageURL} alt={`Image ${i}`} />
      </li>
    ))}
  </ul>
);
