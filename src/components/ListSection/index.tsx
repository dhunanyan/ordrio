import * as React from "react";
import Link from "next/link";
import Image from "next/image";

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
        <h2 className="list-section__title">{title}</h2>
        <ul className="list-section__list">
          {list.map((item, i) => (
            <li key={i} className="list-section__item">
              <p className="list-section__item-text">
                <span dangerouslySetInnerHTML={{ __html: Icons["check"] }} />
                {item}
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
