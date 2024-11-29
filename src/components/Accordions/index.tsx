"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { Icons } from "@config";

import "./Accordions.scss";

export type AccordionsPropsType = {
  accordions: { title: string; description: string }[];
};

export const Accordions = ({ accordions }: AccordionsPropsType) => {
  const [activeAccordions, setActiveAccordions] = React.useState(0);

  return (
    <ul className="accordions">
      {accordions.map(({ title, description }, i) => (
        <motion.li
          key={i}
          className="accordions__button"
          onClick={() => setActiveAccordions(i)}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.05 * i }}
          viewport={{ once: true }}
        >
          <h3 className="accordions__button-title">
            <span>{title}</span>
            <span
              className={
                "accordions__icon" +
                (i === activeAccordions ? " accordions__icon--active" : "")
              }
              dangerouslySetInnerHTML={{ __html: Icons["arrow-down"] }}
            />
          </h3>
          <div
            className={
              "accordions__button-content" +
              (i === activeAccordions
                ? " accordions__button-content--active"
                : "")
            }
          >
            <p className="accordions__button-description">{description}</p>
          </div>
        </motion.li>
      ))}
    </ul>
  );
};
