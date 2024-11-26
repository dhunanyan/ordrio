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
  type BigCardsPropsType,
  type SlideshowSectionPropsType,
  type IconCardSectionPropsType,
  type CommonSectionPropsType,
  type RowCardsWithBigCardPropsType,
  type ImageCardsWithContentSectionPropsType,
} from "@components";

import { RestaurantsContent } from "@data";

export default function Page() {
  return (
    <main>
      <CommonSection {...(RestaurantsContent.hero as CommonSectionPropsType)}>
        <SlideshowSection
          {...(RestaurantsContent.heroComponent as SlideshowSectionPropsType)}
        />
      </CommonSection>
      <CommonSection
        {...(RestaurantsContent.commonSectionWithRowAndBigCards as CommonSectionPropsType)}
      >
        <RowCardsWithBigCard
          {...(RestaurantsContent.rowAndBigCardsInCommonSection as RowCardsWithBigCardPropsType)}
        />
      </CommonSection>
      <ImageCardsWithContentSection
        {...(RestaurantsContent.imageCardsWithContentSection as ImageCardsWithContentSectionPropsType)}
      />
      <CommonSection>
        <BigCards
          {...(RestaurantsContent.bigCardsSection1 as BigCardsPropsType)}
        />
      </CommonSection>
      <IconCardSection
        {...(RestaurantsContent.iconCardSection as IconCardSectionPropsType)}
      />
      <BannerSection
        {...(RestaurantsContent.bannerSection1 as BannerSectionPropsType)}
      />
      <CommonSection>
        <BigCards
          {...(RestaurantsContent.bigCardsSection2 as BigCardsPropsType)}
        />
      </CommonSection>
      <AccordionSection
        {...(RestaurantsContent.accordionSection as AccordionSectionPropsType)}
      />
      <BannerSection
        {...(RestaurantsContent.bannerSection2 as BannerSectionPropsType)}
      />
    </main>
  );
}
