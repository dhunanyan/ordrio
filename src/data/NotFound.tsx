import { Separator } from "@config";

export const NotFoundContent = {
  hero: {
    title: "404",
    subtitle: "Oops... page not found.",
    description:
      "We don't know how you ended up here, but you should go away now",
    link: {
      text: "Go back",
      href: "/",
    },
    isFirstSection: true,
    separator: Separator.MEDIUM,
  },
};
