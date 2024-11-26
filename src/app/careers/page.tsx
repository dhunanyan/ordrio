import {
  BannerSection,
  CommonSection,
  IconCardSection,
  Slideshow,
  Positions,
  type PositionsPropsType,
  type BannerSectionPropsType,
  type IconCardSectionPropsType,
  type CommonSectionPropsType,
  type SlideshowPropsType,
} from "@components";

import { CareersContent } from "@data";

export default function Page() {
  return (
    <main>
      <CommonSection {...(CareersContent.hero as CommonSectionPropsType)}>
        <Slideshow {...(CareersContent.heroComponent as SlideshowPropsType)} />
      </CommonSection>
      <CommonSection
        {...(CareersContent.positionsSection as CommonSectionPropsType)}
      >
        <Positions
          {...(CareersContent.positionsSectionComponent as PositionsPropsType)}
        />
      </CommonSection>
      <IconCardSection
        {...(CareersContent.iconCardSection as IconCardSectionPropsType)}
      />
      <BannerSection
        {...(CareersContent.bannerSection as BannerSectionPropsType)}
      />
    </main>
  );
}
