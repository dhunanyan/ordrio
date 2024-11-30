"use client";

import * as React from "react";
import { motion } from "framer-motion";

import "./Store.scss";

export type StorePropsType = {
  isConnect?: boolean;
};

export const Store = ({ isConnect }: StorePropsType) => (
  <div className="animated-card__motion store">
    <motion.img
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      src={`/images/step-cards/message-box${isConnect ? "-connect" : ""}.png`}
      alt="Notification Icon"
    />
  </div>
);
