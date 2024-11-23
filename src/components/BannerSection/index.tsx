"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { Content } from "@components";

import "./BannerSection.scss";

export type BannerSectionPropsType = {
  title: string;
  backgroundImageURL?: string;
  imageURL?: string;
  showIcon?: boolean;
  description?: string;
  links: { text: string; href: string }[];
  link?: { text: string; href: string };
  tintColor?: "white" | "yellow" | "blue";
};

export const BannerSection = ({
  backgroundImageURL,
  imageURL,
  showIcon,
  title,
  description,
  links,
  link,
  tintColor = "yellow",
}: BannerSectionPropsType) => (
  <section className="banner-section">
    {backgroundImageURL && (
      <img src={backgroundImageURL} alt="Background layout" />
    )}
    <div className="banner-section__container">
      {imageURL && (
        <motion.div
          className="banner-section__image"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          <img src={imageURL} alt={title} />
        </motion.div>
      )}
      <div
        className={
          "banner-section__content" +
          (imageURL ? " banner-section__content--split" : "")
        }
      >
        <Content
          showIcon={showIcon}
          title={title}
          description={description}
          buttons={links}
          link={link}
          alignLeft
          tintColor={tintColor}
        />
      </div>
    </div>
  </section>
);
