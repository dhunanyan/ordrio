import * as React from "react";
import { motion } from "framer-motion";

import { DropdownData } from "@data";
import { Icons, Dropdown as DropdownType } from "@config";

import "./Dropdown.scss";

const variants = {
  hidden: () => ({
    opacity: 0,
    y: -20,
  }),
  visible: {
    y: 0,
    opacity: 1,
  },
  exit: () => ({
    opacity: 0,
    y: -20,
  }),
};

export type DropdownPropsType = {
  type: DropdownType;
  animationDuration: number;
};

export const Dropdown = ({ type, animationDuration }: DropdownPropsType) => (
  <motion.div
    custom={1}
    className="dropdown"
    variants={variants}
    initial="hidden"
    animate="visible"
    exit="exit"
    transition={{ duration: animationDuration * 0.001 }}
  >
    <aside className="dropdown__aside">
      <ul className="dropdown__aside-list">
        {DropdownData[type].aside.map(({ title, description, href }, i) => (
          <li key={i} className="dropdown__aside-item">
            <a className="dropdown__aside-link" href={href}>
              <motion.h4
                className="dropdown__aside-title"
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.2,
                  delay: animationDuration * 0.001 + 0.1 * i,
                }}
              >
                {title}
              </motion.h4>
              <motion.p
                className="dropdown__aside-description"
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.2,
                  delay: animationDuration * 0.001 + 0.1 * i + 0.05,
                }}
              >
                {description}
              </motion.p>
            </a>
          </li>
        ))}
      </ul>
    </aside>
    <nav className="dropdown__nav">
      {DropdownData[type].nav.map(({ title, links }, i) => (
        <div key={i} className="dropdown__section">
          <h3 className="dropdown__title">{title}</h3>
          <ul className="dropdown__list">
            {links.map(({ icon, text, href }, j) => (
              <li key={j} className="dropdown__item">
                <a className="dropdown__link" href={href}>
                  <motion.span
                    className="dropdown__icon"
                    dangerouslySetInnerHTML={{ __html: Icons[icon] }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.2,
                      delay: animationDuration * 0.001 + 0.05 * j + i * 0.4,
                    }}
                  />
                  <motion.span
                    className="dropdown__text"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.2,
                      delay:
                        animationDuration * 0.001 + 0.05 * j + i * 0.4 + 0.1,
                    }}
                  >
                    {text}
                  </motion.span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  </motion.div>
);
