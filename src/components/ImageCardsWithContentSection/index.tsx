"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Content, ImageCard, type ImageCardPropsType } from "@components";

import { Colors } from "@config";
import "./ImageCardsWithContentSection.scss";

export type ImageCardsWithContentSectionPropsType = {
  backgroundImageURL?: string;
  title: string;
  description: string;
  link: { text: string; href: string };
  cards: ImageCardPropsType[];
};

export const ImageCardsWithContentSection = ({
  backgroundImageURL,
  title,
  description,
  link,
  cards,
}: ImageCardsWithContentSectionPropsType) => (
  <section className="image-cards-with-content-section">
    {backgroundImageURL && (
      <Image
        placeholder="blur"
        blurDataURL={backgroundImageURL}
        src={backgroundImageURL}
        alt="Background layout"
        width={300}
        height={300}
      />
    )}
    <div className="image-cards-with-content-section__container">
      <div className="image-cards-with-content-section__content">
        <Content
          title={title}
          description={description}
          buttons={[link]}
          alignLeft
          textColor={Colors.BLACK}
          tintColor={Colors.BLUE}
        />
      </div>

      <ul className="image-cards-with-content-section__cards">
        {cards.map((card, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: 10, y: -5 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15 * i }}
            viewport={{ once: true }}
          >
            <ImageCard {...card} index={i} />
          </motion.li>
        ))}
      </ul>
    </div>
  </section>
);
