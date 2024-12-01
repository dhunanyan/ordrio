import { Metadata } from "next";
import {
  BannerSection,
  BigCards,
  CommonSection,
  IconCards,
  Slideshow,
  RowCardsWithBigCard,
  ImageCards,
  Accordions,
  type BannerSectionPropsType,
  type BigCardsPropsType,
  type SlideshowPropsType,
  type IconCardsPropsType,
  type CommonSectionPropsType,
  type RowCardsWithBigCardPropsType,
  type AccordionsPropsType,
} from "@components";

import { AccordionsContent, HtmlMeta, MeatStoresContent } from "@data";

export const metadata: Metadata = HtmlMeta["meat-stores"];

export default function Page() {
  return (
    <main>
      <CommonSection {...(MeatStoresContent.hero as CommonSectionPropsType)}>
        <Slideshow
          {...(MeatStoresContent.heroComponent as SlideshowPropsType)}
        />
      </CommonSection>
      <CommonSection
        {...(MeatStoresContent.commonSectionWithRowAndBigCards as CommonSectionPropsType)}
      >
        <RowCardsWithBigCard
          {...(MeatStoresContent.rowAndBigCardsInCommonSection as RowCardsWithBigCardPropsType)}
        />
      </CommonSection>
      <CommonSection
        {...(MeatStoresContent.commonSection as CommonSectionPropsType)}
      >
        <ImageCards {...MeatStoresContent.commonSectionImageCards} />
      </CommonSection>
      <CommonSection>
        <BigCards
          {...(MeatStoresContent.bigCardsSection1 as BigCardsPropsType)}
        />
      </CommonSection>
      <CommonSection
        {...(MeatStoresContent.iconCardsContent as CommonSectionPropsType)}
      >
        <IconCards {...(MeatStoresContent.iconCards as IconCardsPropsType)} />
      </CommonSection>
      <BannerSection
        {...(MeatStoresContent.bannerSection1 as BannerSectionPropsType)}
      />
      <CommonSection>
        <BigCards
          {...(MeatStoresContent.bigCardsSection2 as BigCardsPropsType)}
        />
      </CommonSection>
      <CommonSection
        {...(MeatStoresContent.accordionSection as CommonSectionPropsType)}
      >
        <Accordions {...(AccordionsContent as AccordionsPropsType)} />
      </CommonSection>
      <BannerSection
        {...(MeatStoresContent.bannerSection2 as BannerSectionPropsType)}
      />
    </main>
  );
}
