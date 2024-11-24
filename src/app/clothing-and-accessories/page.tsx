import {
  AccordionSection,
  BannerSection,
  BigCardsSection,
  CommonSection,
  Hero,
  IconCardSection,
  SlideshowSection,
  RowCardsWithBigCard,
  type AccordionSectionPropsType,
  type BannerSectionPropsType,
  type BigCardsSectionPropsType,
  type CommonSectionPropsType,
  type SlideshowSectionPropsType,
  type IconCardSectionPropsType,
  type HeroPropsType,
  type RowCardsWithBigCardPropsType,
  ImageCards,
} from "@components";

import { ClothingAndAccessoriesContent } from "@data";

export default function Page() {
  return (
    <main>
      <Hero {...(ClothingAndAccessoriesContent.hero as HeroPropsType)}>
        <SlideshowSection
          {...(ClothingAndAccessoriesContent.heroComponent as SlideshowSectionPropsType)}
        />
      </Hero>
      <CommonSection
        {...(ClothingAndAccessoriesContent.commonSectionWithRowAndBigCards as CommonSectionPropsType)}
      >
        <RowCardsWithBigCard
          {...(ClothingAndAccessoriesContent.rowAndBigCardsInCommonSection as RowCardsWithBigCardPropsType)}
        />
      </CommonSection>
      <CommonSection
        {...(ClothingAndAccessoriesContent.commonSection as CommonSectionPropsType)}
      >
        <ImageCards
          {...ClothingAndAccessoriesContent.commonSectionImageCards}
        />
      </CommonSection>
      <IconCardSection
        {...(ClothingAndAccessoriesContent.iconCardSection as IconCardSectionPropsType)}
      />
      <BannerSection
        {...(ClothingAndAccessoriesContent.bannerSection1 as BannerSectionPropsType)}
      />
      <BigCardsSection
        {...(ClothingAndAccessoriesContent.bigCardsSection2 as BigCardsSectionPropsType)}
      />
      <AccordionSection
        {...(ClothingAndAccessoriesContent.accordionSection as AccordionSectionPropsType)}
      />
      <BannerSection
        {...(ClothingAndAccessoriesContent.bannerSection2 as BannerSectionPropsType)}
      />
    </main>
  );
}
