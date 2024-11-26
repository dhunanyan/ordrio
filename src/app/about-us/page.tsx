import {
  BannerSection,
  BigCards,
  CommonSection,
  IconCardSection,
  Slideshow,
  ContentWithImageSection,
  type BannerSectionPropsType,
  type BigCardsPropsType,
  type IconCardSectionPropsType,
  type CommonSectionPropsType,
  type SlideshowPropsType,
  type ContentWithImageSectionPropsType,
} from "@components";

import { AboutUsContent } from "@data";

export default function Page() {
  return (
    <main>
      <CommonSection {...(AboutUsContent.hero as CommonSectionPropsType)}>
        <Slideshow {...(AboutUsContent.heroComponent as SlideshowPropsType)} />
      </CommonSection>
      <ContentWithImageSection
        {...(AboutUsContent.contentWithImageSection1 as ContentWithImageSectionPropsType)}
      />
      <ContentWithImageSection
        {...(AboutUsContent.contentWithImageSection2 as ContentWithImageSectionPropsType)}
      />
      <IconCardSection
        {...(AboutUsContent.iconCardSection as IconCardSectionPropsType)}
      />
      <CommonSection>
        <BigCards {...(AboutUsContent.bigCardsSection as BigCardsPropsType)} />
      </CommonSection>
      <BannerSection
        {...(AboutUsContent.bannerSection as BannerSectionPropsType)}
      />
    </main>
  );
}
