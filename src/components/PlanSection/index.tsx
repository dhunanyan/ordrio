"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { Plan, type PlanPropsType } from "@components";
import "./PlanSection.scss";

export type PlanSectionPropsType = {
  title: string;
  description: string;
  plan: PlanPropsType;
};

export const PlanSection = ({
  title,
  description,
  plan,
}: PlanSectionPropsType) => (
  <section className="price-section">
    <div className="price-section__container">
      <div className="price-section__content">
        <motion.p
          className="price-section__description"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          {description}
        </motion.p>
        <motion.h2
          className="price-section__title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>
      </div>

      <Plan {...plan} />
    </div>
  </section>
);
