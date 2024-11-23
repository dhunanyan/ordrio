"use client";

import * as React from "react";

import { AnimatePresence, motion } from "framer-motion";

import { Content } from "@components";

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
  const totalPages = imageURLs.length; // with 0

  const onPrevClick = () => {
    setActiveTheme((prev) => Math.max(0, prev - 1));
  };

  const onNextClick = () => {
    setActiveTheme((prev) => Math.min(+totalPages, prev + 1));
  };

  const prevButton = React.useMemo(
    () => ({
      text: buttons[0].text,
      disabled: activeTheme === 0,
    }),
    [buttons, activeTheme]
  );

  const nextButton = React.useMemo(
    () => ({
      text: buttons[1].text,
      disabled: activeTheme === totalPages,
    }),
    [buttons, activeTheme, totalPages]
  );

  const variants = {
    hidden: () => ({
      opacity: 0,
    }),
    visible: { x: 0, opacity: 1 },
    exit: () => ({
      opacity: 0,
    }),
  };

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
          <AnimatePresence custom={1}>
            {imageURLs.map(
              (imageURL, i) =>
                i === activeTheme && (
                  <motion.img
                    custom={1}
                    key={i}
                    src={imageURL}
                    alt={`Theme ${1}`}
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                )
            )}
          </AnimatePresence>
        </motion.div>
        <Content
          title={title}
          subtitle={subtitle}
          description={description}
          buttons={[
            { ...prevButton, onClick: onPrevClick },
            { ...nextButton, onClick: onNextClick },
          ]}
          alignLeft
        />
      </div>
    </section>
  );
};
