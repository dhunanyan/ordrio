"use client";

import * as React from "react";
import Link from "next/link";

import { HeaderData, NavItemType } from "@data";

import "./Header.scss";
import { Icons } from "@config";

const renderNavItem = ({
  type,
  text,
  href,
  onClick,
}: {
  type: NavItemType;
  text: string;
  href?: string;
  onClick?: () => void;
}) => {
  switch (type) {
    case NavItemType.LINK:
      return <Link href={href as string}>{text}</Link>;
    case NavItemType.BUTTON:
    default:
      return <button onClick={onClick}>{text}</button>;
  }
};

export const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <div className={"header" + (isScrolled ? " header--is-scrolled" : "")}>
        <div>
          <div className="header__container">
            <Link
              className={
                "header__logo" +
                (isScrolled ? " header__logo--is-scrolled" : "")
              }
              href="/"
              dangerouslySetInnerHTML={{ __html: Icons["logo"] }}
            />
            <nav className="header__nav">
              <ul className="header__list">
                {HeaderData.links.map(({ id, text, type }) => (
                  <li className="header__item" key={id}>
                    {renderNavItem({
                      type,
                      text,
                      href: `/${id}`,
                      onClick: () => {},
                    })}
                  </li>
                ))}
              </ul>
            </nav>
            <ul className="header__buttons-list">
              {HeaderData.buttons.map(({ id, text }) => (
                <li className="header__buttons-item" key={id}>
                  <button className={`header__button header__button--${id}`}>
                    {text}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* HERE DROPDOWN */}
      </div>
    </header>
  );
};
