import {
  Accordions,
  BannerSection,
  BigCards,
  CommonSection,
  IconCards,
  Slideshow,
  RowCardsWithBigCard,
  ImageCards,
  type BannerSectionPropsType,
  type BigCardsPropsType,
  type SlideshowPropsType,
  type IconCardsPropsType,
  type CommonSectionPropsType,
  type RowCardsWithBigCardPropsType,
  type AccordionsPropsType,
  type ImageCardsPropsType,
} from "@components";

import { AccordionsContent, MarketplaceContent } from "@data";

export default function Page() {
  return (
    <main>
      <CommonSection {...(MarketplaceContent.hero as CommonSectionPropsType)}>
        <Slideshow
          {...(MarketplaceContent.heroComponent as SlideshowPropsType)}
        />
      </CommonSection>
      <CommonSection
        {...(MarketplaceContent.commonSectionWithRowAndBigCards as CommonSectionPropsType)}
      >
        <RowCardsWithBigCard
          {...(MarketplaceContent.rowAndBigCardsInCommonSection as RowCardsWithBigCardPropsType)}
        />
      </CommonSection>
      <CommonSection
        {...(MarketplaceContent.imageCardsSection as CommonSectionPropsType)}
      >
        <ImageCards
          {...(MarketplaceContent.imageCards as ImageCardsPropsType)}
        />
      </CommonSection>
      <CommonSection
        {...(MarketplaceContent.iconCardsContent as CommonSectionPropsType)}
      >
        <IconCards {...(MarketplaceContent.iconCards as IconCardsPropsType)} />
      </CommonSection>
      <BannerSection
        {...(MarketplaceContent.bannerSection1 as BannerSectionPropsType)}
      />
      <CommonSection>
        <BigCards
          {...(MarketplaceContent.bigCardsSection1 as BigCardsPropsType)}
        />
      </CommonSection>
      <CommonSection
        {...(MarketplaceContent.accordionSection as CommonSectionPropsType)}
      >
        <Accordions {...(AccordionsContent as AccordionsPropsType)} />
      </CommonSection>
      <BannerSection
        {...(MarketplaceContent.bannerSection2 as BannerSectionPropsType)}
      />
    </main>
  );
}
