import * as React from "react";

import "./Positions.scss";
import Link from "next/link";

export type Position = {
  title: string;
  requirements: string[];
  link: { text: string; href: string; target?: string };
};

export type PositionsPropsType = {
  positions: Position[];
};

export const Positions = ({ positions }: PositionsPropsType) => (
  <ul className="positions">
    {positions.map(({ title, requirements, link }, i) => (
      <li key={i} className="positions__item">
        <span className="positions__item-index">{"0" + (i + 1)}</span>
        <span className="positions__item-title">{title}</span>
        <div className="positions__item-requirements">
          {requirements.map((requirement, j) => (
            <span key={j} className="positions__item-requirement">
              {requirement}
            </span>
          ))}
        </div>
        <Link
          href={link.href}
          target={link.target}
          className="positions__item-link"
        >
          {link.text}
        </Link>
      </li>
    ))}
  </ul>
);
