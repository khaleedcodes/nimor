import React from "react";

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
  classes? : string;
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
  isActive: boolean;
};
type FaqType = {
  question: string;
  answer: string;
};
type FaqItemProp = FaqType;
type SolutionCardType = {
  problem: string;
  solution: string;
  cardIcon?: React.FC;
  cardImage?: string;
};
type SolutionCardProp = SolutionCardType;
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
  SolutionCardType,
  SolutionCardProp,
};
