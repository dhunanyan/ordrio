import * as React from "react";
import { Icons } from "@config";
import { motion } from "framer-motion";

import "./IconCard.scss";

export type IconCardPropsType = {
  index: number;
  icon: string;
  title: string;
  description: string;
};

export const IconCard = ({
  index,
  icon,
  title,
  description,
}: IconCardPropsType) => (
  <div className="icon-card">
    <motion.div
      className="icon-card__icon"
      dangerouslySetInnerHTML={{ __html: Icons[icon] }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.2 }}
    />
    <motion.h3
      className="icon-card__title"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 + index * 0.2 }}
    >
      {title}
    </motion.h3>
    <motion.p
      className="icon-card__description"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.3 + index * 0.2 }}
    >
      {description}
    </motion.p>
  </div>
);
