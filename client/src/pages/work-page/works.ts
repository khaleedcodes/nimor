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
  industry:
    | "startup"
    | "restaurant"
    | "repair"
    | "cleaning"
    | "landscaping"
    | "pet care";
  service: "redesign" | "seo" | "web development";

  overview?: string;
  duration?: string;
  teamSize?: string;
  platform?: string;
  role?: string;
  goals?: string[];
  challenges?: string[];
  techStack?: Array<{
    name: string;
    category: string;
    icon: string;
  }>;
  results?: {
    metric1?: string;
    metric2?: string;
    metric3?: string;
    metric4?: string;
  };
  testimonial?: string;
  client?: {
    name: string;
    title: string;
  };
  colorPalette?: Array<{
    color: string;
    hex: string;
  }>;
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
    overview:
      "True North Yard needed a clean and trustworthy digital presence for landscaping and seasonal services. We focused on professional appeal and local search optimization.",
    duration: "6 weeks",
    teamSize: "2 developers, 1 designer",
    platform: "React, TailwindCSS, Netlify",
    role: "Full Stack Development",
    goals: [
      "Establish professional online presence",
      "Generate qualified leads for landscaping services",
      "Showcase portfolio of completed projects",
      "Improve local SEO rankings",
    ],
    challenges: [
      "Seasonal business variations",
      "Competing with established local businesses",
      "Building trust with new customers",
      "Mobile-first user experience",
    ],
    techStack: [
      { name: "React", category: "Frontend Framework", icon: "fab fa-react" },
      {
        name: "TailwindCSS",
        category: "Styling Framework",
        icon: "fab fa-css3-alt",
      },
      { name: "Framer Motion", category: "Animations", icon: "fas fa-bolt" },
      { name: "Netlify", category: "Deployment", icon: "fas fa-cloud" },
    ],
    results: {
      metric1: "150%",
      metric2: "2.5s",
      metric3: "95%",
      metric4: "200%",
    },
    testimonial:
      "The new website has completely transformed our business. We're getting more quality leads than ever before.",
    client: {
      name: "Sarah Johnson",
      title: "Owner, True North Yard",
    },
    colorPalette: [
      { color: "bg-green-600", hex: "#059669" },
      { color: "bg-emerald-500", hex: "#10B981" },
      { color: "bg-slate-800", hex: "#1E293B" },
      { color: "bg-amber-500", hex: "#F59E0B" },
    ],
  },
  {
    id: "pawtastic_pets",
    title: "Pawtastic Pets",
    subtitle: "Pet Care & Accessories E‑Commerce",
    description:
      "A playful e-commerce front for Pawtastic Pets, featuring pet care tips and an initial shop layout for accessories.",
    image: pawtastic,
    categories: ["E-Commerce", "UX/UI"],
    liveUrl: "https://pawtasticpets.netlify.app/",
    color: "red",
    industry: "pet care",
    service: "redesign",
    year: "2025",
    overview:
      "Pawtastic Pets needed a vibrant and engaging e-commerce platform for pet owners. Our redesign focused on playful UX, clean navigation, and product accessibility.",
    duration: "5 weeks",
    teamSize: "1 developer, 1 designer",
    platform: "React, TailwindCSS, Netlify",
    role: "Frontend Development",
    goals: [
      "Create a fun and engaging online store",
      "Build trust through friendly branding",
      "Simplify product discovery and purchase flow",
      "Enable responsive shopping experience",
    ],
    challenges: [
      "Playful yet professional design balance",
      "First-time visitor conversion",
      "Device compatibility",
      "Inventory display and filtering",
    ],
    techStack: [
      { name: "React", category: "Frontend Framework", icon: "fab fa-react" },
      {
        name: "TailwindCSS",
        category: "Styling Framework",
        icon: "fab fa-css3-alt",
      },
      { name: "Framer Motion", category: "Animations", icon: "fas fa-bolt" },
      { name: "Netlify", category: "Deployment", icon: "fas fa-cloud" },
    ],
    results: {
      metric1: "120%",
      metric2: "2.1s",
      metric3: "92%",
      metric4: "170%",
    },
    testimonial:
      "Our customers love how easy and fun our site is now. Sales improved, and it truly represents our brand!",
    client: {
      name: "Maya Torres",
      title: "Founder, Pawtastic Pets",
    },
    colorPalette: [
      { color: "bg-pink-500", hex: "#EC4899" },
      { color: "bg-yellow-400", hex: "#FACC15" },
      { color: "bg-white", hex: "#FFFFFF" },
      { color: "bg-rose-600", hex: "#E11D48" },
    ],
  },
  {
    id: "bundlebit",
    title: "BundleBit",
    subtitle: "Productivity Tool for Content Creators",
    description:
      "A modern landing page for BundleBit, highlighting features for content creators, subscription tiers, and signup flow.",
    image: bundlebit,
    categories: ["Landing Page", "UX/UI"],
    liveUrl: "https://bundlebit.me/",
    color: "cyan",
    industry: "startup",
    service: "web development",
    year: "2025",
    overview:
      "BundleBit was designed to attract content creators seeking productivity tools. The landing page focuses on feature explanation and CTA clarity.",
    duration: "4 weeks",
    teamSize: "Solo project",
    platform: "React, TailwindCSS, Netlify",
    role: "Frontend Dev & Designer",
    goals: [
      "Communicate product value quickly",
      "Convert visitors into trial users",
      "Visualize pricing and plans clearly",
    ],
    challenges: [
      "Balancing feature-rich layout with simplicity",
      "Appealing to a broad creator audience",
      "Smooth mobile animations",
    ],
    techStack: [
      { name: "React", category: "Frontend Framework", icon: "fab fa-react" },
      {
        name: "TailwindCSS",
        category: "Styling Framework",
        icon: "fab fa-css3-alt",
      },
      { name: "Framer Motion", category: "Animations", icon: "fas fa-bolt" },
      { name: "Netlify", category: "Deployment", icon: "fas fa-cloud" },
    ],
    results: {
      metric1: "80%",
      metric2: "2s",
      metric3: "96%",
      metric4: "110%",
    },
    testimonial:
      "Exactly what I needed to launch my MVP! It looks clean and converts well.",
    client: {
      name: "Alex Chen",
      title: "Founder, BundleBit",
    },
    colorPalette: [
      { color: "bg-cyan-600", hex: "#0891B2" },
      { color: "bg-white", hex: "#FFFFFF" },
      { color: "bg-gray-900", hex: "#111827" },
      { color: "bg-purple-400", hex: "#A78BFA" },
    ],
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
    overview:
      "MapleFix wanted to emphasize trust and eco-conscious branding. We designed a forest-themed platform with clear services and credibility.",
    duration: "5 weeks",
    teamSize: "2 devs",
    platform: "React, TailwindCSS, Netlify",
    role: "Frontend Dev",
    goals: [
      "Eco-conscious design",
      "Showcase repair services and reliability",
      "Simplify customer inquiries",
    ],
    challenges: [
      "Forest-inspired theme without overwhelming",
      "Simple contact flow",
      "Highlight local expertise",
    ],
    techStack: [
      { name: "React", category: "Frontend Framework", icon: "fab fa-react" },
      {
        name: "TailwindCSS",
        category: "Styling Framework",
        icon: "fab fa-css3-alt",
      },
      { name: "Framer Motion", category: "Animations", icon: "fas fa-bolt" },
      { name: "Netlify", category: "Deployment", icon: "fas fa-cloud" },
    ],
    results: {
      metric1: "140%",
      metric2: "2.2s",
      metric3: "93%",
      metric4: "180%",
    },
    testimonial:
      "The site reflects our values. Clients feel more confident now.",
    client: {
      name: "James Ford",
      title: "Lead Technician, MapleFix",
    },
    colorPalette: [
      { color: "bg-green-700", hex: "#047857" },
      { color: "bg-lime-400", hex: "#A3E635" },
      { color: "bg-white", hex: "#FFFFFF" },
      { color: "bg-stone-600", hex: "#78716C" },
    ],
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
    overview:
      "EcoGlow wanted a site that emphasized its commitment to eco-friendly practices while providing a modern, easy-to-navigate interface for clients to learn more about services and book cleanings online.",
    duration: "3 weeks",
    teamSize: "1 developer",
    platform: "React, TailwindCSS, Netlify",
    role: "Full Stack Developer",
    goals: [
      "Establish an eco-conscious visual identity",
      "Enable online bookings and service inquiries",
      "Build trust through clean design and testimonials",
      "Improve local visibility on search engines",
    ],
    challenges: [
      "Conveying sustainability in design without clutter",
      "Simplifying booking and contact process",
      "SEO optimization for service areas",
    ],
    techStack: [
      { name: "React", category: "Frontend Framework", icon: "fab fa-react" },
      {
        name: "TailwindCSS",
        category: "Styling Framework",
        icon: "fab fa-css3-alt",
      },
      { name: "Framer Motion", category: "Animations", icon: "fas fa-bolt" },
      { name: "Netlify", category: "Deployment", icon: "fas fa-cloud" },
    ],
    results: {
      metric1: "110%",
      metric2: "1.9s",
      metric3: "97%",
      metric4: "150%",
    },
    testimonial:
      "Our clients love how easy it is to find and book our services online. The eco-friendly vibe shines through!",
    client: {
      name: "Aisha Patel",
      title: "Founder, EcoGlow Cleaning",
    },
    colorPalette: [
      { color: "bg-blue-600", hex: "#2563EB" },
      { color: "bg-sky-400", hex: "#38BDF8" },
      { color: "bg-white", hex: "#FFFFFF" },
      { color: "bg-green-300", hex: "#86EFAC" },
    ],
  },
  {
    id: "ember_dining",
    title: "Ember Dining",
    subtitle: "Cozy Restaurant Site with Menu & Reservations",
    description:
      "A warm, responsive website featuring the Ember Dining brand, showcasing menu items and online reservation forms.",
    image: ember,
    categories: ["Web Design", "Responsive", "UX/UI"],
    liveUrl: "https://emberdining.netlify.app/",
    color: "orange",
    industry: "restaurant",
    service: "seo",
    year: "2023",
    overview:
      "Ember Dining needed a cozy and elegant website that matched its ambiance and allowed customers to browse menus and book tables with ease. We focused on earthy tones, elegant typography, and conversion-optimized UX.",
    duration: "4 weeks",
    teamSize: "2 developers",
    platform: "React, TailwindCSS, Netlify",
    role: "Frontend Dev + SEO",
    goals: [
      "Provide smooth mobile/tablet experience",
      "Improve reservation flow",
      "Showcase full menu and gallery",
      "Boost SEO for local restaurant searches",
    ],
    challenges: [
      "Balancing elegance with performance",
      "SEO-optimized restaurant schema markup",
      "Visual hierarchy for menu vs. ambiance",
    ],
    techStack: [
      { name: "React", category: "Frontend Framework", icon: "fab fa-react" },
      {
        name: "TailwindCSS",
        category: "Styling Framework",
        icon: "fab fa-css3-alt",
      },
      { name: "Framer Motion", category: "Animations", icon: "fas fa-bolt" },
      { name: "Netlify", category: "Deployment", icon: "fas fa-cloud" },
    ],
    results: {
      metric1: "180%",
      metric2: "1.7s",
      metric3: "99%",
      metric4: "210%",
    },
    testimonial:
      "Guests often say they booked because the website made it feel like the restaurant was already welcoming them in.",
    client: {
      name: "Marcus Levin",
      title: "Head Chef, Ember Dining",
    },
    colorPalette: [
      { color: "bg-orange-600", hex: "#EA580C" },
      { color: "bg-yellow-400", hex: "#FACC15" },
      { color: "bg-stone-900", hex: "#1C1917" },
      { color: "bg-white", hex: "#FFFFFF" },
    ],
  },
];
