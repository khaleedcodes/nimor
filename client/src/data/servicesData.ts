import { ServiceDetail } from "@/types/service-type";
import { BarChart3, Heart, RefreshCcw, Settings } from "lucide-react";

export const services: ServiceDetail[] = [
  {
    id: "web-design",
    title: "Website Design & Development",
    shortTitle: "Web design",
    description:
      "We design and build custom, responsive websites that reflect your brand and engage your audience with intuitive digital experiences.",
    icon: Heart,
    iconBgColor: "bg-card-bg group-hover:bg-first-accent/20",
    iconColor: "text-first-accent",
    hoverShadowColor: "hover:shadow-first-accent/20",
    ctaColor: "text-first-accent group-hover:text-first-accent/80",
    bgColor: "bg-pink-50",
    heroDescription: "We design user‑centered websites that blend UI/UX expertise, strategic SEO, and refined visual storytelling—delivering high-performance platforms built around your brand’s vision.",
    clients: [
      "True North Yard",
      "EcoGlow",
      "BundleBit",
      "MapleFix",
      "Pawtastic",
      "Ember",
    ],
    capabilities: [
      {
        title: "Custom Web Design",
        description:
          "Bespoke designs crafted to reflect your brand’s identity and values.",
      },
      {
        title: "Responsive Layouts",
        description:
          "Flawless experiences across all devices, from mobile to desktop.",
      },
      {
        title: "SEO Optimization",
        description:
          "Structure and code optimized to help your site get discovered on search engines.",
      },
      {
        title: "CMS Integration",
        description:
          "Easily manage and update your content through powerful CMS platforms.",
      },
      {
        title: "Performance Tuning",
        description: "Sites built with speed and efficiency in mind.",
      },
      {
        title: "Accessibility",
        description: "Inclusive design that ensures access for all users.",
      },
    ],
    caseStudies: [
      {
        id: "true_north_yard",
        title: "True North Yard",
        description:
          "A bold, modern design to help a landscaping company stand out online.",
        image: "https://picsum.photos/200/300",
        link: "/work/true_north_yard",
      },
      {
        id: "ecoglow_cleaning",
        title: "EcoGlow Cleaning",
        description: "Clean design for a cleaning company – no pun intended.",
        image: "https://picsum.photos/200/300",
        link: "/work/ecoglow_cleaning",
      },
    ],
    testimonial: {
      quote:
        "They brought our vision to life with a clean, modern website that truly represents us.",
      avatar: "https://picsum.photos/200/300",
      author: "Jessica L.",
      role: "Founder",
      company: "EcoGlow Cleaning",
    },
    benefits: [
      {
        title: "Tailored UI/UX",
        description:
          "Custom designs that truly align with your brand personality.",
        icon: "ph-paint-brush",
      },
      {
        title: "Mobile First",
        description: "Responsive layouts built to look amazing on any device.",
        icon: "ph-device-mobile",
      },
      {
        title: "SEO Friendly",
        description: "We bake SEO into the foundation of your site.",
        icon: "ph-magnifying-glass",
      },
    ],
    stats: [
      {
        label: "Avg Load Time",
        value: "1.2s",
        description: "Lightning-fast performance for better UX.",
      },
      {
        label: "Bounce Rate Reduction",
        value: "40%",
        description: "Users stay longer thanks to improved design.",
      },
      {
        label: "Client Satisfaction",
        value: "98%",
        description: "Nearly all clients rate us 5-stars post-launch.",
      },
    ],
    teamMembers: [
      {
        name: "Khaleed Opeloyeru",
        role: "Creative Director",
        description: "Heads up visual strategy and client branding.",
        avatar: "https://picsum.photos/200/300",
      },
      {
        name: "Dikshya B.",
        role: "Frontend Engineer",
        description: "Brings designs to life with pixel-perfect React builds.",
        avatar: "https://picsum.photos/200/300",
      },
      {
        name: "Alex Chen",
        role: "Project Manager",
        description: "Ensures timelines, scope, and goals stay aligned.",
        avatar: "https://picsum.photos/200/300",
      },
    ],
    tools: [
      { name: "Figma", icon: "devicon-figma" },
      { name: "Vite", icon: "devicon-vitejs" },
      { name: "React", icon: "devicon-react" },
      { name: "TailwindCSS", icon: "devicon-tailwindcss" },
    ],
    relatedServices: [
      {
        id: "branding",
        title: "Brand Strategy",
        description: "Create cohesive brand visuals and tone.",
        icon: "ph-lightbulb",
      },
      {
        id: "seo",
        title: "SEO Strategy",
        description: "Drive organic traffic with proven SEO techniques.",
        icon: "ph-graph",
      },
    ],
    cta: {
      heading: "Ready to elevate your online presence?",
      subheading: "Let’s build something incredible together.",
      buttonText: "Get Started",
      link: "/contact",
    },
  },
  {
    id: "web-redesign",
    title: "Website Redesign",
    shortTitle: "Site Redesign",
    description:
      "Refresh your site with a modern look and improved performance, enhanced user experience, updated branding, and seamless mobile responsiveness.",
    icon: RefreshCcw,
    iconBgColor: "bg-card-bg group-hover:bg-first-accent/20",
    iconColor: "text-first-accent",
    hoverShadowColor: "hover:shadow-first-accent/20",
    ctaColor: "text-first-accent group-hover:text-first-accent/80",
    bgColor: "bg-yellow-50",
    heroDescription: "Revamp. Rebrand. Relaunch.",
    clients: ["MapleFix", "Ember", "BundleBit"],
    capabilities: [
      {
        title: "UI/UX Revamp",
        description:
          "Modern interfaces designed for conversion and engagement.",
      },
      {
        title: "Brand Refresh",
        description: "Updated visuals that reflect your evolved identity.",
      },
      {
        title: "Improved Performance",
        description: "Faster load times and optimized site structure.",
      },
      {
        title: "Content Strategy",
        description: "Refined messaging and visuals for better clarity.",
      },
      {
        title: "Mobile Optimization",
        description: "Seamless experiences across all screen sizes.",
      },
    ],
    caseStudies: [
      {
        id: "maplefix",
        title: "MapleFix",
        description: "A full redesign focused on clarity and conversion.",
        image: "https://picsum.photos/200/300?1",
        link: "/work/maplefix",
      },
      {
        id: "ember_dining",
        title: "Ember Dining",
        description:
          "We modernized a restaurant website with smooth transitions and bold visuals.",
        image: "https://picsum.photos/200/300?2",
        link: "/work/ember_dining",
      },
    ],
    testimonial: {
      quote:
        "They transformed our outdated website into a sleek, modern experience our customers love.",
      avatar: "https://picsum.photos/200/300?3",
      author: "Marco R.",
      role: "Operations Lead",
      company: "MapleFix",
    },
    benefits: [
      {
        title: "Higher Engagement",
        description: "Visitors interact more with clean, modern design.",
        icon: "ph-trend-up",
      },
      {
        title: "Stronger Branding",
        description: "A fresh look that tells your story clearly.",
        icon: "ph-palette",
      },
      {
        title: "Conversion Focused",
        description: "Redesigns built to guide users to action.",
        icon: "ph-target",
      },
    ],
    stats: [
      {
        label: "Conversion Boost",
        value: "2.1x",
        description: "More leads after the redesign rollout.",
      },
      {
        label: "Avg Session Time",
        value: "3.5 min",
        description: "Visitors stayed longer and explored more.",
      },
      {
        label: "Design Approval",
        value: "100%",
        description: "Every client loved the refreshed UI.",
      },
    ],
    teamMembers: [
      {
        name: "Khaleed Opeloyeru",
        role: "Lead Designer",
        description: "Handles redesign strategy and new UI systems.",
        avatar: "https://picsum.photos/200/300?4",
      },
      {
        name: "Dikshya B.",
        role: "Frontend Developer",
        description: "Implements redesigns with responsive builds.",
        avatar: "https://picsum.photos/200/300?5",
      },
    ],
    tools: [
      { name: "Figma", icon: "devicon-figma" },
      { name: "Next.js", icon: "devicon-nextjs" },
      { name: "TailwindCSS", icon: "devicon-tailwindcss" },
    ],
    relatedServices: [
      {
        id: "branding",
        title: "Brand Identity",
        description: "Create a fresh look with purpose.",
        icon: "ph-identification-card",
      },
      {
        id: "support",
        title: "Ongoing Maintenance",
        description: "Keep your newly redesigned site running smoothly.",
        icon: "ph-lifebuoy",
      },
    ],
    cta: {
      heading: "Outgrown your old site?",
      subheading: "Let’s reimagine your digital presence.",
      buttonText: "Start Your Redesign",
      link: "/contact",
    },
  },
  {
    id: "seo-analytics",
    title: "SEO & Analytics",
    shortTitle: "SEO + Analytics",
    description:
      "Improve your search rankings and use data-driven insights to continually optimize your website's effectiveness.",
    icon: BarChart3,
    iconBgColor: "bg-card-bg group-hover:bg-first-accent/20",
    iconColor: "text-first-accent",
    hoverShadowColor: "hover:shadow-first-accent/20",
    ctaColor: "text-first-accent group-hover:text-first-accent/80",
    bgColor: "bg-green-50",
    heroDescription: "Be found. Stay optimized.",
    clients: ["True North Yard", "EcoGlow"],
    capabilities: [
      {
        title: "On-Page SEO",
        description: "Keywords, headings, and structure optimized for search.",
      },
      {
        title: "Technical SEO",
        description:
          "Improve crawlability, indexing, and site health with audits and fixes.",
      },
      {
        title: "Performance Monitoring",
        description:
          "Use real data to track behavior, bounce rate, and conversions.",
      },
      {
        title: "Google Analytics Setup",
        description: "Measure key KPIs with GA4 + custom dashboards.",
      },
      {
        title: "Content Strategy",
        description: "SEO-friendly copy that ranks and converts.",
      },
    ],
    caseStudies: [
      {
        id: "ecoglow_cleaning",
        title: "EcoGlow Cleaning",
        description:
          "SEO optimization helped increase organic traffic by 120%.",
        image: "https://picsum.photos/200/300?6",
        link: "/work/ecoglow_cleaning",
      },
      {
        id: "true_north_yard",
        title: "True North Yard",
        description: "Local SEO helped dominate neighborhood search rankings.",
        image: "https://picsum.photos/200/300?7",
        link: "/work/true_north_yard",
      },
    ],
    testimonial: {
      quote:
        "Our traffic nearly doubled after implementing their SEO strategy and analytics tracking.",
      avatar: "https://picsum.photos/200/300?8",
      author: "Lucas K.",
      role: "Marketing Manager",
      company: "EcoGlow Cleaning",
    },
    benefits: [
      {
        title: "Higher Visibility",
        description: "Rank better on Google and get discovered.",
        icon: "ph-graph",
      },
      {
        title: "Real-Time Insights",
        description: "Know what's working and what needs fixing.",
        icon: "ph-chart-bar",
      },
      {
        title: "More Conversions",
        description: "Traffic with intent leads to action.",
        icon: "ph-check-circle",
      },
    ],
    stats: [
      {
        label: "Organic Traffic Growth",
        value: "120%",
        description: "After 3 months of SEO implementation.",
      },
      {
        label: "Bounce Rate Drop",
        value: "35%",
        description: "Users are staying longer.",
      },
      {
        label: "Page Speed Increase",
        value: "1.8x",
        description: "Boosted Core Web Vitals.",
      },
    ],
    teamMembers: [
      {
        name: "Khaleed Opeloyeru",
        role: "SEO Strategist",
        description: "Leads SEO audits and analytics setup.",
        avatar: "https://picsum.photos/200/300?9",
      },
      {
        name: "Alex Chen",
        role: "Data Analyst",
        description: "Handles dashboards and performance reporting.",
        avatar: "https://picsum.photos/200/300?10",
      },
    ],
    tools: [
      { name: "Google Analytics", icon: "devicon-google" },
      { name: "Semrush", icon: "devicon-semrush" },
      { name: "Next.js", icon: "devicon-nextjs" },
    ],
    relatedServices: [
      {
        id: "design",
        title: "Web Design",
        description: "Optimize SEO from the start with smart layouts.",
        icon: "ph-layout",
      },
      {
        id: "support",
        title: "Ongoing Support",
        description: "Continual improvements post-launch.",
        icon: "ph-recycle",
      },
    ],
    cta: {
      heading: "Want to rank higher?",
      subheading: "Let’s drive more traffic and track what matters.",
      buttonText: "Start Optimizing",
      link: "/contact",
    },
  },
  {
    id: "support-maintenance",
    title: "Support & Maintenance",
    shortTitle: "Support",
    description:
      "Ongoing updates, security, and new features to keep your website fresh, functional, and aligned with your evolving business needs.",
    icon: Settings,
    iconBgColor: "bg-card-bg group-hover:bg-first-accent/20",
    iconColor: "text-first-accent",
    hoverShadowColor: "hover:shadow-first-accent/20",
    ctaColor: "text-first-accent group-hover:text-first-accent/80",
    bgColor: "bg-indigo-50",
    heroDescription: "Stay secure. Stay scalable.",
    clients: ["BundleBit", "Pawtastic"],
    capabilities: [
      {
        title: "Routine Updates",
        description: "Keep plugins, packages, and core systems up to date.",
      },
      {
        title: "Uptime Monitoring",
        description: "Real-time alerts to catch issues early.",
      },
      {
        title: "Bug Fixes",
        description: "Quick response to site issues and regressions.",
      },
      {
        title: "Feature Enhancements",
        description: "Add new capabilities as your business evolves.",
      },
      {
        title: "Security Patching",
        description: "Protect your site from vulnerabilities and threats.",
      },
    ],
    caseStudies: [
      {
        id: "bundlebit",
        title: "BundleBit",
        description:
          "We provide long-term maintenance and features to this e-comm client.",
        image: "https://picsum.photos/200/300?11",
        link: "/work/bundlebit",
      },
    ],
    testimonial: {
      quote:
        "It's like having our own dev team on call. They're fast, reliable, and proactive.",
      avatar: "https://picsum.photos/200/300?12",
      author: "Samantha D.",
      role: "Founder",
      company: "Pawtastic",
    },
    benefits: [
      {
        title: "Peace of Mind",
        description: "We handle tech so you can focus on business.",
        icon: "ph-shield-check",
      },
      {
        title: "Fewer Downtimes",
        description: "Monitoring helps prevent major site outages.",
        icon: "ph-clock-counter-clockwise",
      },
      {
        title: "Future-Proofed",
        description: "Always ready for your next big feature.",
        icon: "ph-sparkle",
      },
    ],
    stats: [
      {
        label: "Avg Response Time",
        value: "2h",
        description: "Quick fixes and proactive support.",
      },
      {
        label: "Downtime Reduction",
        value: "95%",
        description: "We monitor and act before it becomes a problem.",
      },
      {
        label: "Client Retention",
        value: "100%",
        description: "They stick with us for the long haul.",
      },
    ],
    teamMembers: [
      {
        name: "Khaleed Opeloyeru",
        role: "Lead Maintainer",
        description: "Keeps client sites healthy and scalable.",
        avatar: "https://picsum.photos/200/300?13",
      },
      {
        name: "Dikshya B.",
        role: "Support Engineer",
        description: "Applies patches, handles bugs and updates.",
        avatar: "https://picsum.photos/200/300?14",
      },
    ],
    tools: [
      { name: "GitHub Actions", icon: "devicon-github" },
      { name: "Sentry", icon: "devicon-sentry" },
      { name: "Vite", icon: "devicon-vitejs" },
    ],
    relatedServices: [
      {
        id: "redesign",
        title: "Site Redesign",
        description: "Outgrown your current site? Let’s upgrade it.",
        icon: "ph-refresh-ccw",
      },
      {
        id: "seo",
        title: "SEO Monitoring",
        description: "Track rankings as your site evolves.",
        icon: "ph-chart-line-up",
      },
    ],
    cta: {
      heading: "Need ongoing help?",
      subheading: "Stay secure and scale with confidence.",
      buttonText: "Set Up Support",
      link: "/contact",
    },
  },
];
