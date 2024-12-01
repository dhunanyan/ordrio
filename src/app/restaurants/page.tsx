import { Metadata } from "next";
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

import { AccordionsContent, HtmlMeta, RestaurantsContent } from "@data";

export const metadata: Metadata = HtmlMeta["restaurants"];

export default function Page() {
  return (
    <main>
      <CommonSection {...(RestaurantsContent.hero as CommonSectionPropsType)}>
        <Slideshow
          {...(RestaurantsContent.heroComponent as SlideshowPropsType)}
        />
      </CommonSection>
      <CommonSection
        {...(RestaurantsContent.commonSectionWithRowAndBigCards as CommonSectionPropsType)}
      >
        <RowCardsWithBigCard
          {...(RestaurantsContent.rowAndBigCardsInCommonSection as RowCardsWithBigCardPropsType)}
        />
      </CommonSection>
      <CommonSection
        {...(RestaurantsContent.imageCardsSection as CommonSectionPropsType)}
      >
        <ImageCards
          {...(RestaurantsContent.imageCards as ImageCardsPropsType)}
        />
      </CommonSection>
      <CommonSection>
        <BigCards
          {...(RestaurantsContent.bigCardsSection1 as BigCardsPropsType)}
        />
      </CommonSection>
      <CommonSection
        {...(RestaurantsContent.iconCardsContent as CommonSectionPropsType)}
      >
        <IconCards {...(RestaurantsContent.iconCards as IconCardsPropsType)} />
      </CommonSection>
      <BannerSection
        {...(RestaurantsContent.bannerSection1 as BannerSectionPropsType)}
      />
      <CommonSection>
        <BigCards
          {...(RestaurantsContent.bigCardsSection2 as BigCardsPropsType)}
        />
      </CommonSection>
      <CommonSection
        {...(RestaurantsContent.accordionSection as CommonSectionPropsType)}
      >
        <Accordions {...(AccordionsContent as AccordionsPropsType)} />
      </CommonSection>
      <BannerSection
        {...(RestaurantsContent.bannerSection2 as BannerSectionPropsType)}
      />
    </main>
  );
}
