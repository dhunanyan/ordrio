import * as React from "react";
import { motion } from "framer-motion";

import "./Tablet.scss";

export const Tablet = () => (
  <div className="tablet">
    <motion.img
      initial={{ opacity: 0, x: 35, y: -55, rotate: -180 }}
      whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      src="/images/animated/tablet/notification.png"
      alt="Notification Icon"
    />
  </div>
);
