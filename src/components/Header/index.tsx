"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";

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
  reset,
}: {
  type: NavItemType;
  text: string;
  href?: string;
  target?: string;
  onClick?: () => void;
  reset?: () => void;
}) => {
  switch (type) {
    case NavItemType.LINK:
      return (
        <Link onClick={reset} href={href as string} target={target}>
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

const getTitle = (type: DropdownType | "", titleVariants: Variants) => {
  switch (type) {
    case DropdownType.RESOURCES:
      return (
        <motion.h3
          key={type}
          className="header__nav-title"
          custom={2}
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          Resources
        </motion.h3>
      );
    case DropdownType.WHY_ORDIO:
      return (
        <motion.h3
          key={type}
          className="header__nav-title"
          custom={2}
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          Why Ordrio
        </motion.h3>
      );
    default:
      return (
        <motion.h3
          key={type}
          className="header__nav-title"
          custom={2}
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          Menu
        </motion.h3>
      );
  }
};

const DROPDOWN_BURGER_DURATION = 300;
const DROPDOWN_STANDARD_DURATION = 300;

export const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<DropdownType | "">(
    ""
  );
  const [isOpened, setIsOpened] = React.useState(false);
  const [dropdownAnimation, setDropdownAnimation] = React.useState({
    x: 0,
    y: -20,
    opacityHidden: 0,
    opacityExit: 0,
    duration: DROPDOWN_STANDARD_DURATION,
  });
  const [isDropdownHovered, setIsDropdownHovered] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const dropdownAnimationVariants = {
    hidden: () => ({
      opacity: dropdownAnimation.opacityHidden,
      y: dropdownAnimation.y,
      x: dropdownAnimation.x,
    }),
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
    exit: () => ({
      opacity: dropdownAnimation.opacityExit,
      y: dropdownAnimation.y,
      x: dropdownAnimation.x,
    }),
  };

  const titleVariants = {
    hidden: () => ({
      opacity: 0,
      x: -20,
    }),
    visible: {
      opacity: 1,
      x: 0,
    },
    exit: () => ({
      opacity: 0,
      x: -20,
    }),
  };

  const reset = () => {
    setActiveDropdown("");
    setIsOpened((prev) => {
      if (window.innerWidth < 768) {
        (document.querySelector("body") as HTMLElement).style.overflow = !prev
          ? "hidden"
          : "unset";
      }

      return false;
    });
  };

  const handleDropdownClick = (id: DropdownType) => {
    if (window.innerWidth >= 1024) {
      setDropdownAnimation({
        x: 0,
        y: -20,
        opacityHidden: 0,
        opacityExit: 0,
        duration: DROPDOWN_STANDARD_DURATION,
      });
    } else if (window.innerWidth >= 768) {
      setDropdownAnimation({
        x: -360,
        y: 0,
        opacityHidden: 0,
        opacityExit: 1,
        duration: DROPDOWN_BURGER_DURATION,
      });
    } else {
      setDropdownAnimation({
        x: -768,
        y: 0,
        opacityHidden: 0,
        opacityExit: 1,
        duration: DROPDOWN_BURGER_DURATION,
      });
    }

    if (!activeDropdown) {
      setActiveDropdown(id);
      return;
    }

    setActiveDropdown("");

    if (id === activeDropdown) {
      return;
    }

    setTimeout(
      () => {
        setActiveDropdown(id);
        // optional +20 to trigger inner animations as well
      },
      (dropdownAnimation.duration as number) + 20
    );
  };

  const handleBurgerClick = () => {
    setIsOpened((prev) => !prev);

    if (window.innerWidth < 768) {
      (document.querySelector("body") as HTMLElement).style.overflow = !isOpened
        ? "hidden"
        : "unset";
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 1024 && !isDropdownHovered) {
        setActiveDropdown("");
      }

      if (window.scrollY > 0) {
        setIsScrolled(true);

        return;
      }
      setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isDropdownHovered]);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setDropdownAnimation({
          x: 0,
          y: -20,
          opacityHidden: 0,
          opacityExit: 0,
          duration: DROPDOWN_STANDARD_DURATION,
        });

        return;
      }

      if (window.innerWidth >= 768) {
        setDropdownAnimation({
          x: -360,
          y: 0,
          opacityHidden: 0,
          opacityExit: 1,
          duration: DROPDOWN_BURGER_DURATION,
        });

        return;
      }

      setDropdownAnimation({
        x: 768,
        y: 0,
        opacityHidden: 0,
        opacityExit: 1,
        duration: DROPDOWN_BURGER_DURATION,
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize, false);

    return () => {
      window.addEventListener("resize", handleResize, false);
    };
  }, []);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const mainElement = document.querySelector("main");
      const footerElement = document.querySelector("footer");

      if (
        (mainElement?.contains(event.target as Node) ||
          footerElement?.contains(event.target as Node) ||
          (ref.current &&
            ref.current.contains(event.target as Node) &&
            !(event.target instanceof HTMLButtonElement))) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      ref={ref}
      className={
        "header" +
        (isScrolled ? " header--is-scrolled" : "") +
        (activeDropdown ? " header--is-active" : "")
      }
    >
      <div className="header__container">
        <button
          className="header__burger"
          onClick={handleBurgerClick}
          dangerouslySetInnerHTML={{ __html: Icons["burger"] }}
        />

        <Link
          className={
            "header__logo" + (isScrolled ? " header__logo--is-scrolled" : "")
          }
          href="/"
          dangerouslySetInnerHTML={{ __html: Icons["logo"] }}
        />
        <nav
          className={"header__nav" + (isOpened ? " header__nav--opened" : "")}
        >
          <div className="header__nav-container">
            <button
              className="header__nav-close-button"
              onClick={
                activeDropdown ? () => setActiveDropdown("") : handleBurgerClick
              }
              dangerouslySetInnerHTML={{
                __html: Icons[activeDropdown ? "arrow-left-2" : "times"],
              }}
            />

            <div className="header__nav-title-container">
              <AnimatePresence custom={2}>
                {getTitle(activeDropdown, titleVariants)}
              </AnimatePresence>
            </div>

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
                    onClick: () => handleDropdownClick(id as DropdownType),
                    reset,
                  })}
                </li>
              ))}

              <AnimatePresence custom={1}>
                {activeDropdown && (
                  <Dropdown
                    reset={reset}
                    onMouseEnter={() => setIsDropdownHovered(true)}
                    onMouseLeave={() => setIsDropdownHovered(false)}
                    variants={dropdownAnimationVariants}
                    type={activeDropdown}
                    animationDuration={dropdownAnimation.duration as number}
                    dropdownRef={dropdownRef}
                  />
                )}
              </AnimatePresence>
            </ul>
          </div>
        </nav>
        <ul className="header__buttons-list">
          {HeaderData.buttons.map(({ id, href, target, text }) => (
            <li className="header__buttons-item" key={id}>
              <Link
                className={`header__buttons-link header__buttons-link--${id}`}
                href={href}
                target={target}
                onClick={reset}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
