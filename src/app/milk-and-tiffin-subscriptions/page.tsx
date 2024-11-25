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

import { MilkAndTiffinSubscriptionsContent } from "@data";

export default function Page() {
  return (
    <main>
      <Hero {...(MilkAndTiffinSubscriptionsContent.hero as HeroPropsType)}>
        <SlideshowSection
          {...(MilkAndTiffinSubscriptionsContent.heroComponent as SlideshowSectionPropsType)}
        />
      </Hero>
      <CommonSection
        {...(MilkAndTiffinSubscriptionsContent.commonSectionWithRowAndBigCards as CommonSectionPropsType)}
      >
        <RowCardsWithBigCard
          {...(MilkAndTiffinSubscriptionsContent.rowAndBigCardsInCommonSection as RowCardsWithBigCardPropsType)}
        />
      </CommonSection>
      <CommonSection
        {...(MilkAndTiffinSubscriptionsContent.commonSection as CommonSectionPropsType)}
      >
        <ImageCards
          {...MilkAndTiffinSubscriptionsContent.commonSectionImageCards}
        />
      </CommonSection>
      <IconCardSection
        {...(MilkAndTiffinSubscriptionsContent.iconCardSection as IconCardSectionPropsType)}
      />
      <BannerSection
        {...(MilkAndTiffinSubscriptionsContent.bannerSection1 as BannerSectionPropsType)}
      />
      <BigCardsSection
        {...(MilkAndTiffinSubscriptionsContent.bigCardsSection2 as BigCardsSectionPropsType)}
      />
      <AccordionSection
        {...(MilkAndTiffinSubscriptionsContent.accordionSection as AccordionSectionPropsType)}
      />
      <BannerSection
        {...(MilkAndTiffinSubscriptionsContent.bannerSection2 as BannerSectionPropsType)}
      />
    </main>
  );
}
