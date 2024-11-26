"use client";

import * as React from "react";
import Link from "next/link";

import { IconCard, type IconCardPropsType } from "../IconCard";
import { Colors, Icons } from "@config";

import "./Contact.scss";

export type ContactPropsType = {
  color?: Colors;
  cards: IconCardPropsType[];
  moreHelp: {
    title: string;
    links: {
      text: string;
      description: string;
      href: string;
      icon: string;
    }[];
  };
};

export const Contact = ({
  color = Colors.WHITE,
  cards,
  moreHelp,
}: ContactPropsType) => (
  <div className="contact">
    <ul className="contact__cards">
      {cards.map((card, i) => (
        <IconCard key={i} {...(card as IconCardPropsType)} color={color} />
      ))}
    </ul>

    <ul className={`contact__more-help contact__more-help--${color}`}>
      <li className="contact__more-help-item">
        <h3>{moreHelp.title}</h3>
      </li>
      {moreHelp.links.map(({ description, text, href, icon }, i) => (
        <li key={i} className="contact__more-help-item">
          <p>{description}</p>
          <Link href={href}>
            <span dangerouslySetInnerHTML={{ __html: Icons[icon] }} />
            {text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
