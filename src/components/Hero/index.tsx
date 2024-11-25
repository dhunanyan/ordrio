"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import "./Hero.scss";
import { Icons, SectionSeparator } from "@config";

export type HeroPropsType = {
  title: string;
  list?: string[];
  description?: string;
  link?: { text: string; href: string };
  children?: React.ReactNode;
  sectionSeparator?: SectionSeparator;
  bottomImageURL?: string;
};

export const Hero = ({
  title,
  list,
  description,
  link,
  children,
  bottomImageURL,
  sectionSeparator,
}: HeroPropsType) => (
  <section className="hero">
    <div className="hero__container">
      <motion.h1
        className="hero__title"
        dangerouslySetInnerHTML={{ __html: title }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
      />
      {description && (
        <motion.p
          className="hero__description"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.2 }}
        >
          {description}
        </motion.p>
      )}
      {list && (
        <ul className="hero__list">
          {list.map((item, i) => (
            <motion.li
              key={i}
              className="hero__item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.15 * i }}
            >
              <span dangerouslySetInnerHTML={{ __html: Icons["check"] }} />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      )}
      {link && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.65 }}
        >
          <Link href={link.href} className="hero__button">
            {link.text}
          </Link>
        </motion.div>
      )}
      {children}
    </div>
    {bottomImageURL && (
      <motion.div
        className={
          "hero__bottom-image" +
          (sectionSeparator ? " " + sectionSeparator : "")
        }
        initial={{
          opacity: 0,
          y: (sectionSeparator === SectionSeparator.MEDIUM ? 72 : 121) + 10,
        }}
        whileInView={{
          opacity: 1,
          y: sectionSeparator === SectionSeparator.MEDIUM ? 72 : 121,
        }}
        transition={{ duration: 0.5, delay: 0.3 + 0.9 }}
        viewport={{ once: true }}
      >
        <img src={bottomImageURL} alt={title} />
      </motion.div>
    )}
    {sectionSeparator && (
      <motion.div
        className={"hero__separator-image" + " " + sectionSeparator}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.8 }}
        viewport={{ once: true }}
      >
        {[...Array(7)].map((_, i) => (
          <span
            key={i}
            dangerouslySetInnerHTML={{ __html: Icons[sectionSeparator] }}
          />
        ))}
      </motion.div>
    )}
  </section>
);
