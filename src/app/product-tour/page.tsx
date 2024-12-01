import { Metadata } from "next";
import {
  Accordions,
  StepCards,
  BigCards,
  BannerSection,
  IconCards,
  CommonSection,
  WebsitePlusMobileSection,
  type StepCardsPropsType,
  type BannerSectionPropsType,
  type BigCardsPropsType,
  type IconCardsPropsType,
  type CommonSectionPropsType,
  type WebsitePlusMobileSectionPropsType,
  type AccordionsPropsType,
} from "@components";
import { AnimatedCard } from "@config";

import { ProductTourContent, AccordionsContent, HtmlMeta } from "@data";
import { renderAnimatedCard } from "@utils";

export const metadata: Metadata = HtmlMeta["product-tour"];

export default function Page() {
  return (
    <main>
      <CommonSection {...(ProductTourContent.hero as CommonSectionPropsType)}>
        <StepCards {...(ProductTourContent.stepCards as StepCardsPropsType)} />
      </CommonSection>

      <CommonSection
        biggerGap
        {...(ProductTourContent.listSection as CommonSectionPropsType)}
      >
        {renderAnimatedCard(AnimatedCard.EASY_MANAGEMENT)}
      </CommonSection>
      <CommonSection
        biggerGap
        {...(ProductTourContent.listSectionReversed as CommonSectionPropsType)}
      >
        {renderAnimatedCard(AnimatedCard.SMART_CONTROL)}
      </CommonSection>

      <CommonSection
        {...(ProductTourContent.iconCardsContent as CommonSectionPropsType)}
      >
        <IconCards {...(ProductTourContent.iconCards as IconCardsPropsType)} />
      </CommonSection>
      <CommonSection>
        <BigCards
          {...(ProductTourContent.bigCardsSection as BigCardsPropsType)}
        />
      </CommonSection>
      <WebsitePlusMobileSection
        {...(ProductTourContent.websiteAndMobileSection as WebsitePlusMobileSectionPropsType)}
      />
      <BannerSection
        {...(ProductTourContent.bannerSection1 as BannerSectionPropsType)}
      />
      <CommonSection>
        <BigCards
          {...(ProductTourContent.bigCardsSection2 as BigCardsPropsType)}
        />
      </CommonSection>
      <CommonSection
        {...(ProductTourContent.accordionSection as CommonSectionPropsType)}
      >
        <Accordions {...(AccordionsContent as AccordionsPropsType)} />
      </CommonSection>
      <BannerSection
        {...(ProductTourContent.bannerSection2 as BannerSectionPropsType)}
      />
    </main>
  );
}
