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
type SectionHeaderProp = {
  children: React.ReactNode;
};
type ProjectCardProps = {
  projectImage: string;
  projectTitle: string;
  overlayProjectDescription: string;
  link: string;
  technologies: string;
  linkName: string;
};
type ArrowProp = {
  toggleIsActive: () => void;
};
type FaqType = {
  question: string;
  answer: string;
};
type FaqItemProp = FaqType;
export type {
  PageLayoutProp,
  HamBurgerProps,
  LinkType,
  NavLinkProp,
  ButtonProp,
  ProjectCardProps,
  SectionHeaderProp,
  ArrowProp,
  FaqItemProp,
  FaqType,
};
