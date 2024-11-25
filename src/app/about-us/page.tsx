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

import { AboutUsContent } from "@data";

export default function Page() {
  return (
    <main>
      <Hero {...(AboutUsContent.hero as HeroPropsType)}>
        <SlideshowSection
          {...(AboutUsContent.heroComponent as SlideshowSectionPropsType)}
        />
      </Hero>
      <ContentWithImageSection
        {...(AboutUsContent.contentWithImageSection1 as ContentWithImageSectionPropsType)}
      />
      <ContentWithImageSection
        {...(AboutUsContent.contentWithImageSection2 as ContentWithImageSectionPropsType)}
      />
      <IconCardSection
        {...(AboutUsContent.iconCardSection as IconCardSectionPropsType)}
      />
      <BigCardsSection
        {...(AboutUsContent.bigCardsSection as BigCardsSectionPropsType)}
      />
      <BannerSection
        {...(AboutUsContent.bannerSection as BannerSectionPropsType)}
      />
    </main>
  );
}
