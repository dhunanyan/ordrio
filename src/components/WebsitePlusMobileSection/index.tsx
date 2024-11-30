"use client";

import * as React from "react";
import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";

import { Icons } from "@config";

import "./WebsitePlusMobileSection.scss";

export type WebsitePlusMobileSectionPropsType = {
  content: {
    spans: [];
    title: string;
    description: string;
    bottomLinks?: { text: string; href: string; target?: string }[];
    bottomButtons?: string[];
  };
  screenshotURLs: string[];
};

const ANIMATION_DELAY_SPANS = 0;
const ANIMATION_DELAY_TITLE = ANIMATION_DELAY_SPANS + 0.05;
const ANIMATION_DELAY_DESCRIPTION = ANIMATION_DELAY_TITLE + 0.005;
const ANIMATION_DELAY_BUTTONS = ANIMATION_DELAY_DESCRIPTION + 0.05;
const ANIMATION_DELAY_IMAGE = ANIMATION_DELAY_BUTTONS + 0.005;

export const WebsitePlusMobileSection = ({
  content: { title, description, bottomButtons, bottomLinks, spans },
  screenshotURLs,
}: WebsitePlusMobileSectionPropsType) => {
  const [activeScreenshot, setActiveScreenshot] = React.useState(0);

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
    <section className="big-cards-section">
      <div className="big-cards-section__container">
        <div className="big-cards-section__content">
          <ul className="big-cards-section__spans">
            {spans.map((span, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: ANIMATION_DELAY_SPANS,
                }}
                viewport={{ once: true }}
              >
                <span className="big-cards-section__span">{span}</span>
              </motion.li>
            ))}
          </ul>
          <motion.h2
            className="big-cards-section__title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: ANIMATION_DELAY_TITLE }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="big-cards-section__description"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: ANIMATION_DELAY_DESCRIPTION }}
            viewport={{ once: true }}
          >
            {description}
          </motion.p>
          {bottomLinks && (
            <ul className="big-cards-section__bottom-links">
              {bottomLinks.map(({ href, text, target }, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: ANIMATION_DELAY_BUTTONS,
                  }}
                >
                  <Link
                    href={href}
                    target={target}
                    className="big-cards-section__bottom-link"
                    dangerouslySetInnerHTML={{ __html: Icons[text] }}
                  />
                </motion.li>
              ))}
            </ul>
          )}
          {bottomButtons && (
            <motion.div
              className="big-cards-section__bottom-buttons"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: ANIMATION_DELAY_IMAGE }}
            >
              <div
                className="big-cards-section__bottom-line"
                style={{
                  transform: `translate(${(190 + 16) * activeScreenshot}px, 0)`,
                }}
              />
              {bottomButtons.map((text, i) => (
                <button
                  key={i}
                  onClick={() => setActiveScreenshot(i)}
                  className={
                    "big-cards-section__bottom-button" +
                    (i === activeScreenshot
                      ? " big-cards-section__bottom-button--active"
                      : "")
                  }
                >
                  {text}
                </button>
              ))}
            </motion.div>
          )}
        </div>

        <motion.div
          className="big-cards-section__bottom-image"
          initial={{ opacity: 0, y: 80 + 10 }}
          whileInView={{ opacity: 1, y: 80 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AnimatePresence custom={1}>
            {screenshotURLs.map(
              (screenshotURL, i) =>
                i === activeScreenshot && (
                  <motion.img
                    src={screenshotURL}
                    alt={`Screenshot ${1}`}
                    key={i}
                    custom={1}
                    transition={{ duration: 0.5 }}
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  />
                )
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
