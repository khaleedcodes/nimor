import trueNorth from "../../assets/images/websites/truenorth.png";
import bundlebit from "../../assets/images/websites/bundlebit.png";
import ecoglow from "../../assets/images/websites/ecoglow.png";
import ember from "../../assets/images/websites/ember.png";
import maplefix from "../../assets/images/websites/maplefix.png";
import pawtastic from "../../assets/images/websites/pawtastic.png";

export interface Work {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  categories: string[];
  year?: string;
  featured?: boolean;
  liveUrl?: string;
  color?: string;

  // New fields for filtering
  industry:
    | "startup"
    | "restaurant"
    | "repair"
    | "cleaning"
    | "landscaping"
    | "pet care";
  service: "redesign" | "seo" | "web development";
}

export const categories = [
  "All Projects",
  "Consultation & Audit",
  "SEO",
  "Branding",
  "Web Development",
  "Web Design",
  "UX/UI",
];
export interface Work {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  categories: string[];
  year?: string;
  featured?: boolean;
  liveUrl?: string;
  color?: string;
}
export const works: Work[] = [
  {
    id: "true_north_yard",
    title: "True North Yard",
    subtitle: "Landscape & Yard Maintenance Services",
    description:
      "A professional site for True North Yard, highlighting services like landscaping, lawn care, and seasonal maintenance.",
    image: trueNorth,
    categories: ["Branding", "Web Design"],
    liveUrl: "https://truenorthyard.netlify.app/",
    color: "purple",
    industry: "landscaping",
    service: "web development",
    year: "2025",
  },
  {
    id: "pawtastic_pets",
    title: "Pawtastic Pets",
    subtitle: "Pet Care & Accessories E‑Commerce",
    description:
      "A playful e-commerce front for Pawtastic Pets, featuring pet care tips and an initial shop layout for accessories.",
    image: pawtastic,
    categories: ["E-Commerce", "UX/UI"],
    year: "2025",
    liveUrl: "https://pawtasticpets.netlify.app/",
    color: "red",
    industry: "pet care",
    service: "redesign",
  },
  {
    id: "bundlebit",
    title: "BundleBit",
    subtitle: "Productivity Tool for Content Creators",
    description:
      "A modern landing page for BundleBit, highlighting features for content creators, subscription tiers, and signup flow.",
    image: bundlebit,
    categories: ["Landing Page", "UX/UI"],
    featured: true,
    liveUrl: "https://bundlebit.me/",
    color: "cyan",
    industry: "startup",
    service: "web development",
    year: "2025",
  },
  {
    id: "maplefix",
    title: "MapleFix",
    subtitle: "Forest-Inspired Repair Services Platform",
    description:
      "A nature-themed site for MapleFix repair services, displaying offerings, team, and contact information.",
    image: maplefix,
    categories: ["Branding", "Web Design", "UX/UI"],
    liveUrl: "https://maplefix.netlify.app/",
    color: "green",
    industry: "repair",
    service: "web development",
    year: "2025",
  },
  {
    id: "ecoglow_cleaning",
    title: "EcoGlow Cleaning",
    subtitle: "Eco-Friendly Home & Office Cleaning",
    description:
      "A clean, modern site for EcoGlow, showcasing their environmentally responsible cleaning services, packages, and contact forms.",
    image: ecoglow,
    categories: ["Web Design", "Responsive", "Branding"],
    liveUrl: "https://ecoglowcleaning.netlify.app/",
    color: "blue",
    industry: "cleaning",
    service: "web development",
    year: "2025",
  },

  {
    id: "ember_dining",
    title: "Ember Dining",
    subtitle: "Cozy Restaurant Site with Menu & Reservations",
    description:
      "A warm, responsive website featuring the Ember Dining brand, showcasing menu items and online reservation forms.",
    image: ember,
    categories: ["Web Design", "Responsive", "UX/UI"],
    year: "2023",
    featured: true,
    liveUrl: "https://emberdining.netlify.app/",
    color: "orange",
    industry: "restaurant",
    service: "seo",
  },
];
