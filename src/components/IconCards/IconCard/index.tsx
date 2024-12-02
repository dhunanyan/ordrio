import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { Colors, Icons } from "@config";

import "./IconCard.scss";

export type IconCardPropsType = {
  index: number;
  icon: string;
  title: string;
  description: string;
  label?: string;
  link?: { text: string; href: string; icon: string; target?: string };
  alignLeft?: boolean;
  color?: Colors;
  iconColor?: Colors;
};

const ANIMATION_DELAY_ICON = 0;
const ANIMATION_DELAY_TEXT = ANIMATION_DELAY_ICON + 0.05;
const ANIMATION_DELAY_LINK = ANIMATION_DELAY_TEXT + 0.005;

export const IconCard = ({
  index,
  icon,
  title,
  description,
  label,
  link,
  alignLeft = false,
  color = Colors.WHITE,
  iconColor = Colors.TRANSPARENT,
}: IconCardPropsType) => (
  <div
    className={
      `icon-card icon-card--${color}` +
      (alignLeft ? " icon-card--align-left" : "")
    }
  >
    {label && (
      <motion.span
        className="icon-card__label"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          delay: ANIMATION_DELAY_ICON + index * 0.06,
        }}
      >
        {label}
      </motion.span>
    )}
    {Icons[icon] ? (
      <motion.div
        className={`icon-card__icon icon-card__icon--${iconColor}`}
        dangerouslySetInnerHTML={{ __html: Icons[icon] }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          delay: ANIMATION_DELAY_ICON + index * 0.05,
        }}
      />
    ) : (
      <motion.div
        className="icon-card__icon icon-card__icon--img"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          delay: ANIMATION_DELAY_ICON + index * 0.05,
        }}
      >
        <img src={icon} alt={`${title} icon`} />
      </motion.div>
    )}
    <motion.h3
      className="icon-card__title"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: ANIMATION_DELAY_TEXT + index * 0.05,
      }}
      viewport={{ once: true }}
    >
      {title}
    </motion.h3>
    <motion.p
      className="icon-card__description"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: ANIMATION_DELAY_TEXT + index * 0.05,
      }}
      viewport={{ once: true }}
    >
      {description}
    </motion.p>
    {link && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          delay: ANIMATION_DELAY_LINK + index * 0.05,
        }}
        viewport={{ once: true }}
      >
        <Link
          href={link?.href}
          target={link.target}
          className="icon-card__link"
        >
          {link.text}
          <span dangerouslySetInnerHTML={{ __html: Icons[link.icon] }} />
        </Link>
      </motion.div>
    )}
  </div>
);
