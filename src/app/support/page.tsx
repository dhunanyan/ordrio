import {
  BannerSection,
  Hero,
  Contact,
  CommonSection,
  BigCardsSection,
  type BannerSectionPropsType,
  type HeroPropsType,
  type ContactPropsType,
  type CommonSectionPropsType,
  type BigCardsSectionPropsType,
} from "@components";

import { SupportContent } from "@data";

export default function Page() {
  return (
    <main>
      <Hero {...(SupportContent.hero as HeroPropsType)}>
        <Contact {...(SupportContent.heroComponent as ContactPropsType)} />
      </Hero>
      <CommonSection
        {...(SupportContent.commonSection as CommonSectionPropsType)}
      >
        <BigCardsSection
          {...(SupportContent.bigCardsInCommonSection as BigCardsSectionPropsType)}
        />
      </CommonSection>

      <BannerSection
        {...(SupportContent.bannerSection as BannerSectionPropsType)}
      />
    </main>
  );
}
