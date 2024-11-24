"use client";

import * as React from "react";
import { motion } from "framer-motion";

import "./OngoingUpdates.scss";

export type OngoingUpdatesPropsType = {
  title: string;
  description: string;
};

export const OngoingUpdates = ({
  title,
  description,
}: OngoingUpdatesPropsType) => (
  <div className="ongoing-updates">
    <img
      className="ongoing-updates__box-size"
      src="/images/animated/ongoing-updates/box-size.png"
      alt="Hidden Image"
    />
    <div className="ongoing-updates__content">
      <motion.h3
        className="ongoing-updates__title"
        dangerouslySetInnerHTML={{ __html: title }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="ongoing-updates__description"
      >
        {description}
      </motion.p>
    </div>
    <motion.img
      className="ongoing-updates__image ongoing-updates__image--1"
      initial={{ opacity: 0, y: -50, scale: 1.3 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      src="/images/animated/ongoing-updates/image-1.png"
      alt="Background Tick"
    />
    <motion.img
      className="ongoing-updates__image ongoing-updates__image--2"
      initial={{ opacity: 0, scale: 1.3 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.4 }}
      src="/images/animated/ongoing-updates/image-2.png"
      alt="Background Tick"
    />
    <motion.div
      className="ongoing-updates__image ongoing-updates__image--3"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.4 }}
    >
      <div>
        <img
          src="/images/animated/ongoing-updates/image-3.png"
          alt="Component 1"
        />

        <motion.img
          className="ongoing-updates__image ongoing-updates__icon--1"
          initial={{ opacity: 0, scale: 1.3 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.65 }}
          src="/images/animated/ongoing-updates/icon-1.png"
          alt="Cloud Icon"
        />

        <motion.img
          className="ongoing-updates__image ongoing-updates__image--4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          src="/images/animated/ongoing-updates/image-4.png"
          alt="Component 2"
        />
        <motion.img
          className="ongoing-updates__image ongoing-updates__image--5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          src="/images/animated/ongoing-updates/image-5.png"
          alt="Component 3"
        />
        <motion.img
          className="ongoing-updates__image ongoing-updates__image--6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          src="/images/animated/ongoing-updates/image-6.png"
          alt="Component 4"
        />
      </div>
    </motion.div>
  </div>
);
