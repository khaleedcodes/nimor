import React from "react";
import { LucideIcon } from "lucide-react";

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
  className?: string;
};
type SectionHeaderProp = {
  children: React.ReactNode;
};
type ProjectCardProps = {
  projectImage: string;
  projectTitle: string;
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
  cardIcon: LucideIcon;
};
type SolutionCardProp = SolutionCardType;
type WebsiteType = {
  websiteTypeName: string;
};
type WordMarkProp = {
  classes: string;
};
type WebsiteItemProp = WebsiteType;
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
  WebsiteType,
  WebsiteItemProp,
  WordMarkProp,
};
