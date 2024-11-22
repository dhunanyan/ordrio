import * as React from "react";
import Image from "next/image";

import { Content } from "@components/Content";
import { ImageCard, type ImageCardPropsType } from "@components/ImageCard";

import "./ImageCardsWithContentSection.scss";

export type ImageCardsWithContentSectionPropsType = {
  backgroundImageURL?: string;
  title: string;
  description: string;
  link: { text: string; href: string };
  cards: ImageCardPropsType[];
};

export const ImageCardsWithContentSection = ({
  backgroundImageURL,
  title,
  description,
  link,
  cards,
}: ImageCardsWithContentSectionPropsType) => (
  <section className="image-cards-with-content-section">
    {backgroundImageURL && (
      <Image
        placeholder="blur"
        blurDataURL={backgroundImageURL}
        src={backgroundImageURL}
        alt="Background layout"
        width={300}
        height={300}
      />
    )}
    <div className="image-cards-with-content-section__container">
      <div className="image-cards-with-content-section__content">
        <Content
          title={title}
          description={description}
          buttons={[link]}
          alignLeft
          textColor="black"
          tintColor="blue"
        />
      </div>

      <ul className="image-cards-with-content-section__cards">
        {cards.map((card, i) => (
          <ImageCard key={i} {...card} />
        ))}
      </ul>
    </div>
  </section>
);
