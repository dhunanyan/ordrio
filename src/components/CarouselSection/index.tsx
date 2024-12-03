"use client";

import * as React from "react";

import { AnimatePresence, motion } from "framer-motion";

import { Content } from "@components";

import "./CarouselSection.scss";
import Link from "next/link";

export type CarouselSectionPropsType = {
  title: string;
  subtitle: string;
  description: string;
  buttons: [{ text: string }, { text: string }];
  slides: { imageURL: string; href: string; target?: string }[];
};

export const CarouselSection = ({
  title,
  subtitle,
  description,
  buttons,
  slides,
}: CarouselSectionPropsType) => {
  const [activeTheme, setActiveTheme] = React.useState(0);
  const totalPages = slides.length - 1;
  const autoplayInterval = 5000;

  const onPrevClick = () => {
    setActiveTheme((prev) => (prev === 0 ? totalPages : Math.max(0, prev - 1)));
  };

  const onNextClick = () => {
    setActiveTheme((prev) =>
      prev === totalPages ? 0 : Math.min(+totalPages, prev + 1)
    );
  };

  const prevButton = React.useMemo(
    () => ({
      text: buttons[0].text,
    }),
    [buttons]
  );

  const nextButton = React.useMemo(
    () => ({
      text: buttons[1].text,
    }),
    [buttons]
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

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveTheme((prev) =>
        prev === totalPages ? 0 : Math.min(+totalPages, prev + 1)
      );
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [totalPages]);

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
            {slides.map(
              ({ imageURL, href, target }, i) =>
                i === activeTheme && (
                  <Link key={i} href={href} target={target}>
                    <motion.img
                      custom={1}
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
                  </Link>
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
