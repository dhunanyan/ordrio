"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { Icons } from "@config";

import "./ListSection.scss";

export type ListSectionPropsType = {
  imageURL?: string;
  children?: React.ReactNode;
  title: string;
  list: string[];
  link?: { text: string; href: string; target?: string };
  switchOrder?: boolean;
  applyCardStyles?: boolean;
};

const ANIMATION_DELAY_IMAGE = 0;
const ANIMATION_DELAY_TEXT = ANIMATION_DELAY_IMAGE + 0.05;
const ANIMATION_DELAY_LIST_ITEM = ANIMATION_DELAY_TEXT + 0.005;

export const ListSection = ({
  children,
  imageURL,
  title,
  list,
  link,
  switchOrder,
  applyCardStyles,
}: ListSectionPropsType) => (
  <section className="list-section">
    <div className="list-section__container">
      {(children || imageURL) && (
        <div
          className={
            "list-section__image" +
            (applyCardStyles ? " list-section__image--card" : "")
          }
        >
          {children}
          {imageURL && (
            <motion.img
              src={imageURL}
              alt={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: ANIMATION_DELAY_IMAGE }}
              viewport={{ once: true }}
            />
          )}
        </div>
      )}
      <div
        className={
          "list-section__content" +
          (switchOrder ? " list-section__content--switched-order" : "")
        }
      >
        <motion.h2
          className="list-section__title"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: ANIMATION_DELAY_TEXT }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>
        <ul className="list-section__list">
          {list.map((item, i) => (
            <li key={i} className="list-section__item">
              <p className="list-section__item-text">
                <motion.span
                  dangerouslySetInnerHTML={{ __html: Icons["check"] }}
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: ANIMATION_DELAY_LIST_ITEM + 0.05 * i,
                  }}
                />
                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: ANIMATION_DELAY_LIST_ITEM + 0.1 * i + 0.0025,
                  }}
                  viewport={{ once: true }}
                >
                  {item}
                </motion.span>
              </p>
            </li>
          ))}
        </ul>

        {link && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link
              href={link.href}
              target={link.target}
              className="list-section__link"
            >
              {link.text}
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  </section>
);
