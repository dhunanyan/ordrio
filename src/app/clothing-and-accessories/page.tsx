import {
  AccordionSection,
  BannerSection,
  BigCards,
  CommonSection,
  IconCards,
  Slideshow,
  RowCardsWithBigCard,
  ImageCards,
  type AccordionSectionPropsType,
  type BannerSectionPropsType,
  type BigCardsPropsType,
  type SlideshowPropsType,
  type IconCardsPropsType,
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
        <Slideshow
          {...(ClothingAndAccessoriesContent.heroComponent as SlideshowPropsType)}
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
      <CommonSection
        {...(ClothingAndAccessoriesContent.iconCardsContent as CommonSectionPropsType)}
      >
        <IconCards
          {...(ClothingAndAccessoriesContent.iconCards as IconCardsPropsType)}
        />
      </CommonSection>
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
