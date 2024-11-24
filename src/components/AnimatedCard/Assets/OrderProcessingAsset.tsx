"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { Icons } from "@config";
import { RenderAssetPropsType } from "./renderAsset";

export const OrderProcessingAsset = ({
  index,
  type,
  initial,
  whileInView,
  transition,
}: Omit<RenderAssetPropsType, "url">) => (
  <motion.div
    initial={initial}
    whileInView={whileInView}
    transition={transition}
    className={`animated-card__assets animated-card__assets--${type} animated-card__${type}--${index + 1}`}
  >
    <div>
      <img
        src="/images/animated-cards/order-processing.png"
        alt="Component 4"
      />
      <ul className="dots-list">
        {[...Array(4)].map((_, i) => (
          <li key={i} className="dots-list__item">
            {i !== 0 && (
              <motion.span
                className={
                  "dots-list__line" +
                  (i === 3 ? " dots-list__line--disabled" : "")
                }
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.2 }}
              />
            )}
            <motion.span
              className={
                "dots-list__check" +
                (i === 3 ? " dots-list__check--disabled" : "")
              }
              dangerouslySetInnerHTML={{ __html: Icons["check"] }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 + i * 0.2 + 0.1 }}
            />
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);
