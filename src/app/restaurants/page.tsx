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

import { RestaurantsContent } from "@data";

export default function Page() {
  return (
    <main>
      <Hero {...(RestaurantsContent.hero as HeroPropsType)}>
        <SlideshowSection
          {...(RestaurantsContent.heroComponent as SlideshowSectionPropsType)}
        />
      </Hero>
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
      <BigCardsSection
        {...(RestaurantsContent.bigCardsSection1 as BigCardsSectionPropsType)}
      />
      <IconCardSection
        {...(RestaurantsContent.iconCardSection as IconCardSectionPropsType)}
      />
      <BannerSection
        {...(RestaurantsContent.bannerSection1 as BannerSectionPropsType)}
      />
      <BigCardsSection
        {...(RestaurantsContent.bigCardsSection2 as BigCardsSectionPropsType)}
      />
      <AccordionSection
        {...(RestaurantsContent.accordionSection as AccordionSectionPropsType)}
      />
      <BannerSection
        {...(RestaurantsContent.bannerSection2 as BannerSectionPropsType)}
      />
    </main>
  );
}
