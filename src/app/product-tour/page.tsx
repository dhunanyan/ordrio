import {
  AccordionSection,
  AnimatedCardsSection,
  BigCardsSection,
  BannerSection,
  EasyManagement,
  IconCardSection,
  Hero,
  ListSection,
  SmartControl,
  WebsitePlusMobileSection,
  type AccordionSectionPropsType,
  type AnimatedCardsSectionPropsType,
  type BannerSectionPropsType,
  type BigCardsSectionPropsType,
  type IconCardSectionPropsType,
  type HeroPropsType,
  type ListSectionPropsType,
  type WebsitePlusMobileSectionPropsType,
} from "@components";

import { ProductTourContent, AnimatedCardsContent } from "@data";

export default function Page() {
  return (
    <main>
      <Hero {...(ProductTourContent.hero as HeroPropsType)}>
        <AnimatedCardsSection
          {...(AnimatedCardsContent as AnimatedCardsSectionPropsType)}
        />
      </Hero>
      <ListSection
        {...(ProductTourContent.listSection as ListSectionPropsType)}
      >
        <EasyManagement />
      </ListSection>
      <ListSection
        {...(ProductTourContent.listSectionReversed as ListSectionPropsType)}
      >
        <SmartControl />
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
