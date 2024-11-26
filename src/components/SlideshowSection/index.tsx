"use client";

import * as React from "react";
import { motion } from "framer-motion";

import "./SlideshowSection.scss";

export type SlideshowSectionPropsType = {
  imageURLs: string[];
};

export const SlideshowSection = ({ imageURLs }: SlideshowSectionPropsType) => (
  <motion.div
    className="slideshow-section"
    initial={{ opacity: 0, x: -120, y: 10 }}
    whileInView={{ opacity: 1, x: 0, y: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}
  >
    {[
      ...Array(3), // This one is for infinite loop effect
    ].map((_, i) => (
      <ul key={i} className="slideshow-section__list">
        {(
          Array(10) // This one is for bigger screens
            .fill(imageURLs)
            .reduce((prev, next) => prev.concat(next)) as string[]
        ).map((imageURL, j) => (
          <li key={j} className="slideshow-section__item">
            <img src={imageURL} alt={`Image ${i}`} />
          </li>
        ))}
      </ul>
    ))}
  </motion.div>
);
