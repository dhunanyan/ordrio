import { Compliance, type CompliancePropsType } from "@components";

import { TermsAndConditionsContent } from "@data";

export default function Page() {
  return (
    <Compliance {...(TermsAndConditionsContent.hero as CompliancePropsType)} />
  );
}
