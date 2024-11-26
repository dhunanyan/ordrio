import {
  AccordionSection,
  BannerSection,
  BigCards,
  CarouselSection,
  CommonSection,
  ImageCardsWithContentSection,
  ListSection,
  PartnersSection,
  Plan,
  WebsitePlusMobileSection,
  type AccordionSectionPropsType,
  type BannerSectionPropsType,
  type BigCardsSectionPropsType,
  type CarouselSectionPropsType,
  type CommonSectionPropsType,
  type ImageCardsWithContentSectionPropsType,
  type ListSectionPropsType,
  type PartnersSectionPropsType,
  type PlanPropsType,
  type WebsitePlusMobileSectionPropsType,
} from "@components";

import { HomeContent, PlanContent } from "@data";

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
        <BigCards
          {...(HomeContent.bigCardsSection as BigCardsSectionPropsType)}
        />
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
      <AccordionSection
        {...(HomeContent.accordionSection as AccordionSectionPropsType)}
      />
      <BannerSection
        {...(HomeContent.bannerSection as BannerSectionPropsType)}
      />
    </main>
  );
}
