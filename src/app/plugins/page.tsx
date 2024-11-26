import {
  BannerSection,
  BigCards,
  CommonSection,
  IconCardSection,
  type BannerSectionPropsType,
  type BigCardsPropsType,
  type IconCardSectionPropsType,
  type CommonSectionPropsType,
} from "@components";

import { PluginsContent } from "@data";

export default function Page() {
  return (
    <main>
      <CommonSection {...(PluginsContent.hero as CommonSectionPropsType)} />
      <IconCardSection
        {...(PluginsContent.iconCardSection as IconCardSectionPropsType)}
      />
      <CommonSection>
        <BigCards {...(PluginsContent.bigCardsSection as BigCardsPropsType)} />
      </CommonSection>
      <BannerSection
        {...(PluginsContent.bannerSection as BannerSectionPropsType)}
      />
    </main>
  );
}
