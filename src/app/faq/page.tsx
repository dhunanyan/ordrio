import { Metadata } from "next";
import {
  Accordions,
  BannerSection,
  CommonSection,
  type AccordionsPropsType,
  type BannerSectionPropsType,
  type CommonSectionPropsType,
} from "@components";

import { AccordionsContent, FaqContent, HtmlMeta } from "@data";

export const metadata: Metadata = HtmlMeta["faq"];

export default function Page() {
  return (
    <main>
      <CommonSection {...(FaqContent.hero as CommonSectionPropsType)}>
        <Accordions
          {...(AccordionsContent as AccordionsPropsType)}
          withButtons
        />
      </CommonSection>
      <BannerSection
        {...(FaqContent.bannerSection as BannerSectionPropsType)}
      />
    </main>
  );
}
