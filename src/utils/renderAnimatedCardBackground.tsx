import * as React from "react";
import { motion } from "framer-motion";

import { AnimatedCardBackground } from "@config";

export const renderAnimatedCardBackgroundAssets = (
  type: AnimatedCardBackground
) => {
  switch (type) {
    case AnimatedCardBackground.ONE_TICK:
      return (
        <motion.img
          src="/images/animated-cards/empty-tick.png"
          alt="Background asset - empty tick"
          initial={{ opacity: 0, scale: 1.3 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          viewport={{ once: true }}
          className="animated-card__background animated-card__background--tick-1"
        />
      );
    case AnimatedCardBackground.ONE_TICK_FILLED_FLIPPED:
      return (
        <motion.img
          src="/images/animated-cards/tick-filled-flipped.png"
          alt="Background asset - filled & flipped tick"
          initial={{ opacity: 0, scale: 1.3 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          viewport={{ once: true }}
          className="animated-card__background animated-card__background--tick-2"
        />
      );
    case AnimatedCardBackground.ONE_FILLED_TICK:
      return (
        <motion.img
          src="/images/animated-cards/tick-filled.png"
          alt="Background asset - filled tick"
          initial={{ opacity: 0, scale: 1.3 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          viewport={{ once: true }}
          className="animated-card__background animated-card__background--tick-3"
        />
      );
    case AnimatedCardBackground.TWO_TICKS:
      return (
        <>
          <motion.img
            src="/images/animated-cards/empty-tick.png"
            alt="Background asset - empty tick"
            initial={{ opacity: 0, scale: 1.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
            className="animated-card__background animated-card__background--tick-1"
          />
          <motion.img
            src="/images/animated-cards/tick-filled-flipped.png"
            alt="Background asset - filled & flipped tick"
            initial={{ opacity: 0, scale: 1.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
            className="animated-card__background animated-card__background--tick-2"
          />
        </>
      );
    case AnimatedCardBackground.NO_ASSET:
    default:
      return null;
  }
};
