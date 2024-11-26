import {
  AccordionSection,
  StepCardsSection,
  BigCards,
  BannerSection,
  IconCardSection,
  CommonSection,
  ListSection,
  WebsitePlusMobileSection,
  type AccordionSectionPropsType,
  type StepCardsSectionPropsType,
  type BannerSectionPropsType,
  type BigCardsSectionPropsType,
  type IconCardSectionPropsType,
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
      <IconCardSection
        {...(ProductTourContent.iconCardSection as IconCardSectionPropsType)}
      />
      <CommonSection>
        <BigCards
          {...(ProductTourContent.bigCardsSection as BigCardsSectionPropsType)}
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
          {...(ProductTourContent.bigCardsSection2 as BigCardsSectionPropsType)}
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
