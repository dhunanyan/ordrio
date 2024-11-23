import * as React from "react";

import "./ComparePlansSection.scss";

export type ComparePlanSectionPropsType = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export const ComparePlansSection = ({
  title,
  description,
  children,
}: ComparePlanSectionPropsType) => {
  return (
    <section className="compare-plans-section">
      <div className="compare-plans-section__container">
        <h2 className="compare-plans-section__title">{title}</h2>
        <p className="compare-plans-section__description">{description}</p>

        {children}
      </div>
    </section>
  );
};
