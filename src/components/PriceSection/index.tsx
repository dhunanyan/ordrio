import * as React from "react";

import { Plan } from "@components/Plan";
import "./PriceSection.scss";

export type PriceSectionPropsType = {
  title: string;
  description: string;
};

export const PriceSection = ({ title, description }: PriceSectionPropsType) => (
  <section className="price-section">
    <div className="price-section__container">
      <div className="price-section__content">
        <p className="price-section__description">{description}</p>
        <h2 className="price-section__title">{title}</h2>
      </div>

      <Plan />
    </div>
  </section>
);
