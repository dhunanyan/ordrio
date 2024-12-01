import { Metadata } from "next";
import { Compliance, type CompliancePropsType } from "@components";

import { HtmlMeta, PrivacyPolicyContent } from "@data";

export const metadata: Metadata = HtmlMeta["policies"];

export default function Page() {
  return <Compliance {...(PrivacyPolicyContent.hero as CompliancePropsType)} />;
}
