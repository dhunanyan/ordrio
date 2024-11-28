import {
  AccordionSection,
  BannerSection,
  BigCards,
  CommonSection,
  IconCards,
  ImageCardsWithContentSection,
  Slideshow,
  RowCardsWithBigCard,
  type AccordionSectionPropsType,
  type BannerSectionPropsType,
  type BigCardsPropsType,
  type SlideshowPropsType,
  type IconCardsPropsType,
  type CommonSectionPropsType,
  type RowCardsWithBigCardPropsType,
  type ImageCardsWithContentSectionPropsType,
} from "@components";

import { CafesContent } from "@data";

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
      <ImageCardsWithContentSection
        {...(CafesContent.imageCardsWithContentSection as ImageCardsWithContentSectionPropsType)}
      />
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
      <AccordionSection
        {...(CafesContent.accordionSection as AccordionSectionPropsType)}
      />
      <BannerSection
        {...(CafesContent.bannerSection2 as BannerSectionPropsType)}
      />
    </main>
  );
}
