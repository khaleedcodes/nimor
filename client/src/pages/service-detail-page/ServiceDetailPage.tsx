import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { services } from "../../data/servicesData";

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

function getServiceBySlug(slug: string | undefined) {
  if (!slug) return null;
  return services.find((s) => s.id === slug);
}

export default function ServicePage() {
  const { id } = useParams<{ id: string }>();
  const service = getServiceBySlug(id);

  if (!service) return <p className="text-9xl">not found</p>;

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
        {/* Hero Section with Gradient */}
        <motion.section
          className="pt-20 pb-24 relative overflow-hidden"
          variants={itemVariants}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>

          <div className="relative max-w-7xl mx-auto px-6">
            <div className="max-w-4xl">
              <motion.h1
                className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                variants={itemVariants}
              >
                {service.shortTitle}
              </motion.h1>

              <motion.p
                className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl"
                variants={itemVariants}
              >
                {service.heroDescription}
              </motion.p>

              <motion.div className="flex gap-4" variants={itemVariants}>
                <motion.button
                  className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                >
                  Let's talk
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Featured Clients */}
        <motion.section className="py-16 bg-gray-50" variants={itemVariants}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div className="text-center mb-12" variants={itemVariants}>
              <h2 className="text-sm font-medium text-gray-600 mb-8">
                Featured clients
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
                {service.clients.map((client, index) => (
                  <motion.div
                    key={client}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <span className="text-xs font-bold text-gray-600">
                        {client}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Capabilities */}
        <motion.section className="py-20" variants={itemVariants}>
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
                      <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">
                          {capability.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {capability.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <div className="space-y-6">
                  {service.capabilities.slice(4, 6).map((capability, index) => (
                    <motion.div
                      key={index + 4}
                      className="flex items-start gap-4"
                      variants={itemVariants}
                    >
                      <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">
                          {capability.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {capability.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Case Studies */}
        <motion.section className="py-20 bg-gray-50" variants={itemVariants}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <h2 className="text-4xl font-bold mb-4">Case studies</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.caseStudies.map((study) => (
                <motion.div
                  key={study.id}
                  className="group cursor-pointer"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden mb-4">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold mb-2">{study.title}</h3>
                  <p className="text-gray-600 text-sm">{study.description}</p>
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

        {/* Web Design Benefits */}
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

        {/* Why Ramotion Stats */}
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
        <motion.section className="py-20" variants={itemVariants}>
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.div variants={itemVariants}>
              <motion.button
                className="bg-gray-900 text-white px-12 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                Get in touch
              </motion.button>
            </motion.div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
