import {
  BannerSection,
  CommonSection,
  IconCards,
  ImageCardsWithContentSection,
  BigCards,
  ShipPartners,
  type ShipPartnersPropsType,
  type BannerSectionPropsType,
  type IconCardsPropsType,
  type CommonSectionPropsType,
  type ImageCardsWithContentSectionPropsType,
  type BigCardsPropsType,
} from "@components";

import { IntegrationsContent } from "@data";

export default function Page() {
  return (
    <main>
      <CommonSection
        {...(IntegrationsContent.hero as CommonSectionPropsType)}
      />
      <CommonSection
        {...(IntegrationsContent.iconCardsContent as CommonSectionPropsType)}
      >
        <IconCards {...(IntegrationsContent.iconCards as IconCardsPropsType)} />
      </CommonSection>

      <ImageCardsWithContentSection
        {...(IntegrationsContent.imageCardsWithContentSection as ImageCardsWithContentSectionPropsType)}
      />
      <CommonSection>
        <BigCards
          {...(IntegrationsContent.bigCardsSection as BigCardsPropsType)}
        />
      </CommonSection>
      <ShipPartners
        {...(IntegrationsContent.shipPartners as ShipPartnersPropsType)}
      />
      <BannerSection
        {...(IntegrationsContent.bannerSection as BannerSectionPropsType)}
      />
    </main>
  );
}
