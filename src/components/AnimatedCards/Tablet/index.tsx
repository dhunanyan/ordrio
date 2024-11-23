import * as React from "react";
import { motion } from "framer-motion";

import "./Tablet.scss";

export const Tablet = () => (
  <div className="tablet">
    <motion.img
      initial={{ opacity: 0, x: 25, y: 5, rotate: -20 }}
      whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
      transition={{ duration: 0.4 }}
      src="/images/animated/tablet/notification.png"
      alt="Notification Icon"
    />
  </div>
);
