import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

import { services } from "../landing-page/services-section/servicesData";
import WhyChooseUs from "../landing-page/why-nimor-section/WhyChooseUs";
import Marquee from "../landing-page/hero-section/HeroMarquee";

const MarqueeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, delay: 0.5 } },
};

const AnimatedSection = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function ContentSections() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleOpen = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      {/* Our Values Section */}
      <section id="values" className="bg-black mt-10">
        <div className="max-w-screen-xl mx-auto p-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our values
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Mastery",
                text: "We believe in intentional design, minimal fluff, and functional layouts that elevate your brand, not distract from it.",
              },
              {
                title: "Ownership",
                text: "Every project starts with listening — we want to understand your goals, not just your favorite color.",
              },
              {
                title: "Passion",
                text: "Passionate about building clean, modern, and strategic websites that actually do something.",
              },
              {
                title: "Flexibility",
                text: "Perfect for founders, creators, and small teams who want quality without the overhead.",
              },
              {
                title: "Discipline",
                text: "No bloated code. No agency BS. Just fast, thoughtful, launch-ready work.",
              },
              {
                title: "Creativity",
                text: "Every section, font, and animation is crafted to serve a purpose — whether it's conversions, credibility, or creative expression.",
              },
            ].map(({ title, text }) => (
              <AnimatedSection key={title} className="border-b-[0.5px]">
                <div className="text-start p-4">
                  <h3 className="text-2xl font-bold mb-10 text-white">
                    {title}
                  </h3>
                  <p className=" leading-relaxed">{text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services FAQ Section */}
      <section className="mt-10">
        <div className="container mx-auto p-4 max-w-screen-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white text-start">
            Services We Offer
          </h2>

          <div className="space-y-6">
            {services.map(
              ({
                id,
                title,
                description,
                icon: Icon,
                iconBgColor,
                iconColor,
              }) => (
                <div
                  key={id}
                  className={`group cursor-pointer rounded-xl border border-second-accent p-6 bg-card-bg
                hover:border-first-accent transition-colors duration-300`}
                  onClick={() => toggleOpen(id)}
                  aria-expanded={openId === id}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") toggleOpen(id);
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-3 rounded-lg ${iconBgColor} transition-colors duration-300 group-hover:bg-first-accent/30`}
                      >
                        <Icon className={`${iconColor} w-6 h-6`} />
                      </div>
                      <h3 className="text-white text-xl font-semibold">
                        {title}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: openId === id ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-first-accent font-bold text-3xl select-none"
                    >
                      +
                    </motion.div>
                  </div>

                  <AnimatePresence initial={false}>
                    {openId === id && (
                      <motion.p
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="mt-4 text-card-text leading-relaxed"
                      >
                        {description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={MarqueeVariants}
        className="w-full flex items-center justify-center mt-10"
      >
        <Marquee />
      </motion.div>

      {/* Why Choose Us Section */}
      <WhyChooseUs />
    </>
  );
}
