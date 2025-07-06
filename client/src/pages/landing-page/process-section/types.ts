export interface ProcessCardProps {
  problem: string;
  solution: string;
  cardIcon: string;
  gradientFrom: string;
  gradientTo: string;
  accentColor: string;
  index: number;
}

export const processCards: ProcessCardProps[] = [
  {
    problem: "Discover & Strategize",
    solution:
      "We analyze your goals, market, and audience to create a clear, data-driven strategy.",
    cardIcon: "lightbulb",
    gradientFrom: "from-indigo-500",
    gradientTo: "to-purple-600",
    accentColor: "indigo",
    index: 0,
  },
  {
    problem: "Design & Refine",
    solution:
      "We create modern, user-focused designs that align with your brand and engage visitors.",
    cardIcon: "trending-up",
    gradientFrom: "from-green-500",
    gradientTo: "to-emerald-600",
    accentColor: "green",
    index: 1,
  },
  {
    problem: "Build & Optimize",
    solution:
      "Our dev team builds fast, responsive, and SEO-friendly websites using clean, scalable code.",
    cardIcon: "heart",
    gradientFrom: "from-pink-500",
    gradientTo: "to-rose-600",
    accentColor: "pink",
    index: 2,
  },
  {
    problem: "Launch & Evolve",
    solution:
      "We launch smoothly, monitor performance, and provide ongoing updates to keep you growing.",
    cardIcon: "rocket",
    gradientFrom: "from-cyan-500",
    gradientTo: "to-blue-600",
    accentColor: "cyan",
    index: 3,
  },
];
