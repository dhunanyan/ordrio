import { Metadata } from "next";
import { Compliance, type CompliancePropsType } from "@components";

import { HtmlMeta, TermsAndConditionsContent } from "@data";

export const metadata: Metadata = HtmlMeta["terms-and-conditions"];

export default function Page() {
  return (
    <Compliance {...(TermsAndConditionsContent.hero as CompliancePropsType)} />
  );
}
