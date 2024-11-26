import {
  BannerSection,
  CommonSection,
  IconCardSection,
  Slideshow,
  type BannerSectionPropsType,
  type IconCardSectionPropsType,
  type CommonSectionPropsType,
  type SlideshowPropsType,
  BigCards,
  BigCardsPropsType,
} from "@components";

import { BecomeAPartnerContent } from "@data";

export default function Page() {
  return (
    <main>
      <CommonSection
        {...(BecomeAPartnerContent.hero as CommonSectionPropsType)}
      >
        <Slideshow
          {...(BecomeAPartnerContent.heroComponent as SlideshowPropsType)}
        />
      </CommonSection>
      <CommonSection
        {...(BecomeAPartnerContent.commonSection1 as CommonSectionPropsType)}
      >
        <BigCards
          {...(BecomeAPartnerContent.bigCardsInCommonSection1 as BigCardsPropsType)}
        />
        <BigCards
          {...(BecomeAPartnerContent.bigCardsInCommonSection2 as BigCardsPropsType)}
        />
      </CommonSection>
      <CommonSection
        {...(BecomeAPartnerContent.commonSection2 as CommonSectionPropsType)}
      >
        <BigCards
          {...(BecomeAPartnerContent.bigCardsInCommonSection3 as BigCardsPropsType)}
        />
        <BigCards
          {...(BecomeAPartnerContent.bigCardsInCommonSection4 as BigCardsPropsType)}
        />
      </CommonSection>
      <IconCardSection
        {...(BecomeAPartnerContent.iconCardSection as IconCardSectionPropsType)}
      />
      <BannerSection
        {...(BecomeAPartnerContent.bannerSection as BannerSectionPropsType)}
      />
    </main>
  );
}
