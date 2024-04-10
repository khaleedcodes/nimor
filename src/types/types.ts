type PageLayoutProp = {
  children: React.ReactNode;
};
type HamBurgerProps = {
  onClick: () => void;
};
type LinkType = {
  type: "anchor" | "router";
  linkName: string;
  link: string;
};
type NavLinkProp = LinkType;
type ButtonProp = {
  children: React.ReactNode;
};
export type {
  PageLayoutProp,
  HamBurgerProps,
  LinkType,
  NavLinkProp,
  ButtonProp,
};
