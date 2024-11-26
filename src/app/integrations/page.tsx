import {
  BannerSection,
  CommonSection,
  IconCardSection,
  ImageCardsWithContentSection,
  BigCards,
  ShipPartners,
  type ShipPartnersPropsType,
  type BannerSectionPropsType,
  type IconCardSectionPropsType,
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
      <IconCardSection
        {...(IntegrationsContent.iconCardSection as IconCardSectionPropsType)}
      />
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
