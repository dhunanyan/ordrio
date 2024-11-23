import {
  AccordionSection,
  BannerSection,
  ComparePlans,
  ComparePlansSection,
  Hero,
  Plan,
  type AccordionSectionPropsType,
  type BannerSectionPropsType,
  type ComparePlansPropsType,
  type ComparePlansSectionPropsType,
  type HeroPropsType,
  type PlanPropsType,
} from "@components";

import {
  PricingContent,
  PlanWithExtraContent,
  ComparePlansContent,
} from "@data";

export default function Page() {
  return (
    <main>
      <Hero {...(PricingContent.hero as HeroPropsType)}>
        <Plan {...(PlanWithExtraContent as PlanPropsType)} />
      </Hero>
      <ComparePlansSection
        {...(PricingContent.comparePlansSection as ComparePlansSectionPropsType)}
      >
        <ComparePlans {...(ComparePlansContent as ComparePlansPropsType)} />
      </ComparePlansSection>
      <AccordionSection
        {...(PricingContent.accordionSection as AccordionSectionPropsType)}
      />
      <BannerSection
        {...(PricingContent.bannerSection as BannerSectionPropsType)}
      />
    </main>
  );
}
