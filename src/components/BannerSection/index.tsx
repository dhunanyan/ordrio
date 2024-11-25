"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { Content } from "@components";

import "./BannerSection.scss";

export type BannerSectionPropsType = {
  title: string;
  subtitle?: string;
  backgroundImageURL?: string;
  imageURL?: string;
  icon?: string;
  description?: string;
  links: { text: string; href: string }[];
  link?: { text: string; href: string };
  alignContentLeft?: boolean;
  tintColor?: "white" | "yellow" | "blue";
};

export const BannerSection = ({
  backgroundImageURL,
  imageURL,
  icon,
  title,
  subtitle,
  description,
  links,
  link,
  tintColor = "yellow",
  alignContentLeft = true,
}: BannerSectionPropsType) => (
  <section className="banner-section">
    {backgroundImageURL && (
      <img src={backgroundImageURL} alt="Background layout" />
    )}
    <div
      className={
        "banner-section__container" +
        (imageURL ? " banner-section__container--split" : "")
      }
    >
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
          icon={icon}
          title={title}
          subtitle={subtitle}
          description={description}
          buttons={links}
          link={link}
          alignLeft={alignContentLeft}
          tintColor={tintColor}
        />
      </div>
    </div>
  </section>
);
