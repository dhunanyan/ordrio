"use client";

import * as React from "react";
import Link from "next/link";

import { motion } from "framer-motion";

import "./AddOns.scss";

export type AddOnsPropsType = {
  title: string;
  description: string;
  link: { text: string; href: "#" };
};

export const AddOns = ({ title, description, link }: AddOnsPropsType) => (
  <div className="add-ons">
    <img
      className="add-ons__box-size"
      src="/images/animated/add-ons/box-size.png"
      alt="Hidden Image"
    />
    <div className="add-ons__content">
      <motion.h3
        className="add-ons__title"
        dangerouslySetInnerHTML={{ __html: title }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="add-ons__description"
      >
        {description}
      </motion.p>
      {link && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Link className="add-ons__link" href={link.href}>
            {link.text}
          </Link>
        </motion.div>
      )}
    </div>

    <motion.img
      className="add-ons__image add-ons__image--18"
      initial={{ opacity: 0, y: -50, scale: 1.3 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      src="/images/animated/add-ons/image-17.png"
      alt="Icons Spiral"
    />

    <div className="add-ons__components">
      {
        // Can be up to 16
        [...Array(10)].map((_, i) => (
          <motion.img
            key={i}
            className={`add-ons__component--${i + 1}`}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.05 }}
            src={`/images/animated/add-ons/image-${i + 1}.png`}
            alt={`Component ${i + 1}`}
          />
        ))
      }
    </div>
  </div>
);
