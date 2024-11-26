import {
  AccordionSection,
  BannerSection,
  ComparePlans,
  CommonSection,
  Plan,
  type AccordionSectionPropsType,
  type BannerSectionPropsType,
  type ComparePlansPropsType,
  type CommonSectionPropsType,
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
      <CommonSection {...(PricingContent.hero as CommonSectionPropsType)}>
        <Plan {...(PlanWithExtraContent as PlanPropsType)} />
      </CommonSection>
      <CommonSection
        {...(PricingContent.comparePlansSection as CommonSectionPropsType)}
      >
        <ComparePlans {...(ComparePlansContent as ComparePlansPropsType)} />
      </CommonSection>
      <AccordionSection
        {...(PricingContent.accordionSection as AccordionSectionPropsType)}
      />
      <BannerSection
        {...(PricingContent.bannerSection as BannerSectionPropsType)}
      />
    </main>
  );
}
