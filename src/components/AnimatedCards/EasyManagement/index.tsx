"use client";

import * as React from "react";
import { motion } from "framer-motion";

import "./EasyManagement.scss";

export const EasyManagement = () => (
  <div className="easy-management">
    <img
      className="easy-management__box-size"
      src="/images/animated/easy-management/box-size.png"
      alt="Hidden Image"
    />
    <motion.img
      className="easy-management__image easy-management__image--1"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      src="/images/animated/easy-management/image-1.png"
      alt="Component 1"
    />
    <motion.img
      className="easy-management__image easy-management__image--2"
      initial={{ opacity: 0, x: 25 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.4 }}
      src="/images/animated/easy-management/image-2.png"
      alt="Component 2"
    />
    <motion.img
      className="easy-management__image easy-management__image--3"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.6 }}
      src="/images/animated/easy-management/image-3.png"
      alt="Component 3"
    />
    <motion.img
      className="easy-management__icon easy-management__icon--1"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: 0.6 }}
      src="/images/animated/easy-management/icon-1.png"
      alt="Icon 1"
    />
    <motion.img
      className="easy-management__icon easy-management__icon--2"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: 0.6 + 0.05 }}
      src="/images/animated/easy-management/icon-2.png"
      alt="Icon 2"
    />
  </div>
);
