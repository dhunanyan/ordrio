"use client";

import * as React from "react";
import Link from "next/link";

import { Icons } from "@config";
import { FooterContent } from "@data";

import "./Footer.scss";

export const Footer = () => {
  const [activeColumn, setActiveColumn] = React.useState("");

  return (
    <footer className="footer">
      <div className="footer__container">
        <nav className="footer__nav">
          {FooterContent.nav.map(({ id, title, links }, i) => (
            <div
              key={i}
              className="footer__nav-column"
              onClick={() =>
                setActiveColumn(() => (activeColumn === id ? "" : id))
              }
            >
              <h3
                className={
                  "footer__nav-column-title" +
                  (activeColumn === id
                    ? " footer__nav-column-title--active"
                    : "")
                }
              >
                {title}
                <span
                  dangerouslySetInnerHTML={{ __html: Icons["arrow-down"] }}
                />
              </h3>
              <ul
                className={
                  "footer__nav-list" +
                  (activeColumn === id ? " footer__nav-list--active" : "")
                }
              >
                <div>
                  {links.map(({ text, href, target }, j) => (
                    <li key={j} className="footer__nav-list-item">
                      <Link
                        href={href}
                        target={target}
                        className="footer__nav-list-link"
                      >
                        {text}
                      </Link>
                    </li>
                  ))}
                </div>
              </ul>
            </div>
          ))}
          <aside className="footer__aside">
            {FooterContent.aside.map(({ title, links, type }, i) => (
              <div key={i} className="footer__aside-column">
                <h3 className="footer__aside-column-title">{title}</h3>
                <ul className="footer__aside-list">
                  {links.map(({ icon, href, target }, j) => (
                    <li key={j} className="footer__aside-list-item">
                      <Link
                        href={href}
                        target={target}
                        className={`footer__aside-list-link footer__aside-list-link--${type}`}
                        dangerouslySetInnerHTML={{ __html: Icons[icon] }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </aside>
        </nav>
      </div>
      <div className="footer__copyright">
        <Link
          className="footer__copyright-logo"
          href="/"
          dangerouslySetInnerHTML={{
            __html: Icons[FooterContent.copyright.icon],
          }}
        />
        <p className="footer__copyright-text">{FooterContent.copyright.text}</p>
        <ul className="footer__copyright-list">
          {FooterContent.copyright.links.map(({ href, text, target }, i) => (
            <li key={i} className="footer__copyright-list-item">
              {i !== 0 && <span className="footer__copyright-list-dot">•</span>}
              <Link
                className="footer__copyright-list-link"
                href={href}
                target={target}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
