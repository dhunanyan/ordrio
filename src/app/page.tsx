import {
  Accordions,
  BannerSection,
  BigCards,
  CarouselSection,
  CommonSection,
  ImageCardsWithContentSection,
  ListSection,
  PartnersSection,
  Plan,
  WebsitePlusMobileSection,
  type BannerSectionPropsType,
  type BigCardsPropsType,
  type CarouselSectionPropsType,
  type CommonSectionPropsType,
  type ImageCardsWithContentSectionPropsType,
  type ListSectionPropsType,
  type PartnersSectionPropsType,
  type PlanPropsType,
  type WebsitePlusMobileSectionPropsType,
  type AccordionsPropsType,
} from "@components";

import { AccordionsContent, HomeContent, PlanContent } from "@data";

export default function Home() {
  return (
    <main>
      <CommonSection {...(HomeContent.hero as CommonSectionPropsType)} />
      <ListSection {...(HomeContent.listSection as ListSectionPropsType)} />
      <PartnersSection
        {...(HomeContent.partnerSection as PartnersSectionPropsType)}
      />
      <ImageCardsWithContentSection
        {...(HomeContent.imageCardsWithContentSection as ImageCardsWithContentSectionPropsType)}
      />
      <CommonSection>
        <BigCards {...(HomeContent.bigCardsSection as BigCardsPropsType)} />
      </CommonSection>

      <WebsitePlusMobileSection
        {...(HomeContent.websiteAndMobileSection as WebsitePlusMobileSectionPropsType)}
      />
      <CarouselSection
        {...(HomeContent.carouselSection as CarouselSectionPropsType)}
      />
      <CommonSection {...(HomeContent.planSection as CommonSectionPropsType)}>
        <Plan {...(PlanContent as PlanPropsType)} />
      </CommonSection>
      <CommonSection
        {...(HomeContent.accordionSection as CommonSectionPropsType)}
      >
        <Accordions {...(AccordionsContent as AccordionsPropsType)} />
      </CommonSection>
      <BannerSection
        {...(HomeContent.bannerSection as BannerSectionPropsType)}
      />
    </main>
  );
}
