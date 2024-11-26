"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";

import { Dropdown } from "./Dropdown";

import { Dropdown as DropdownType, Icons } from "@config";
import { HeaderData, NavItemType } from "@data";

import "./Header.scss";

const renderNavItem = ({
  type,
  text,
  target,
  href,
  onClick,
}: {
  type: NavItemType;
  text: string;
  href?: string;
  target?: string;
  onClick?: () => void;
  isActive?: boolean;
}) => {
  switch (type) {
    case NavItemType.LINK:
      return (
        <Link href={href as string} target={target}>
          {text}
        </Link>
      );
    case NavItemType.BUTTON:
    default:
      return (
        <button onClick={onClick}>
          {text}
          <span dangerouslySetInnerHTML={{ __html: Icons["arrow-down"] }} />
        </button>
      );
  }
};

export const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<DropdownType | "">(
    ""
  );
  const animationDuration = 300;

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

  const handleClick = (id: DropdownType) => {
    if (!activeDropdown) {
      setActiveDropdown(id);
      return;
    }

    setActiveDropdown("");

    if (id === activeDropdown) {
      return;
    }

    setTimeout(() => {
      setActiveDropdown(id);
      // optional +20 to trigger inner animations as well
    }, animationDuration + 20);
  };

  return (
    <header
      className={
        "header" +
        (isScrolled ? " header--is-scrolled" : "") +
        (activeDropdown ? " header--is-active" : "")
      }
    >
      <div className="header__container">
        <Link
          className={
            "header__logo" + (isScrolled ? " header__logo--is-scrolled" : "")
          }
          href="/"
          dangerouslySetInnerHTML={{ __html: Icons["logo"] }}
        />
        <nav className="header__nav">
          <ul className="header__list">
            {HeaderData.links.map(({ id, text, href, type }) => (
              <li
                className={
                  "header__item" +
                  (id === activeDropdown ? " header__item--active" : "")
                }
                key={id}
              >
                {renderNavItem({
                  type,
                  text,
                  href,
                  onClick: () => handleClick(id as DropdownType),
                })}
              </li>
            ))}
          </ul>
        </nav>
        <ul className="header__buttons-list">
          {HeaderData.buttons.map(({ id, href, target, text }) => (
            <li className="header__buttons-item" key={id}>
              <Link
                target={target}
                href={href}
                className={`header__buttons-link header__buttons-link--${id}`}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>

        <AnimatePresence custom={1}>
          {activeDropdown && (
            <Dropdown
              type={activeDropdown}
              animationDuration={animationDuration}
            />
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
