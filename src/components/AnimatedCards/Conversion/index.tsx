"use client";

import * as React from "react";
import { motion } from "framer-motion";

import "./Conversion.scss";

export type ConversionPropsType = {
  title: string;
  description: string;
};

export const Conversion = ({ title, description }: ConversionPropsType) => (
  <div className="conversion">
    <img
      className="conversion__box-size"
      src="/images/animated/conversion/box-size.png"
      alt="Hidden Image"
    />
    <div className="conversion__content">
      <motion.h3
        className="conversion__title"
        dangerouslySetInnerHTML={{ __html: title }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="conversion__description"
      >
        {description}
      </motion.p>
    </div>
    <motion.img
      className="conversion__image conversion__image--1"
      initial={{ opacity: 0, y: -50, scale: 1.3 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      src="/images/animated/conversion/image-1.png"
      alt="Background Tick"
    />
    <motion.img
      className="conversion__image conversion__image--2"
      initial={{ opacity: 0, scale: 1.3 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.4 }}
      src="/images/animated/conversion/image-2.png"
      alt="Background Wave"
    />
    <motion.img
      className="conversion__image conversion__image--3"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.6 }}
      src="/images/animated/conversion/image-3.png"
      alt="Background Tick"
    />
  </div>
);
