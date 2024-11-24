import {
  AccordionSection,
  BannerSection,
  BigCardsSection,
  CommonSection,
  Hero,
  IconCardSection,
  SlideshowSection,
  RowCardsWithBigCard,
  ImageCardsWithContentSection,
  type AccordionSectionPropsType,
  type BannerSectionPropsType,
  type BigCardsSectionPropsType,
  type CommonSectionPropsType,
  type SlideshowSectionPropsType,
  type IconCardSectionPropsType,
  type HeroPropsType,
  type RowCardsWithBigCardPropsType,
  type ImageCardsWithContentSectionPropsType,
} from "@components";

import { GroceriesAndSupermarketsContent } from "@data";

export default function Page() {
  return (
    <main>
      <Hero {...(GroceriesAndSupermarketsContent.hero as HeroPropsType)}>
        <SlideshowSection
          {...(GroceriesAndSupermarketsContent.heroComponent as SlideshowSectionPropsType)}
        />
      </Hero>
      <CommonSection
        {...(GroceriesAndSupermarketsContent.commonSectionWithRowAndBigCards as CommonSectionPropsType)}
      >
        <RowCardsWithBigCard
          {...(GroceriesAndSupermarketsContent.rowAndBigCardsInCommonSection as RowCardsWithBigCardPropsType)}
        />
      </CommonSection>
      <ImageCardsWithContentSection
        {...(GroceriesAndSupermarketsContent.imageCardsWithContentSection as ImageCardsWithContentSectionPropsType)}
      />
      <BigCardsSection
        {...(GroceriesAndSupermarketsContent.bigCardsSection1 as BigCardsSectionPropsType)}
      />
      <IconCardSection
        {...(GroceriesAndSupermarketsContent.iconCardSection as IconCardSectionPropsType)}
      />
      <BannerSection
        {...(GroceriesAndSupermarketsContent.bannerSection1 as BannerSectionPropsType)}
      />
      <BigCardsSection
        {...(GroceriesAndSupermarketsContent.bigCardsSection2 as BigCardsSectionPropsType)}
      />
      <AccordionSection
        {...(GroceriesAndSupermarketsContent.accordionSection as AccordionSectionPropsType)}
      />
      <BannerSection
        {...(GroceriesAndSupermarketsContent.bannerSection2 as BannerSectionPropsType)}
      />
    </main>
  );
}
