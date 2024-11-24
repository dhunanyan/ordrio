import {
  AccordionSection,
  BannerSection,
  BigCardsSection,
  CommonSection,
  Hero,
  IconCardSection,
  type AccordionSectionPropsType,
  type BannerSectionPropsType,
  type BigCardsSectionPropsType,
  type CommonSectionPropsType,
  type IconCardSectionPropsType,
  type HeroPropsType,
} from "@components";

import { ThemesContent } from "@data";

export default function Page() {
  return (
    <main>
      <Hero {...(ThemesContent.hero as HeroPropsType)} />
      <CommonSection
        {...(ThemesContent.commonSectionWithBigCards as CommonSectionPropsType)}
      >
        <BigCardsSection
          {...(ThemesContent.bigCardsInCommonSection as BigCardsSectionPropsType)}
        />
      </CommonSection>
      <CommonSection
        {...(ThemesContent.commonSection as CommonSectionPropsType)}
      />
      <IconCardSection
        {...(ThemesContent.iconCardSection as IconCardSectionPropsType)}
      />
      <BigCardsSection
        {...(ThemesContent.bigCardsSection as BigCardsSectionPropsType)}
      />
      <AccordionSection
        {...(ThemesContent.accordionSection as AccordionSectionPropsType)}
      />
      <BannerSection
        {...(ThemesContent.bannerSection as BannerSectionPropsType)}
      />
    </main>
  );
}
