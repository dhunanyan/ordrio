import {
  AccordionSection,
  StepCardsSection,
  BigCardsSection,
  BannerSection,
  IconCardSection,
  Hero,
  ListSection,
  WebsitePlusMobileSection,
  type AccordionSectionPropsType,
  type StepCardsSectionPropsType,
  type BannerSectionPropsType,
  type BigCardsSectionPropsType,
  type IconCardSectionPropsType,
  type HeroPropsType,
  type ListSectionPropsType,
  type WebsitePlusMobileSectionPropsType,
} from "@components";
import { AnimatedCard } from "@config";

import { ProductTourContent, AnimatedCardsContent } from "@data";
import { renderAnimatedCard } from "@utils";

export default function Page() {
  return (
    <main>
      <Hero {...(ProductTourContent.hero as HeroPropsType)}>
        <StepCardsSection
          {...(AnimatedCardsContent as StepCardsSectionPropsType)}
        />
      </Hero>
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
      <BigCardsSection
        {...(ProductTourContent.bigCardsSection as BigCardsSectionPropsType)}
      />
      <WebsitePlusMobileSection
        {...(ProductTourContent.websiteAndMobileSection as WebsitePlusMobileSectionPropsType)}
      />
      <BannerSection
        {...(ProductTourContent.bannerSection1 as BannerSectionPropsType)}
      />
      <BigCardsSection
        {...(ProductTourContent.bigCardsSection2 as BigCardsSectionPropsType)}
      />
      <AccordionSection
        {...(ProductTourContent.accordionSection as AccordionSectionPropsType)}
      />
      <BannerSection
        {...(ProductTourContent.bannerSection2 as BannerSectionPropsType)}
      />
    </main>
  );
}
