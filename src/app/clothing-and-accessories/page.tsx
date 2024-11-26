import {
  AccordionSection,
  BannerSection,
  BigCards,
  CommonSection,
  IconCardSection,
  SlideshowSection,
  RowCardsWithBigCard,
  ImageCards,
  type AccordionSectionPropsType,
  type BannerSectionPropsType,
  type BigCardsPropsType,
  type SlideshowSectionPropsType,
  type IconCardSectionPropsType,
  type CommonSectionPropsType,
  type RowCardsWithBigCardPropsType,
} from "@components";

import { ClothingAndAccessoriesContent } from "@data";

export default function Page() {
  return (
    <main>
      <CommonSection
        {...(ClothingAndAccessoriesContent.hero as CommonSectionPropsType)}
      >
        <SlideshowSection
          {...(ClothingAndAccessoriesContent.heroComponent as SlideshowSectionPropsType)}
        />
      </CommonSection>
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
      <CommonSection>
        <BigCards
          {...(ClothingAndAccessoriesContent.bigCardsSection2 as BigCardsPropsType)}
        />
      </CommonSection>
      <AccordionSection
        {...(ClothingAndAccessoriesContent.accordionSection as AccordionSectionPropsType)}
      />
      <BannerSection
        {...(ClothingAndAccessoriesContent.bannerSection2 as BannerSectionPropsType)}
      />
    </main>
  );
}
