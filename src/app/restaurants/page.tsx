import {
  AccordionSection,
  BannerSection,
  BigCardsSection,
  // CommonSection,
  // Hero,
  // IconCardSection,
  type AccordionSectionPropsType,
  type BannerSectionPropsType,
  type BigCardsSectionPropsType,
  // type CommonSectionPropsType,
  // type IconCardSectionPropsType,
  // type HeroPropsType,
} from "@components";

import { RestaurantsContent } from "@data";

export default function Page() {
  return (
    <main>
      {/* <Hero {...(ThemesContent.hero as HeroPropsType)} />
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
      /> */}
      <BannerSection
        {...(RestaurantsContent.bannerSection1 as BannerSectionPropsType)}
      />
      <BigCardsSection
        {...(RestaurantsContent.bigCardsSection as BigCardsSectionPropsType)}
      />
      <AccordionSection
        {...(RestaurantsContent.accordionSection as AccordionSectionPropsType)}
      />
      <BannerSection
        {...(RestaurantsContent.bannerSection2 as BannerSectionPropsType)}
      />
    </main>
  );
}
