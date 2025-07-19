import { LucideIcon } from "lucide-react";

export type Capability = {
  title: string;
  description: string;
};

export type CaseStudy = {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
};

export type Testimonial = {
  quote: string;
  avatar: string;
  author: string;
  role: string;
  company: string;
};

export type Benefit = {
  title: string;
  description: string;
  icon: string; // still string since these are icon names (like "ph-paint-brush")
};

export type Stat = {
  label: string;
  value: string;
  description: string;
};

export type TeamMember = {
  name: string;
  role: string;
  description: string;
  avatar: string;
};

export type Tool = {
  name: string;
  icon: string; // like "devicon-react"
};

export type RelatedService = {
  id: string;
  title: string;
  description: string;
  icon: string; // like "ph-lightbulb"
};

export type CTA = {
  heading: string;
  subheading: string;
  buttonText: string;
  link: string;
};

export type ServiceDetail = {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: LucideIcon;
  iconBgColor: string;
  iconColor: string;
  hoverShadowColor: string;
  ctaColor: string;
  bgColor: string;
  heroDescription: string;
  clients: string[];
  capabilities: Capability[];
  caseStudies: CaseStudy[];
  testimonial: Testimonial;
  benefits: Benefit[];
  stats: Stat[];
  teamMembers: TeamMember[];
  tools: Tool[];
  relatedServices: RelatedService[];
  cta: CTA;
};


