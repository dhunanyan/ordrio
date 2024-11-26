import {
  BannerSection,
  BigCards,
  CommonSection,
  IconCards,
  Slideshow,
  ContentWithImageSection,
  type BannerSectionPropsType,
  type BigCardsPropsType,
  type IconCardsPropsType,
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
      <CommonSection
        {...(AboutUsContent.iconCardsContent as CommonSectionPropsType)}
      >
        <IconCards {...(AboutUsContent.iconCards as IconCardsPropsType)} />
      </CommonSection>
      <CommonSection>
        <BigCards {...(AboutUsContent.bigCardsSection as BigCardsPropsType)} />
      </CommonSection>
      <BannerSection
        {...(AboutUsContent.bannerSection as BannerSectionPropsType)}
      />
    </main>
  );
}
