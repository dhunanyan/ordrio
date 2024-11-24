import {
  AccordionSection,
  BannerSection,
  BigCardsSection,
  Hero,
  IconCardSection,
  type AccordionSectionPropsType,
  type BannerSectionPropsType,
  type BigCardsSectionPropsType,
  type IconCardSectionPropsType,
  type HeroPropsType,
} from "@components";

import { ThemesContent } from "@data";

export default function Page() {
  return (
    <main>
      <Hero {...(ThemesContent.hero as HeroPropsType)} />
      <IconCardSection
        {...(ThemesContent.iconCardSection as IconCardSectionPropsType)}
      />
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
