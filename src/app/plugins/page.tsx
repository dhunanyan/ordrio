import { Metadata } from "next";
import {
  BannerSection,
  BigCards,
  CommonSection,
  IconCards,
  type BannerSectionPropsType,
  type BigCardsPropsType,
  type IconCardsPropsType,
  type CommonSectionPropsType,
} from "@components";

import { HtmlMeta, PluginsContent } from "@data";

export const metadata: Metadata = HtmlMeta["plugins"];

export default function Page() {
  return (
    <main>
      <CommonSection {...(PluginsContent.hero as CommonSectionPropsType)}>
        <IconCards {...(PluginsContent.plugins as IconCardsPropsType)} />
      </CommonSection>
      <CommonSection
        {...(PluginsContent.iconCardsContent as CommonSectionPropsType)}
      >
        <IconCards {...(PluginsContent.iconCards as IconCardsPropsType)} />
      </CommonSection>
      <CommonSection>
        <BigCards {...(PluginsContent.bigCardsSection as BigCardsPropsType)} />
      </CommonSection>
      <BannerSection
        {...(PluginsContent.bannerSection as BannerSectionPropsType)}
      />
    </main>
  );
}
