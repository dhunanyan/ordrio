import {
  BannerSection,
  CommonSection,
  Contact,
  BigCards,
  type BannerSectionPropsType,
  type CommonSectionPropsType,
  type ContactPropsType,
  type BigCardsSectionPropsType,
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
          {...(SupportContent.bigCardsInCommonSection as BigCardsSectionPropsType)}
        />
      </CommonSection>

      <BannerSection
        {...(SupportContent.bannerSection as BannerSectionPropsType)}
      />
    </main>
  );
}
