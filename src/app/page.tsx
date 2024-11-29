import {
  Accordions,
  BannerSection,
  BigCards,
  CarouselSection,
  CommonSection,
  PartnersSection,
  Plan,
  WebsitePlusMobileSection,
  type BannerSectionPropsType,
  type BigCardsPropsType,
  type CarouselSectionPropsType,
  type CommonSectionPropsType,
  type PartnersSectionPropsType,
  type PlanPropsType,
  type WebsitePlusMobileSectionPropsType,
  type AccordionsPropsType,
  ImageCards,
  ImageCardsPropsType,
} from "@components";

import { AccordionsContent, HomeContent, PlanContent } from "@data";

export default function Home() {
  return (
    <main>
      <CommonSection {...(HomeContent.hero as CommonSectionPropsType)} />
      <CommonSection {...(HomeContent.listSection as CommonSectionPropsType)} />
      <PartnersSection
        {...(HomeContent.partnerSection as PartnersSectionPropsType)}
      />
      <CommonSection
        {...(HomeContent.imageCardsSection as CommonSectionPropsType)}
      >
        <ImageCards {...(HomeContent.imageCards as ImageCardsPropsType)} />
      </CommonSection>
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
