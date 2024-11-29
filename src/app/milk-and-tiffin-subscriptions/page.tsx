import {
  BannerSection,
  BigCards,
  CommonSection,
  IconCards,
  Slideshow,
  RowCardsWithBigCard,
  ImageCards,
  Accordions,
  type BannerSectionPropsType,
  type BigCardsPropsType,
  type SlideshowPropsType,
  type IconCardsPropsType,
  type CommonSectionPropsType,
  type RowCardsWithBigCardPropsType,
  type AccordionsPropsType,
} from "@components";

import { AccordionsContent, MilkAndTiffinSubscriptionsContent } from "@data";

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
      <CommonSection
        {...(MilkAndTiffinSubscriptionsContent.iconCardsContent as CommonSectionPropsType)}
      >
        <IconCards
          {...(MilkAndTiffinSubscriptionsContent.iconCards as IconCardsPropsType)}
        />
      </CommonSection>
      <BannerSection
        {...(MilkAndTiffinSubscriptionsContent.bannerSection1 as BannerSectionPropsType)}
      />
      <CommonSection>
        <BigCards
          {...(MilkAndTiffinSubscriptionsContent.bigCardsSection2 as BigCardsPropsType)}
        />
      </CommonSection>
      <CommonSection
        {...(MilkAndTiffinSubscriptionsContent.accordionSection as CommonSectionPropsType)}
      >
        <Accordions {...(AccordionsContent as AccordionsPropsType)} />
      </CommonSection>
      <BannerSection
        {...(MilkAndTiffinSubscriptionsContent.bannerSection2 as BannerSectionPropsType)}
      />
    </main>
  );
}
