import * as React from "react";
import Image from "next/image";

import "./ImageCard.scss";
import { CARD_VARIANT } from "@config";
import Link from "next/link";

export type ImageCardPropsType = {
  title: string;
  description: string;
  imageURL: string;
  link?: { text: string; href: string };
  variant?: CARD_VARIANT;
  backgroundColor?: string;
};

export const ImageCard = ({
  title,
  description,
  imageURL,
  link,
  variant = CARD_VARIANT.MEDIUM,
  backgroundColor,
}: ImageCardPropsType) => (
  <div
    className={`image-card image-card--${variant}`}
    {...(backgroundColor && { style: { backgroundColor } })}
  >
    <div className="image-card__content">
      <h3
        className="image-card__title"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <p className="image-card__description">{description}</p>
      {link && (
        <Link className="image-card__link" href={link.href}>
          {link.text}
        </Link>
      )}
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
