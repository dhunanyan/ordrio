import {
  BannerSection,
  Hero,
  IconCardSection,
  SlideshowSection,
  PositionsSection,
  type PositionsSectionPropsType,
  type BannerSectionPropsType,
  type IconCardSectionPropsType,
  type HeroPropsType,
  type SlideshowSectionPropsType,
} from "@components";

import { CareersContent } from "@data";

export default function Page() {
  return (
    <main>
      <Hero {...(CareersContent.hero as HeroPropsType)}>
        <SlideshowSection
          {...(CareersContent.heroComponent as SlideshowSectionPropsType)}
        />
      </Hero>
      <PositionsSection
        {...(CareersContent.positionsSection as PositionsSectionPropsType)}
      />
      <IconCardSection
        {...(CareersContent.iconCardSection as IconCardSectionPropsType)}
      />
      <BannerSection
        {...(CareersContent.bannerSection as BannerSectionPropsType)}
      />
    </main>
  );
}
