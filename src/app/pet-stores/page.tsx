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

import { AccordionsContent, PetStoresContent } from "@data";

export default function Page() {
  return (
    <main>
      <CommonSection {...(PetStoresContent.hero as CommonSectionPropsType)}>
        <Slideshow
          {...(PetStoresContent.heroComponent as SlideshowPropsType)}
        />
      </CommonSection>
      <CommonSection
        {...(PetStoresContent.commonSectionWithRowAndBigCards as CommonSectionPropsType)}
      >
        <RowCardsWithBigCard
          {...(PetStoresContent.rowAndBigCardsInCommonSection as RowCardsWithBigCardPropsType)}
        />
      </CommonSection>
      <CommonSection
        {...(PetStoresContent.commonSection as CommonSectionPropsType)}
      >
        <ImageCards {...PetStoresContent.commonSectionImageCards} />
      </CommonSection>
      <CommonSection>
        <BigCards
          {...(PetStoresContent.bigCardsSection1 as BigCardsPropsType)}
        />
      </CommonSection>
      <CommonSection
        {...(PetStoresContent.iconCardsContent as CommonSectionPropsType)}
      >
        <IconCards {...(PetStoresContent.iconCards as IconCardsPropsType)} />
      </CommonSection>
      <BannerSection
        {...(PetStoresContent.bannerSection1 as BannerSectionPropsType)}
      />
      <CommonSection>
        <BigCards
          {...(PetStoresContent.bigCardsSection2 as BigCardsPropsType)}
        />
      </CommonSection>
      <CommonSection
        {...(PetStoresContent.accordionSection as CommonSectionPropsType)}
      >
        <Accordions {...(AccordionsContent as AccordionsPropsType)} />
      </CommonSection>
      <BannerSection
        {...(PetStoresContent.bannerSection2 as BannerSectionPropsType)}
      />
    </main>
  );
}
