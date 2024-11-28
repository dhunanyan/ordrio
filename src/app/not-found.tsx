import { CommonSection, type CommonSectionPropsType } from "@components";

import { NotFoundContent } from "@data";

export default function NotFound() {
  return (
    <CommonSection {...(NotFoundContent.hero as CommonSectionPropsType)} />
  );
}
