"use client";

import * as React from "react";
import Image from "next/image";

import { motion } from "framer-motion";

import { Content } from "@components/Content";

import "./BannerSection.scss";

export type BannerSectionPropsType = {
  title: string;
  backgroundImageURL?: string;
  imageURL?: string;
  showIcon?: boolean;
  description?: string;
  links: { text: string; href: string }[];
  link?: { text: string; href: string };
};

export const BannerSection = ({
  backgroundImageURL,
  imageURL,
  showIcon,
  title,
  description,
  links,
  link,
}: BannerSectionPropsType) => (
  <section className="banner-section">
    {backgroundImageURL && (
      <Image
        placeholder="blur"
        blurDataURL={backgroundImageURL}
        src={backgroundImageURL}
        alt="Background layout"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
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
          <Image
            placeholder="blur"
            blurDataURL={imageURL}
            src={imageURL}
            alt={title}
            fill
            sizes="100%"
            style={{
              objectFit: "cover",
            }}
          />
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
        />
      </div>
    </div>
  </section>
);

// import { BannerSection, BannerSectionPropsType } from "@components/BannerSection";
// const banner-sectionProps = {
//   backgroundImageURL: "/images/spiral.png",
//   showIcon: true,
//   imageURL: "/images/tiger-boxes.png",
//   title: "Ready to Elevate Your Fashion Brand?",
//   buttons: [{ text: "Setup Your Free Account", href: "#" }],
//   link: { text: "Schedule a Personalized Demo", href: "#" },
// } as BannerSectionPropsType;
// <BannerSection {...banner-sectionProps} />;
