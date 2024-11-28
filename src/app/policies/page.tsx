import { Compliance, type CompliancePropsType } from "@components";

import { PrivacyPolicyContent } from "@data";

export default function Page() {
  return <Compliance {...(PrivacyPolicyContent.hero as CompliancePropsType)} />;
}
