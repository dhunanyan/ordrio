"use client";

import * as React from "react";
import { motion } from "framer-motion";

import "./Ship.scss";

export type ShipPropsType = {
  title: string;
  description: string;
};

export const Ship = ({ title, description }: ShipPropsType) => (
  <div className="ship">
    <img
      className="ship__box-size"
      src="/images/animated/ship/box-size.png"
      alt="Hidden Image"
    />
    <div className="ship__content">
      <motion.h3
        className="ship__title"
        dangerouslySetInnerHTML={{ __html: title }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="ship__description"
      >
        {description}
      </motion.p>
    </div>
    <motion.img
      className="ship__image ship__image--1"
      initial={{ opacity: 0, y: -50, scale: 1.3 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      src="/images/animated/ship/image-1.png"
      alt="Icons Spiral"
    />
    <motion.img
      className="ship__image ship__image--2"
      initial={{ opacity: 0, rotate: 30 }}
      whileInView={{ opacity: 1, rotate: 0 }}
      transition={{ duration: 0.4, delay: 0.4 }}
      src="/images/animated/ship/image-2.png"
      alt="Background Tick"
    />
  </div>
);
