import {
  AccordionSection,
  BannerSection,
  BigCards,
  CommonSection,
  IconCardSection,
  type AccordionSectionPropsType,
  type BannerSectionPropsType,
  type BigCardsSectionPropsType,
  type IconCardSectionPropsType,
  type CommonSectionPropsType,
} from "@components";

import { ThemesContent } from "@data";

export default function Page() {
  return (
    <main>
      <CommonSection {...(ThemesContent.hero as CommonSectionPropsType)} />
      <CommonSection
        {...(ThemesContent.commonSectionWithBigCards as CommonSectionPropsType)}
      >
        <BigCards
          {...(ThemesContent.bigCardsInCommonSection as BigCardsSectionPropsType)}
        />
      </CommonSection>
      <CommonSection
        {...(ThemesContent.commonSection as CommonSectionPropsType)}
      />
      <IconCardSection
        {...(ThemesContent.iconCardSection as IconCardSectionPropsType)}
      />
      <CommonSection>
        <BigCards
          {...(ThemesContent.bigCardsSection as BigCardsSectionPropsType)}
        />
      </CommonSection>
      <AccordionSection
        {...(ThemesContent.accordionSection as AccordionSectionPropsType)}
      />
      <BannerSection
        {...(ThemesContent.bannerSection as BannerSectionPropsType)}
      />
    </main>
  );
}
