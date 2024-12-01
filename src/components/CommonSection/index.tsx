"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { BackgroundImage, Colors, Icons, Separator } from "@config";
import { getBackgroundImageURL } from "@utils";

import "./CommonSection.scss";

export type CommonSectionPropsType = {
  title?: string;
  subtitle?: string;
  description?: string;
  icon?: string;
  list?: string[];
  listIcon?: string;
  link?: { text: string; href: string; target?: string };
  children?: React.ReactNode;
  imageURL?: string;
  bottomImageURL?: string;
  backgroundImage?: BackgroundImage;
  backgroundColor?: Colors;
  linkColor?: Colors;
  separator?: Separator;
  isFirstSection?: boolean;
  displayInRow?: boolean;
  alignContentLeft?: boolean;
  switchOrder?: boolean;
  verticalAlignTop?: boolean;
  biggerGap?: boolean;
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
const ANIMATION_DELAY_LIST = ANIMATION_DELAY_TEXT + 0.005;
const ANIMATION_DELAY_LINK = ANIMATION_DELAY_LIST + 0.005;
const ANIMATION_DELAY_IMAGE = ANIMATION_DELAY_LINK + 0.005;

export const CommonSection = ({
  title,
  subtitle,
  description,
  list,
  listIcon = "check",
  icon,
  link,
  children,
  separator,
  imageURL,
  bottomImageURL,
  backgroundImage,
  linkColor = Colors.BLUE,
  backgroundColor = Colors.WHITE,
  isFirstSection = false,
  displayInRow = false,
  alignContentLeft = false,
  switchOrder = false,
  verticalAlignTop = false,
  biggerGap = false,
}: CommonSectionPropsType) => (
  <section
    className={
      `common-section common-section--${backgroundColor}` +
      (isFirstSection ? " common-section--offset" : "") +
      (separator === Separator.BIG ? ` common-section--${separator}` : "")
    }
  >
    {backgroundImage && (
      <img
        className={`common-section__background common-section__background--${backgroundImage}`}
        src={getBackgroundImageURL(backgroundImage)}
        alt="Background"
      />
    )}

    <div
      className={
        "common-section__container" +
        (displayInRow ? " common-section__container--row" : "") +
        (verticalAlignTop ? " common-section__container--align-top" : "") +
        (biggerGap ? " common-section__container--bigger-gap" : "")
      }
    >
      <div
        className={
          "common-section__content" +
          (alignContentLeft ? " common-section__content--align-left" : "") +
          (switchOrder ? " common-section__content--switch-order" : "")
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
        {list && (
          <ul className="common-section__list">
            {list.map((item, i) => (
              <li key={i} className="common-section__item">
                <p className="common-section__item-text">
                  <motion.span
                    dangerouslySetInnerHTML={{ __html: Icons[listIcon] }}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: ANIMATION_DELAY_LIST + 0.05 * i,
                    }}
                  />
                  <motion.span
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: ANIMATION_DELAY_LIST + 0.1 * i + 0.0025,
                    }}
                    viewport={{ once: true }}
                  >
                    {item}
                  </motion.span>
                </p>
              </li>
            ))}
          </ul>
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
      {imageURL && (
        <motion.div
          className={"common-section__image"}
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
    </div>
    {bottomImageURL && (
      <motion.div
        className={
          "common-section__bottom-image" +
          (separator ? ` common-section__bottom-image--${separator}` : "")
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
        <img src={bottomImageURL} alt={title} />
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
