import {
  AccordionSection,
  BannerSection,
  BigCardsSection,
  Hero,
  type AccordionSectionPropsType,
  type BannerSectionPropsType,
  type BigCardsSectionPropsType,
  type HeroPropsType,
} from "@components";

import { ThemesContent } from "@data";

export default function Page() {
  return (
    <main>
      <Hero {...(ThemesContent.hero as HeroPropsType)} />
      <BigCardsSection
        {...(ThemesContent.bigCardsSection as BigCardsSectionPropsType)}
      />
      <AccordionSection
        {...(ThemesContent.accordionSection as AccordionSectionPropsType)}
      />
      <BannerSection
        {...(ThemesContent.bannerSection as BannerSectionPropsType)}
      />
    </main>
  );
}
