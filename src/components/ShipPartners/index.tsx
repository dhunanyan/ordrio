import * as React from "react";

import "./ShipPartners.scss";

export type ShipPartnersPropsType = {
  title: string;
  imageURLs: string[];
  description: string;
};

export const ShipPartners = ({
  title,
  imageURLs,
  description,
}: ShipPartnersPropsType) => (
  <section className="ship-partners">
    <div className="ship-partners__container">
      <h3 className="ship-partners__title">{title}</h3>
      <ul className="ship-partners__list">
        {imageURLs.map((imageURL, i) => (
          <li key={i} className="ship-partners__item">
            <img src={imageURL} alt={`Partner ${i}`} />
          </li>
        ))}
      </ul>
      <p className="ship-partners__description">{description}</p>
    </div>
  </section>
);
