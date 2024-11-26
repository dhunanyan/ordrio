import {
  AccordionSection,
  BannerSection,
  BigCards,
  CommonSection,
  IconCards,
  type AccordionSectionPropsType,
  type BannerSectionPropsType,
  type BigCardsPropsType,
  type IconCardsPropsType,
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
          {...(ThemesContent.bigCardsInCommonSection1 as BigCardsPropsType)}
        />
        <BigCards
          {...(ThemesContent.bigCardsInCommonSection2 as BigCardsPropsType)}
        />
      </CommonSection>
      <CommonSection
        {...(ThemesContent.commonSection as CommonSectionPropsType)}
      />
      <CommonSection
        {...(ThemesContent.iconCardsContent as CommonSectionPropsType)}
      >
        <IconCards {...(ThemesContent.iconCards as IconCardsPropsType)} />
      </CommonSection>

      <CommonSection>
        <BigCards {...(ThemesContent.bigCardsSection as BigCardsPropsType)} />
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
