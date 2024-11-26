import {
  AccordionSection,
  BannerSection,
  BigCards,
  CommonSection,
  IconCardSection,
  Slideshow,
  RowCardsWithBigCard,
  type AccordionSectionPropsType,
  type BannerSectionPropsType,
  type BigCardsPropsType,
  type SlideshowPropsType,
  type IconCardSectionPropsType,
  type CommonSectionPropsType,
  type RowCardsWithBigCardPropsType,
  ImageCards,
} from "@components";

import { MilkAndTiffinSubscriptionsContent } from "@data";

export default function Page() {
  return (
    <main>
      <CommonSection
        {...(MilkAndTiffinSubscriptionsContent.hero as CommonSectionPropsType)}
      >
        <Slideshow
          {...(MilkAndTiffinSubscriptionsContent.heroComponent as SlideshowPropsType)}
        />
      </CommonSection>
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
      <CommonSection>
        <BigCards
          {...(MilkAndTiffinSubscriptionsContent.bigCardsSection2 as BigCardsPropsType)}
        />
      </CommonSection>
      <AccordionSection
        {...(MilkAndTiffinSubscriptionsContent.accordionSection as AccordionSectionPropsType)}
      />
      <BannerSection
        {...(MilkAndTiffinSubscriptionsContent.bannerSection2 as BannerSectionPropsType)}
      />
    </main>
  );
}
