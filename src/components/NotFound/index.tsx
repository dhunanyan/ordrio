import * as React from "react";

import { BackgroundImage, Icons } from "@config";
import { getBackgroundImageURL, renderHighlightedTitle } from "@utils";

import "./NotFound.scss";

export type NotFoundPropsType = {
  title: string;
  subtitle: string;
  imageURL: string;
  backgroundImage: BackgroundImage;
  icon: string;
};

export const NotFound = ({
  title,
  subtitle,
  imageURL,
  backgroundImage,
  icon,
}: NotFoundPropsType) => (
  <section className="not-found">
    <img src={getBackgroundImageURL(backgroundImage)} alt="Background" />
    <div className="not-found__container">
      <div className="not-found__image">
        <img src={imageURL} alt={title} />
      </div>
      <h1 className="not-found__title">{renderHighlightedTitle(title)}</h1>
      <div
        className="not-found__icon"
        dangerouslySetInnerHTML={{ __html: Icons[icon] }}
      />
      <h2 className="not-found__subtitle">{subtitle}</h2>
    </div>
  </section>
);
