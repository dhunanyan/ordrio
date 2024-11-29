import {
  BannerSection,
  BigCards,
  CommonSection,
  IconCards,
  Slideshow,
  type BannerSectionPropsType,
  type BigCardsPropsType,
  type IconCardsPropsType,
  type CommonSectionPropsType,
  type SlideshowPropsType,
} from "@components";

import { AboutUsContent } from "@data";

export default function Page() {
  return (
    <main>
      <CommonSection {...(AboutUsContent.hero as CommonSectionPropsType)}>
        <Slideshow {...(AboutUsContent.heroComponent as SlideshowPropsType)} />
      </CommonSection>
      <CommonSection
        {...(AboutUsContent.contentWithImageSection1 as CommonSectionPropsType)}
      />
      <CommonSection
        {...(AboutUsContent.contentWithImageSection2 as CommonSectionPropsType)}
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
