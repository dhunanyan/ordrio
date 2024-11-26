"use client";

import * as React from "react";
import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";

import { Icons } from "@config";

import "./WebsitePlusMobileSection.scss";

export type WebsitePlusMobileSectionPropsType = {
  content: {
    topLinks: { text: string; href: string; target?: string }[];
    title: string;
    description: string;
    bottomLinks?: { text: string; href: string; target?: string }[];
    bottomButtons?: string[];
  };
  screenshotURLs: string[];
};

export const WebsitePlusMobileSection = ({
  content: { title, description, bottomButtons, bottomLinks, topLinks },
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
          <ul className="big-cards-section__top-links">
            {topLinks.map(({ href, text, target }, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 * i }}
              >
                <Link
                  href={href}
                  target={target}
                  className="big-cards-section__top-link"
                >
                  {text}
                </Link>
              </motion.li>
            ))}
          </ul>
          <motion.h2
            className="big-cards-section__title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="big-cards-section__description"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
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
                  transition={{ duration: 0.3, delay: 0.2 * i }}
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
            <div className="big-cards-section__bottom-buttons">
              <motion.div
                className="big-cards-section__bottom-line"
                style={{
                  transform: `translate(${(190 + 16) * activeScreenshot}px, 0)`,
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
              {bottomButtons.map((text, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 * i }}
                  onClick={() => setActiveScreenshot(i)}
                  className={
                    "big-cards-section__bottom-button" +
                    (i === activeScreenshot
                      ? " big-cards-section__bottom-button--active"
                      : "")
                  }
                >
                  {text}
                </motion.button>
              ))}
            </div>
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
                    custom={1}
                    key={i}
                    src={screenshotURL}
                    alt={`Screenshot ${1}`}
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
      </div>
    </section>
  );
};
