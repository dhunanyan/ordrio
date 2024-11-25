import {
  BannerSection,
  BigCardsSection,
  Hero,
  IconCardSection,
  type BannerSectionPropsType,
  type BigCardsSectionPropsType,
  type IconCardSectionPropsType,
  type HeroPropsType,
} from "@components";

import { Plugins } from "@data";

export default function Page() {
  return (
    <main>
      <Hero {...(Plugins.hero as HeroPropsType)} />
      <IconCardSection
        {...(Plugins.iconCardSection as IconCardSectionPropsType)}
      />
      <BigCardsSection
        {...(Plugins.bigCardsSection as BigCardsSectionPropsType)}
      />
      <BannerSection {...(Plugins.bannerSection as BannerSectionPropsType)} />
    </main>
  );
}
