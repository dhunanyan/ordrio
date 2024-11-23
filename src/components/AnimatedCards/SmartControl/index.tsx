"use client";

import * as React from "react";
import { motion } from "framer-motion";

import "./SmartControl.scss";

export const SmartControl = () => (
  <div className="smart-control">
    <img
      className="smart-control__box-size"
      src="/images/animated/smart-control/box-size.png"
      alt="Hidden Image"
    />
    <motion.img
      className="smart-control__image smart-control__image--1"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      src="/images/animated/smart-control/image-1.png"
      alt="Component 1"
    />
    <motion.img
      className="smart-control__image smart-control__image--2"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      src="/images/animated/smart-control/image-2.png"
      alt="Component 2"
    />
    <motion.div
      className="smart-control__image smart-control__image--3"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
    >
      <div>
        <img
          src="/images/animated/smart-control/image-3.png"
          alt="Component 3"
        />
        <ul className="lines-list">
          {[...Array(7)].map((_, i) => (
            <motion.li
              key={i}
              className="lines-list__item"
              initial={{ opacity: 0, height: 0 }}
              whileInView={{ opacity: 1, height: 35 + i * 10 }}
              transition={{ duration: 0.4, delay: 0.45 + i * 0.05 }}
            />
          ))}
        </ul>
      </div>
    </motion.div>
  </div>
);
