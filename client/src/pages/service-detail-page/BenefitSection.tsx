import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";

// Sample benefits data
const sampleBenefits = [
  {
    icon: "fas fa-rocket",
    title: "Faster Performance",
    description: "Optimized code and modern frameworks ensure lightning-fast loading times for better user experience."
  },
  {
    icon: "fas fa-mobile-alt",
    title: "Mobile Responsive",
    description: "Fully responsive design that works seamlessly across all devices and screen sizes."
  },
  {
    icon: "fas fa-search",
    title: "SEO Optimized",
    description: "Built with SEO best practices to help your website rank higher in search results."
  },
  {
    icon: "fas fa-lock",
    title: "Secure & Reliable",
    description: "Enterprise-grade security measures to protect your data and ensure reliable uptime."
  },
  {
    icon: "fas fa-users",
    title: "User-Friendly",
    description: "Intuitive interface designed with your users in mind for maximum engagement."
  },
  {
    icon: "fas fa-chart-line",
    title: "Analytics Ready",
    description: "Built-in analytics integration to track performance and user behavior insights."
  }
];

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface BenefitsSectionProps {
  title?: string;
  benefits?: Benefit[];
}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({
  title = "Custom websites, backed by strategy",
  benefits = sampleBenefits,
}) => {
  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.section className="py-20" variants={itemVariants}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Gradient Card Container */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 p-1">
          {/* Inner content with dark background */}
          <div className="bg-gray-900 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-pink-500/5"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              {/* Header Section */}
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <motion.h2
                    className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
                    variants={itemVariants}
                  >
                    {title}
                  </motion.h2>
                  <motion.p
                    className="text-white/80 text-lg leading-relaxed mb-8"
                    variants={itemVariants}
                  >
                    A strong online presence is essential to ensure the success
                    of any business as it impacts how your audience perceives
                    your brand. In order to maximize growth, a business needs to
                    clearly differentiate itself from the vast sea of
                    competition.
                  </motion.p>
                  <motion.div
                    className="flex gap-4 flex-wrap"
                    variants={itemVariants}
                  >
                    <motion.button
                      className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all flex items-center gap-2 shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Request a Proposal
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                    <motion.button
                      className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition-all border border-white/20 shadow-lg flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <MessageSquare className="w-4 h-4" />
                      Contact Us
                    </motion.button>
                  </motion.div>
                </div>

                <div className="text-right">
                  <motion.p
                    className="text-white/60 text-sm mb-4"
                    variants={itemVariants}
                  >
                    Our strategic approach to understanding and implementing
                    effective web design will not only captivate your audience
                    but also provide exceptional user experience. The
                    combination of cutting-edge design and development results
                    in a perfect blend of aesthetic appeal and technical
                    excellence, all intended to help you achieve your business
                    objectives through your website.
                  </motion.p>
                  <motion.p
                    className="text-white/40 text-xs"
                    variants={itemVariants}
                  >
                    Making the Growth effortless for hundreds of Businesses.
                  </motion.p>
                </div>
              </div>

              {/* Benefits Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="group"
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <i className={`${benefit.icon} text-white text-xl`}></i>
                      </div>
                      <h3 className="text-white font-semibold mb-3 text-lg">
                        {benefit.title}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
