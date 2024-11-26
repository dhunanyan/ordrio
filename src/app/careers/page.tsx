import {
  BannerSection,
  CommonSection,
  IconCards,
  Slideshow,
  Positions,
  type PositionsPropsType,
  type BannerSectionPropsType,
  type IconCardsPropsType,
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
      <CommonSection
        {...(CareersContent.iconCardsContent as CommonSectionPropsType)}
      >
        <IconCards {...(CareersContent.iconCards as IconCardsPropsType)} />
      </CommonSection>
      <BannerSection
        {...(CareersContent.bannerSection as BannerSectionPropsType)}
      />
    </main>
  );
}
