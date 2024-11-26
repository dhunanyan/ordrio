import {
  BannerSection,
  CommonSection,
  Contact,
  BigCards,
  type BannerSectionPropsType,
  type CommonSectionPropsType,
  type ContactPropsType,
  type BigCardsPropsType,
} from "@components";

import { SupportContent } from "@data";

export default function Page() {
  return (
    <main>
      <CommonSection {...(SupportContent.hero as CommonSectionPropsType)}>
        <Contact {...(SupportContent.heroComponent as ContactPropsType)} />
      </CommonSection>
      <CommonSection
        {...(SupportContent.commonSection as CommonSectionPropsType)}
      >
        <BigCards
          {...(SupportContent.bigCardsInCommonSection as BigCardsPropsType)}
        />
      </CommonSection>

      <BannerSection
        {...(SupportContent.bannerSection as BannerSectionPropsType)}
      />
    </main>
  );
}
