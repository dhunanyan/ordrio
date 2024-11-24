"use client";

import * as React from "react";
import { motion } from "framer-motion";

import "./Relationship.scss";

export type RelationshipPropsType = {
  title: string;
  description: string;
};

export const Relationship = ({ title, description }: RelationshipPropsType) => (
  <div className="relationship">
    <img
      className="relationship__box-size"
      src="/images/animated/relationship/box-size.png"
      alt="Hidden Image"
    />
    <div className="relationship__content">
      <motion.h3
        className="relationship__title"
        dangerouslySetInnerHTML={{ __html: title }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="relationship__description"
      >
        {description}
      </motion.p>
    </div>
    <motion.img
      className="relationship__image relationship__image--1"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      src="/images/animated/relationship/image-1.png"
      alt="Component 1"
    />
    <motion.img
      className="relationship__image relationship__image--2"
      initial={{ opacity: 0, rotate: 45 }}
      whileInView={{ opacity: 1, rotate: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      src="/images/animated/relationship/image-2.png"
      alt="Component 2"
    />
    <motion.img
      className="relationship__image relationship__image--3"
      initial={{ opacity: 0, y: 50, scale: 1.4 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.4 }}
      src="/images/animated/relationship/image-3.png"
      alt="Background Circle"
    />
  </div>
);
