"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { Content } from "../Content";

import "./ContentWithImageSection.scss";
import { Colors } from "@config";

export type ContentWithImageSectionPropsType = {
  title: string;
  description: string;
  imageURL: string;
  switchOrder?: boolean;
  icon?: string;
};

export const ContentWithImageSection = ({
  title,
  description,
  imageURL,
  switchOrder = false,
  icon,
}: ContentWithImageSectionPropsType) => (
  <section className="content-with-image-section">
    <div
      className={
        "content-with-image-section__container" +
        (switchOrder
          ? " content-with-image-section__container--switch-order"
          : "")
      }
    >
      {imageURL && (
        <motion.div
          className="content-with-image-section__image"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <img src={imageURL} alt={title} />
        </motion.div>
      )}

      <div className="content-with-image-section__content">
        <Content
          title={title}
          description={description}
          icon={icon}
          textColor={Colors.BLACK}
          tintColor={Colors.WHITE}
          alignLeft
        />
      </div>
    </div>
  </section>
);
