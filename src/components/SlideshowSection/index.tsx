"use client";

import * as React from "react";
import { motion } from "framer-motion";

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
      <motion.li
        key={i}
        className="slideshow-section__item"
        initial={{ opacity: 0, x: -120, y: 10 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
      >
        <img src={imageURL} alt={`Image ${i}`} />
      </motion.li>
    ))}
  </ul>
);
