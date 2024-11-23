import {
  AnimatedCards,
  AnimatedCardsPropsType,
} from "@components/AnimatedCards";
import { Hero, type HeroPropsType } from "@components/Hero";

import { ProductTourContent, AnimatedCardsContent } from "@data";

export default function Page() {
  return (
    <main>
      <Hero {...(ProductTourContent.hero as HeroPropsType)}>
        <AnimatedCards {...(AnimatedCardsContent as AnimatedCardsPropsType)} />
      </Hero>
    </main>
  );
}
