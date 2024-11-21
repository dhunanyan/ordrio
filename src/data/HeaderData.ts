export enum NavItemType {
  LINK = "link",
  BUTTON = "button",
}

export const HeaderData = {
  links: [
    {
      text: "Why Ordrio",
      id: "why-ordrio",
      type: NavItemType.BUTTON,
    },
    {
      text: "Pricing",
      id: "pricing",
      type: NavItemType.LINK,
    },
    {
      text: "Integrations",
      id: "integrations",
      type: NavItemType.LINK,
    },
    {
      text: "Resources",
      id: "resources",
      type: NavItemType.BUTTON,
    },
  ],
  buttons: [
    {
      text: "Login",
      id: "login",
    },
    {
      text: "Sign up for Free",
      id: "sign-up",
    },
  ],
};
