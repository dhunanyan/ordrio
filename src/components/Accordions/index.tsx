"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { Icons } from "@config";

import "./Accordions.scss";
import { FAQType, FaqTypeText } from "@data";

export type AccordionsPropsType = {
  accordions: { title: string; description: string; type: string }[];
  withButtons?: boolean;
};

export const Accordions = ({
  accordions,
  withButtons = false,
}: AccordionsPropsType) => {
  const [activeAccordions, setActiveAccordions] = React.useState(0);
  const [activeType, setActiveType] = React.useState<FAQType>(FAQType.GENERAL);

  const filteredAccordions = React.useMemo(
    () => accordions.filter((accordion) => accordion.type === activeType),
    [accordions, activeType]
  );

  return (
    <div className="accordions">
      {withButtons && (
        <ul className="accordions__buttons">
          {Object.keys(FAQType).map((faqType) => (
            <li key={faqType} className="accordions__buttons-item">
              <button
                className={
                  "accordions__buttons-button" +
                  (FAQType[faqType as keyof typeof FAQType] === activeType
                    ? " accordions__buttons-button--active"
                    : "")
                }
                onClick={() =>
                  setActiveType(FAQType[faqType as keyof typeof FAQType])
                }
              >
                {FaqTypeText[FAQType[faqType as keyof typeof FAQType]]}
              </button>
            </li>
          ))}
        </ul>
      )}
      <ul className="accordions__list">
        {filteredAccordions.map(({ title, description }, i) => (
          <motion.li
            key={i}
            className="accordions__button"
            onClick={() => setActiveAccordions((prev) => (prev === i ? -1 : i))}
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
    </div>
  );
};
