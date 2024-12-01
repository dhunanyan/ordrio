import { Metadata } from "next";
import {
  BannerSection,
  BigCards,
  CommonSection,
  IconCards,
  Accordions,
  type BannerSectionPropsType,
  type BigCardsPropsType,
  type IconCardsPropsType,
  type CommonSectionPropsType,
  type AccordionsPropsType,
} from "@components";

import { AccordionsContent, HtmlMeta, ThemesContent } from "@data";

export const metadata: Metadata = HtmlMeta["themes"];

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
      <CommonSection
        {...(ThemesContent.accordionSection as CommonSectionPropsType)}
      >
        <Accordions {...(AccordionsContent as AccordionsPropsType)} />
      </CommonSection>
      <BannerSection
        {...(ThemesContent.bannerSection as BannerSectionPropsType)}
      />
    </main>
  );
}
