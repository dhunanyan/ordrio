"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { Icons } from "@config";

import "./Content.scss";

export type ContentPropsType = {
  title: string;
  subtitle?: string;
  icon?: string;
  description?: string;
  buttons?: {
    text: string;
    href?: string;
    onClick?: () => void;
    disabled?: boolean;
  }[];
  link?: { text: string; href: string };
  alignLeft?: boolean;
  tintColor?: "white" | "yellow" | "blue";
  textColor?: "white" | "black";
};

export const Content = ({
  icon,
  title,
  subtitle,
  description,
  buttons,
  link,
  alignLeft,
  tintColor = "yellow",
  textColor = "white",
}: ContentPropsType) => (
  <div className={"content" + (alignLeft ? " content--align-left" : "")}>
    {icon && (
      <motion.div
        className={`content__icon content__icon--${tintColor}`}
        dangerouslySetInnerHTML={{ __html: Icons[icon] }}
        initial={{ opacity: 0, x: 10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      />
    )}
    <motion.h2
      className={`content__title content__title--${textColor}`}
      initial={{ opacity: 0, x: 10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      {title}
    </motion.h2>
    {description && (
      <motion.p
        className={`content__description content__description--${textColor}`}
        initial={{ opacity: 0, x: 10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        {description}
      </motion.p>
    )}
    <motion.h4
      className={`content__subtitle content__subtitle--${textColor}`}
      initial={{ opacity: 0, x: 10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      {subtitle}
    </motion.h4>
    {link && (
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Link href={link.href} className="content__link">
          <span
            className={`content__link-text content__link-text--${tintColor}`}
          >
            {link.text}
          </span>
          <span
            className={`content__link-icon content__link-icon--${tintColor}`}
            dangerouslySetInnerHTML={{ __html: Icons["arrow-right*"] }}
          />
        </Link>
      </motion.div>
    )}
    <div className="content__buttons">
      {buttons &&
        buttons.map(({ text, href, onClick, disabled }, i) =>
          href ? (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.15 * (i + 1) }}
            >
              <Link
                href={href}
                className={`content__button content__button--${tintColor}`}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            </motion.div>
          ) : (
            <motion.button
              key={i}
              onClick={onClick}
              className={
                `content__button content__button--${tintColor}` +
                (disabled ? " content__button--disabled" : "")
              }
              dangerouslySetInnerHTML={{ __html: text }}
              disabled={disabled}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.15 * (i + 1) }}
            />
          )
        )}
    </div>
  </div>
);
