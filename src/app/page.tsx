import {
  AccordionSection,
  type AccordionSectionPropsType,
} from "@components/AccordionSection";
import {
  BannerSection,
  type BannerSectionPropsType,
} from "@components/BannerSection";
import {
  BigCardsSection,
  type BigCardsSectionPropsType,
} from "@components/BigCardsSection";
import {
  CarouselSection,
  type CarouselSectionPropsType,
} from "@components/CarouselSection";
import { Hero, type HeroPropsType } from "@components/Hero";
import {
  ImageCardsWithContentSection,
  type ImageCardsWithContentSectionPropsType,
} from "@components/ImageCardsWithContentSection";
import {
  ListSection,
  type ListSectionPropsType,
} from "@components/ListSection";
import {
  PartnersSection,
  type PartnersSectionPropsType,
} from "@components/PartnersSection";
import {
  PlanSection,
  type PlanSectionPropsType,
} from "@components/PlanSection";

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
