"use client";

import * as React from "react";
import { motion } from "framer-motion";

import "./Slideshow.scss";

export type SlideshowPropsType = {
  imageURLs: string[];
};

export const Slideshow = ({ imageURLs }: SlideshowPropsType) => (
  <motion.div
    className="slideshow"
    initial={{ opacity: 0, x: -120, y: 10 }}
    whileInView={{ opacity: 1, x: 0, y: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}
  >
    {[
      ...Array(3), // This one is for infinite loop effect
    ].map((_, i) => (
      <ul key={i} className="slideshow__list">
        {(
          Array(10) // This one is for bigger screens
            .fill(imageURLs)
            .reduce((prev, next) => prev.concat(next)) as string[]
        ).map((imageURL, j) => (
          <li key={j} className="slideshow__item">
            <img src={imageURL} alt={`Image ${i}`} />
          </li>
        ))}
      </ul>
    ))}
  </motion.div>
);
