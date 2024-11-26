import {
  AccordionSection,
  StepCardsSection,
  BigCards,
  BannerSection,
  IconCards,
  CommonSection,
  ListSection,
  WebsitePlusMobileSection,
  type AccordionSectionPropsType,
  type StepCardsSectionPropsType,
  type BannerSectionPropsType,
  type BigCardsPropsType,
  type IconCardsPropsType,
  type CommonSectionPropsType,
  type ListSectionPropsType,
  type WebsitePlusMobileSectionPropsType,
} from "@components";
import { AnimatedCard } from "@config";

import { ProductTourContent, AnimatedCardsContent } from "@data";
import { renderAnimatedCard } from "@utils";

export default function Page() {
  return (
    <main>
      <CommonSection {...(ProductTourContent.hero as CommonSectionPropsType)}>
        <StepCardsSection
          {...(AnimatedCardsContent as StepCardsSectionPropsType)}
        />
      </CommonSection>
      <ListSection
        {...(ProductTourContent.listSection as ListSectionPropsType)}
      >
        {renderAnimatedCard(AnimatedCard.EASY_MANAGEMENT)}
      </ListSection>
      <ListSection
        {...(ProductTourContent.listSectionReversed as ListSectionPropsType)}
      >
        {renderAnimatedCard(AnimatedCard.SMART_CONTROL)}
      </ListSection>
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
      <AccordionSection
        {...(ProductTourContent.accordionSection as AccordionSectionPropsType)}
      />
      <BannerSection
        {...(ProductTourContent.bannerSection2 as BannerSectionPropsType)}
      />
    </main>
  );
}
