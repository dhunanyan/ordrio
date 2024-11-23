import { ComparePlans } from "@components/ComparePlan";
import { Hero, type HeroPropsType } from "@components/Hero";
import { Plan, type PlanPropsType } from "@components/Plan";
import { PricingContent, PlanWithExtraContent } from "@data";

export default function Page() {
  return (
    <main>
      <Hero {...(PricingContent.hero as HeroPropsType)}>
        <Plan {...(PlanWithExtraContent as PlanPropsType)} />
      </Hero>
      <ComparePlans />
    </main>
  );
}
