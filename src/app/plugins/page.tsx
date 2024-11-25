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

import { PluginsContent } from "@data";

export default function Page() {
  return (
    <main>
      <Hero {...(PluginsContent.hero as HeroPropsType)} />
      <IconCardSection
        {...(PluginsContent.iconCardSection as IconCardSectionPropsType)}
      />
      <BigCardsSection
        {...(PluginsContent.bigCardsSection as BigCardsSectionPropsType)}
      />
      <BannerSection
        {...(PluginsContent.bannerSection as BannerSectionPropsType)}
      />
    </main>
  );
}
