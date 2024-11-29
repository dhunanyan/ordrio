import * as React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

import { DropdownData } from "@data";
import { Icons, Dropdown as DropdownType } from "@config";

import "./Dropdown.scss";

export type DropdownPropsType = {
  variants: Variants;
  type: DropdownType;
  animationDuration: number;
};

export const Dropdown = ({
  variants,
  type,
  animationDuration,
}: DropdownPropsType) => (
  <motion.div
    custom={1}
    className="dropdown"
    variants={variants}
    initial="hidden"
    animate="visible"
    exit="exit"
    transition={{
      duration:
        (variants.hidden as { [key: string]: number }).x !== 0 ? 0.5 : 0.2,
    }}
  >
    <motion.aside
      className="dropdown__aside"
      initial={{
        opacity: 0,
        y: (variants.hidden as { [key: string]: number }).x !== 0 ? 0 : -10,
        x: (variants.hidden as { [key: string]: number }).x !== 0 ? 0 : -10,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{
        opacity: 0,
        y: (variants.hidden as { [key: string]: number }).x !== 0 ? 0 : -10,
        x: (variants.hidden as { [key: string]: number }).x !== 0 ? 0 : -10,
      }}
      transition={{
        duration:
          (variants.hidden as { [key: string]: number }).x !== 0 ? 0.5 : 0.2,
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
      initial={{
        opacity: 0,
        y: (variants.hidden as { [key: string]: number }).x !== 0 ? 0 : -10,
        x: (variants.hidden as { [key: string]: number }).x !== 0 ? 0 : -10,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{
        opacity: 0,
        y: (variants.hidden as { [key: string]: number }).x !== 0 ? 0 : -10,

        x: (variants.hidden as { [key: string]: number }).x !== 0 ? 0 : -10,
      }}
      transition={{
        duration: 0.2,
        delay: animationDuration * 0.0005 + 0.05,
      }}
    >
      {DropdownData[type].nav.map(({ title, links }, i) => (
        <div key={i} className="dropdown__section">
          <h3 className="dropdown__subtitle">{title}</h3>
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
