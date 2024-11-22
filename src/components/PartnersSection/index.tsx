import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import "./PartnersSection.scss";

export type PartnersSectionPropsType = {
  backgroundImageURL: string;
  title: string;
  partners: {
    imageURL: string;
    height: number;
    width: number;
    href: string;
  }[];
  quotes: { quote: string; author: string }[];
};

export const PartnersSection = ({
  backgroundImageURL,
  title,
  partners,
  quotes,
}: PartnersSectionPropsType) => (
  <section className="partners-section">
    <Image
      placeholder="blur"
      blurDataURL={backgroundImageURL}
      src={backgroundImageURL}
      alt="Background layout"
      fill
      sizes="100vw"
      style={{
        objectFit: "cover",
      }}
    />
    <div className="partners-section__container">
      <h2
        className="partners-section__title"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <ul className="partners-section__logos-list">
        {partners.map(({ imageURL, width, height, href }, i) => (
          <li key={i} className="partners-section__logos-item">
            <Link
              className="partners-section__logos-link"
              href={href}
              target="_blank"
            >
              <Image
                placeholder="blur"
                blurDataURL={imageURL}
                src={imageURL}
                width={width}
                height={height}
                alt={"Partner" + i}
              />
            </Link>
          </li>
        ))}
      </ul>
      <span className="partners-section__separator" />
      <ul className="partners-section__quotes-list">
        {quotes.map(({ quote, author }, i) => (
          <li key={i} className="partners-section__quotes-item">
            <p className="partners-section__quotes-text">{quote}</p>
            <p
              className="partners-section__quotes-author"
              dangerouslySetInnerHTML={{ __html: author }}
            />
          </li>
        ))}
      </ul>
    </div>
  </section>
);
