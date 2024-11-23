import {
  AnimatedCardsSection,
  BannerSection,
  BigCardsSection,
  EasyManagement,
  IconCardSection,
  Hero,
  ListSection,
  SmartControl,
  type AnimatedCardsSectionPropsType,
  type BannerSectionPropsType,
  type BigCardsSectionPropsType,
  type IconCardSectionPropsType,
  type HeroPropsType,
  type ListSectionPropsType,
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
      <BannerSection
        {...(ProductTourContent.bannerSection as BannerSectionPropsType)}
      />
    </main>
  );
}
