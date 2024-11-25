import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { Icons } from "@config";

import "./IconCard.scss";

export type IconCardPropsType = {
  index: number;
  icon: string;
  title: string;
  description: string;
  link?: { text: string; href: string; icon: string };
  alignLeft?: boolean;
};

export const IconCard = ({
  index,
  icon,
  title,
  description,
  link,
  alignLeft = false,
}: IconCardPropsType) => (
  <div className={"icon-card" + (alignLeft ? " icon-card--align-left" : "")}>
    {Icons[icon] ? (
      <motion.div
        className="icon-card__icon"
        dangerouslySetInnerHTML={{ __html: Icons[icon] }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
      />
    ) : (
      <motion.div
        className="icon-card__icon"
        dangerouslySetInnerHTML={{ __html: Icons[icon] }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
      >
        <img src={icon} alt={`${title} icon`} />
      </motion.div>
    )}
    <motion.h3
      className="icon-card__title"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
    >
      {title}
    </motion.h3>
    <motion.p
      className="icon-card__description"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
    >
      {description}
    </motion.p>
    {link && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.65 }}
      >
        <Link href={link?.href} className="icon-card__link">
          {link.text} <span dangerouslySetInnerHTML={{ __html: link.icon }} />
        </Link>
      </motion.div>
    )}
  </div>
);
