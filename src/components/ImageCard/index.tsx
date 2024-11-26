"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

import "./ImageCard.scss";

export type ImageCardPropsType = {
  title: string;
  description: string;
  imageURL: string;
  link?: { text: string; href: string; target?: string };
  backgroundColor?: string;
  index?: number;
};

export const ImageCard = ({
  title,
  description,
  imageURL,
  link,
  backgroundColor,
  index = 0,
}: ImageCardPropsType) => (
  <div
    className="image-card"
    {...(backgroundColor && { style: { backgroundColor } })}
  >
    <div className="image-card__content">
      <motion.h3
        className="image-card__title"
        dangerouslySetInnerHTML={{ __html: title }}
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.2 * index }}
      />
      <motion.p
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.2 * index }}
        className="image-card__description"
      >
        {description}
      </motion.p>
      {link && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 * index + 0.4 + 0.2 }}
        >
          <Link
            href={link.href}
            target={link.target}
            className="image-card__link"
          >
            {link.text}
          </Link>
        </motion.div>
      )}
    </div>

    <motion.div
      className="image-card__image"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 * index }}
    >
      <Image
        placeholder="blur"
        blurDataURL={imageURL}
        src={imageURL}
        alt={title}
        fill
        sizes="100%"
        style={{
          objectFit: "cover",
        }}
      />
    </motion.div>
  </div>
);
