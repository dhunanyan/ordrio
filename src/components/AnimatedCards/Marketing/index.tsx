"use client";

import * as React from "react";
import { motion } from "framer-motion";

import "./Marketing.scss";

export type MarketingPropsType = {
  title: string;
  description: string;
};

export const Marketing = ({ title, description }: MarketingPropsType) => (
  <div className="marketing">
    <img
      className="marketing__box-size"
      src="/images/animated/marketing/box-size.png"
      alt="Hidden Image"
    />
    <div className="marketing__content">
      <motion.h3
        className="marketing__title"
        dangerouslySetInnerHTML={{ __html: title }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="marketing__description"
      >
        {description}
      </motion.p>
    </div>
    <motion.img
      className="marketing__image marketing__image--1"
      initial={{ opacity: 0, y: -50, scale: 1.3 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      src="/images/animated/marketing/image-1.png"
      alt="Icons Spiral"
    />
    <motion.img
      className="marketing__image marketing__image--2"
      initial={{ opacity: 0, scale: 1.3 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      src="/images/animated/marketing/image-2.png"
      alt="Background Tick"
    />
    <motion.img
      className="marketing__image marketing__image--3"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      src="/images/animated/marketing/image-3.png"
      alt="Component 1"
    />
    <motion.img
      className="marketing__image marketing__image--4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.38 }}
      src="/images/animated/marketing/image-4.png"
      alt="Component 2"
    />
  </div>
);
