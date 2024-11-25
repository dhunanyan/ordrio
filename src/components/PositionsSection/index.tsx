import * as React from "react";

import "./PositionsSection.scss";
import Link from "next/link";

export type Position = {
  title: string;
  requirements: string[];
  link: { text: string; href: "#" };
};

export type PositionsSectionPropsType = {
  title: string;
  description: string;
  positions: Position[];
};

export const PositionsSection = ({
  title,
  description,
  positions,
}: PositionsSectionPropsType) => (
  <section className="positions-section">
    <div className="positions-section__container">
      <div className="positions-section__content">
        <h2 className="positions-section__title">{title}</h2>
        <p className="positions-section__description">{description}</p>
      </div>
      <ul className="positions-section__list">
        {positions.map(({ title, requirements, link }, i) => (
          <li key={i} className="positions-section__item">
            <span className="positions-section__item-index">
              {"0" + (i + 1)}
            </span>
            <span className="positions-section__item-title">{title}</span>
            <div className="positions-section__item-requirements">
              {requirements.map((requirement, j) => (
                <span key={j} className="positions-section__item-requirement">
                  {requirement}
                </span>
              ))}
            </div>
            <Link href={link.href} className="positions-section__item-link">
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
