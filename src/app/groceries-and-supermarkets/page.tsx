import {
  AccordionSection,
  BannerSection,
  BigCards,
  CommonSection,
  IconCardSection,
  SlideshowSection,
  RowCardsWithBigCard,
  ImageCardsWithContentSection,
  type AccordionSectionPropsType,
  type BannerSectionPropsType,
  type BigCardsSectionPropsType,
  type SlideshowSectionPropsType,
  type IconCardSectionPropsType,
  type CommonSectionPropsType,
  type RowCardsWithBigCardPropsType,
  type ImageCardsWithContentSectionPropsType,
} from "@components";

import { GroceriesAndSupermarketsContent } from "@data";

export default function Page() {
  return (
    <main>
      <CommonSection
        {...(GroceriesAndSupermarketsContent.hero as CommonSectionPropsType)}
      >
        <SlideshowSection
          {...(GroceriesAndSupermarketsContent.heroComponent as SlideshowSectionPropsType)}
        />
      </CommonSection>
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
      <CommonSection>
        <BigCards
          {...(GroceriesAndSupermarketsContent.bigCardsSection1 as BigCardsSectionPropsType)}
        />
      </CommonSection>
      <IconCardSection
        {...(GroceriesAndSupermarketsContent.iconCardSection as IconCardSectionPropsType)}
      />
      <BannerSection
        {...(GroceriesAndSupermarketsContent.bannerSection1 as BannerSectionPropsType)}
      />
      <CommonSection>
        <BigCards
          {...(GroceriesAndSupermarketsContent.bigCardsSection2 as BigCardsSectionPropsType)}
        />
      </CommonSection>
      <AccordionSection
        {...(GroceriesAndSupermarketsContent.accordionSection as AccordionSectionPropsType)}
      />
      <BannerSection
        {...(GroceriesAndSupermarketsContent.bannerSection2 as BannerSectionPropsType)}
      />
    </main>
  );
}
