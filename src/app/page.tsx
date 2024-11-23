import {
  AccordionSection,
  BannerSection,
  BigCardsSection,
  CarouselSection,
  Hero,
  ImageCardsWithContentSection,
  ListSection,
  PartnersSection,
  PlanSection,
  WebsitePlusMobileSection,
  type AccordionSectionPropsType,
  type BannerSectionPropsType,
  type BigCardsSectionPropsType,
  type CarouselSectionPropsType,
  type HeroPropsType,
  type ImageCardsWithContentSectionPropsType,
  type ListSectionPropsType,
  type PartnersSectionPropsType,
  type PlanSectionPropsType,
  type WebsitePlusMobileSectionPropsType,
} from "@components";

import { HomeContent } from "@data";

export default function Home() {
  return (
    <main>
      <Hero {...(HomeContent.hero as HeroPropsType)} />
      <ListSection {...(HomeContent.listSection as ListSectionPropsType)} />
      <PartnersSection
        {...(HomeContent.partnerSection as PartnersSectionPropsType)}
      />
      <ImageCardsWithContentSection
        {...(HomeContent.imageCardsWithContentSection as ImageCardsWithContentSectionPropsType)}
      />

      <BigCardsSection
        {...(HomeContent.bigCardsSection as BigCardsSectionPropsType)}
      />
      <WebsitePlusMobileSection
        {...(HomeContent.websiteAndMobileSection as WebsitePlusMobileSectionPropsType)}
      />
      <CarouselSection
        {...(HomeContent.carouselSection as CarouselSectionPropsType)}
      />
      <PlanSection {...(HomeContent.PlanSection as PlanSectionPropsType)} />
      <AccordionSection
        {...(HomeContent.accordionSection as AccordionSectionPropsType)}
      />
      <BannerSection
        {...(HomeContent.bannerSection as BannerSectionPropsType)}
      />
    </main>
  );
}
