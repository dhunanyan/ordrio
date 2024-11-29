import {
  BannerSection,
  BigCards,
  CommonSection,
  IconCards,
  Slideshow,
  RowCardsWithBigCard,
  Accordions,
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

import { AccordionsContent, ServicesContent } from "@data";

export default function Page() {
  return (
    <main>
      <CommonSection {...(ServicesContent.hero as CommonSectionPropsType)}>
        <Slideshow {...(ServicesContent.heroComponent as SlideshowPropsType)} />
      </CommonSection>
      <CommonSection
        {...(ServicesContent.commonSectionWithRowAndBigCards as CommonSectionPropsType)}
      >
        <RowCardsWithBigCard
          {...(ServicesContent.rowAndBigCardsInCommonSection as RowCardsWithBigCardPropsType)}
        />
      </CommonSection>
      <ImageCardsWithContentSection
        {...(ServicesContent.imageCardsWithContentSection as ImageCardsWithContentSectionPropsType)}
      />
      <CommonSection>
        <BigCards
          {...(ServicesContent.bigCardsSection1 as BigCardsPropsType)}
        />
      </CommonSection>
      <CommonSection
        {...(ServicesContent.iconCardsContent as CommonSectionPropsType)}
      >
        <IconCards {...(ServicesContent.iconCards as IconCardsPropsType)} />
      </CommonSection>
      <BannerSection
        {...(ServicesContent.bannerSection1 as BannerSectionPropsType)}
      />
      <CommonSection>
        <BigCards
          {...(ServicesContent.bigCardsSection2 as BigCardsPropsType)}
        />
      </CommonSection>
      <CommonSection
        {...(ServicesContent.accordionSection as CommonSectionPropsType)}
      >
        <Accordions {...(AccordionsContent as AccordionsPropsType)} />
      </CommonSection>
      <BannerSection
        {...(ServicesContent.bannerSection2 as BannerSectionPropsType)}
      />
    </main>
  );
}
