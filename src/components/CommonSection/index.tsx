"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { Colors, Icons, Separator } from "@config";

import "./CommonSection.scss";

export type CommonSectionPropsType = {
  title?: string;
  subtitle?: string;
  description?: string;
  icon?: string;
  link?: { text: string; href: string; target?: string };
  children?: React.ReactNode;
  imageURL?: string;
  backgroundImageURL?: string;
  backgroundColor?: Colors;
  linkColor?: Colors;
  separator?: Separator;
  isFirstSection?: boolean;
  displayInRow?: boolean;
  alignContentLeft?: boolean;
};

const getImageInitialY = (separatorType?: Separator) => {
  switch (separatorType) {
    case Separator.MEDIUM:
      return 71;
    case Separator.BIG:
      return 121;
    default:
      return 0;
  }
};

const ANIMATION_DELAY_ICON = 0;
const ANIMATION_DELAY_TEXT = ANIMATION_DELAY_ICON + 0.05;
const ANIMATION_DELAY_LINK = ANIMATION_DELAY_TEXT + 0.005;
const ANIMATION_DELAY_IMAGE = ANIMATION_DELAY_LINK + 0.005;

export const CommonSection = ({
  title,
  subtitle,
  description,
  icon,
  link,
  children,
  separator,
  imageURL,
  backgroundImageURL,
  linkColor = Colors.BLUE,
  backgroundColor = Colors.WHITE,
  isFirstSection = false,
  displayInRow = false,
  alignContentLeft = false,
}: CommonSectionPropsType) => (
  <section
    className={
      `common-section common-section--${backgroundColor}` +
      (isFirstSection ? " common-section--offset" : "") +
      (separator === Separator.BIG ? ` common-section--${separator}` : "")
    }
  >
    {backgroundImageURL && <img src={backgroundImageURL} alt="Background" />}

    <div
      className={
        "common-section__container" +
        (displayInRow ? " common-section__container--row" : "")
      }
    >
      <div
        className={
          "common-section__content" +
          (alignContentLeft ? " common-section__content--align-left" : "")
        }
      >
        {icon && (
          <motion.div
            className={`common-section__icon common-section__icon--${linkColor}`}
            dangerouslySetInnerHTML={{ __html: Icons[icon] }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: ANIMATION_DELAY_ICON }}
          />
        )}
        {title && (
          <motion.h1
            className="common-section__title"
            dangerouslySetInnerHTML={{ __html: title }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: ANIMATION_DELAY_TEXT }}
            viewport={{ once: true }}
          />
        )}
        {subtitle && (
          <motion.h2
            className="common-section__subtitle"
            dangerouslySetInnerHTML={{ __html: subtitle }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: ANIMATION_DELAY_TEXT }}
            viewport={{ once: true }}
          />
        )}
        {description && (
          <motion.p
            className="common-section__description"
            dangerouslySetInnerHTML={{ __html: description }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: ANIMATION_DELAY_TEXT }}
            viewport={{ once: true }}
          />
        )}
        {link && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: ANIMATION_DELAY_LINK }}
          >
            <Link
              href={link.href}
              target={link.target}
              className={`common-section__button common-section__button--${linkColor}`}
            >
              {link.text}
            </Link>
          </motion.div>
        )}
      </div>
      {children && <div className="common-section__component">{children}</div>}
    </div>
    {imageURL && (
      <motion.div
        className={
          "common-section__image" +
          (separator ? ` common-section__image--${separator}` : "")
        }
        initial={{
          opacity: 0,
          y: getImageInitialY(separator) + 10,
        }}
        whileInView={{
          opacity: 1,
          y: getImageInitialY(separator),
        }}
        transition={{ duration: 0.4, delay: ANIMATION_DELAY_IMAGE }}
      >
        <img src={imageURL} alt={title} />
      </motion.div>
    )}
    {separator && (
      <motion.div
        className={`common-section__separator-image common-section__separator-image--${separator}`}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: ANIMATION_DELAY_IMAGE }}
        viewport={{ once: true }}
      >
        {[...Array(7)].map((_, i) => (
          <span
            key={i}
            dangerouslySetInnerHTML={{ __html: Icons[separator] }}
          />
        ))}
      </motion.div>
    )}
  </section>
);
