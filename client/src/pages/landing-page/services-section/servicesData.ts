import { Heart, BarChart3, Settings, RefreshCcw } from "lucide-react";
import type { Service } from "./types";

export const services: Service[] = [
  {
    id: "design",
    title: "Website Design & Development",
    description:
      "We design and build custom, responsive websites that reflect your brand and engage your audience with intuitive digital experiences.",
    icon: Heart,
    iconBgColor: "bg-card-bg group-hover:bg-first-accent/20",
    iconColor: "text-first-accent",
    hoverShadowColor: "hover:shadow-first-accent/20",
    ctaColor: "text-first-accent group-hover:text-first-accent/80",
    bgColor: "bg-pink-50",
  },
  {
    id: "redesign",
    title: "Website Redesign",
    description:
      "Refresh your site with a modern look and improved performance, enhanced user experience, updated branding, and seamless mobile responsiveness.",
    icon: RefreshCcw,
    iconBgColor: "bg-card-bg group-hover:bg-first-accent/20",
    iconColor: "text-first-accent",
    hoverShadowColor: "hover:shadow-first-accent/20",
    ctaColor: "text-first-accent group-hover:text-first-accent/80",
    bgColor: "bg-yellow-50",
  },
  {
    id: "seo",
    title: "SEO & Analytics",
    description:
      "Improve your search rankings and use data-driven insights to continually optimize your website's effectiveness.",
    icon: BarChart3,
    iconBgColor: "bg-card-bg group-hover:bg-first-accent/20",
    iconColor: "text-first-accent",
    hoverShadowColor: "hover:shadow-first-accent/20",
    ctaColor: "text-first-accent group-hover:text-first-accent/80",
    bgColor: "bg-green-50",
  },
  {
    id: "support",
    title: "Support & Maintenance",
    description:
      "Ongoing updates, security, and new features to keep your website fresh, functional, and aligned with your evolving business needs.",
    icon: Settings,
    iconBgColor: "bg-card-bg group-hover:bg-first-accent/20",
    iconColor: "text-first-accent",
    hoverShadowColor: "hover:shadow-first-accent/20",
    ctaColor: "text-first-accent group-hover:text-first-accent/80",
    bgColor: "bg-indigo-50",
  },
];
