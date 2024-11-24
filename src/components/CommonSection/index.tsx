"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { Colors } from "@config";

import "./CommonSection.scss";

export type CommonSectionPropsType = {
  title: string;
  description: string;
  backgroundImageURL?: string;
  backgroundColor?: Colors;
  children?: React.ReactNode;
  imageURL: string;
};

export const CommonSection = ({
  backgroundImageURL,
  backgroundColor = Colors.GREY,
  title,
  description,
  children,
  imageURL,
}: CommonSectionPropsType) => (
  <section className={`common-section common-section--${backgroundColor}`}>
    {backgroundImageURL && <img src={backgroundImageURL} alt="Background" />}

    <div className="common-section__container">
      <div className="common-section__content">
        <motion.h2
          className="common-section__title"
          dangerouslySetInnerHTML={{ __html: title }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          viewport={{ once: true }}
        />
        <motion.p
          className="common-section__description"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {description}
        </motion.p>
      </div>
      {children && <div className="common-section__children">{children}</div>}
    </div>

    <motion.div
      className="common-section__image"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
    >
      <img src={imageURL} alt={title} />
    </motion.div>
  </section>
);
