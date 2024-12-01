import { Metadata } from "next";
import {
  BannerSection,
  CommonSection,
  IconCards,
  RowCardsWithBigCard,
  StepCards,
  type BannerSectionPropsType,
  type IconCardsPropsType,
  type CommonSectionPropsType,
  type RowCardsWithBigCardPropsType,
  type StepCardsPropsType,
} from "@components";

import { HtmlMeta, OrdrioShipContent } from "@data";

export const metadata: Metadata = HtmlMeta["ordrio-ship"];

export default function Page() {
  return (
    <main>
      <CommonSection {...(OrdrioShipContent.hero as CommonSectionPropsType)} />
      <CommonSection
        {...(OrdrioShipContent.commonSectionWithRowAndBigCards as CommonSectionPropsType)}
      >
        <RowCardsWithBigCard
          {...(OrdrioShipContent.rowAndBigCardsInCommonSection as RowCardsWithBigCardPropsType)}
        />
      </CommonSection>
      <CommonSection
        {...(OrdrioShipContent.iconCardsContent as CommonSectionPropsType)}
      >
        <IconCards {...(OrdrioShipContent.iconCards as IconCardsPropsType)} />
      </CommonSection>
      <CommonSection
        {...(OrdrioShipContent.stepCardsSection as CommonSectionPropsType)}
      >
        <StepCards {...(OrdrioShipContent.stepCards as StepCardsPropsType)} />
      </CommonSection>
      <BannerSection
        {...(OrdrioShipContent.bannerSection1 as BannerSectionPropsType)}
      />
    </main>
  );
}
