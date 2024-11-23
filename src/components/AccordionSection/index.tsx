"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { Icons } from "@config";

import "./AccordionSection.scss";

export type AccordionSectionPropsType = {
  title: string;
  accordions: { title: string; description: string }[];
};

export const AccordionSection = ({
  title,
  accordions,
}: AccordionSectionPropsType) => {
  const [activeAccordion, setActiveAccordion] = React.useState(0);

  return (
    <section className="accordion-section">
      <div className="accordion-section__container">
        <div className="accordion-section__content">
          <h2 className="accordion-section__title">{title}</h2>
        </div>
        <ul className="accordion-section__list">
          {accordions.map(({ title, description }, i) => (
            <motion.button
              key={i}
              className={
                "accordion-section__button" +
                (i === activeAccordion
                  ? " accordion-section__button--active"
                  : "")
              }
              onClick={() => setActiveAccordion(i)}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.05 * i }}
            >
              <h2 className="accordion-section__button-title">
                <span>{title}</span>
                <span
                  className={
                    "accordion-section__icon" +
                    (i === activeAccordion
                      ? " accordion-section__icon--active"
                      : "")
                  }
                  dangerouslySetInnerHTML={{ __html: Icons["arrow-down"] }}
                />
              </h2>
              <p className="accordion-section__button-description">
                {description}
              </p>
            </motion.button>
          ))}
        </ul>
      </div>
    </section>
  );
};
