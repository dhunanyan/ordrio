"use client";

import * as React from "react";
import Link from "next/link";

import { motion } from "framer-motion";

import { IconCards, type IconCardPropsType } from "../IconCards";
import { Colors, Icons } from "@config";

import "./Contact.scss";

export type ContactPropsType = {
  iconColor?: Colors;
  color?: Colors;
  cards: IconCardPropsType[];
  moreHelp: {
    addressTitle: string;
    addressDescription: string;
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
  iconColor = Colors.TRANSPARENT,
  color = Colors.WHITE,
  cards,
  moreHelp,
}: ContactPropsType) => (
  <div className="contact">
    <IconCards cards={cards} color={color} iconColor={iconColor} />

    <div className={`contact__more-help contact__more-help--${color}`}>
      <div>
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="contact__more-help-title"
        >
          {moreHelp.addressTitle}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {moreHelp.addressDescription}
        </motion.p>
      </div>
      <div>
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="contact__more-help-title"
        >
          {moreHelp.title}
        </motion.h3>
        <ul className="contact__more-help-list">
          {moreHelp.links.map(
            ({ description, text, href, icon, target }, i) => (
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
            )
          )}
        </ul>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="contact__more-help-image"
      >
        <img src="/images/map.png" alt="Address on Google Map" />
      </motion.div>
    </div>
  </div>
);
