"use client";

import * as React from "react";
import Image from "next/image";

import { motion } from "framer-motion";

import { Content } from "@components/Content";

import "./CarouselSection.scss";

export type CarouselSectionPropsType = {
  title: string;
  subtitle: string;
  description: string;
  buttons: [{ text: string }, { text: string }];
  imageURLs: string[];
};

export const CarouselSection = ({
  title,
  subtitle,
  description,
  buttons,
  imageURLs,
}: CarouselSectionPropsType) => {
  const [activeTheme, setActiveTheme] = React.useState(0);
  const totalPages = 3; // with 0

  const onPrevClick = () => {
    setActiveTheme((prev) => Math.max(0, prev - 1));
  };

  const onNextClick = () => {
    setActiveTheme((prev) => Math.min(totalPages, prev + 1));
  };

  const buttonsWithClickEvents = React.useMemo(
    () => [
      {
        text: buttons[0].text,
        onClick: onPrevClick,
        disabled: activeTheme === 0,
      },
      {
        text: buttons[1].text,
        onClick: onNextClick,
        disabled: activeTheme === totalPages,
      },
    ],
    [buttons, activeTheme]
  );

  return (
    <section className="carousel-section">
      <div className="carousel-section__container">
        <motion.div
          className="carousel-section__view"
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {imageURLs.map((imageURL, i) => (
            <Image
              key={i}
              placeholder="blur"
              blurDataURL={imageURL}
              src={imageURL}
              alt={title}
              fill
              sizes="100%"
              style={{
                objectFit: "cover",
                opacity: i === activeTheme ? 1 : 0,
              }}
            />
          ))}
        </motion.div>
        <Content
          title={title}
          subtitle={subtitle}
          description={description}
          buttons={buttonsWithClickEvents}
          alignLeft
        />
      </div>
    </section>
  );
};
