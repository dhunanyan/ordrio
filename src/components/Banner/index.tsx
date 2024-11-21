import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import { Icons } from "@config";

import "./Banner.scss";

export type BannerPropsType = {
  imageURL: string;
  title: string;
  description: string;
  button: string;
  link: string;
};

export const Banner = ({
  imageURL,
  title,
  description,
  button,
  link,
}: BannerPropsType) => {
  return (
    <section className="banner">
      <Image
        placeholder="blur"
        blurDataURL={imageURL}
        src={imageURL}
        alt={title}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      <div className="banner__container">
        <div className="banner__content">
          <h2 className="banner__title">{title}</h2>
          <p className="banner__description">{description}</p>
          <button className="banner__button">{button}</button>
          <Link href="#" className="banner__link">
            <span className="banner__link-text">{link}</span>
            <span
              className="banner__link-icon"
              dangerouslySetInnerHTML={{ __html: Icons["arrow-right"] }}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};
