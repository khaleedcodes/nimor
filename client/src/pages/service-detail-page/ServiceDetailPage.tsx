import { useParams } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "../../data/servicesData";
import { useRef } from "react";
import Marquee from "../landing-page/hero-section/HeroMarquee";
import { works } from "@/data/worksData";
import WorkCard from "../work-page/WorkCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const letters = Array.from("nimor.");

const letterVariants = {
  initial: { y: 0 },
  hover: { y: -5, transition: { type: "spring", stiffness: 300 } },
};

const letterContainer = {
  initial: {},
  hover: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function getServiceBySlug(slug: string | undefined) {
  if (!slug) return null;
  return services.find((s) => s.id === slug);
}

export default function ServiceDetailPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { id } = useParams<{ id: string }>();
  const service = getServiceBySlug(id);

  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 700 };

  const rotateX = useSpring(
    useTransform(mouseY, [-300, 300], [15, -15]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-300, 300], [-15, 15]),
    springConfig
  );

  // Glassmorphism position following cursor
  const glassX = useSpring(
    useTransform(mouseX, [-300, 300], [-20, 20]),
    springConfig
  );
  const glassY = useSpring(
    useTransform(mouseY, [-300, 300], [-20, 20]),
    springConfig
  );

  // Handle mouse movement for 3D effects
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;

    const rect = heroRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const x = e.clientX - centerX;
    const y = e.clientY - centerY;

    mouseX.set(x);
    mouseY.set(y);
  };

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-4xl text-gray-600">Service not found</p>
      </div>
    );
  }

  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="text-gray-900 min-h-screen">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="pt-16"
      >
        {/* Hero Section with 3D Nimor Animation */}
        <motion.section
          className="pt-20 pb-24 relative overflow-hidden"
          variants={itemVariants}
        >
          <div className="max-w-7xl mx-auto px-6">
            {/* 3D Interactive Hero Container */}
            <div
              ref={heroRef}
              className="relative aspect-[16/10] rounded-xl overflow-hidden"
              style={{
                perspective: 1000,
                transformStyle: "preserve-3d",
              }}
              onMouseMove={handleMouseMove}
            >
              {/* Animated Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400 rounded-xl"></div>

              {/* Animated Gradient Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-600/30 to-pink-500/30 rounded-xl"
                animate={{
                  background: [
                    "linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(168, 85, 247, 0.3), rgba(236, 72, 153, 0.3))",
                    "linear-gradient(90deg, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.3), rgba(244, 114, 182, 0.3))",
                    "linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(168, 85, 247, 0.3), rgba(236, 72, 153, 0.3))",
                  ],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />

              {/* 3D Tilting Container */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d",
                }}
              >
                <motion.div
                  className="relative w-full h-full"
                  style={{
                    x: glassX,
                    y: glassY,
                  }}
                >
                  {/* Glassmorphism Effect */}
                  <div
                    className="absolute  bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl"
                    style={{
                      transform: "translateZ(50px)",
                      background:
                        "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
                      backdropFilter: "blur(20px)",
                      WebkitBackdropFilter: "blur(20px)",
                    }}
                  />

                  {/* Nimor Text with Letter Animation */}
                  <motion.div
                    className="relative z-10 w-full h-full flex items-center justify-center"
                    variants={letterContainer}
                    initial="initial"
                    whileHover="hover"
                    style={{ transform: "translateZ(100px)" }}
                  >
                    <div className="text-7xl lg:text-8xl xl:text-9xl font-bold text-white flex">
                      {letters.map((char, i) => (
                        <motion.span
                          key={i}
                          variants={letterVariants}
                          className="inline-block"
                          style={{
                            textShadow:
                              "0 0 30px rgba(255, 255, 255, 0.5), 0 0 60px rgba(255, 255, 255, 0.3)",
                          }}
                        >
                          {char}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Content at Bottom Left */}
              <div className="absolute bottom-8 left-8 z-20">
                <motion.h1
                  className="text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight"
                  variants={itemVariants}
                  style={{
                    textShadow: "0 4px 30px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  {service.shortTitle}
                </motion.h1>

                <motion.p
                  className="text-base text-white/90 mb-4 leading-relaxed"
                  variants={itemVariants}
                  style={{
                    textShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  {service.heroDescription}
                </motion.p>

                <motion.div className="flex gap-3" variants={itemVariants}>
                  <motion.button
                    className="bg-white/90 backdrop-blur-sm text-gray-900 px-5 py-2 rounded-full font-semibold hover:bg-white transition-all flex items-center gap-2 shadow-lg text-sm"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Let's talk
                    <ArrowRight className="w-3 h-3" />
                  </motion.button>

                  <motion.button
                    className="bg-white/10 backdrop-blur-sm text-white px-5 py-2 rounded-full font-semibold hover:bg-white/20 transition-all border border-white/20 shadow-lg text-sm"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Portfolio
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>
        {/* 
        <motion.section className="py-16 text-white text-7xl font-bold max-w-screen-xl mx-auto" variants={itemVariants}>
          <h1>We create beautiful websites that drive business growth.</h1>
        </motion.section> */}

        {/* Featured Clients */}
        <motion.section className="py-16" variants={itemVariants}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div className="text-center mb-12" variants={itemVariants}>
              <h2 className="text-sm font-medium text-white mb-8">
                Featured clients
              </h2>
              <Marquee />
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          className="py-16 max-w-screen-xl p-4 mx-auto flex gap-4"
          variants={itemVariants}
        >
          <motion.div className="flex gap-4 text-white flex-col">
            <motion.span>Featured work</motion.span>
            <motion.p>
              Our goal is to nurture your vision and provide innovative, custom
              solutions for all your marketing needs.
            </motion.p>
          </motion.div>
          <motion.div className="space-y-8">
            {works.map((work) => (
              <motion.div key={work.id} variants={itemVariants}>
                <WorkCard work={work} />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Capabilities */}
        {/* <motion.section className="py-20" variants={itemVariants}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <motion.h2
                  className="text-4xl font-bold mb-8"
                  variants={itemVariants}
                >
                  Capabilities
                </motion.h2>

                <div className="flex gap-4 mb-8">
                  <button className="px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium">
                    Process
                  </button>
                  <button className="px-4 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium">
                    Industries
                  </button>
                </div>

                <div className="space-y-6">
                  {service.capabilities.slice(0, 4).map((capability, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4"
                      variants={itemVariants}
                    >
                      <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          {capability.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {capability.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="lg:pl-8">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Web development workspace"
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </motion.section> */}

        {/* Case Studies */}
        <motion.section className="py-20 bg-gray-50" variants={itemVariants}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <h2 className="text-4xl font-bold mb-4">Recent Projects</h2>
              <p className="text-xl text-gray-600">
                Explore our latest work and client success stories
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.caseStudies.map((study) => (
                <motion.div
                  key={study.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                    <p className="text-gray-600 mb-4">{study.description}</p>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        React
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                        Node.js
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* What Our Partners Say */}
        <motion.section className="py-20" variants={itemVariants}>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.h2
              className="text-4xl font-bold mb-12"
              variants={itemVariants}
            >
              What our partners say
            </motion.h2>

            <motion.blockquote
              className="text-xl leading-relaxed mb-8 text-gray-700"
              variants={itemVariants}
            >
              "{service.testimonial.quote}"
            </motion.blockquote>

            <motion.div
              className="flex items-center justify-center gap-4"
              variants={itemVariants}
            >
              <img
                src={service.testimonial.avatar}
                alt={service.testimonial.author}
                className="w-12 h-12 rounded-full"
              />
              <div className="text-left">
                <p className="font-semibold">{service.testimonial.author}</p>
                <p className="text-gray-600 text-sm">
                  {service.testimonial.role}, {service.testimonial.company}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Benefits */}
        <motion.section className="py-20 bg-gray-50" variants={itemVariants}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <h2 className="text-4xl font-bold mb-4">
                {service.shortTitle} benefits
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  variants={itemVariants}
                >
                  <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <i className={`${benefit.icon} text-gray-600 text-xl`}></i>
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Why Nimor Stats */}
        <motion.section className="py-20" variants={itemVariants}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <h2 className="text-4xl font-bold mb-4">Why Nimor?</h2>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8 text-center">
              {service.stats.map((stat, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <p className="font-semibold mb-1">{stat.label}</p>
                  <p className="text-gray-600 text-sm">{stat.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Leadership Team */}
        <motion.section className="py-20 bg-gray-50" variants={itemVariants}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <h2 className="text-4xl font-bold mb-4">Leadership team</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {service.teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  variants={itemVariants}
                >
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4"
                  />
                  <h3 className="font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{member.role}</p>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {member.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Tools We Use */}
        <motion.section className="py-20" variants={itemVariants}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <h2 className="text-4xl font-bold mb-4">Tools we use</h2>
            </motion.div>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
              {service.tools.map((tool, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  variants={itemVariants}
                >
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <i className={`${tool.icon} text-gray-600 text-xl`}></i>
                  </div>
                  <p className="text-xs font-medium text-gray-600">
                    {tool.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Additional Services */}
        <motion.section className="py-20 bg-gray-50" variants={itemVariants}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <h2 className="text-4xl font-bold mb-4">Additional services</h2>
              <p className="text-gray-600">Check out</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {service.relatedServices.map((relatedService) => (
                <motion.div
                  key={relatedService.id}
                  className="bg-gray-900 text-white p-8 rounded-lg"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                    <i
                      className={`${relatedService.icon} text-white text-lg`}
                    ></i>
                  </div>
                  <h3 className="font-semibold mb-2">{relatedService.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {relatedService.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="py-20 bg-gray-900 text-white"
          variants={itemVariants}
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.h2
              className="text-4xl font-bold mb-4"
              variants={itemVariants}
            >
              Ready to Start Your Project?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 mb-8"
              variants={itemVariants}
            >
              Let's discuss how we can help bring your vision to life
            </motion.p>
            <motion.div variants={itemVariants}>
              <motion.button
                className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors text-lg"
                whileHover={{ scale: 1.02 }}
              >
                Get in Touch
              </motion.button>
            </motion.div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
