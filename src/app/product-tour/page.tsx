import {
  AnimatedCardsSection,
  EasyManagement,
  SmartControl,
  BigCardsSection,
  IconCardSection,
  ListSection,
  Hero,
  type AnimatedCardsSectionPropsType,
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
    </main>
  );
}
