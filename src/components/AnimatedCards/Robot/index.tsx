import * as React from "react";
import { motion } from "framer-motion";

import { Icons } from "@config";

import "./Robot.scss";

export const Robot = () => (
  <div className="robot">
    {[...Array(4)].map((_, i) => (
      <div key={i} className="robot__todo">
        <motion.span
          initial={{ opacity: 0, x: 5 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: i * 0.1 }}
          className="robot__icon"
          dangerouslySetInnerHTML={{ __html: Icons["check-square"] }}
        />
        <div className="robot__lines">
          <motion.span
            initial={{ width: 0, x: 5 }}
            whileInView={{ width: 38, x: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 + 0.3 }}
          />
          <motion.span
            initial={{ width: 0, x: 5 }}
            whileInView={{ width: 30, x: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 + 0.5 }}
          />
        </div>
      </div>
    ))}
  </div>
);
