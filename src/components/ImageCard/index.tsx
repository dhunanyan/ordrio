import * as React from "react";
import Image from "next/image";

import "./ImageCard.scss";

export type ImageCardPropsType = {
  title: string;
  description: string;
  imageURL: string;
};

export const ImageCard = ({
  title,
  description,
  imageURL,
}: ImageCardPropsType) => (
  <div className="image-card">
    <div className="image-card__content">
      <h3 className="image-card__title">{title}</h3>
      <p className="image-card__description">{description}</p>
    </div>

    <div className="image-card__image">
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
  </div>
);
