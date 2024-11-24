"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { AnimatedCard, Icons, ThemeCardVariant } from "@config";

import "./Theme.scss";

export type ThemePropsType = {
  title?: string;
  description?: string;
  links?: { id: "ios" | "android"; href: string }[];
  type:
    | AnimatedCard.AURA
    | AnimatedCard.GROCBAY
    | AnimatedCard.RESTOBITE
    | AnimatedCard.MOO_CHEW;
  variant?: ThemeCardVariant;
};

export const Theme = ({
  title,
  description,
  links,
  type,
  variant = ThemeCardVariant.STANDARD,
}: ThemePropsType) => (
  <div className="theme">
    <div className={`theme-card theme-card--${type}`}>
      <img
        className="theme-card__box-size"
        src={`/images/themes/${type}/box-size.png`}
        alt="Hidden Image"
      />
      <motion.img
        className={`theme-card__image theme-card__image--${variant} theme-card__image--${type} theme-card__image--1`}
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        src={`/images/themes/${type}/image-1.png`}
        alt="Background Asset 1"
      />
      <motion.img
        className={`theme-card__image theme-card__image--${variant} theme-card__image--${type} theme-card__image--2`}
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        src={`/images/themes/${type}/image-2.png`}
        alt="Background Asset 2"
      />
      {variant === ThemeCardVariant.STANDARD && (
        <motion.img
          className={`theme-card__image theme-card__image--${variant} theme-card__image--${type} theme-card__image--3`}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          src={`/images/themes/${type}/image-3.png`}
          alt="Background Circle"
        />
      )}
      {variant === ThemeCardVariant.STANDARD && (
        <motion.img
          className={`theme-card__image theme-card__image--${variant} theme-card__image--${type} theme-card__image--4`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          src={`/images/themes/${type}/image-4.png`}
          alt="Desktop Layout"
        />
      )}
      <motion.img
        className={`theme-card__image theme-card__image--${variant} theme-card__image--${type} theme-card__image--5`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.75 }}
        src={`/images/themes/${type}/image-5.png`}
        alt="Mobile Layout"
      />
      {variant === ThemeCardVariant.STANDARD && links && (
        <ul className="theme-card__links">
          {links.map(({ id, href }, i) => (
            <motion.a
              key={id}
              href={href}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 + 0.05 * (i + 1) }}
            >
              <img
                className={`theme-card__icon theme-card__icon--${id}`}
                src={`/images/themes/${type}/icon-${id}.png`}
                alt={id + " icon"}
              />
            </motion.a>
          ))}
        </ul>
      )}
    </div>
    {variant === ThemeCardVariant.STANDARD && title && description && (
      <div className="theme__content">
        <h3 className="theme__title">
          <span>{title}</span>
          <span dangerouslySetInnerHTML={{ __html: Icons["info"] }} />
        </h3>
        <p className="theme__description">{description}</p>
      </div>
    )}
  </div>
);
