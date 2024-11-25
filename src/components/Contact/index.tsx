import { IconCardPropsType } from "@components/IconCard";
import { IconCard } from "../IconCard";
import * as React from "react";
import Link from "next/link";

export type ContactPropsType = {
  iconCards: IconCardPropsType[];
  moreHelp: {
    title: string;
    links: {
      text: string;
      description: string;
      href: string;
    }[];
  };
};

export const Contact = ({ iconCards, moreHelp }: ContactPropsType) => (
  <div className="contact">
    <ul className="contact__cards">
      {iconCards.map((iconCard, i) => (
        <IconCard key={i} {...(iconCard as IconCardPropsType)} />
      ))}
    </ul>

    <ul className="contact__more-help">
      <li className="contact__more-help-item">
        <h3>{moreHelp.title}</h3>
      </li>
      {moreHelp.links.map(({ description, text, href }, i) => (
        <li key={i} className="contact__more-help-item">
          <p>{description}</p>
          <Link href={href}>{text}</Link>
        </li>
      ))}
    </ul>
  </div>
);
