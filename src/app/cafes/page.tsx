import {
  Accordions,
  BannerSection,
  BigCards,
  CommonSection,
  IconCards,
  ImageCards,
  Slideshow,
  RowCardsWithBigCard,
  type BannerSectionPropsType,
  type BigCardsPropsType,
  type SlideshowPropsType,
  type IconCardsPropsType,
  type CommonSectionPropsType,
  type RowCardsWithBigCardPropsType,
  type AccordionsPropsType,
  type ImageCardsPropsType,
} from "@components";

import { AccordionsContent, CafesContent } from "@data";

export default function Page() {
  return (
    <main>
      <CommonSection {...(CafesContent.hero as CommonSectionPropsType)}>
        <Slideshow {...(CafesContent.heroComponent as SlideshowPropsType)} />
      </CommonSection>
      <CommonSection
        {...(CafesContent.commonSectionWithRowAndBigCards as CommonSectionPropsType)}
      >
        <RowCardsWithBigCard
          {...(CafesContent.rowAndBigCardsInCommonSection as RowCardsWithBigCardPropsType)}
        />
      </CommonSection>

      <CommonSection
        {...(CafesContent.imageCardsSection as CommonSectionPropsType)}
      >
        <ImageCards {...(CafesContent.imageCards as ImageCardsPropsType)} />
      </CommonSection>
      <CommonSection>
        <BigCards {...(CafesContent.bigCardsSection1 as BigCardsPropsType)} />
      </CommonSection>
      <CommonSection
        {...(CafesContent.iconCardsContent as CommonSectionPropsType)}
      >
        <IconCards {...(CafesContent.iconCards as IconCardsPropsType)} />
      </CommonSection>
      <BannerSection
        {...(CafesContent.bannerSection1 as BannerSectionPropsType)}
      />
      <CommonSection>
        <BigCards {...(CafesContent.bigCardsSection2 as BigCardsPropsType)} />
      </CommonSection>
      <CommonSection
        {...(CafesContent.accordionSection as CommonSectionPropsType)}
      >
        <Accordions {...(AccordionsContent as AccordionsPropsType)} />
      </CommonSection>
      <BannerSection
        {...(CafesContent.bannerSection2 as BannerSectionPropsType)}
      />
    </main>
  );
}
