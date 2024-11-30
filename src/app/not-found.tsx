import {
  NotFound as NotFoundComponent,
  type NotFoundPropsType,
} from "@components";

import { NotFoundContent } from "@data";

export default function NotFound() {
  return <NotFoundComponent {...(NotFoundContent.hero as NotFoundPropsType)} />;
}
