"use client";

import * as React from "react";
import Link from "next/link";

import { motion } from "framer-motion";

import { IconCards, type IconCardPropsType } from "../IconCards";
import { Colors, Icons } from "@config";

import "./Contact.scss";

export type ContactPropsType = {
  color?: Colors;
  cards: IconCardPropsType[];
  moreHelp: {
    title: string;
    links: {
      text: string;
      description: string;
      href: string;
      icon: string;
      target?: string;
    }[];
  };
};

export const Contact = ({
  color = Colors.WHITE,
  cards,
  moreHelp,
}: ContactPropsType) => (
  <div className="contact">
    <IconCards cards={cards} color={color} />

    <ul className={`contact__more-help contact__more-help--${color}`}>
      <li className="contact__more-help-item">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {moreHelp.title}
        </motion.h3>
      </li>
      {moreHelp.links.map(({ description, text, href, icon, target }, i) => (
        <motion.li
          key={i}
          className="contact__more-help-item"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <p>{description}</p>
          <Link href={href} target={target}>
            <span dangerouslySetInnerHTML={{ __html: Icons[icon] }} />
            {text}
          </Link>
        </motion.li>
      ))}
    </ul>
  </div>
);
