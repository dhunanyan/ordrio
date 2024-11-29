import {
  BannerSection,
  CommonSection,
  IconCards,
  BigCards,
  ShipPartners,
  ImageCards,
  type ShipPartnersPropsType,
  type BannerSectionPropsType,
  type IconCardsPropsType,
  type CommonSectionPropsType,
  type BigCardsPropsType,
  type ImageCardsPropsType,
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
      <CommonSection
        {...(IntegrationsContent.imageCardsSection as CommonSectionPropsType)}
      >
        <ImageCards
          {...(IntegrationsContent.imageCards as ImageCardsPropsType)}
        />
      </CommonSection>
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
