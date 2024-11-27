import {
  AccordionSection,
  BannerSection,
  BigCards,
  CommonSection,
  IconCards,
  Slideshow,
  RowCardsWithBigCard,
  ImageCardsWithContentSection,
  type AccordionSectionPropsType,
  type BannerSectionPropsType,
  type BigCardsPropsType,
  type SlideshowPropsType,
  type IconCardsPropsType,
  type CommonSectionPropsType,
  type RowCardsWithBigCardPropsType,
  type ImageCardsWithContentSectionPropsType,
} from "@components";

import { MarketplaceContent } from "@data";

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
      <ImageCardsWithContentSection
        {...(MarketplaceContent.imageCardsWithContentSection as ImageCardsWithContentSectionPropsType)}
      />
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
      <AccordionSection
        {...(MarketplaceContent.accordionSection as AccordionSectionPropsType)}
      />
      <BannerSection
        {...(MarketplaceContent.bannerSection2 as BannerSectionPropsType)}
      />
    </main>
  );
}
