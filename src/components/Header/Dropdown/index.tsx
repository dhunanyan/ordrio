import * as React from "react";
import Link from "next/link";
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
    <motion.aside
      className="dropdown__aside"
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{
        duration: 0.2,
        delay: animationDuration * 0.0005 + 0.05,
      }}
    >
      <ul className="dropdown__aside-list">
        {DropdownData[type].aside.map(({ title, description, href }, i) => (
          <li key={i} className="dropdown__aside-item">
            <a className="dropdown__aside-link" href={href}>
              <h4 className="dropdown__aside-title">{title}</h4>
              <p className="dropdown__aside-description">{description}</p>
            </a>
          </li>
        ))}
      </ul>
    </motion.aside>
    <motion.nav
      className="dropdown__nav"
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{
        duration: 0.2,
        delay: animationDuration * 0.0005 + 0.05,
      }}
    >
      {DropdownData[type].nav.map(({ title, links }, i) => (
        <div key={i} className="dropdown__section">
          <h3 className="dropdown__title">{title}</h3>
          <ul className="dropdown__list">
            {links.map(({ icon, text, href, target }, j) => (
              <li key={j} className="dropdown__item">
                <Link className="dropdown__link" href={href} target={target}>
                  <span
                    className="dropdown__icon"
                    dangerouslySetInnerHTML={{ __html: Icons[icon] }}
                  />
                  <span className="dropdown__text">{text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </motion.nav>
  </motion.div>
);
