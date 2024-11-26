import {
  BannerSection,
  CommonSection,
  IconCardSection,
  SlideshowSection,
  PositionsSection,
  type PositionsSectionPropsType,
  type BannerSectionPropsType,
  type IconCardSectionPropsType,
  type CommonSectionPropsType,
  type SlideshowSectionPropsType,
} from "@components";

import { CareersContent } from "@data";

export default function Page() {
  return (
    <main>
      <CommonSection {...(CareersContent.hero as CommonSectionPropsType)}>
        <SlideshowSection
          {...(CareersContent.heroComponent as SlideshowSectionPropsType)}
        />
      </CommonSection>
      <PositionsSection
        {...(CareersContent.positionsSection as PositionsSectionPropsType)}
      />
      <IconCardSection
        {...(CareersContent.iconCardSection as IconCardSectionPropsType)}
      />
      <BannerSection
        {...(CareersContent.bannerSection as BannerSectionPropsType)}
      />
    </main>
  );
}
