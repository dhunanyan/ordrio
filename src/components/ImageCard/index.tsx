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

const ANIMATION_DELAY_TEXT = 0.1;
const ANIMATION_DELAY_ICON = ANIMATION_DELAY_TEXT + 0.2;
const ANIMATION_DELAY_LINK = ANIMATION_DELAY_TEXT + 0.1;

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
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          delay: ANIMATION_DELAY_TEXT + 0.1 * index,
        }}
        viewport={{ once: true }}
      />
      <motion.p
        className="image-card__description"
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          delay: ANIMATION_DELAY_TEXT + 0.1 * index,
        }}
        viewport={{ once: true }}
      >
        {description}
      </motion.p>
      {link && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: ANIMATION_DELAY_LINK + 0.1 * index,
          }}
          viewport={{ once: true }}
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
      transition={{ duration: 0.3, delay: ANIMATION_DELAY_ICON + 0.1 * index }}
      viewport={{ once: true }}
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
