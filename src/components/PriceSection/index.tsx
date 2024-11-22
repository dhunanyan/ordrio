import * as React from "react";

import { Plan, type PlanPropsType } from "@components/Plan";
import "./PriceSection.scss";

export type PriceSectionPropsType = {
  title: string;
  description: string;
  plan: PlanPropsType;
};

export const PriceSection = ({
  title,
  description,
  plan,
}: PriceSectionPropsType) => (
  <section className="price-section">
    <div className="price-section__container">
      <div className="price-section__content">
        <p className="price-section__description">{description}</p>
        <h2 className="price-section__title">{title}</h2>
      </div>

      <Plan {...plan} />
    </div>
  </section>
);
