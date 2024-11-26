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

import { PluginsContent } from "@data";

export default function Page() {
  return (
    <main>
      <CommonSection {...(PluginsContent.hero as CommonSectionPropsType)} />
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
