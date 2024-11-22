import { Hero, HeroPropsType } from "@components/Hero";
import { Plan, PlanPropsType } from "@components/Plan";
import { PricingContent } from "@data";
import { PlanContent } from "@data/Content";

export default function Page() {
  return (
    <main>
      <Hero {...(PricingContent.hero as HeroPropsType)}>
        <Plan {...(PlanContent as PlanPropsType)} />
      </Hero>
    </main>
  );
}
