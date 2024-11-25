import {
  BannerSection,
  Hero,
  IconCardSection,
  ImageCardsWithContentSection,
  BigCardsSection,
  ShipPartners,
  type ShipPartnersPropsType,
  type BannerSectionPropsType,
  type IconCardSectionPropsType,
  type HeroPropsType,
  type ImageCardsWithContentSectionPropsType,
  type BigCardsSectionPropsType,
} from "@components";

import { IntegrationsContent } from "@data";

export default function Page() {
  return (
    <main>
      <Hero {...(IntegrationsContent.hero as HeroPropsType)} />
      <IconCardSection
        {...(IntegrationsContent.iconCardSection as IconCardSectionPropsType)}
      />
      <ImageCardsWithContentSection
        {...(IntegrationsContent.imageCardsWithContentSection as ImageCardsWithContentSectionPropsType)}
      />
      <BigCardsSection
        {...(IntegrationsContent.bigCardsSection as BigCardsSectionPropsType)}
      />
      <ShipPartners
        {...(IntegrationsContent.shipPartners as ShipPartnersPropsType)}
      />
      <BannerSection
        {...(IntegrationsContent.bannerSection as BannerSectionPropsType)}
      />
    </main>
  );
}
