import {
  AnimatedCards,
  AnimatedCardsPropsType,
  EasyManagement,
  SmartControl,
} from "@components/AnimatedCards";
import { Hero, type HeroPropsType } from "@components/Hero";
import {
  IconCardSection,
  type IconCardSectionPropsType,
} from "@components/IconCardSection";
import {
  ListSection,
  type ListSectionPropsType,
} from "@components/ListSection";

import { ProductTourContent, AnimatedCardsContent } from "@data";

export default function Page() {
  return (
    <main>
      <Hero {...(ProductTourContent.hero as HeroPropsType)}>
        <AnimatedCards {...(AnimatedCardsContent as AnimatedCardsPropsType)} />
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
    </main>
  );
}
