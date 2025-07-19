import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, Users, Code, CheckCircle } from "lucide-react";

interface ProcessItem {
  title: string;
  description: string;
}

interface ProcessStage {
  stage: number;
  title: string;
  description: string;
  items: ProcessItem[];
  icon: React.ReactNode;
  color: string;
}

const processStages: ProcessStage[] = [
  {
    stage: 1,
    title: "Discovery",
    description: "In the web design Discovery phase, we deeply understand your business goals and audience needs. Our process involves tailored research, team meetings, and competitive analysis to identify your unique offerings. Using UX research methods, like interviews and surveys, we craft a user-centric web design for an enriched experience.",
    icon: <Search className="w-6 h-6" />,
    color: "from-blue-400 to-purple-500",
    items: [
      { title: "Initial Discovery Meeting", description: "Comprehensive project kickoff and requirements gathering" },
      { title: "Competitor Research", description: "Analyze market landscape and competitive positioning" },
      { title: "Content Gathering", description: "Collect and organize all necessary project materials" },
      { title: "Information Architecture", description: "Structure content hierarchy and user flow mapping" },
      { title: "UX Research", description: "User experience research and persona development" },
      { title: "Defining KPIs", description: "Establish key performance indicators and success metrics" }
    ]
  },
  {
    stage: 2,
    title: "Design",
    description: "In the design phase, we bring your website's vision to life. Leveraging Discovery insights, our team tailors designs to echo your brand and web design-specific audience needs. Emphasizing visually captivating, user-friendly, responsive layouts across all devices, we present design mockups for your input, ensuring refinement until it perfectly matches your web design vision.",
    icon: <Users className="w-6 h-6" />,
    color: "from-purple-400 to-pink-500",
    items: [
      { title: "Style Guide Development", description: "Create comprehensive brand guidelines and design system" },
      { title: "Wireframe Creation", description: "Develop detailed wireframes and user interface layouts" },
      { title: "Mockup Design", description: "Create high-fidelity visual mockups and prototypes" },
      { title: "Design Refinement", description: "Iterate and refine designs based on feedback and testing" },
      { title: "Responsive Design", description: "Ensure optimal experience across all devices and screen sizes" },
      { title: "Preparing for Development", description: "Finalize design assets and prepare development handoff" }
    ]
  },
  {
    stage: 3,
    title: "Development",
    description: "In the Development phase of web design, we transform approved designs into a functional website, using advanced technology and coding standards to ensure speed, security, and accessibility. We conduct extensive testing for optimal performance on various devices and browsers, and integrate tools like CMS and e-commerce platforms for enhanced functionality.",
    icon: <Code className="w-6 h-6" />,
    color: "from-pink-400 to-red-500",
    items: [
      { title: "Platform Setup", description: "Configure development environment and hosting infrastructure" },
      { title: "Frontend Development", description: "Build responsive user interfaces with modern technologies" },
      { title: "Content Management System (CMS)", description: "Implement powerful content management solutions" },
      { title: "Application Integration", description: "Connect third-party services and custom applications" },
      { title: "Quality Assurance & Testing", description: "Comprehensive testing across devices and browsers" },
      { title: "Client Review", description: "Present completed development for client feedback and approval" }
    ]
  },
  {
    stage: 4,
    title: "Finalization",
    description: "In the Finalization phase of web design, we perfect the website with QA and user testing to eliminate errors. After ensuring top quality, we optimize for search engines, arrange hosting, enhance security, and provide documentation. Post-launch, we offer continuous support and maintenance for a dynamic digital presence.",
    icon: <CheckCircle className="w-6 h-6" />,
    color: "from-blue-400 to-green-500",
    items: [
      { title: "Cross-Browser Testing", description: "Ensure consistent performance across all major browsers" },
      { title: "Performance Optimization", description: "Optimize loading speeds and overall site performance" },
      { title: "SEO Optimization", description: "Implement search engine optimization best practices" },
      { title: "Final Client Review and Approval", description: "Present final website for client approval and sign-off" },
      { title: "Website Launch", description: "Deploy website to live environment with monitoring setup" },
      { title: "Post-Launch Support", description: "Provide ongoing maintenance and technical support" }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const stageVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

interface ProcessItemCardProps {
  item: ProcessItem;
  isExpanded: boolean;
  onToggle: () => void;
}

function ProcessItemCard({ item, isExpanded, onToggle }: ProcessItemCardProps) {
  return (
    <motion.div
      className="bg-white/5 backdrop-blur-sm rounded-lg p-4 cursor-pointer transition-all duration-300 hover:bg-white/10 border border-white/10"
      onClick={onToggle}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center justify-between">
        <h4 className="text-white font-medium text-sm">{item.title}</h4>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-white/60" />
        </motion.div>
      </div>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: { duration: 0.4, ease: "easeOut" },
                opacity: { duration: 0.3, delay: 0.1 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.3, ease: "easeIn" },
                opacity: { duration: 0.2 },
              },
            }}
            className="overflow-hidden"
          >
            <motion.p
              className="text-white/70 text-xs mt-3 leading-relaxed"
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              exit={{ y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {item.description}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

interface ProcessStageProps {
  stage: ProcessStage;
  expandedItems: Set<string>;
  onItemToggle: (itemKey: string) => void;
}

function ProcessStageComponent({ stage, expandedItems, onItemToggle }: ProcessStageProps) {
  return (
    <motion.div
      variants={stageVariants}
      className="mb-16"
    >
      <div className="flex items-start gap-6 mb-8">
        {/* Stage Number and Icon */}
        <div className="flex flex-col items-center">
          <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${stage.color} flex items-center justify-center mb-2`}>
            {stage.icon}
          </div>
          <span className="text-white/60 text-xs font-medium">Stage {stage.stage}</span>
        </div>
        
        {/* Stage Content */}
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-4">
            <h3 className="text-2xl font-bold text-white">{stage.title}</h3>
            <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"></div>
          </div>
          
          <p className="text-white/80 text-sm leading-relaxed mb-6 max-w-3xl">
            {stage.description}
          </p>
          
          {/* Process Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {stage.items.map((item, index) => {
              const itemKey = `${stage.stage}-${index}`;
              return (
                <ProcessItemCard
                  key={itemKey}
                  item={item}
                  isExpanded={expandedItems.has(itemKey)}
                  onToggle={() => onItemToggle(itemKey)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Process() {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleItem = (itemKey: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemKey)) {
        newSet.delete(itemKey);
      } else {
        newSet.add(itemKey);
      }
      return newSet;
    });
  };

  return (
    <motion.section
      className="py-20 relative"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div className="text-center mb-16" variants={stageVariants}>
          <motion.span
            className="text-sm font-medium text-white/80 mb-4 block"
            variants={stageVariants}
          >
            Our Process
          </motion.span>
          <motion.h2
            className="text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight"
            variants={stageVariants}
          >
            A Closer Look At Our<br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
              Web Design Methodology
            </span>
          </motion.h2>
        </motion.div>

        {/* Process Stages */}
        <div className="space-y-8">
          {processStages.map((stage) => (
            <ProcessStageComponent
              key={stage.stage}
              stage={stage}
              expandedItems={expandedItems}
              onItemToggle={toggleItem}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}