import * as React from "react";
import Image from "next/image";
import { Content } from "@components/Content";

import "./BannerSection.scss";

export type BannerSectionPropsType = {
  title: string;
  backgroundImageURL?: string;
  imageURL?: string;
  showIcon?: boolean;
  description?: string;
  buttons: { text: string; href: string }[];
  link: { text: string; href: string };
};

export const BannerSection = ({
  backgroundImageURL,
  imageURL,
  showIcon,
  title,
  description,
  buttons,
  link,
}: BannerSectionPropsType) => (
  <section className="banner-section">
    {backgroundImageURL && (
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
    )}
    <div className="banner-section__container">
      {imageURL && (
        <div className="banner-section__image">
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
      )}
      <div
        className={
          "banner-section__content" +
          (imageURL ? " banner-section__content--split" : "")
        }
      >
        <Content
          showIcon={showIcon}
          title={title}
          description={description}
          buttons={buttons}
          link={link}
          alignLeft
        />
      </div>
    </div>
  </section>
);

// import { BannerSection, BannerSectionPropsType } from "@components/BannerSection";
// const banner-sectionProps = {
//   backgroundImageURL: "/images/spiral.png",
//   showIcon: true,
//   imageURL: "/images/tiger-boxes.png",
//   title: "Ready to Elevate Your Fashion Brand?",
//   buttons: [{ text: "Setup Your Free Account", href: "#" }],
//   link: { text: "Schedule a Personalized Demo", href: "#" },
// } as BannerSectionPropsType;
// <BannerSection {...banner-sectionProps} />;
