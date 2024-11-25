import {
  BannerSection,
  BigCardsSection,
  Hero,
  IconCardSection,
  SlideshowSection,
  ContentWithImageSection,
  type BannerSectionPropsType,
  type BigCardsSectionPropsType,
  type IconCardSectionPropsType,
  type HeroPropsType,
  type SlideshowSectionPropsType,
  type ContentWithImageSectionPropsType,
} from "@components";

import { AboutUs } from "@data";

export default function Page() {
  return (
    <main>
      <Hero {...(AboutUs.hero as HeroPropsType)}>
        <SlideshowSection
          {...(AboutUs.heroComponent as SlideshowSectionPropsType)}
        />
      </Hero>
      <ContentWithImageSection
        {...(AboutUs.contentWithImageSection1 as ContentWithImageSectionPropsType)}
      />
      <ContentWithImageSection
        {...(AboutUs.contentWithImageSection2 as ContentWithImageSectionPropsType)}
      />
      <IconCardSection
        {...(AboutUs.iconCardSection as IconCardSectionPropsType)}
      />
      <BigCardsSection
        {...(AboutUs.bigCardsSection as BigCardsSectionPropsType)}
      />
      <BannerSection {...(AboutUs.bannerSection as BannerSectionPropsType)} />
    </main>
  );
}
