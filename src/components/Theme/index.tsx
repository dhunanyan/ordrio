"use client";

import * as React from "react";
import Link from "next/link";

import { motion } from "framer-motion";
import { AnimatedCard, Icons, ThemeCardVariant } from "@config";

import "./Theme.scss";

type ThemeType =
  | AnimatedCard.AURA
  | AnimatedCard.GROCBAY
  | AnimatedCard.RESTOBITE
  | AnimatedCard.MOO_CHEW
  | AnimatedCard.MARKETPLACE
  | AnimatedCard.SERVICES
  | AnimatedCard.CAFES
  | AnimatedCard.MEAT_STORES
  | AnimatedCard.PET_STORES;

export type ThemePropsType = {
  title?: string;
  description?: string;
  icons?: string[];
  type: ThemeType;
  variant?: ThemeCardVariant;
};

const getLinkHref = (type: ThemeType) => {
  switch (type) {
    case AnimatedCard.AURA:
      return "/clothing-and-accessories";
    case AnimatedCard.GROCBAY:
      return "/grocbay";
    case AnimatedCard.RESTOBITE:
      return "/restaurants";
    case AnimatedCard.MOO_CHEW:
      return "/milk-and-tiffin-subscriptions";
    case AnimatedCard.MARKETPLACE:
      return "/marketplace";
    case AnimatedCard.SERVICES:
      return "/services";
    case AnimatedCard.MEAT_STORES:
      return "/meat-stores";
    case AnimatedCard.PET_STORES:
      return "/pet-stores";
    default:
      return "#";
  }
};

const renderInnerContent = ({
  title,
  description,
  icons,
  type,
  variant = ThemeCardVariant.STANDARD,
}: ThemePropsType) => (
  <>
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
        viewport={{ once: true }}
        src={`/images/themes/${type}/image-1.png`}
        alt="Background Asset 1"
      />
      {!AnimatedCard.SERVICES && (
        <motion.img
          className={`theme-card__image theme-card__image--${variant} theme-card__image--${type} theme-card__image--2`}
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          src={`/images/themes/${type}/image-2.png`}
          alt="Background Asset 2"
        />
      )}
      {variant === ThemeCardVariant.STANDARD ||
        (type === AnimatedCard.MARKETPLACE && (
          <motion.img
            className={`theme-card__image theme-card__image--${variant} theme-card__image--${type} theme-card__image--3`}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            src={`/images/themes/${type}/image-3.png`}
            alt="Background Asset 3"
          />
        ))}
      {variant === ThemeCardVariant.STANDARD && (
        <motion.img
          className={`theme-card__image theme-card__image--${variant} theme-card__image--${type} theme-card__image--4`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          src={`/images/themes/${type}/image-4.png`}
          alt="Desktop Layout"
        />
      )}
      <motion.img
        className={`theme-card__image theme-card__image--${variant} theme-card__image--${type} theme-card__image--5`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        viewport={{ once: true }}
        src={`/images/themes/${type}/image-5.png`}
        alt="Mobile Layout"
      />
      {variant === ThemeCardVariant.STANDARD && icons && (
        <ul className="theme-card__links">
          {icons.map((icon, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + 0.05 * (i + 1) }}
              viewport={{ once: true }}
            >
              <img
                className={`theme-card__icon theme-card__icon--${icon}`}
                src={`/images/themes/${type}/icon-${icon}.png`}
                alt={icon + " icon"}
              />
            </motion.span>
          ))}
        </ul>
      )}
    </div>
    {variant === ThemeCardVariant.STANDARD && title && description && (
      <div className="theme__content">
        <h3 className="theme__title">
          <span>{title}</span>
          <span
            style={{ opacity: 0 }}
            dangerouslySetInnerHTML={{ __html: Icons["info"] }}
          />
        </h3>
        <p className="theme__description">{description}</p>
      </div>
    )}
  </>
);

export const Theme = ({
  title,
  description,
  icons,
  type,
  variant = ThemeCardVariant.STANDARD,
}: ThemePropsType) => {
  if (variant === ThemeCardVariant.MOBILE) {
    return (
      <div className="theme theme--mobile">
        {renderInnerContent({
          title,
          description,
          icons,
          type,
          variant,
        })}
      </div>
    );
  }

  return (
    <Link href={getLinkHref(type)} className="theme theme--standard">
      <div>
        {renderInnerContent({
          title,
          description,
          icons,
          type,
          variant,
        })}
      </div>
    </Link>
  );
};
