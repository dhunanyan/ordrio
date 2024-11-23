import * as React from "react";
import { motion } from "framer-motion";
import { Icons } from "@config";

import "./Hassle.scss";

export type HasslePropsType = {
  title: string;
  description: string;
};

export const Hassle = ({ title, description }: HasslePropsType) => (
  <div className="hassle">
    <div className="hassle__content">
      <motion.h3
        className="hassle__title"
        dangerouslySetInnerHTML={{ __html: title }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="hassle__description"
      >
        {description}
      </motion.p>
    </div>
    <img
      className="hassle__box-size"
      src="/images/animated/hassle/box-size.png"
      alt="Hidden Image"
    />
    <motion.img
      className="hassle__image hassle__image--1"
      initial={{ opacity: 0, y: -50, scale: 1.3 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      src="/images/animated/hassle/image-1.png"
      alt="Component 1"
    />
    <motion.img
      className="hassle__image hassle__image--2"
      initial={{ opacity: 0, y: -50, scale: 1.3 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      src="/images/animated/hassle/image-2.png"
      alt="Component 2"
    />
    <motion.div
      className="hassle__image hassle__image--3"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
    >
      <div>
        <motion.img
          className="hassle__icon hassle__icon--1"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.6 }}
          src="/images/animated/hassle/icon-1.png"
          alt="Icon 1"
        />
        <img src="/images/animated/hassle/image-3.png" alt="Component 3" />
      </div>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="hassle__image hassle__image--4"
    >
      <div>
        <img src="/images/animated/hassle/image-4.png" alt="Component 4" />
        <ul className="hassle__dots dots-list">
          {[...Array(4)].map((_, i) => (
            <li key={i} className="dots-list__item">
              {i !== 0 && (
                <motion.span
                  className={
                    "dots-list__line" +
                    (i === 3 ? " dots-list__line--disabled" : "")
                  }
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + i * 0.2 }}
                />
              )}
              <motion.span
                className={
                  "dots-list__check" +
                  (i === 3 ? " dots-list__check--disabled" : "")
                }
                dangerouslySetInnerHTML={{ __html: Icons["check"] }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.2 + 0.1 }}
              />
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  </div>
);
