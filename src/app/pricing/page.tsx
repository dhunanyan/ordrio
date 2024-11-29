import {
  Accordions,
  BannerSection,
  ComparePlans,
  CommonSection,
  Plan,
  type BannerSectionPropsType,
  type ComparePlansPropsType,
  type CommonSectionPropsType,
  type PlanPropsType,
  type AccordionsPropsType,
} from "@components";

import {
  PricingContent,
  PlanWithExtraContent,
  ComparePlansContent,
  AccordionsContent,
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
      <CommonSection
        {...(PricingContent.accordionSection as CommonSectionPropsType)}
      >
        <Accordions {...(AccordionsContent as AccordionsPropsType)} />
      </CommonSection>
      <BannerSection
        {...(PricingContent.bannerSection as BannerSectionPropsType)}
      />
    </main>
  );
}
