import * as React from "react";
import Link from "next/link";

import { Icons } from "@config";

import "./Content.scss";

export type ContentPropsType = {
  title: string;
  subtitle?: string;
  showIcon?: boolean;
  description?: string;
  buttons?: {
    text: string;
    href?: string;
    onClick?: () => void;
    disabled?: boolean;
  }[];
  link?: { text: string; href: string };
  alignLeft?: boolean;
  tintColor?: "yellow" | "blue";
  textColor?: "white" | "black";
};

export const Content = ({
  showIcon,
  title,
  subtitle,
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
    <h4 className={`content__subtitle content__subtitle--${textColor}`}>
      {subtitle}
    </h4>
    {description && (
      <p className={`content__description content__description--${textColor}`}>
        {description}
      </p>
    )}
    <div className="content__buttons">
      {buttons &&
        buttons.map(({ text, href, onClick, disabled }, i) =>
          href ? (
            <Link
              key={i}
              href={href}
              className={`content__button content__button--${tintColor}`}
              dangerouslySetInnerHTML={{ __html: text }}
            />
          ) : (
            <button
              key={i}
              onClick={onClick}
              className={
                `content__button content__button--${tintColor}` +
                (disabled ? " content__button--disabled" : "")
              }
              dangerouslySetInnerHTML={{ __html: text }}
              disabled={disabled}
            />
          )
        )}
    </div>
    {link && (
      <Link href={link.href} className="content__link">
        <span className={`content__link-text content__link-text--${tintColor}`}>
          {link.text}
        </span>
        <span
          className={`content__link-icon content__link-icon--${tintColor}`}
          dangerouslySetInnerHTML={{ __html: Icons["arrow-right*"] }}
        />
      </Link>
    )}
  </div>
);
