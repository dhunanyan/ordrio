import * as React from "react";
import Link from "next/link";

import { Icons } from "@config";

import "./Content.scss";

export type ContentPropsType = {
  title: string;
  showIcon?: boolean;
  description?: string;
  buttons?: { text: string; href?: string; onClick?: () => void }[];
  link?: { text: string; href: string };
  alignLeft?: boolean;
  tintColor?: "yellow" | "blue";
  textColor?: "white" | "black";
};

export const Content = ({
  showIcon,
  title,
  description,
  buttons,
  link,
  alignLeft,
  tintColor = "yellow",
  textColor = "white",
}: ContentPropsType) => (
  <div className={"content" + (alignLeft ? " content--align-left" : "")}>
    {showIcon && (
      <div
        className={`content__icon content__icon--${tintColor}`}
        dangerouslySetInnerHTML={{ __html: Icons["check"] }}
      />
    )}
    <h2 className={`content__title content__title--${textColor}`}>{title}</h2>
    {description && (
      <p className={`content__description content__description--${textColor}`}>
        {description}
      </p>
    )}
    {buttons &&
      buttons.map(({ text, href, onClick }, i) =>
        href ? (
          <Link
            key={i}
            href={href}
            className={`content__button content__button--${tintColor}`}
          >
            {text}
          </Link>
        ) : (
          <button
            key={i}
            onClick={onClick}
            className={`content__button content__button--${tintColor}`}
          >
            {text}
          </button>
        )
      )}
    {link && (
      <Link href={link.href} className="content__link">
        <span className={`content__link-text content__link-text--${tintColor}`}>
          {link.text}
        </span>
        <span
          className={`content__link-icon content__link-icon--${tintColor}`}
          dangerouslySetInnerHTML={{ __html: Icons["arrow-right"] }}
        />
      </Link>
    )}
  </div>
);
