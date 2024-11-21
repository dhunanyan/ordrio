import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import { Icons } from "@config";

import "./Banner.scss";

export type BannerPropsType = {
  backgroundImageURL: string;
  imageURL?: string;
  showIcon?: boolean;
  title: string;
  description: string;
  buttons: string[];
  link: string;
};

export const Banner = ({
  backgroundImageURL,
  imageURL,
  showIcon,
  title,
  description,
  buttons,
  link,
}: BannerPropsType) => (
  <section className="banner">
    <Image
      placeholder="blur"
      blurDataURL={backgroundImageURL}
      src={backgroundImageURL}
      alt="Background layout"
      fill
      sizes="100vw"
      style={{
        objectFit: "cover",
      }}
    />
    <div className="banner__container">
      {imageURL && (
        <div className="banner__image">
          <Image
            placeholder="blur"
            blurDataURL={imageURL}
            src={imageURL}
            alt="Background layout"
            fill
            sizes="100%"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      )}
      <div
        className={
          "banner__content" + (imageURL ? " banner__content--split" : "")
        }
      >
        {showIcon && (
          <div
            className="banner__icon"
            dangerouslySetInnerHTML={{ __html: Icons["check-circle"] }}
          />
        )}
        <h2 className="banner__title">{title}</h2>
        <p className="banner__description">{description}</p>
        {buttons &&
          buttons.map((button, i) => (
            <Link key={i} href="#" className="banner__button">
              {button}
            </Link>
          ))}
        {link && (
          <Link href="#" className="banner__link">
            <span className="banner__link-text">{link}</span>
            <span
              className="banner__link-icon"
              dangerouslySetInnerHTML={{ __html: Icons["arrow-right"] }}
            />
          </Link>
        )}
      </div>
    </div>
  </section>
);

// const bannerProps = {
//   backgroundImageURL: "/images/spiral.png",
//   showIcon: true,
//   imageURL: "/images/tiger-boxes.png",
//   title: "Ready to Elevate Your Fashion Brand?",
//   description:
//     "Let Aura be the spotlight that illuminates your clothing and accessories, turning shoppers into loyal fans.",
//   buttons: ["Setup Your Free Account"],
//   link: "Schedule a Personalized Demo",
// };

/* <Banner {...bannerProps} /> */
