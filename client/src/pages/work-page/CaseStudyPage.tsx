import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Share2,
  Calendar,
  Target,
  AlertTriangle,
  Monitor,
  Tablet,
  Smartphone,
  User,
} from "lucide-react";
import { works } from "./works";

export default function CaseStudyPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project = works.find((work) => work.id === id);
  const currentIndex = works.findIndex((work) => work.id === id);
  const nextProject = works[currentIndex + 1] || works[0];

  if (!project) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Project Not Found
          </h1>
          <p className="text-gray-400 mb-8">
            The project you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/works")}
            className="bg-first-accent hover:bg-first-accent/80 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Back to Works
          </button>
        </div>
      </div>
    );
  }

  const sectionVariants = {
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

  return (
    <div className="min-h-screen bg-primary">
      {/* Breadcrumb Navigation */}
      <nav className="pt-8 pb-4 px-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/works" className="hover:text-white transition-colors">
            Works
          </Link>
          <span>/</span>
          <span className="text-white">{project.title}</span>
        </div>
      </nav>

      {/* Hero Section - Big Title */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="py-12 px-4 max-w-7xl mx-auto text-center"
      >
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-medium max-w-4xl mx-auto">
            {project.subtitle}
          </p>

          {/* Project Meta Info */}
          <div className="flex flex-wrap justify-center gap-8 pt-8">
            <div className="text-center">
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">
                Year
              </p>
              <p className="text-white font-medium">{project.year || "2025"}</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">
                Industry
              </p>
              <p className="text-white font-medium capitalize">
                {project.industry}
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">
                Service
              </p>
              <p className="text-white font-medium capitalize">
                {project.service}
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">
                Role
              </p>
              <p className="text-white font-medium">
                {project.role || "Full Stack Development"}
              </p>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 pt-6">
            {project.categories.map((category) => (
              <span
                key={category}
                className="bg-second-accent text-gray-200 px-3 py-1 rounded-full text-sm font-medium"
              >
                {category}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-4 pt-8">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-first-accent hover:bg-first-accent/80 text-white px-8 py-4 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
              >
                <ExternalLink size={20} />
                Live Website
              </a>
            )}
            <button className="bg-new-accent hover:bg-second-accent border border-second-accent text-white px-8 py-4 rounded-lg font-medium transition-colors inline-flex items-center gap-2">
              <Share2 size={20} />
              Share Project
            </button>
          </div>
        </div>
      </motion.section>

      {/* Project Overview Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="py-16 px-4 max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Project Overview
          </h2>
          <div className="text-lg text-card-text leading-relaxed space-y-4">
            <p>
              {project.overview ||
                `${project.title} needed a professional web presence that would establish trust with potential clients and showcase their expertise. The challenge was creating a site that felt both professional and approachable, while effectively communicating their range of services.`}
            </p>
            <p>
              Our solution focused on clean, modern design with
              industry-specific elements that reflect their expertise. We
              implemented strategic calls-to-action and service showcases to
              drive lead generation while maintaining excellent user experience
              across all devices.
            </p>
          </div>
        </div>

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-new-accent rounded-xl p-6 border border-second-accent text-center">
            <h3 className="text-lg font-semibold mb-2 text-white">Duration</h3>
            <p className="text-card-text">{project.duration || "6 weeks"}</p>
          </div>

          <div className="bg-new-accent rounded-xl p-6 border border-second-accent text-center">
            <h3 className="text-lg font-semibold mb-2 text-white">Team Size</h3>
            <p className="text-card-text">
              {project.teamSize || "2 developers, 1 designer"}
            </p>
          </div>

          <div className="bg-new-accent rounded-xl p-6 border border-second-accent text-center">
            <h3 className="text-lg font-semibold mb-2 text-white">Platform</h3>
            <p className="text-card-text">
              {project.platform || "React, TailwindCSS, Netlify"}
            </p>
          </div>
        </div>
      </motion.section>

      {/* Goals & Challenges Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="py-16 px-4 max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Goals & Challenges
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-new-accent rounded-xl p-8 border border-second-accent">
            <h3 className="text-xl font-semibold mb-6 text-white flex items-center gap-3">
              <Target className="text-first-accent" size={24} />
              Primary Goals
            </h3>
            <ul className="space-y-3 text-card-text">
              {project.goals ? (
                project.goals.map((goal, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-first-accent mt-1">•</span>
                    <span>{goal}</span>
                  </li>
                ))
              ) : (
                <>
                  <li className="flex items-start gap-2">
                    <span className="text-first-accent mt-1">•</span>
                    <span>Establish professional online presence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-first-accent mt-1">•</span>
                    <span>Generate qualified leads for services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-first-accent mt-1">•</span>
                    <span>Showcase portfolio of completed projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-first-accent mt-1">•</span>
                    <span>Improve local SEO rankings</span>
                  </li>
                </>
              )}
            </ul>
          </div>

          <div className="bg-new-accent rounded-xl p-8 border border-second-accent">
            <h3 className="text-xl font-semibold mb-6 text-white flex items-center gap-3">
              <AlertTriangle className="text-yellow-400" size={24} />
              Key Challenges
            </h3>
            <ul className="space-y-3 text-card-text">
              {project.challenges ? (
                project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>{challenge}</span>
                  </li>
                ))
              ) : (
                <>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Competing with established businesses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Building trust with new customers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Mobile-first user experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>Optimizing for conversion</span>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Design System Showcase */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="py-16 px-4 max-w-7xl mx-auto"
      >
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Design System
          </h2>
          <p className="text-card-text text-lg">
            A cohesive visual language that reflects the professional aesthetic
            of {project.title}.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Color Palette */}
          <div className="bg-new-accent rounded-xl p-6 border border-second-accent">
            <h3 className="text-lg font-semibold mb-4 text-white">
              Color Palette
            </h3>
            <div className="space-y-3">
              {project.colorPalette ? (
                project.colorPalette.map((color, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 ${color.color} rounded-full`}
                    ></div>
                    <span className="text-card-text text-sm font-mono">
                      {color.hex}
                    </span>
                  </div>
                ))
              ) : (
                <>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-first-accent rounded-full"></div>
                    <span className="text-card-text text-sm font-mono">
                      #4F46E5
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
                    <span className="text-card-text text-sm font-mono">
                      #1F2937
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
                    <span className="text-card-text text-sm font-mono">
                      #4B5563
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                    <span className="text-card-text text-sm font-mono">
                      #FFFFFF
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Typography */}
          <div className="bg-new-accent rounded-xl p-6 border border-second-accent">
            <h3 className="text-lg font-semibold mb-4 text-white">
              Typography
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-2xl font-bold text-white">Heading</p>
                <p className="text-xs text-gray-400">Inter Bold</p>
              </div>
              <div>
                <p className="text-lg font-medium text-white">Subheading</p>
                <p className="text-xs text-gray-400">Inter Medium</p>
              </div>
              <div>
                <p className="text-base text-card-text">Body text example</p>
                <p className="text-xs text-gray-400">Inter Regular</p>
              </div>
            </div>
          </div>

          {/* Components */}
          <div className="bg-new-accent rounded-xl p-6 border border-second-accent">
            <h3 className="text-lg font-semibold mb-4 text-white">
              Components
            </h3>
            <div className="space-y-3">
              <button className="w-full bg-first-accent hover:bg-first-accent/80 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                Primary Button
              </button>
              <button className="w-full bg-transparent border border-first-accent text-first-accent hover:bg-first-accent hover:text-white px-4 py-2 rounded-lg font-medium transition-colors">
                Secondary Button
              </button>
              <div className="bg-card-bg rounded-lg p-3">
                <p className="text-sm text-card-text">Card Component</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Responsive Preview Images */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="py-16 px-4 max-w-7xl mx-auto"
      >
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Responsive Design
          </h2>
          <p className="text-card-text text-lg">
            Optimized for all devices with mobile-first approach and seamless
            user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Desktop View */}
          <div className="bg-new-accent rounded-xl p-6 border border-second-accent">
            <h3 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
              <Monitor className="text-first-accent" size={20} />
              Desktop
            </h3>
            <div className="aspect-[4/3] bg-card-bg rounded-lg overflow-hidden">
              <img
                src={project.image}
                alt={`Desktop view of ${project.title} website`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Tablet View */}
          <div className="bg-new-accent rounded-xl p-6 border border-second-accent">
            <h3 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
              <Tablet className="text-first-accent" size={20} />
              Tablet
            </h3>
            <div className="aspect-[4/3] bg-card-bg rounded-lg overflow-hidden">
              <img
                src={project.image}
                alt={`Tablet view of ${project.title} website`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Mobile View */}
          <div className="bg-new-accent rounded-xl p-6 border border-second-accent">
            <h3 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
              <Smartphone className="text-first-accent" size={20} />
              Mobile
            </h3>
            <div className="aspect-[4/3] bg-card-bg rounded-lg overflow-hidden">
              <img
                src={project.image}
                alt={`Mobile view of ${project.title} website`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Tech Stack Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="py-16 px-4 max-w-7xl mx-auto"
      >
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Tech Stack
          </h2>
          <p className="text-card-text text-lg">
            Modern technologies chosen for performance, scalability, and
            maintainability.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {project.techStack ? (
            project.techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-new-accent rounded-xl p-6 border border-second-accent text-center hover:border-first-accent transition-colors"
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-first-accent rounded-lg flex items-center justify-center">
                  <i className={`${tech.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-white font-semibold mb-1">{tech.name}</h3>
                <p className="text-gray-400 text-sm">{tech.category}</p>
              </div>
            ))
          ) : (
            <>
              <div className="bg-new-accent rounded-xl p-6 border border-second-accent text-center hover:border-first-accent transition-colors">
                <div className="w-12 h-12 mx-auto mb-3 bg-first-accent rounded-lg flex items-center justify-center">
                  <i className="fab fa-react text-white text-xl"></i>
                </div>
                <h3 className="text-white font-semibold mb-1">React</h3>
                <p className="text-gray-400 text-sm">Frontend Framework</p>
              </div>
              <div className="bg-new-accent rounded-xl p-6 border border-second-accent text-center hover:border-first-accent transition-colors">
                <div className="w-12 h-12 mx-auto mb-3 bg-first-accent rounded-lg flex items-center justify-center">
                  <i className="fab fa-css3-alt text-white text-xl"></i>
                </div>
                <h3 className="text-white font-semibold mb-1">TailwindCSS</h3>
                <p className="text-gray-400 text-sm">Styling Framework</p>
              </div>
              <div className="bg-new-accent rounded-xl p-6 border border-second-accent text-center hover:border-first-accent transition-colors">
                <div className="w-12 h-12 mx-auto mb-3 bg-first-accent rounded-lg flex items-center justify-center">
                  <i className="fas fa-bolt text-white text-xl"></i>
                </div>
                <h3 className="text-white font-semibold mb-1">Framer Motion</h3>
                <p className="text-gray-400 text-sm">Animations</p>
              </div>
              <div className="bg-new-accent rounded-xl p-6 border border-second-accent text-center hover:border-first-accent transition-colors">
                <div className="w-12 h-12 mx-auto mb-3 bg-first-accent rounded-lg flex items-center justify-center">
                  <i className="fas fa-cloud text-white text-xl"></i>
                </div>
                <h3 className="text-white font-semibold mb-1">Netlify</h3>
                <p className="text-gray-400 text-sm">Deployment</p>
              </div>
            </>
          )}
        </div>
      </motion.section>

      {/* Results/Business Impact Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="py-16 px-4 max-w-7xl mx-auto"
      >
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Results & Impact
          </h2>
          <p className="text-card-text text-lg">
            Measurable improvements in user engagement, lead generation, and
            business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-new-accent rounded-xl p-6 border border-second-accent text-center">
            <div className="text-3xl font-bold text-first-accent mb-2">
              {project.results?.metric1 || "150%"}
            </div>
            <p className="text-white font-medium mb-1">Lead Generation</p>
            <p className="text-gray-400 text-sm">Increase in qualified leads</p>
          </div>

          <div className="bg-new-accent rounded-xl p-6 border border-second-accent text-center">
            <div className="text-3xl font-bold text-first-accent mb-2">
              {project.results?.metric2 || "2.5s"}
            </div>
            <p className="text-white font-medium mb-1">Load Time</p>
            <p className="text-gray-400 text-sm">Average page load speed</p>
          </div>

          <div className="bg-new-accent rounded-xl p-6 border border-second-accent text-center">
            <div className="text-3xl font-bold text-first-accent mb-2">
              {project.results?.metric3 || "95%"}
            </div>
            <p className="text-white font-medium mb-1">Mobile Score</p>
            <p className="text-gray-400 text-sm">Google PageSpeed insights</p>
          </div>

          <div className="bg-new-accent rounded-xl p-6 border border-second-accent text-center">
            <div className="text-3xl font-bold text-first-accent mb-2">
              {project.results?.metric4 || "200%"}
            </div>
            <p className="text-white font-medium mb-1">SEO Traffic</p>
            <p className="text-gray-400 text-sm">Increase in organic visits</p>
          </div>
        </div>

        {(project.testimonial || project.client) && (
          <div className="mt-12 bg-new-accent rounded-xl p-8 border border-second-accent">
            <h3 className="text-xl font-semibold mb-4 text-white">
              Client Testimonial
            </h3>
            <blockquote className="text-card-text text-lg italic leading-relaxed mb-4">
              {project.testimonial ||
                "The new website has completely transformed our business. We're getting more quality leads than ever before, and customers consistently compliment us on our professional online presence. The team delivered exactly what we needed."}
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-first-accent rounded-full flex items-center justify-center">
                <User className="text-white" size={20} />
              </div>
              <div>
                <p className="text-white font-medium">
                  {project.client?.name || "Client Name"}
                </p>
                <p className="text-gray-400 text-sm">
                  {project.client?.title || `Owner, ${project.title}`}
                </p>
              </div>
            </div>
          </div>
        )}
      </motion.section>

      {/* Large Website Screenshot */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="py-16 px-4 max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Final Result
          </h2>
          <p className="text-card-text text-lg">
            The finished website in all its glory.
          </p>
        </div>

        <div className="relative">
          <div className="aspect-[16/10] bg-new-accent rounded-2xl overflow-hidden shadow-2xl border border-second-accent">
            <img
              src={project.image}
              alt={`${project.title} final website screenshot`}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-first-accent rounded-full opacity-20"></div>
          <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full opacity-30"></div>
          <div className="absolute top-1/2 -left-6 w-6 h-6 bg-purple-500 rounded-full opacity-25"></div>
          <div className="absolute top-1/4 -right-6 w-4 h-4 bg-green-400 rounded-full opacity-30"></div>
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="py-16 px-4 max-w-7xl mx-auto"
      >
        <div className="bg-gradient-to-r from-first-accent to-purple-600 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to transform your business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's build something amazing together. Every great project starts
            with a conversation.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/contact"
              className="bg-white text-first-accent hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
            >
              <ArrowRight size={16} />
              Let's build yours next
            </Link>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-first-accent px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center gap-2">
              <Calendar size={16} />
              Schedule a Call
            </button>
          </div>
        </div>
      </motion.section>

      {/* Next Project Preview */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="py-16 px-4 max-w-7xl mx-auto"
      >
        <div className="border-t border-second-accent pt-12">
          <h2 className="text-2xl font-bold mb-8 text-white">Next Project</h2>
          <div
            className="bg-new-accent rounded-xl p-6 border border-second-accent hover:border-first-accent transition-colors group cursor-pointer"
            onClick={() => navigate(`/works/${nextProject.id}`)}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="aspect-video bg-card-bg rounded-lg overflow-hidden">
                <img
                  src={nextProject.image}
                  alt={`${nextProject.title} preview`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="md:col-span-2">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-first-accent transition-colors">
                  {nextProject.title}
                </h3>
                <p className="text-gray-400 mb-3">{nextProject.subtitle}</p>
                <p className="text-card-text text-sm">
                  {nextProject.description}
                </p>
                <div className="flex gap-2 mt-4">
                  {nextProject.categories.map((category) => (
                    <span
                      key={category}
                      className="bg-second-accent text-gray-300 px-2 py-1 rounded text-xs"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
