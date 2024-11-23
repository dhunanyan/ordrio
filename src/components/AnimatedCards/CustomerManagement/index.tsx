import * as React from "react";

import { motion } from "framer-motion";

import "./CustomerManagement.scss";

export type CustomerManagementPropsType = {
  title: string;
  description: string;
};

export const CustomerManagement = ({
  title,
  description,
}: CustomerManagementPropsType) => (
  <div className="customer-management">
    <img
      className="customer-management__box-size"
      src="/images/animated/customer-management/box-size.png"
      alt="Hidden Image"
    />
    <div className="customer-management__content">
      <motion.h3
        className="customer-management__title"
        dangerouslySetInnerHTML={{ __html: title }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="customer-management__description"
      >
        {description}
      </motion.p>
    </div>
    <motion.img
      className="customer-management__image customer-management__image--1"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.55 }}
      src="/images/animated/customer-management/image-1.png"
      alt="Component 1"
    />
    <motion.img
      className="customer-management__image customer-management__image--2"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.75 }}
      src="/images/animated/customer-management/image-2.png"
      alt="Component 2"
    />
    <motion.img
      className="customer-management__image customer-management__image--3"
      initial={{ opacity: 0, y: 50, scale: 1.4 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      src="/images/animated/customer-management/image-3.png"
      alt="Background Circle"
    />
  </div>
);
