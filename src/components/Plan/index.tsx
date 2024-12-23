"use client";
import * as React from "react";
import Link from "next/link";

import { motion } from "framer-motion";

import { Icons } from "@config";

import "./Plan.scss";

export type PlanPropsType = {
  button: {
    close: string;
    view: string;
  };
  free: {
    id: string;
    name: string;
    price: string;
    description: string;
    list: string[];
    link: { text: string; href: string; target?: string };
  };
  paid: {
    id: string;
    name: string;
    currency: string;
    price: string;
    period: string;
    list: string[];
    isMostPopular: true;
    link: { text: string; href: string; target?: string };
  }[];
  extraSection?: {
    id: string;
    name: string;
    price: string;
    description: string;
    link: { text: string; href: string; target?: string };
  };
};

const ANIMATION_DELAY_NAME = 0;
const ANIMATION_DELAY_TEXT = ANIMATION_DELAY_NAME + 0.05;
const ANIMATION_DELAY_LINK = ANIMATION_DELAY_TEXT + 0.005;

export const Plan = ({
  button,
  free: { id, name, price, description, list, link },
  paid,
  extraSection,
}: PlanPropsType) => {
  const [isOpen, setIsOpen] = React.useState<{
    [key: string]: boolean;
  }>({
    seed: true,
    launch: false,
    grow: false,
    scale: false,
    max: false,
    enterprise: false,
  });

  return (
    <div className={"plan" + (!extraSection ? " plan--dark-top" : "")}>
      <div className="plan__free">
        <motion.span
          className="plan__name plan__name--free"
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: ANIMATION_DELAY_NAME }}
          viewport={{ once: true }}
        >
          {name}
        </motion.span>
        <motion.p
          className="plan__price plan__price--free"
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: ANIMATION_DELAY_TEXT }}
          viewport={{ once: true }}
        >
          <span>{price}</span>
          <span>{description}</span>
        </motion.p>
        <motion.div
          className="plan__link plan__link--free"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: ANIMATION_DELAY_LINK }}
          viewport={{ once: true }}
        >
          <Link href={link.href} target={link.target}>
            {link.text}
          </Link>
        </motion.div>

        <div
          className={
            "plan__benefits-list-container plan__benefits-list--free" +
            (isOpen[id] ? " plan__benefits-list-container--open" : "")
          }
        >
          <ul className="plan__benefits-list plan__benefits-list--free">
            {list.map((benefit, j) => (
              <li key={j} className="plan__benefits-item">
                <p>
                  <motion.span
                    dangerouslySetInnerHTML={{ __html: Icons["check"] }}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.02 * j }}
                    viewport={{ once: true }}
                  />
                  <span>{benefit}</span>
                  <span
                    style={{ opacity: 0 }}
                    dangerouslySetInnerHTML={{ __html: Icons["info"] }}
                  />
                </p>
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={() => setIsOpen((prev) => ({ ...prev, [id]: !prev[id] }))}
          className="plan__expand plan__expand--free"
        >
          <span>+</span> {isOpen[id] ? button.close : button.view}
        </button>
      </div>
      <div className="plan__inner-container">
        <ul className="plan__list">
          {paid.map(
            (
              {
                id,
                name,
                currency,
                price,
                period,
                list,
                isMostPopular,
                link: { text, href, target },
              },
              i
            ) => (
              <li key={i} className="plan__item">
                {isMostPopular && (
                  <motion.span
                    className="plan__most-popular"
                    initial={{ opacity: 0, y: 10, x: "-50%" }}
                    whileInView={{ opacity: 1, y: 0, x: "-50%" }}
                    transition={{ duration: 0.3, delay: ANIMATION_DELAY_NAME }}
                    viewport={{ once: true }}
                  >
                    MOST POPULAR
                  </motion.span>
                )}
                <motion.span
                  className="plan__name"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: ANIMATION_DELAY_NAME }}
                  viewport={{ once: true }}
                >
                  {name}
                </motion.span>
                <motion.p
                  className="plan__price"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: ANIMATION_DELAY_TEXT }}
                  viewport={{ once: true }}
                >
                  <span>{currency}</span>
                  <span>{price}</span>
                  <span>{period}</span>
                </motion.p>
                <span className="plan__separator" />
                <div
                  className={
                    "plan__benefits-list-container" +
                    (isOpen[id] ? " plan__benefits-list-container--open" : "")
                  }
                >
                  <ul className="plan__benefits-list">
                    {list.map((benefit, j) => (
                      <li key={j} className="plan__benefits-item">
                        <p>
                          <motion.span
                            dangerouslySetInnerHTML={{ __html: Icons["check"] }}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.02 * j }}
                            viewport={{ once: true }}
                          />
                          <span>{benefit}</span>
                          <span
                            style={{ opacity: 0 }}
                            dangerouslySetInnerHTML={{ __html: Icons["info"] }}
                          />
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() =>
                    setIsOpen((prev) => ({ ...prev, [id]: !prev[id] }))
                  }
                  className="plan__expand"
                >
                  <span>+</span> {isOpen[id] ? button.close : button.view}
                </button>
                <motion.div
                  className="plan__link"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: ANIMATION_DELAY_LINK + i * 0.1,
                  }}
                  viewport={{ once: true }}
                >
                  <Link href={href} target={target}>
                    {text}
                  </Link>
                </motion.div>
              </li>
            )
          )}
        </ul>
        {extraSection && (
          <div className="plan__extra">
            <span className="plan__name plan__name--extra">
              {extraSection.name}
            </span>
            <p className="plan__price plan__price--extra">
              <span>{extraSection.price}</span>
              <span>{extraSection.description}</span>
            </p>

            <motion.div
              className="plan__link plan__link--extra"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: ANIMATION_DELAY_LINK }}
              viewport={{ once: true }}
            >
              <Link
                href={extraSection.link.href}
                target={extraSection.link.target}
              >
                {extraSection.link.text}
              </Link>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};
