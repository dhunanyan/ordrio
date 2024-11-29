import {
  Accordions,
  BannerSection,
  BigCards,
  CommonSection,
  IconCards,
  Slideshow,
  RowCardsWithBigCard,
  ImageCardsWithContentSection,
  type BannerSectionPropsType,
  type BigCardsPropsType,
  type SlideshowPropsType,
  type IconCardsPropsType,
  type CommonSectionPropsType,
  type RowCardsWithBigCardPropsType,
  type ImageCardsWithContentSectionPropsType,
  type AccordionsPropsType,
} from "@components";

import { AccordionsContent, GroceriesAndSupermarketsContent } from "@data";

export default function Page() {
  return (
    <main>
      <CommonSection
        {...(GroceriesAndSupermarketsContent.hero as CommonSectionPropsType)}
      >
        <Slideshow
          {...(GroceriesAndSupermarketsContent.heroComponent as SlideshowPropsType)}
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
          {...(GroceriesAndSupermarketsContent.bigCardsSection1 as BigCardsPropsType)}
        />
      </CommonSection>
      <CommonSection
        {...(GroceriesAndSupermarketsContent.iconCardsContent as CommonSectionPropsType)}
      >
        <IconCards
          {...(GroceriesAndSupermarketsContent.iconCards as IconCardsPropsType)}
        />
      </CommonSection>
      <BannerSection
        {...(GroceriesAndSupermarketsContent.bannerSection1 as BannerSectionPropsType)}
      />
      <CommonSection>
        <BigCards
          {...(GroceriesAndSupermarketsContent.bigCardsSection2 as BigCardsPropsType)}
        />
      </CommonSection>
      <CommonSection
        {...(GroceriesAndSupermarketsContent.accordionSection as CommonSectionPropsType)}
      >
        <Accordions {...(AccordionsContent as AccordionsPropsType)} />
      </CommonSection>
      <BannerSection
        {...(GroceriesAndSupermarketsContent.bannerSection2 as BannerSectionPropsType)}
      />
    </main>
  );
}
