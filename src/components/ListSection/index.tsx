"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { Icons } from "@config";

import "./ListSection.scss";

export type ListSectionPropsType = {
  imageURL: string;
  title: string;
  list: string[];
  link?: { text: string; href: string };
};

export const ListSection = ({
  imageURL,
  title,
  list,
  link,
}: ListSectionPropsType) => (
  <section className="list-section">
    <div className="list-section__container">
      <div className="list-section__image">
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
      </div>
      <div className="list-section__content">
        <motion.h2
          className="list-section__title"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>
        <ul className="list-section__list">
          {list.map((item, i) => (
            <li key={i} className="list-section__item">
              <p className="list-section__item-text">
                <motion.span
                  dangerouslySetInnerHTML={{ __html: Icons["check"] }}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * i }}
                />
                <motion.span
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * i + 0.3 }}
                >
                  {item}
                </motion.span>
              </p>
            </li>
          ))}
        </ul>

        {link && (
          <Link href={link.href} className="list-section__link">
            {link.text}
          </Link>
        )}
      </div>
    </div>
  </section>
);
