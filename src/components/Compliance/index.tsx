import * as React from "react";

import "./Compliance.scss";

export type CompliancePropsType = {
  title: string;
  sections: { subtitle: string; descriptions: string[] }[];
};

export const Compliance = ({ title, sections }: CompliancePropsType) => (
  <div className="compliance">
    <div className="compliance__container">
      <h1 className="compliance__title">{title}</h1>
      {sections.map(({ subtitle, descriptions }, i) => (
        <section key={i} className="compliance__section">
          {subtitle && <h3 className="compliance__subtitle">{subtitle}</h3>}
          {descriptions.length &&
            descriptions.map((description, j) => (
              <p key={j} className="compliance__description">
                {description}
              </p>
            ))}
        </section>
      ))}
    </div>
  </div>
);
