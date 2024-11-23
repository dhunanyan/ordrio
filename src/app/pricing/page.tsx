import {
  AccordionSection,
  AccordionSectionPropsType,
} from "@components/AccordionSection";
import {
  BannerSection,
  BannerSectionPropsType,
} from "@components/BannerSection";
import {
  ComparePlans,
  type ComparePlansPropsType,
} from "@components/ComparePlans";
import {
  ComparePlansSection,
  type ComparePlanSectionPropsType,
} from "@components/ComparePlansSection";
import { Hero, type HeroPropsType } from "@components/Hero";
import { Plan, type PlanPropsType } from "@components/Plan";

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
        {...(PricingContent.comparePlansSection as ComparePlanSectionPropsType)}
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
