import { Metadata } from "next";
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

import { AboutUsContent, HtmlMeta } from "@data";

export const metadata: Metadata = HtmlMeta["about-us"];

export default function Page() {
  return (
    <main>
      <CommonSection {...(AboutUsContent.hero as CommonSectionPropsType)}>
        <Slideshow {...(AboutUsContent.heroComponent as SlideshowPropsType)} />
      </CommonSection>
      <CommonSection
        biggerGap
        {...(AboutUsContent.contentWithImageSection1 as CommonSectionPropsType)}
      />
      <CommonSection
        biggerGap
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
