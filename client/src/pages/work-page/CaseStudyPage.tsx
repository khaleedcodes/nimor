import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Calendar,
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
    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      },
    };

    return (
      <div className="min-h-screen bg-primary flex items-center justify-center px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          className="text-center py-12 text-gray-300 max-w-xl mx-auto"
        >
          <p className="text-lg md:text-xl font-medium mb-4">
            We haven’t built something quite like this — yet.
          </p>
          <p className="text-sm md:text-base mb-6 text-gray-400">
            But we’d love to change that. Be one of the first to bring your idea
            to life, and we might even feature your project in our collection.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-first-accent hover:bg-first-accent/80 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Start Your Project
          </button>
        </motion.div>
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
    <div className="min-h-screen bg-primary mt-20">
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
        className="py-4 px-4 max-w-7xl mx-auto text-center"
      >
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            {project.title}
          </h1>
        </div>
      </motion.section>

      {/* Large Website Screenshot */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="py-4 px-4 max-w-7xl mx-auto mt-10"
      >
        <div className="relative">
          <div className="aspect-[16/10] bg-new-accent rounded-2xl overflow-hidden">
            <img
              src={project.image}
              alt={`${project.title} final website screenshot`}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </motion.section>

      <motion.section className="max-w-7xl mt-10 mx-auto p-4">
        <div className="flex flex-col lg:flex-row gap-6 relative ">
          {/* LEFT: Title + Subtitle */}
          <div className="lg:w-1/2 flex flex-col justify-center gap-20 bg-new-accent  rounded-2xl p-4 z-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                About {project.title}
              </h2>
              <p className="leading-relaxed mb-6">
                {project.detailedDescription}
              </p>
            </div>
          </div>

          {/* RIGHT: Metadata + Stats */}
          <div className="lg:w-1/2 space-y-6 z-20 flex flex-col">
            {/* CTA Buttons */}
            <div className="flex gap-3 flex-wrap items-center bg-new-accent rounded-2xl p-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card-bg text-white hover:bg-first-accent px-4 py-2 text-sm rounded-lg font-medium flex items-center gap-1 transition"
                >
                  Live Website <ExternalLink size={16} />
                </a>
              )}
              <button className="bg-white text-black hover:bg-gray-200 px-4 py-2 text-sm rounded-lg font-medium flex items-center gap-1 transition">
                Discuss this project <ArrowRight size={16} />
              </button>
              {project.year && (
                <span className="text-sm text-gray-400 ml-auto">
                  {project.year}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-4 bg-new-accent p-4 rounded-2xl grow">
              {/* Quick Stats Grid */}
              <div className="flex gap-4">
                <div className="bg-card-bg rounded-xl p-4 border border-second-accent text-center grow">
                  <h3 className="text-sm font-semibold text-white mb-1">
                    Industry
                  </h3>
                  <p className="text-card-text text-sm">
                    {project.industry || ""}
                  </p>
                </div>

                <div className="bg-card-bg rounded-xl p-4 border border-second-accent text-center grow">
                  <h3 className="text-sm font-semibold text-white mb-1">
                    Duration
                  </h3>
                  <p className="text-card-text text-sm">
                    {project.duration || "6 weeks"}
                  </p>
                </div>

                <div className="bg-card-bg rounded-xl p-4 border border-second-accent text-center grow">
                  <h3 className="text-sm font-semibold text-white mb-1">
                    Platform
                  </h3>
                  <p className="text-card-text text-sm">
                    {project.platform || "React, Framer motion"}
                  </p>
                </div>
              </div>

              {/* Meta Grid */}
              <div className=" flex gap-2 flex-col">
                <p className="text-sm font-semibold text-gray-400 uppercase mb-1 w-full border-b pb-1 border-second-accent">
                  Service
                </p>
                {/* Categories (Tags) */}
                <div className="flex flex-wrap gap-2">
                  {project.categories.map((category) => (
                    <span
                      key={category}
                      className="bg-second-accent text-gray-200 px-3 py-1 rounded-full text-sm font-medium"
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

      {/* Project Overview Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="py-4 px-4 max-w-7xl mt-5 mx-auto "
      >
        <div className="text-start bg p-4 rounded-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Project Overview
          </h2>
          <div className="text text-white leading-relaxed space-y-4">
            {project.overviewParagraphs?.length ? (
              project.overviewParagraphs.map((para, i) => <p key={i}>{para}</p>)
            ) : (
              <p>No overview available for this project.</p>
            )}
          </div>
        </div>
      </motion.section>

      {/* Large Website Screenshot */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="py-4 px-4 max-w-7xl mx-auto mt-10"
      >
        <div className="relative">
          <div className="aspect-[16/10] bg-new-accent rounded-2xl overflow-hidden">
            <img
              src={project.image}
              alt={`${project.title} final website screenshot`}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </motion.section>

      {/* Goals & Challenges Section */}
      {/* Project Overview Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="py-4 px-4 max-w-7xl mt-5 mx-auto"
      >
        <div className="text-start bg rounded-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            challenge
          </h2>
          <div className="text text-white leading-relaxed space-y-4">
            {project.overviewParagraphs?.length ? (
              project.overviewParagraphs.map((para, i) => <p key={i}>{para}</p>)
            ) : (
              <p>No overview available for this project.</p>
            )}
          </div>
        </div>
      </motion.section>

      {/* Large Website Screenshot */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="py-4 px-4 max-w-7xl mx-auto mt-10"
      >
        <div className="relative">
          <div className="aspect-[16/10] bg-new-accent rounded-2xl overflow-hidden">
            <img
              src={project.image}
              alt={`${project.title} final website screenshot`}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="py-4 px-4 max-w-7xl mt-5 mx-auto"
      >
        <div className="text-start bg rounded-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Solution
          </h2>
          <div className="text text-white leading-relaxed space-y-4">
            {project.overviewParagraphs?.length ? (
              project.overviewParagraphs.map((para, i) => <p key={i}>{para}</p>)
            ) : (
              <p>No overview available for this project.</p>
            )}
          </div>
        </div>
      </motion.section>

      {/* Large Website Screenshot */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="py-4 px-4 max-w-7xl mx-auto"
      >
        <div className="relative">
          <div className="aspect-[16/10] bg-new-accent rounded-2xl overflow-hidden shadow-2xl border border-second-accent">
            <img
              src={project.image}
              alt={`${project.title} final website screenshot`}
              className="w-full h-full object-cover object-top"
            />
          </div>
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
      </motion.section>

      {/* Large Website Screenshot */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="py-4 px-4 max-w-7xl mx-auto"
      >
        <div className="relative">
          <div className="aspect-[16/10] bg-new-accent rounded-2xl overflow-hidden shadow-2xl border border-second-accent">
            <img
              src={project.image}
              alt={`${project.title} final website screenshot`}
              className="w-full h-full object-cover object-top"
            />
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

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="py-4 px-4 max-w-7xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Feedback
        </h2>

        {(project.testimonial || project.client) && (
          <div className=" bg-new-accent rounded-xl p-8 border border-second-accent">
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
